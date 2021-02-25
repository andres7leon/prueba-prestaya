import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor( private http: HttpClient ) { }

  login( data: LoginModel ): Observable<any> {
    return this.http.get(`${environment.server}users?email=${data.email}&password=${data.password}`);
  }

  register( data: RegisterModel ): Observable<any> {
    return this.http.post(`${environment.server}users`, data);
  }

}
