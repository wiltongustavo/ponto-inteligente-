import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	FuncionarioComponent,
	LancamentoComponent, 
	ListagemComponent 
} from './components';
import { AdminGuard } from './services';

export const FuncionarioRoutes: Routes = [
	{
		path: 'funcionario',
		component: FuncionarioComponent,
		canActivate: [ AdminGuard],
		children: [
		  {
			path: '', 
			component: LancamentoComponent 
		  },
		  {
			path: 'listagem', 
			component: ListagemComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(FuncionarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FuncionarioRoutingModule {
}



