import { Injectable } from '@angular/core';
import { LocalStorageService } from '../data/services/local-storage.service';
import { UserService } from '../data/services/users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeController {

  constructor( private ls: LocalStorageService, private userService: UserService ) { }

  logout() {
    this.ls.deleteItem('user');
  }

  getUser() {
    return this.ls.getItem('user');
  }

  addLoan( data ): Observable<any> {
    let dataSend = this.getUser();
    console.log('dataSend', dataSend);
    dataSend.loans.push(data);
    this.ls.setItem('user', dataSend);
    return this.userService.userPut(this.getUser(), dataSend);
  }

}
