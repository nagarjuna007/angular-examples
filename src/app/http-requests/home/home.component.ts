import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from "../post.service";

@Component({
  selector: "my-http-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  loadedPosts: Post[] = [];
  isFetching = false;
  error: null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    this.postsService.deletePost().subscribe(() => {
      this.loadedPosts = [];
    });
  }
  onHandleError() {
    this.error = null;
  }
}
