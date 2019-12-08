import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.model';

@Component({
  selector: "my-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }
}
// --ngsw-config.json
// {
//   "index": "/index.html",
//   "assetGroups": [{
//     "name": "app",
//     "installMode": "prefetch",
//     "resources": {
//       "files": [
//         "/favicon.ico",
//         "/index.html",
//         "/*.css",
//         "/*.js"
//       ],
//       "urls": [
//         "https://fonts.googleapis.com/css?family=Oswald:300,700",
//         "https://fonts.gstatic.com/**"
//       ]
//     }
//   }, {
//     "name": "assets",
//     "installMode": "lazy",
//     "updateMode": "prefetch",
//     "resources": {
//       "files": [
//         "/assets/**"
//       ]
//     }
//   }],
//   "dataGroups": [
//     {
//       "name": "posts",
//       "urls": [
//         "https://jsonplaceholder.typicode.com/posts"
//       ],
//       "cacheConfig": {
//         "maxSize": 5,
//         "maxAge": "6h",
//         "timeout": "10s",
//         "strategy": "freshness"
//       }
//     }
//   ]
// }
