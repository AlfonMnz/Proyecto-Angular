import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeticionService} from '../../peticion.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  private poketype: any;
  private pokemondata: any;
  private nombre: any;
  private x2damage: any;
  private x05damage: any;
  private cargado = false;
  private pokemons: any;
  private array_pokemons = [];
  private cargado_modal: any;
  private nombreModal: any;
  private imagenModal: any;
  private cerrar_modal = false;

  constructor(private peticion: PeticionService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('Cargado tipo component');
    this.route.params.subscribe(params => {
      this.poketype = params['poketipo'];
      this.loadData();
    });

  }

  loadData() {
    this.peticion.tipos(this.poketype).subscribe(data => {
      this.pokemondata = data;
      console.log(this.pokemondata);
      this.mostrarDatos(this.pokemondata);
    });
  }

  mostrarDatos(datos) {
    this.nombre = datos.names[4].name;
    console.log(this.nombre);
    console.log(datos);
    this.x05damage = datos.damage_relations.double_damage_from;
    console.log(datos.damage_relations);
    this.x2damage = datos.damage_relations.double_damage_to;
    this.cargado = true;
    this.pokemons = datos.pokemon;
    console.log(this.pokemons[0].pokemon.url);
    for (let i = 0; i <= this.pokemons.length; i++) {

      this.array_pokemons.push({
        id: this.pokemons[i].pokemon.url.slice(34, -1),
        imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemons[i].pokemon.url.slice(34, -1) + '.png'
      });
    }
  }

  loadDataPokemon(id) {
    this.peticion.id(id).subscribe(data => {
      this.pokemondata = data;

      this.cargarModal(this.pokemondata);
    });
  }

  cargarModal(datos) {
    this.nombreModal = datos.name;
    console.log(datos);
    this.imagenModal = datos.sprites.front_default;
    this.cargado_modal = true;
  }
  cambiar_cargado_modal() {
    this.cargado_modal = false;
  }
}
