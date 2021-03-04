import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(public postService:PostService ){}
  onPostAdd(form:NgForm){
    if(form.invalid){
      return;
    }
    this.postService.addPost(form.value.title,form.value.content);
    form.resetForm();
   }


}
