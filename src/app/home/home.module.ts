import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AvisoPrivacidadComponent } from './pages/aviso-privacidad/aviso-privacidad.component';



@NgModule({
  declarations: [
    AcercaDeComponent,
    AvisoPrivacidadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcercaDeComponent,
    AvisoPrivacidadComponent
  ]
})
export class HomeModule { }
