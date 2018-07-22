import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',
   })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://ec2-13-58-73-166.us-east-2.compute.amazonaws.com:8080/Chordination/';
  constructor(private http: HttpClient) {
  }

  public loginUser(inEmail: string, inPassword: string): Observable<string> {
    const path = this.url.concat('login.chord');
    return this.http.post(path, {email: inEmail, password: inPassword}, httpOptions).pipe(map(resp => resp as string));
  }

  public registerUser(firstname, lastname, email, dob, password, genreOne, genreTwo, genreThree) {
    const params = {firstname: firstname, lastname: lastname, email: email,
    dob: dob, password: password, genreOne: genreOne, genreTwo: genreTwo, genreThree: genreThree};
    return this.http.get(this.url.concat('/createUser.chord'), {params: params});
  }

  public getUserPosts(userId) {
    const path = this.url.concat('getUserPosts.chord');
    const params = {userId: userId};
    return this.http.get(path, {params: params});
  }

  public getUserFeed(userId) {
    const path = this.url.concat('getUserFeed.chord');
    const params = {userId: userId};
    return this.http.get(path, {params: params});
  }

  public searchUsers(name: string): Observable<string> {
    console.log('searching for ' + name);
    // const body = new HttpParams();
    // body.set('email', inEmail);
    // body.set('password', inPassword);
    const path = this.url.concat('searchUserByName.chord');
    const params = { name: name };
    return this.http.get(path, { params: params }).pipe(map(resp => resp as string));
  }
}
