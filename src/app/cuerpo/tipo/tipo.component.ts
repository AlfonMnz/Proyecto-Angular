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
    this.x2damage = datos.damage_relations.double_damage_from;
    console.log(datos.damage_relations);
  }
}
