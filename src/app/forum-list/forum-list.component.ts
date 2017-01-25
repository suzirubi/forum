import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css'],
  providers: [PostService]
})

export class ForumListComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private router: Router, private postService: PostService){}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost) {
    this.router.navigate(['posts', clickedPost.$key]);
  };
}
