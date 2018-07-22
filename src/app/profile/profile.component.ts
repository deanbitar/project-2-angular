import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user: User;
  private posts: Post [];

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));

      this.httpService.getUserById(userId)
        .subscribe(user => this.parseUser(user));
        this.httpService.getUserFeed(userId).subscribe(data => this.parsePosts(data));
  }

  parseUser(user) {
    this.user = user;
  }

  parsePosts(data) {
    this.posts = data;
  }
}
