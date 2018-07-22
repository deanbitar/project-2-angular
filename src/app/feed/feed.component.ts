import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { HttpService } from '../shared/http.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  post: Post;
  private posts: Post [];
  // users: User[] = [];

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
