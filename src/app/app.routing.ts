import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ForumComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
