import {Component, OnInit} from '@angular/core';
import {PeticionService} from '../../peticion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private array_img = [];

  constructor(private peticion: PeticionService) {
  }

  ngOnInit() {
    this.cargarMuestra();
  }

  cargarMuestra() {
    for (let i = 1; i <= 15; i++) {
      this.array_img.push('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png');

    }
  }



}
