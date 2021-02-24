import { Injectable } from '@angular/core';
import { LoginRegisterService } from '../data/services/login-register.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterController {

  constructor( private service: LoginRegisterService ) { }

  login() {
    this.service.login();
  }

}
