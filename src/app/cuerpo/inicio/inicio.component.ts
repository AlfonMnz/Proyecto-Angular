import {Component, OnInit} from '@angular/core';
import {PeticionService} from '../../peticion.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private array_img = [];
  private number = 1;
  private cargado = true;
  private cargado_modal = false;
  private pokemondata: any;
  private nombreModal: any;
  private imagenModal: any;
  private cerrar_modal = false;


  constructor(private peticion: PeticionService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.cargarMuestra();
  }

  cargarMuestra() {

    for (let i = this.number; i <= this.number + 50; i++) {
      this.array_img.push({id: i, imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png'});
      this.cargado = false;

    }
    this.cargado = true;
    this.number += 51;
  }

  loadData(id) {
    this.peticion.id(id).subscribe(data => {
      this.pokemondata = data;

      this.cargarModal(this.pokemondata);
    });
  }

  onScroll() {
    console.log('scrolled');
    this.cargarMuestra();
  }

  cargarModal(datos) {
    this.nombreModal = datos.name;
    console.log(datos);
    this.imagenModal = datos.sprites.front_default;
    this.cargado_modal = true;
    this.cerrar_modal = false;
  }

  cerrarModal() {
    this.cerrar_modal = true;
  }


}



