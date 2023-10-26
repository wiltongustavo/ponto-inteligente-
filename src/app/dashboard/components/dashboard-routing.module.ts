import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel';


export const funcionarioRoutes: Routes = [
	{
		path: 'dashboard',
		component: PainelComponent,
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


