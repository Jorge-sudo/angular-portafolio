import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{


  constructor(private route:ActivatedRoute
              , public productoService:ProductosService){

  }

  ngOnInit() {
    //hacemos la lectura de los parametros de busqueda
    this.route.params
      .subscribe( params => {
          console.log(params['buscar']);
          this.productoService.buscarProducto(params['buscar']);
      });

  }

}
