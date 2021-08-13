import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ShowPostComponent } from './show-post/show-post.component';

const routes: Routes = [
  { path: 'posts', component: DashboardComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'posts/:id', component: ShowPostComponent },
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
