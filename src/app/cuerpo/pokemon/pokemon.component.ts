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
    });
  }
}
