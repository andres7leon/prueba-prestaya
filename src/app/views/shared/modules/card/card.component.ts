import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() type = 'pending';
  @Input() data = {value: 0, dateStart: 0, datePay: 0, loanPay: false};
  @Output() payCredit = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {}

  payCreditNow() {
    this.data.loanPay = true;
    this.data.datePay = new Date().getTime();
    this.payCredit.emit(this.data);
  }

}
