import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  users: User[] = [];

  constructor() { }



  ngOnInit() {
  }

}
