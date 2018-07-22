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
  private url = 'http://localhost:9005/ChordSpring/';
  constructor(private http: HttpClient) {
  }

  public loginUser(inEmail: string, inPassword: string): Observable<string> {
    const path = this.url.concat('login.chord');
    return this.http.post(path, {email: inEmail, password: inPassword}, httpOptions).pipe(map(resp => resp as string));
  }
}
