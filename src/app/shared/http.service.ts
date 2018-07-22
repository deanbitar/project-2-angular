import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json',
   })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://ec2-13-58-73-166.us-east-2.compute.amazonaws.com:8080/Chordination/';
  constructor(private http: HttpClient) {
  }

  public loginUser(inEmail: String, inPassword: String): Observable<string> {
    const path = this.url.concat('login.chord');
    return this.http.post(path, {email: inEmail, password: inPassword  }).pipe(map(resp => resp as string));
  }
}
