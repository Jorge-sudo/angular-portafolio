import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

  constructor(public _service:InfoPaginaService,
              private router:Router){
    
  }

  buscarProducto(productoBuscar:string){
    if(productoBuscar.length < 1){
      return;
    }
    this.router.navigate(['/search', productoBuscar] );
    //console.log(productoBuscar);
  }
}
