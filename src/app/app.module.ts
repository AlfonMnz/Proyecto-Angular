import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CuerpoComponent} from './cuerpo/cuerpo.component';
import {FooterComponent} from './footer/footer.component';
import {MenuLateralComponent} from './cuerpo/menu-lateral/menu-lateral.component';
import {InicioComponent} from './cuerpo/inicio/inicio.component';
import {PokemonComponent} from './cuerpo/pokemon/pokemon.component';
import {PeticionService} from './peticion.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms' ;
import {MovimientoComponent} from './cuerpo/movimiento/movimiento.component';
import {TipoComponent} from './cuerpo/tipo/tipo.component';

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'pokemon/:pokename', component: PokemonComponent},
  {path: 'movimiento/:pokemovimiento', component: MovimientoComponent},
  {path: 'tipo/:poketipo', component: TipoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent,
    FooterComponent,
    MenuLateralComponent,
    InicioComponent,
    PokemonComponent,
    MovimientoComponent,
    TipoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [PeticionService],
  bootstrap: [AppComponent]
})

export class AppModule {
}

