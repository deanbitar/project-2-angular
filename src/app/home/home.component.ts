import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: User;

  constructor() { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user'));

  }

}
