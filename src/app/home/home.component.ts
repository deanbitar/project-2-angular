import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstname;
  private lastname;

  constructor() { }

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.firstname = user.firstname;
    this.lastname = user.lastname;
  }

}
