import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AvisoPrivacidadComponent } from './pages/aviso-privacidad/aviso-privacidad.component';



const routes: Routes = [
  {
    path: 'acerda-de',
    component: AcercaDeComponent
  },
  {
    path: 'aviso-priv',
    component: AvisoPrivacidadComponent
  },
  {
    path: '**',
    redirectTo: 'acerca-de'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }
