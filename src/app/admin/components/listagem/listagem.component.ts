import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {
  LancamentoService,
  Lancamento,
  Funcionario,
  Tipo,
  HttpUtilService,
  FuncionarioService
} from '../../../shared';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
  form: FormGroup;
  funcionarioId: string;
  funcionarios: Funcionario[];
  totalLancamentos: number;

  @ViewChild(MatSelect) matSelect: MatSelect;
  private pagina: number;
  private ordem: string;
  private direcao: string;

  constructor(
    private lancamentoService: LancamentoService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.pagina = 0;
    this.ordemPadrao();
    this.createForm();
    this.obterFuncionarios();
  }
  createForm() {
    this.form = this.fb.group({
      funcs: ['', []]
    });
  }


  get funcId(): string {
    return sessionStorage['funcionarioId'] || false;
  }

  ordemPadrao() {
    this.ordem = 'data';
    this.direcao = 'DESC';
  }
  obterFuncionarios() {
    this.funcionarioService.listarFuncionariosPorEmpresa()
      .subscribe({
        next: response =>{
          const usuarioId: string = this.httpUtil.obterIdUsuario();
          this.funcionarios = (response.data as Funcionario[])
            .filter(func => func.id != usuarioId);
          
          if (this.funcId) {
            this.form.get('funcs').setValue(parseInt(this.funcId, 10));
            this.exibirLancamentos();
          }
        },
        error: error =>{
          const msg: string = "Erro obtendo funcionários.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      });
  }

  exibirLancamentos() {
    debugger
    if (this.matSelect?.selected) {
      this.funcionarioId = this.matSelect.selected['value'];
    } else if (this.funcId) {
      this.funcionarioId = this.funcId;
    } else {
      return;
    }
    sessionStorage['funcionarioId'] = this.funcionarioId;
    this.lancamentoService.listarLancamentosPorFuncionario(
      this.funcionarioId, this.pagina, this.ordem, this.direcao)
      .subscribe({
        next: response => {
          console.log("VOLTOU"+ response)
          this.totalLancamentos = response['data'].totalElements;
          const lancamentos = response['data'].content as Lancamento[];
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
          console.log(this.dataSource)

        },
        error: error => {
          const msg: string = "Erro obtendo lançamentos.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      });
  }

  remover(lancamentoId: string) {
    alert(lancamentoId);
  }

  paginar(pageEvent: PageEvent) {
    this.pagina = pageEvent.pageIndex;
    this.exibirLancamentos();
  }

  ordenar(sort: Sort) {
    if (sort.direction == '') {
      this.ordemPadrao();
    } else {
      this.ordem = sort.active;
      this.direcao = sort.direction.toUpperCase();
    }
    this.exibirLancamentos();
  }

}











