import {Component, OnInit} from '@angular/core';
import {PeticionService} from '../../peticion.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {
  private pokemonMove: any;
  private pokemondata: any;
  private nombre: any;
  private efecto: any;
  private tipos: any;
  private datos = false;

  constructor(private peticion: PeticionService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('Cargado movimiento component');
    this.route.params.subscribe(params => {
      this.pokemonMove = params['pokemovimiento'];
      this.loadData();
    });


  }

  loadData() {
    this.peticion.movimientos(this.pokemonMove).subscribe(data => {
      this.pokemondata = data;
      console.log(this.pokemondata);
      this.mostrarDatos(this.pokemondata);
    });
  }

  mostrarDatos(datos) {
    this.nombre = datos.names[4].name;
    this.efecto = datos.flavor_text_entries[4].flavor_text;
    this.tipos = datos.type.name;
    console.log(this.tipos);
    this.datos = true;

  }

}


