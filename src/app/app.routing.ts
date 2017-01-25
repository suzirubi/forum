import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  {
    path: 'forum-list',
    component: ForumListComponent
  },
  {
    path: 'posts/:id',
    component: ForumDetailComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
