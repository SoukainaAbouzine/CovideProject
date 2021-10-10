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
  error: string;
  userName: string;
  passeWord: string;
  constructor( private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.error = '';
    this.userName = 'HanaeSoukaina';
    this.passeWord = 'Hanae1991';
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.error = '';
    if (this.loginForm.invalid) {
      return;
    }
    if (this.f.email.value === this.userName && this.f.password.value === this.passeWord ) {
      sessionStorage.setItem('isConnecte', String(true));
      this.router.navigate(['contacts']);
    } else {
      this.error = 'invalid authentication!'
      sessionStorage.setItem('isConnecte', String(false));
    }
  }
}
