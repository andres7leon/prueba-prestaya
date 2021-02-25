import { Injectable } from '@angular/core';
import { LoginRegisterService } from '../data/services/login-register.service';
import { Observable } from 'rxjs';
import { UserService } from '../data/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterController {

  constructor( private seLogin: LoginRegisterService, private seUsers: UserService ) { }

  login( data ): Observable<any> {
    return this.seLogin.login( data );
  }

  register( data ): Observable<any> {
    return this.seLogin.register( data );
  }

  users(): Observable<any> {
    return this.seUsers.allUsers();
  }

}
