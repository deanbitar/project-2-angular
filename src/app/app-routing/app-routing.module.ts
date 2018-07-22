import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { FeedComponent } from '../feed/feed.component';
import { FriendsComponent } from '../friends/friends.component';
import { SpotifyComponent } from '../spotify/spotify.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent,

  children:
  [{ path: 'feed', component: FeedComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'spotify', component: SpotifyComponent },
  { path: '', redirectTo: '/home/feed', pathMatch: 'full' },

] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
