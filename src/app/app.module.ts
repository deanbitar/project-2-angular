import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http';
import { FeedComponent } from './feed/feed.component';
import { FriendsComponent } from './friends/friends.component';
import { SpotifyComponent } from './spotify/spotify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ProfileComponent,
    FeedComponent,
    FriendsComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
