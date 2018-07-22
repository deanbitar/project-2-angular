import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Http } from '@angular/http';
import { User } from '../shared/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private chordApi: HttpService, private router: Router) { }

  public clickedLogin () {
    this.chordApi.loginUser(this.email, this.password).subscribe(data => this.parseUser(data));
  }

  parseUser(userJSON) {
    console.log(userJSON);

    if (userJSON == null) {
      alert('invalid username/password');
    } else {
      const user: User = {userId: userJSON.userId, firstname: userJSON.firstname, lastname: userJSON.lastname,
        email: userJSON.email, dob: userJSON.dob, password: userJSON.password, genreOne: userJSON.genreOne,
        genreTwo: userJSON.genreTwo, genreThree: userJSON.genreThree, picture: userJSON.picture,
        bio: userJSON.bio};
      localStorage.setItem('user', JSON.stringify(user));
      console.log(localStorage.getItem('user'));
      this.router.navigate(['/home']);
    }
  }
  ngOnInit() {
  }

}
