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
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,

    AppRoutingModule,
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
