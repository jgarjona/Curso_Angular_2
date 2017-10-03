import { Component, OnInit } from '@angular/core';

interface Curso {
  fecha: Date;
  empresa: string;
  lugar: string;
  autor: string;
}
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  private curso: Curso;
  constructor() { }
  ngOnInit() {
    this.curso = {autor: 'Alejandro Cerezo',
    empresa: 'Indra',
    lugar: 'Málaga',
    fecha: new Date()
  };
  }

}
