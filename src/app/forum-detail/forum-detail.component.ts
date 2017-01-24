import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.css']
})
export class ForumDetailComponent {
  @Input() currentPost: Post;
  forumListDetail: boolean = false;

  hideDetailButtonClicked(){
    this.forumListDetail = false;
  }
  showDetailButtonClicked() {
    this.forumListDetail = true;
  }

}
