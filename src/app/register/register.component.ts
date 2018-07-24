import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { HttpService } from '../shared/http.service';
import swal from 'sweetalert2';

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
    const register = document.getElementById('password').valueOf;
    // const lengthRegister = register.valueOf.length;
    //  const register = (<HTMLInputElement>document.getElementById('text_field1')).value;
    // const register: NodeListOf<Element> = document.getElementsByClassName('register');
    if (register.length === 0) {
      console.log(register.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
    } else {
    this.http.registerUser(this.firstname, this.lastname, this.email, this.dob, this.password, this.genreOne,
    this.genreTwo, this.genreThree).subscribe(data => this.parseResponse(data));
    swal('Success', 'Registration complete', 'success');

  }
}
// (register.valueOf.length !== 0)

  parseResponse (response) {
    console.log(response);
  }

  clicked () {

}
}
