import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar, private router: Router) {

  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
      this.form = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email:['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        cpf: ['', [Validators.required]],
        razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
        cnpj: ['', [Validators.required]]
      })
   }


   cadastrarPj(){
    if(this.form.invalid){
      return;
    }
    alert(JSON.stringify(this.form.value))
   }
}
