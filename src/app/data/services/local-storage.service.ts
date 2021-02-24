import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {

  }

  setItem( nameItem, item ){
    sessionStorage.setItem(nameItem, JSON.stringify(item));
  }

  getItem( nameItem ){
    return JSON.parse(sessionStorage.getItem(nameItem));
  }

  deleteItem( name ) {
    sessionStorage.removeItem(name);
  }

}
