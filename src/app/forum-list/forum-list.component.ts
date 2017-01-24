import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent {
  @Input() childPostList: Post[];



  @Output() detailClickSender = new EventEmitter();

  showDetailHasBeenClicked(forumDetailToShow: Post) {
    this.detailClickSender.emit(forumDetailToShow);
  }
}
