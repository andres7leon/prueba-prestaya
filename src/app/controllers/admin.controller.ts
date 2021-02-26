import { Injectable } from '@angular/core';
import { UserService } from '../data/services/users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminController {

  constructor( private userService: UserService ) { }

  getUser(): Observable <any> {
    return this.userService.allUsers();
  }
}
