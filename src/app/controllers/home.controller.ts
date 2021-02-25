import { Injectable } from '@angular/core';
import { LocalStorageService } from '../data/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeController {

  constructor( private ls: LocalStorageService ) { }

  logout() {
    this.ls.deleteItem('user');
  }

}
