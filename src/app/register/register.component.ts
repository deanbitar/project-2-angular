import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private firstname;
  private lastname;
  private email;
  private dob;
  private password;
  private confirm;
  private genreOne;
  private genreTwo;
  private genreThree;
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  clickedRegister() {
    this.http.registerUser(this.firstname, this.lastname, this.email, this.dob, this.password, this.genreOne,
    this.genreTwo, this.genreThree).subscribe(data => this.parseResponse(data));
    alert('Successful!');
  }

  parseResponse (response) {
    console.log(response);
  }

}
