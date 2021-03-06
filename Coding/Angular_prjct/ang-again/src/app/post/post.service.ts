import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "./post.model";
import{map} from "rxjs/operators";
@Injectable({providedIn:'root'})
export class PostService{

  constructor(private http:HttpClient){}

  private posts:Post[]=[];
  private postUpdated =new Subject<Post[]>();
  getPosts(){
    this.http.get<{message:string,posts:any}>('http://localhost:3000/api/posts')
    // .pipe(map(postData=>{
    //   return postData.posts.map((post: { title: any; content: any; _id: any; })=>{
    //     return{
    //       title: post.title,
    //       content:post.content,
    //       id:post._id
    //     }
    //   });
    // }))
    .subscribe((postData)=>{
    this.posts=postData.posts;
    this.postUpdated.next([...this.posts]);
    });
  }
  getPostUpdateListener(){

    return this.postUpdated.asObservable();
  }
  addPost(title:string,content:string){
    const post:Post={_id:'',title:title,content:content};
    this.http.post<{message:string,postId:string}>('http://localhost:3000/api/posts',post).subscribe((responseData)=>{
      const id = responseData.postId;
      post._id=id;
         this.posts.push(post);
    this.postUpdated.next([...this.posts]);
    });

  }

    deletePost(postId:string){
    this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(()=>{
        const updatedPost= this.posts.filter(post => post._id !== postId );
        this.posts= updatedPost;
        this.postUpdated.next([...this.posts]);

    }); }


}

