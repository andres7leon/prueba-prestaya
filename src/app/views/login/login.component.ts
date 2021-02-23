import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin = false;
  formLogin: FormGroup;
  formRegister: FormGroup;

  constructor( private form: FormBuilder) {
    this.createFormLogin();
    this.createFormRegister();
  }

  ngOnInit(): void {
  }

  createFormRegister() {
    this.formRegister = this.form.group(
      {
        email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
        name: ['', [ Validators.required ] ],
        nit: ['', [ Validators.required ] ],
        password: ['', [ Validators.required ] ]
      }
    )

  }

  createFormLogin() {
    this.formLogin = this.form.group(
      {
        email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
        password: ['', [ Validators.required ] ]
      }
    )
  }

  login() {
    if ( this.formLogin.valid ) {
      console.log('ingresa ok');
    }
  }

  register() {
    if ( this.formRegister.valid ) {
      console.log('registro ok');
    }
  }

}
