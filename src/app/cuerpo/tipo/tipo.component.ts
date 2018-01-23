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
    });
  }
}
