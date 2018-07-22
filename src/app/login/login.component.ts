import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Http } from '@angular/http';
import { User } from '../shared/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private chordApi: HttpService) { }

  public clickedLogin () {
    this.chordApi.loginUser(this.email, this.password).subscribe(data => this.parseUser(data));
  }

  parseUser(inUser: string) {
    console.log(inUser);
    if (inUser == null) {
    } else {
      const user = inUser;
      localStorage.setItem('user', user);
      console.log(localStorage.getItem('user'));
    }
  }
  ngOnInit() {
  }

}
