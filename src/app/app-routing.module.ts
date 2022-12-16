import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item/:idproducto', component: ItemComponent},
  { path: 'search/:buscar', component: SearchComponent},
  //esto ** es para cualquier otra url redireccione a portafolio que es el path por defecto ''
  //para acegurarnos que esto funcione mejor agregamos el pathmacht
  { path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  //importamos y le damos el arreglo de rutas a routermodule
  imports: [RouterModule.forRoot(routes, { useHash:true})], //agregamos el hash #
  //exportamos para que podamos utilizar este componente
  exports: [RouterModule]
})
export class AppRoutingModule { }
