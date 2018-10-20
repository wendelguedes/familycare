
import { Injectable } from '@angular/core';
import { Medicameto } from './medicamento';
import { HttpClient } from '@angular/common/http';

const API_URL:string = 'http://localhost:8080/';

@Injectable()
export class NovoMedicamentoService {
    
    constructor(private http: HttpClient){}

    salvar(medicamento: Medicameto){
        return this.http.post(API_URL + 'medicamentos', medicamento);
    }

}