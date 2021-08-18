import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

import { Post } from '../../models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[];
  currentPost : Post = {
    id : 0,
    title : '',
    body : ''
  }
  isEdit : boolean = false;

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  onNewPost(post : Post){
    this.posts.unshift(post);
  }

  editPost(post : Post){
    this.currentPost = post;
    this.isEdit = true;

  }

  deletePost(post : Post){
    if(confirm('Are you sure ?')){
      this.postsService.deletePost(post).subscribe(()=>{
        this.posts.forEach((curr, idx) => {
          if(post.id === curr.id){
            this.posts.splice(idx,1);
          }
        });
      });
    }

  }

  onUpdatedPost(post : Post){
    this.posts.forEach((curr, idx) => {
      if(post.id === curr.id){
        this.posts.splice(idx,1);
        this.posts.unshift(post);
      }
    });

    this.isEdit = false;

    this.currentPost = {
      id : 0,
      title : '',
      body : ''
    }

  }

}
