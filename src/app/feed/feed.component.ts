import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  private posts: Post [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    const userJSON = JSON.parse(user);
    this.http.getUserFeed(userJSON.userId).subscribe(data => this.parsePosts(data));
  }

  parsePosts(data) {
    this.posts = data;
    console.log(this.posts);
  }
}
