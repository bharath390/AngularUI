import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/Posts';

const httpOptions = {
  headers: new HttpHeaders({'content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl : string = 'https://jsonplaceholder.typicode.com/posts';
  //postsUrl : string = 'http://localhost:9082/SpringMVC/match';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl)
  }

  addPosts(post : Post) : Observable<Post>{
    return this.http.post<Post>(this.postsUrl,post, httpOptions);
  }

  updatePosts(post : Post) : Observable<Post>{
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(url,post, httpOptions)
  }

  deletePost(post : Post | number) : Observable<Post>{
    const id = typeof post === 'number' ? post : post.id;

    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions)

  }

  getPost(id : number) : Observable<Post>{
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url)
  }

}
