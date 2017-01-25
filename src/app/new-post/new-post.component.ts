import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent {
  posts: FirebaseListObservable<any[]>;

  constructor(private postService: PostService) {
  }



  submitForm(genre: number, title: string, author: string, details: string){
    var newPost: Post = new Post(genre, title, author, details);
    this.postService.addPost(newPost);
  }

}
