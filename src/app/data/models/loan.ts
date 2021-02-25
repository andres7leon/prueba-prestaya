export interface LoanModel {
  value: number;
  dateStart: number;
  datePay?: number;
  state?: boolean;
  loanPay: boolean;
}
