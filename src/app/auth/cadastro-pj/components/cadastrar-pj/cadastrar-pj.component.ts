import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPjRequest } from '../../models';
import { CpfValidator } from 'src/app/shared';
import { CnpjValidator } from 'src/app/shared';
import { CadastroPjService } from '../../services';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {
  success;
  error;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router, private cadastrarPjService: CadastroPjService) {

  }

  ngOnInit(): void {
    this.createForm()
    this.matSnackBarVerify()
  }

  matSnackBarVerify(){
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
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required]]
    })
  }


  cadastrarPj() {
    if (this.form.invalid) {
      return;
    }
    const cadastroPj: CadastroPjRequest = this.form.value;
    this.cadastrarPjService.cadastrar(cadastroPj).subscribe({
      next: response => {
        const msg: string = "Realize o login para acessar o sistema."
        
        this.matSnackBar.open(msg, "Sucesso", this.success)
        this.router.navigate(['/login']);
      },
      error: error => {
        let msg: string = "Tente novamente mais tarde.";
        if(error.status == 400){
          msg = error.error.errors.join(' ');
        }
        this.matSnackBar.open(msg, "Erro", this.error);
      }
    });
    return false;
  }
}

