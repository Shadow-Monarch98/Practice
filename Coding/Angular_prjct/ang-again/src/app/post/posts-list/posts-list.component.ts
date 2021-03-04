import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
 posts: Post[] = [];
  constructor(public postsService: PostService) {}

  ngOnInit() {
 this.postsService.getPosts();
   this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  onDelete(postId:string){
    this.postsService.deletePost(postId);
  }

}
