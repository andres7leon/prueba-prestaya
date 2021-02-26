import { Component, OnInit } from '@angular/core';
import { AdminController } from '../../controllers/admin.controller';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users = [];
  dataLoans = [];
  nameUser = '';

  constructor( private ctrl: AdminController) {
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.ctrl.getUser().subscribe( (res: any) => {
      console.log('res', res);
      this.users = res;
    });
  }

  changeDataModal(data) {
    this.nameUser = data.name;
    this.dataLoans = data.loans;
  }

}
