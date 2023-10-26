import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroPjRequest } from '../models';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroPjService {

  private readonly PATH: string = 'cadastrar-pj';
  constructor(private http: HttpClient) { }


  cadastrar(cadastroPj: CadastroPjRequest): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }
}
