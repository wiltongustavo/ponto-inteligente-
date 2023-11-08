import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './components/painel/painel.component';
import { DashboardComponent, DashboardRoutingModule } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from '../shared';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { ProjectsComponent } from './components/projects/projects.component';
import { IllustrationsComponent } from './components/illustrations/illustrations.component';
import { DevelopmentComponent } from './components/development/development.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    PainelComponent, DashboardComponent, NavbarComponent, CardsComponent, ChartsComponent, SidebarComponent, ProjectsComponent, IllustrationsComponent, DevelopmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    SharedModule,
    MatCardModule,
    MatSlideToggleModule,
  ],
  exports:[
    SidebarComponent
  ]
})
export class DashboardModule { }
