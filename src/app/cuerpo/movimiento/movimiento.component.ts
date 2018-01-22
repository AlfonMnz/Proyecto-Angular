import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('Cargado movimiento component');


  }

//  loadData() {
//    this.peticion.pokemon(this.pokemonName).subscribe(data => {
//      this.pokemonData = data;
//      console.log('Datos pokemon', this.pokemonData);
//      this.mostrarDatos(this.pokemonData);
//    });
//  }
}


