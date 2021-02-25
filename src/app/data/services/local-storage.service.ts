import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {

  }

  setItem( nameItem, item ){
    localStorage.setItem(nameItem, JSON.stringify(item));
  }

  getItem( nameItem ){
    return JSON.parse(localStorage.getItem(nameItem));
  }

  deleteItem( name ) {
    localStorage.removeItem(name);
  }

}
