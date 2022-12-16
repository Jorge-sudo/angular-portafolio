import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EquipoPagina } from '../interfaces/equipo-pagina.interface';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  equipos:EquipoPagina[] = [];
  cargada:boolean = false;

  //injectamos el http para hacer peticiones 
  constructor(private http:HttpClient) { 
    console.log("servicio de infoPagina cargada");
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //cargamos el archivo json 
    //esta peticion no la ejecutara si no hay un subcribe 
    ///assets/data/data-pagina.json
    this.http.get('assets/data/data-pagina.json')
      //en el subscribe hay la respuesta y la imprimimos
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;

        //nos mostrara la respuesta
        //console.log(resp.email);
        //console.log(resp);
      });
  }

  private cargarEquipo(){
    this.http.get<EquipoPagina[]>('https://angular-portafolio-44129-default-rtdb.firebaseio.com/equipo.json')
      //en el subscribe hay la respuesta y la imprimimos
      .subscribe( (resp: EquipoPagina[]) => {
        this.equipos = resp;

          //nos mostrara la respuesta
        for(let i = 0 ; i < this.equipos.length ; i++){
          //console.log(this.equipos[i].nombre);
        }
      });
  }
  
}
