import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { ForumComponent } from './forum/forum.component';
// import { routing } from './app.routing';
// import { PostDetailComponent } from './post-detail/post-detail.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { ForumListComponent } from './forum-list/forum-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // ForumComponent,
    // PostDetailComponent,
    ForumDetailComponent,
    ForumListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
