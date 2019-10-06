import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}
  createAndStorePost(title: string, content: string) {
    const postData: Post = {
      title: title,
      content: content
    };
    this.http
      .post<{ name: string }>(
        "https://angular-examples-c58c7.firebaseio.com/posts.json",
        postData,
        {
          observe: "response"
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }
  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("append", "pretty");
    searchParams = searchParams.append("custom", "key");
    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-examples-c58c7.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({
            "Custom-Header": "Hello"
          }),
          params: searchParams
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
  deletePost() {
    return this.http
      .delete("https://angular-examples-c58c7.firebaseio.com/posts.json", {
        observe: "events",
        responseType: "text"
      })
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.sent) {
            //..
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
