import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/Posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost : EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost : EventEmitter<Post> = new EventEmitter();

  @Input() currentPost : Post;

  @Input() isEdit : boolean;




  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  addPosts(title, body) {
    if (!title && !body) {
      alert('enter all values');
    } else {
      this.postService.addPosts({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePosts() {
    this.postService.updatePosts(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = true;
      this.updatedPost.emit(post);
    })
  }

}
