import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor( private http: HttpClient ) { }

  login() {
    console.log('entraa para hacer logn');
  }

}
