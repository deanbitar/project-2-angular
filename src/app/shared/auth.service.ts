import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean;

  constructor() {
   }

   public setLoggedIn(login: boolean) {
    this.loggedIn = login;
   }


  //  public isAuthenticated(): boolean {
  //   const user: User = localStorage.getItem('user');
  //   return user.;
  //  }
}
