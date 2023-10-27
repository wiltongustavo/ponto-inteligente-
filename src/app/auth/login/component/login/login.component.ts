import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { LoginService } from '../../services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private loginService: LoginService) {

  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  login() {
    if (this.form.invalid) {
      return;
    }
    const login: Login = this.form.value
    this.loginService.logar(login).subscribe({
      next: response => {
        localStorage['token'] = response['data']['token'];
        const usuarioData = JSON.parse(atob(response['data']['token'].split('.')[1]));
        if (usuarioData['role'] === 'ROLE_ADMIN') {
          this.router.navigate(['/dashboard'])
        } else {
          this.router.navigate(['/dashboard'])
        }
      },
      error: error => {
        let msg: string = "Tente novamente em instantes.";
        if (error['status'] === 401) {
          msg = "Email/senha inválido(s)."
        }
        this.matSnackBar.open(msg, "Erro", { duration: 5000 })
      }
    })
  }

}
