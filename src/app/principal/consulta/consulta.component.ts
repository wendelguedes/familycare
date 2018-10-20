import { Component, OnInit } from '@angular/core';
import { Consulta } from './consulta';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  
  consultas : Consulta[] = new Array();
  
  constructor() { 

    this.consultas.push(new Consulta(1,'ortopedista', 'setor Oeste'));
    this.consultas.push(new Consulta(2,'dentista', 'Jardim América'));
    this.consultas.push(new Consulta(3,'dermatologista', 'setor Bueno'));
    
  }



  ngOnInit() {


  }

}
