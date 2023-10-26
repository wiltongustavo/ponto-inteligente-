import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	LancamentoComponent,ListagemComponent
} from './components';

export const funcionarioRoutes: Routes = [
	{
		path: 'funcionario',
		component: LancamentoComponent,
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
  	RouterModule.forChild(funcionarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FuncionarioRoutingModule {
}


