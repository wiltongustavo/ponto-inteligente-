import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router} from '@angular/router'
import { HttpUtilService } from "src/app/shared";

@Injectable()
export class AdminGuard {
    constructor(private httpUtilService: HttpUtilService, private router: Router){

    }

    canActivate(): boolean{
        if(this.httpUtilService.obterPerfil() === 'ROLE_ADMIN'){
            return true;
        }
        this.router.navigate(['/funcionario']);
        return false
    }
}
