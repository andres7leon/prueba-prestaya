import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanBaseEvent {

  private loanBase = new BehaviorSubject(null);
  loanBaseListener = this.loanBase.asObservable();

  changeLoanBase(event: any) {
    this.loanBase.next(event);
  }

  constructor() { }
}
