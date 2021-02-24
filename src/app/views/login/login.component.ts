import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegisterController } from '../../controllers/login-register.controller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin = true;
  regexPass = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
  formLogin: FormGroup;
  formRegister: FormGroup;

  constructor( private form: FormBuilder, private ctrl: LoginRegisterController) {
    this.createFormLogin();
    this.createFormRegister();
  }

  ngOnInit(): void {
  }

  createFormRegister() {
    this.formRegister = this.form.group(
      {
        email: ['', [ Validators.required, Validators.pattern(this.regexPass)] ],
        name: ['', [ Validators.required ] ],
        nit: ['', [ Validators.required ] ],
        password: ['', [ Validators.required ] ]
      }
    )

  }

  createFormLogin() {
    this.formLogin = this.form.group(
      {
        email: ['', [ Validators.required, Validators.pattern(this.regexPass)] ],
        password: ['', [ Validators.required ] ]
      }
    )
  }

  login() {
    if ( this.formLogin.valid ) {
      this.ctrl.login();
    }
  }

  register() {
    if ( this.formRegister.valid ) {
      console.log('registro ok');
    }
  }

}
