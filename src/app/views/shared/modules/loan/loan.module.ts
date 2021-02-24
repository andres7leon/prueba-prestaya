import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanComponent } from './loan.component';

@NgModule({
  declarations: [LoanComponent],
  exports: [LoanComponent],
  imports: [
    CommonModule,
  ]
})
export class LoanModule { }
