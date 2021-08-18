import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { IndivComponent } from './components/indiv/indiv.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './gaurds/auth.gaurd';


const routes: Routes = [
  {path : '',component : HomeComponent, canActivate: [AuthGuard]},
  {path : 'indvs',component : IndivComponent},
  {path : 'posts',component : PostsComponent},
  {path : 'post/:id',component : PostComponent},
  {path : 'post-form', component : PostFormComponent},
  {path: 'login', component: LoginFormComponent },
  {path: 'register', component: RegisterComponent },
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
