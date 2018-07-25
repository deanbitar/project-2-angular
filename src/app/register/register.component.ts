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
    // const register = document.getElementById('text_field1').valueOf;
    // const lengthRegister = register.valueOf.length;
    //  const register = (<HTMLInputElement>document.getElementById('text_field1')).value;
    // const register: NodeListOf<Element> = document.getElementsByClassName('register');
    const register = ((document.getElementById('text_field1') as HTMLInputElement).value);
    const register1 = ((document.getElementById('text_field2') as HTMLInputElement).value);
    const register2 = ((document.getElementById('text_field3') as HTMLInputElement).value);
    const register3 = ((document.getElementById('text_field4') as HTMLInputElement).value);
    const register4 = ((document.getElementById('text_field5') as HTMLInputElement).value);
    const register5 = ((document.getElementById('text_field6') as HTMLInputElement).value);
    const register6 = ((document.getElementById('text_field7') as HTMLInputElement).value);
    const register7 = ((document.getElementById('text_field8') as HTMLInputElement).value);
    const register8 = ((document.getElementById('text_field9') as HTMLInputElement).value);

    if (register.length === 0) {
      console.log(register.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register1.length === 0) {
      console.log(register1.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register2.length === 0) {
      console.log(register2.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register3.length === 0) {
      console.log(register3.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register4.length === 0) {
      console.log(register4.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register5.length === 0) {
      console.log(register5.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register6.length === 0) {
      console.log(register6.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register7.length === 0) {
      console.log(register7.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else if (register8.length === 0) {
      console.log(register8.length);
      swal('Warning!', 'There appears to be some empty fields', 'error');
     } else {
    this.http.registerUser(this.firstname, this.lastname, this.email, this.dob, this.password, this.genreOne,
      this.genreTwo, this.genreThree).subscribe(data => this.parseResponse(data));
    swal('Success', 'Registration complete', 'success');
    }
  }

// (register.valueOf.length !== 0)

parseResponse(response) {
  console.log(response);
}

clicked() {

}
}
