import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import {RegisterComponent} from './register/register.component';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { HttpClient } from 'selenium-webdriver/http';
import { Register } from './models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // private headers = new Headers({ 'Content-Type': 'application/json' });
  private chordUrl = '/createUser.chord';
  constructor(private http: Http) {
  }

  createUser(register: Register) {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.chordUrl, register, options).pipe(map((resp => resp as Register)));
  }


}
