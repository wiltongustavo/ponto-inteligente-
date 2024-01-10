import { Injectable} from "@angular/core";
import { Router} from '@angular/router'
import { HttpUtilService } from "src/app/shared";

@Injectable()
export class AdminGuard {
    constructor(private httpUtilService: HttpUtilService, private router: Router){

    }

    canActivate(): boolean{
        if(this.httpUtilService.obterPerfil() === 'ROLE_USUARIO'){
            return true;
        }
        this.router.navigate(['/login']);
        return false
    }
}
