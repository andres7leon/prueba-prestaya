import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { LoanBaseEvent } from '../../event-lister/loan-base.event';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  loanBase = environment.valueLoanBase;

  constructor( private loanBaseEvent: LoanBaseEvent ) {
  }

  ngOnInit(): void {
    this.loanBaseEvent.loanBaseListener.subscribe( (res: any) => {
      this.loanBase = (res === 0 ? environment.valueLoanBase : this.loanBase - res);
    });
  }

}
