import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user: User;

  constructor(private chordApi: HttpService, private router: Router) { }

  public saveUser() {
    this.chordApi.updateUser(this.user).subscribe(data => this.parseUser(data));
  }

  parseUser(userJSON) {
    console.log(userJSON);

    this.user = {
      userId: userJSON.userId, firstname: userJSON.firstname, lastname: userJSON.lastname,
      email: userJSON.email, dob: userJSON.dob, password: userJSON.password, genreOne: userJSON.genreOne,
      genreTwo: userJSON.genreTwo, genreThree: userJSON.genreThree, picture: userJSON.picture,
      bio: userJSON.bio
    };

    sessionStorage.setItem('user', JSON.stringify(this.user));
    console.log(sessionStorage.getItem('user'));
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }
}
