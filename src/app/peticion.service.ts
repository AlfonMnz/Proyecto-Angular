import {Injectable} from '@angular/core';
// app.module.ts:

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Import HttpClientModule from @angular/common/http
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PeticionService {

  results: any;

  constructor(private http: HttpClient) {
  }

  pokemon(pokemon = 'magikarp'): Observable<any> {
    // Make the HTTP request:
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase());
  }

  id(id = '1'): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id.toString());
  }

  movimientos(movimiento = 'splash'): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/moves/' + movimiento.toLowerCase());
  }
}
