import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule, CadastroPjModule, CadastroPjRoutingModule } from './auth';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { CadastroPfModule, CadastroPfRoutingModule } from './auth/cadastro-pf';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FuncionarioModule, FuncionarioRoutingModule } from './funcionario';
import { DashboardModule } from './dashboard/dashboard.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    NgxMaskDirective,
    NgxMaskPipe,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    MatSidenavModule,
    MatListModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    DashboardModule,
    MatMenuModule,
    
    AppRoutingModule,
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
