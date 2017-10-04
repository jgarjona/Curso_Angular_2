import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  sName: String;
  constructor() { }

  ngOnInit() {
  }

  borrar() {
    console.log('Borro el nombre');
    this.sName = '';
  }

}
