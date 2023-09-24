import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AvisoPrivacidadComponent } from './pages/aviso-privacidad/aviso-privacidad.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    AcercaDeComponent,
    AvisoPrivacidadComponent,
    InicioComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    AcercaDeComponent,
    AvisoPrivacidadComponent,
    InicioComponent,

  ],
})
export class SharedModule { }
