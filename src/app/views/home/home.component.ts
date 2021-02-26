import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeController } from 'src/app/controllers/home.controller';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { LoanModel } from '../../data/models/loan';
import { LoanBaseEvent } from '../shared/event-lister/loan-base.event';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formLoan: FormGroup;
  valueLoanBase = environment.valueLoanBase;
  todate = new Date();
  showLoan = true;
  btnDisabled = false;
  nameUser = '';
  loansAll = [];
  loansPending = [];
  loansOk = [];
  loansFail = [];
  valuePending = 0;

  constructor(private form: FormBuilder, private ctrl: HomeController, private router: Router, private loanBaseEvent: LoanBaseEvent) {
    this.createFormLoan();
  }

  ngOnInit(): void {
    this.nameUser = this.ctrl.getUser().name;
    this.getloans();
  }

  getloans() {
    this.loansAll = this.ctrl.getUser().loans;
    this.loansPending = this.loansAll.filter( i => !i.loanPay && i.state );
    this.loansOk = this.loansAll.filter( i => i.loanPay && i.state );
    this.loansFail = this.loansAll.filter( i => !i.state );

    if (this.loansPending.length > 0 ) {
      this.valuePending = this.loansPending[0].value;
    } else {
      this.valuePending = 0;
    }

    this.loanBaseEvent.changeLoanBase(this.valuePending);
  }

  showFormLoan() {
    if ( this.ctrl.getUser().loans.filter( i => !i.state).length > 0 ) {
      Swal.fire({
        icon: 'warning',
        text: 'Disculpa tienes un credito rechazado por esto no podras solicitar mas creditos, si consideras que es un error puedes comunicarte con nosotros.',
        heightAuto: false,
      });
    } else {
      if ( this.ctrl.getUser().loans.filter( i => !i.loanPay).length > 0 ) {
        Swal.fire({
          icon: 'warning',
          text: 'No podemos prestarte más dinero hasta que pagues el crédito pendiente.',
          heightAuto: false,
        });
      } else {
        this.showLoan = !this.showLoan;
      }
    };
  }

  createFormLoan() {
    this.formLoan = this.form.group(
      {
        valueLoan: ['', [ Validators.required, Validators.min(10000) , Validators.max(this.valueLoanBase)] ],
        datePay: ['', [] ],
      }
    );
  }

  applyLoan(){
    if ( this.formLoan.valid ) {
      this.btnDisabled = true;
      let userLoan = this.ctrl.getUser().loans;
      let converDate = (this.formLoan.value.datePay) ? this.formLoan.value.datePay.split('-') : '';
      let dataLoan: LoanModel = {
        dateStart: new Date().getTime(),
        datePay:  (this.formLoan.value.datePay) ? new Date(`${converDate[1]}-${converDate[2]}-${converDate[0]}`).getTime() : null,
        loanPay: false,
        value: this.formLoan.value.valueLoan,
        numberCredit: Number( '7' + new Date().getTime())
      }
      if ( userLoan.length === 0 ) {
        dataLoan.state = true;
        this.creditApproved(dataLoan);
      } else {
        let loanOkFail = Number(new Date().getTime().toString().substr(12));
        if (loanOkFail <= 5 ) {
          dataLoan.state = true;
          this.creditApproved(dataLoan);
        } else {
          dataLoan.state = false;
          this.creditRejected(dataLoan);
        }
      }
    }
  }

  creditApproved(dataLoan) {
    this.ctrl.addLoan( dataLoan ).subscribe( (res: any) => {
      Swal.fire({
        icon: 'success',
        text: 'Excelentes noticias tu préstamo fue aprobado 😊',
        heightAuto: false,
      }).then( () => {
        this.getloans();
        this.formLoan.reset();
        this.btnDisabled = false;
        this.showLoan = true;
      });
    });
  }

  creditRejected(dataLoan) {
    this.ctrl.addLoan( dataLoan ).subscribe( (res: any) => {
      Swal.fire({
        icon: 'warning',
        text: 'Upps! parece que no podemos hacerte este prestamos si consideras que es un error puedes comunicarte con nosotros.',
        heightAuto: false,
      }).then( () => {
        this.getloans();
        this.formLoan.reset();
        this.btnDisabled = false;
        this.showLoan = true;
      });
    });
  }

  logout() {
    this.ctrl.logout();
    this.router.navigate(['']);
  }

  payCredit(data) {
    this.ctrl.updateLoan( this.loansAll ).subscribe( (res: any) => {
      Swal.fire({
        icon: 'success',
        text: 'Tu pago fue éxito',
        heightAuto: false,
      }).then( () => {
        this.getloans();
      });;
    });
  }
}
