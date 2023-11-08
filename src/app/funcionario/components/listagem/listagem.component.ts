import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { LancamentoService, Lancamento, Tipo } from '../../../shared';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { jsPDF} from "jspdf";
import autoTable from "jspdf-autotable"
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0px', visibility: 'collapse' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
  	private lancamentoService: LancamentoService,
    private snackBar: MatSnackBar, public datepipe: DatePipe) { }

  ngOnInit() {

    this.lancamentoService.listarTodosLancamentos()
      .subscribe(
        data => {
          const lancamentos = data['data'] as Lancamento[];
          lancamentos.forEach(item => {
            item.data = this.datepipe.transform(item.data, 'dd/MM/yyyy hh:mm a');
            item.tipo = this.obterTexto(item.tipo);
          });
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        err => {
          const msg: string = "Erro obtendo lançamentos.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  obterTexto(tipo): string {
  	let tipoDesc: string;
  	switch (tipo) {
  		case Tipo.INICIO_TRABALHO:
  			tipoDesc = 'Início do trabalho';
  			break;
  		case Tipo.INICIO_ALMOCO:
  			tipoDesc = 'Início do almoço';
  			break;
  		case Tipo.TERMINO_ALMOCO:
  			tipoDesc = 'Término do almoço';
  			break;
  		case Tipo.TERMINO_TRABALHO:
  			tipoDesc = 'Término do trabalho';
  			break;
  		default:
  			tipoDesc = tipo;
  			break;
  	}
  	return tipoDesc;
  }

   public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public exportPdf() {
    var printHeaderData: any = [];
    var printBodyData: any = [];

    printHeaderData.push(this.colunas);

    this.dataSource.data.forEach(e => {
      var tempObj = [];
      tempObj.push(e.data);
      tempObj.push(e.tipo);
      tempObj.push(e.localizacao);
      printBodyData.push(tempObj);
    });

    var doc = new jsPDF('p','mm',[297, 210]);
    doc.setFontSize(10);
    autoTable(doc, {
      margin: {horizontal: 10},
      bodyStyles: {valign: 'top'},
      styles: {overflow: 'linebreak'},
      head: printHeaderData,
      body: printBodyData,
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 60 },
        2: { cellWidth: 60 },
      }
    });

    //Save PDF
    doc.save('Filename.pdf')

    //Open pdf in new tab
    window.open(URL.createObjectURL(doc.output("blob")))
  }

}






