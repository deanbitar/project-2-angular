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
  private posts: Post[];
  // users: User[] = [];

  constructor(private http: HttpService) {

  }



  ngOnInit() {
    const user = localStorage.getItem('user');
    const userJSON = JSON.parse(user);
    this.http.getUserFeed(userJSON.userId).subscribe(data => this.parsePosts(data));
<<<<<<< HEAD
      this.posts.sort((a, b) => new Date(b.submitTime).getTime() - new Date(a.submitTime).getTime());
=======
    this.posts.sort((a, b) => new Date(b.submitTime).getTime() - new Date(a.submitTime).getTime());
>>>>>>> 4f9eade3b115b7668eebdd35b74789946b26cebc
  }

  parsePosts(data) {
    this.posts = data;
    console.log(this.posts);
    console.log(new Date(1532262399553));
  }

  getDate(inDate: number) {
    const date = new Date(inDate);
    return date;
    /*     return date.getHours() + 1; */

  }



}
