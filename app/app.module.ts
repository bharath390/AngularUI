import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndivComponent } from './components/indiv/indiv.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndivService } from './services/indiv.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndivComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
    NotFoundComponent,
    NavLeftComponent,
    NavSearchComponent,
    LoginFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [IndivService,
    PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
