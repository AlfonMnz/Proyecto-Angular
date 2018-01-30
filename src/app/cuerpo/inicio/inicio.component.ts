import {Component, OnInit} from '@angular/core';
import {PeticionService} from '../../peticion.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private array_img = [];
  private number = 1;
  private cargado = true;

  constructor(private peticion: PeticionService) {
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

  onScroll() {
    console.log('scrolled');
    this.cargarMuestra();
  }


}
