import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, LancamentoComponent, FuncionarioComponent } from './components';
import { SharedModule } from '../shared';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { HttpUtilService, LancamentoService, PtBrMatPaginatorIntl } from '../shared';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    ListagemComponent, LancamentoComponent, FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FuncionarioRoutingModule,
    MatTooltipModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatSortModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    NgxMaskDirective,
    MatTableModule,
    NgxMaskPipe,
    MatMenuModule,
    MatSlideToggleModule,
    SharedModule,
  ],
  providers: [provideEnvironmentNgxMask(), HttpUtilService, LancamentoService, {provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl}, DatePipe]
})
export class FuncionarioModule { }
