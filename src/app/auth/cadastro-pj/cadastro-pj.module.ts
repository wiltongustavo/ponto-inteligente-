import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	CadastrarPjComponent, 
	CadastroPjComponent 
} from './components';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroPjService } from './services';

@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    NgxMaskDirective,
    NgxMaskPipe,
    SharedModule
  
    
  ],
  providers:[
    provideEnvironmentNgxMask(),
    CadastroPjService
  ]
})
export class CadastroPjModule { }
