import { BuscarService } from '../buscar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  claveLibro: String;
  aLibros: string [];
  constructor(private buscarService: BuscarService) {

   }

  ngOnInit() {
  }

  buscarLibros() {
    this.aLibros = this.buscarService.getLibros(this.claveLibro);
    console.log(this.aLibros);
  }

}
