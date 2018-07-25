import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  public resetPassword() {
    this.httpService.resetPassword(this.email).subscribe(data => this.parseData(data));
  }

  parseData(email) {
      this.email = email;
  }
}
