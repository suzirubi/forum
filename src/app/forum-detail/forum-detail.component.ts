import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.css'],
  providers: [PostService]
})


export class ForumDetailComponent implements OnInit {

  postId: string;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) {}



  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.postId = urlParametersArray['id'];
   });
   this.postToDisplay = this.postService.getPostById(this.postId);
  }

}
