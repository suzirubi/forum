import { Component } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  constructor(private router: Router){}
  posts: Post[] = [
    new Post(1, "When Will You Abduct Trump", "Yo Yo Man", "Really, really think you would enjoy dissecting his brain to see how it works. Please beam him up", 1),
    new Post(1, "Do Aliens Have Hair", "D Trump", "Hair is great. You should have it. If you don't I can take over your planet and make your hair great.", 2),
    new Post(1, "Where are the best Alien Vaction Sites", "Jimmy Bob", "We like Hawaii, where do you go to blow off steam. Do you get sunburns", 3)
  ];

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

}

//
// export class Post {
//   constructor (public genre: number, public title: string, public author: string, public details: string, public id: number) {}
// }
