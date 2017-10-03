import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {
   aPensamientos: Array <string>;
   aPensamiento: string;

    constructor() { }

    ngOnInit() {
      // Inicializamos variables
      this.aPensamientos = [];
    }

    btnAnadir(event){
       // Controla posibles errores por si intentan nyapear
      if (this.aPensamiento != null && this.aPensamiento !== '' && this.aPensamiento !== undefined){
        console.dir(this.aPensamiento);
        // this.aPensamientos[this.aPensamientos.length] = this.aPensamiento;
        this.aPensamientos.push(this.aPensamiento);
        console.dir('vengo');
        this.aPensamiento = '';
      }
      console.dir(event);
    }
}
