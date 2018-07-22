import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private userId: number;
  private user: User;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.http.getUserById(this.userId).subscribe(data => this.parseUser(data));
  }

  parseUser(data) {
    this.user = data;
    console.log(this.user);
  }

}
