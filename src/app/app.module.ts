import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'pokemon/:pokename', component: PokemonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent,
    FooterComponent,
    MenuLateralComponent,
    InicioComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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

