import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegisterController } from '../../controllers/login-register.controller';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLogin = true;
  regexPass = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
  formLogin: FormGroup;
  formRegister: FormGroup;
  disabledSumbit = false;

  constructor( private form: FormBuilder, private ctrl: LoginRegisterController, private router: Router) {
    this.createFormLogin();
    this.createFormRegister();
  }

  ngOnInit(): void {
  }

  createFormRegister() {
    this.formRegister = this.form.group(
      {
        email: ['', [ Validators.required, Validators.pattern(this.regexPass)] ],
        name: ['', [ Validators.required ] ],
        nit: ['', [ Validators.required ] ],
        password: ['', [ Validators.required ] ]
      }
    );
  }

  createFormLogin() {
    this.formLogin = this.form.group(
      {
        email: ['', [ Validators.required, Validators.pattern(this.regexPass)] ],
        password: ['', [ Validators.required ] ]
      }
    );
  }

  login() {
    if ( this.formLogin.valid ) {
      this.ctrl.login(this.formLogin.value).subscribe( (res: any) => {

        if ( res.length > 0 ) {
          this.ctrl.saveUserLs(res[0]);
          this.router.navigate(['inicio']);
        } else {
          Swal.fire({
            icon: 'warning',
            text: 'Upps! algo no está bien, valida tu usuario o contraseña',
            heightAuto: false,
          });
        }

      });
    } else {
      Swal.fire({ text: 'Completa los datos para poder iniciar sesión', heightAuto: false});
    }
  }

  register() {
    if ( this.formRegister.valid ) {

      this.ctrl.users().subscribe( (res: any) => {
        const usersFind = res.filter( item => {
          if (item.email === this.formRegister.value.email || item.nit === this.formRegister.value.nit) {
            return item;
          }
        });

        if ( usersFind.length === 0 ) {

          this.ctrl.register(this.formRegister.value).subscribe( (resRegister: any) => {
            if (resRegister.id) {
              this.formRegister.reset();
              this.ctrl.saveUserLs(resRegister);
              Swal.fire({
                icon: 'success',
                text: 'Que bien ya eres parte de prestaYa :)',
                heightAuto: false,
              }).then( () => {
                this.router.navigate(['inicio']);
              });
            }
          });

        } else {

          Swal.fire({
            icon: 'info',
            text: 'Parece que el correo o cedula ya se encuentran registrados',
            heightAuto: false,
          });

        }
      });

    } else {
      Swal.fire({ text: 'Completa los datos para poder registrarte', heightAuto: false});
    }

  }

}
