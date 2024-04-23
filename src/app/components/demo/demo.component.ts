import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  nombre = 'Domenika';
  estado = true;

  numero = 8;
  numero1 = 7;
  resultado = this.numero + this.numero1;

  /*la parte de la logica */ /*una funcion*/
  upperCase() {
    /* clase JS con funciones */
    if (this.estado) {
      this.nombre = this.nombre.toUpperCase();
      this.estado = false;
    } else {
      this.nombre = this.nombre.toLowerCase();
      this.estado = true;
    }
  }

  /* add(){
      this.resultado = this.numero + this.numero1;
    

  }*/
}
