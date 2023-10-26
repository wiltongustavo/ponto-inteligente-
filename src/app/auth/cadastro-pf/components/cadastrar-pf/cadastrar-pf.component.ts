import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPfRequest } from '../../models'
import { CadastrarPfService } from '../../services';
@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {
  success;
  error;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private cadastrarPfService: CadastrarPfService) {

  }
  ngOnInit(): void {
    this.createForm()
    this.matSnackBarVerify()
  }

  matSnackBarVerify() {
    this.success = {
      duration: 5000,
      panelClass: ['snackbar-success']
    };
    this.error = {
      duration: 5000,
      panelClass: ['snackbar-error']
    };

  }
  createForm() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required]],
      cnpj: ['', [Validators.required]]
    })
  }

  cadastrarPf() {
    if (this.form.invalid) {
      return;
    }
    const cadastroPf: CadastroPfRequest = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPf).subscribe({
      next: response => {
        const msg: string = "Realize o login para acessar o sistema.";
        this.matSnackBar.open(msg, "Sucesso", this.success);
        this.router.navigate(['/login']);
      },
      error: error => {
        let msg: string = "Tente novamente em instantes."
        if (error.status == 400) {
          msg = error.error.errors.join(' ');
        }
        this.matSnackBar.open(msg, "Erro", this.error);
      }
    })
    return false;
  }

}
