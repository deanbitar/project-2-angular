import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    this.registerService.createUser(Register);
  }
}
