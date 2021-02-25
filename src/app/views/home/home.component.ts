import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeController } from 'src/app/controllers/home.controller';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
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

  constructor(private form: FormBuilder, private ctrl: HomeController, private router: Router) {
    this.createFormLoan();
  }

  ngOnInit(): void {
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
      console.log('this.formLoan', this.formLoan);
    }
  }

  logout() {
    this.ctrl.logout();
    this.router.navigate(['']);
  }

  newLoan() {
    console.log('entra');
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool',
      heightAuto: false
    });
  }
}
