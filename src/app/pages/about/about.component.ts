import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { EquipoPagina } from 'src/app/interfaces/equipo-pagina.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public _infoService: InfoPaginaService){

  }
}
