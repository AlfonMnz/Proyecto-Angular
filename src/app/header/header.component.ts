import {Component, OnInit} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchParam = '';
  private mostrarPoke = false;
  private mostrarType = true;
  searchtype = '';


  constructor() {
  }

  ngOnInit() {
  }

  mostrarPokemon() {
    // language=JQuery-CSS
    this.mostrarPoke = false;
    this.mostrarType = true;

  }

  mostrarTipo() {
    this.mostrarType = false;
    this.mostrarPoke = true;
  }
}
