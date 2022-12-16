import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  producto: ProductoDescripcion = {};
  cargando: boolean = true;
  idProducto: string = '';

  //para leer un parametro de una url necesitamos agregar un pequeño servicio
  constructor(private route:ActivatedRoute,
            public productoService:ProductosService){

  }

  ngOnInit(){
    //el subscribe estara pendiente de todos los cambios del parametro 
    this.route.params
      .subscribe( parametros => {

        console.log(parametros['idproducto']);
        this.idProducto = parametros['idproducto'];
        this.productoService.getProducto(parametros['idproducto'])
            .subscribe( (producto: ProductoDescripcion) => {
              //console.log(producto);
              this.producto = producto;
              setTimeout(() => {
                this.cargando = false;
              }, 500);
            });

    });
  }

}
