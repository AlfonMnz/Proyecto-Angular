import {Component, OnInit} from '@angular/core';
import {PeticionService} from '../../peticion.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonData: any;
  private pokemonName: any;
  private imagen: any;
  private name: any;
  private id: any;
  private peso: number;
  private altura: any;
  private tipos: any;
  private siguiente: any;
  private anterior: any;
  private anterior_nombre: any;
  private anterior_id: any;
  private siguiente_nombre: any;
  private siguiente_id: any;
  // private id_anterior: number;
  // private id_siguiente: number;

  constructor(private peticion: PeticionService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('Cargado pokemon component');
    this.route.params.subscribe(params => {
      this.pokemonName = params['pokename'];
      this.loadData();
    });
  }

  loadData() {
    this.peticion.pokemon(this.pokemonName).subscribe(data => {
      this.pokemonData = data;
      console.log('Datos pokemon', this.pokemonData);

      this.peticion.id(this.pokemonData.id + 1).subscribe(data2 => {
        this.siguiente = data2;
        console.log('siguiente', this.siguiente);
      });
      this.peticion.id(this.pokemonData.id + (-1)).subscribe(data3 => {
        this.anterior = data3;
        console.log('Anterior', this.anterior.id);
        this.mostrarDatos(this.pokemonData);
      });
    });
  }

  mostrarDatos(datos) {
    this.imagen = datos.sprites.front_default;
    console.log(this.imagen);
    this.name = datos.name.charAt(0).toUpperCase() + datos.name.slice(1);
    this.id = datos.id;
    this.peso = datos.weight;
    this.altura = datos.height;
    this.tipos = datos.types;
    this.anterior_nombre = this.anterior.name;
    this.anterior_id = this.anterior.id;
    this.siguiente_nombre = this.siguiente.name;
    this.siguiente_id = this.siguiente.id;

  }
}
