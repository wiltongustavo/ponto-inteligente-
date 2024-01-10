import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './components/painel';
import { AdminGuard } from './services';


export const funcionarioRoutes: Routes = [
	{
		path: 'dashboard',
		component: PainelComponent,
		canActivate: [ AdminGuard],
		children: [
		  {
			path: '', 
			component: PainelComponent 
		  },
		]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(funcionarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}


