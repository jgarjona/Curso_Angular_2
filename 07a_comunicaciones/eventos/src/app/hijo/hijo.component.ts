import { any } from 'codelyzer/util/function';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()
  public sUsuario: string;
  @Output()
  borrar: EventEmitter<any>;

  constructor() {
    // Se inicializa el emisor de eventos
    this.borrar = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  btnBorrar(){
    // Lanzo evento hacia arriba
    console.log('Envio evento ');
    this.borrar.emit();
  }

}
