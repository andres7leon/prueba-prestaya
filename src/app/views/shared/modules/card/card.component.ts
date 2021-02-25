import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() type = 'pending';
  @Input() data = {value: 0, dateStart: 0, datePay: 0, loanPay: false};

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
