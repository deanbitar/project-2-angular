import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'x-www-form-urlencoded'
   })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:9005/ChordSpring/';
  constructor(private http: HttpClient) {
  }

  public loginUser(inEmail: string, inPassword: string): Observable<string> {
    // const body = new HttpParams();
    // body.set('email', inEmail);
    // body.set('password', inPassword);
    const path = this.url.concat('login.chord');
    return this.http.post(path, {email: inEmail, password: inPassword}, httpOptions).pipe(map(resp => resp as string));
  }
}
