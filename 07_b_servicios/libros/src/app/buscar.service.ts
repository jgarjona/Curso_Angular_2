import { Injectable } from '@angular/core';
import {LIBROS} from './mockLibros';
@Injectable()
export class BuscarService {
  aLibros = LIBROS;
  constructor() { }

  getLibros(clave: String) {
    return this.aLibros;
  }
}
