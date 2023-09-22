import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './shared/pages/inicio/inicio.component';
import { AcercaDeComponent } from './shared/pages/acerca-de/acerca-de.component';
import { AvisoPrivacidadComponent } from './shared/pages/aviso-privacidad/aviso-privacidad.component';



const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent
  },
  {
  path:'acerca-de',
  component: AcercaDeComponent
  },
  {
    path:'aviso-de',
    component: AvisoPrivacidadComponent
  },
  {
    path:'**',
    redirectTo: 'inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
