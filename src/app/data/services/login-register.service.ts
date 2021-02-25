import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor( private http: HttpClient ) { }

  login() {
    console.log('entraa para hacer logn');
  }

  register( data: RegisterModel ): Observable<any> {
    return this.http.post(`${environment.server}users`, data);
  }

}
