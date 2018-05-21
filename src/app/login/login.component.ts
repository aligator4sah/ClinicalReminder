import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidUser: boolean = false;
  user = {name: '', password: ''};

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // binding the form value to user
    this.loginForm.controls['username'].valueChanges.subscribe(value => {
      this.user.name = value;
    });
    this.loginForm.controls['password'].valueChanges.subscribe(value => {
      this.user.password = value;
    })
  }

  signIn() {
    //TODO: send user valid request to the backend
    this.router.navigateByUrl('reminder-list');
  }

}
