import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;

  productos: Producto [] = [];

  productosFiltrado:Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    /* tenemos el problema que si cargamos la busqueda no se carga los productos 
    y la solucion para esto es una promesa y asincrono es bastante util para este tipo de promblemas
     resolve=si sale bien, reject=si sale mal */

    return new Promise( (resolve, reject) =>{
      this.http.get<Producto[]>('https://angular-portafolio-44129-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[])  => {
        this.productos = resp;
        //el setTime es un tiempo de 2 o 1 segundos 2000 despues recien se asignara el cargando como false
        setTimeout(() => {
          this.cargando = false;
        }, 500);

        resolve('todo bien');
      })
    })
    
  }

  getProducto(id:string){
    // en este caso debemos agregar el backtik que es  que nos permite concatenar string ${id}
    return this.http.get(`https://angular-portafolio-44129-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(productoBuscar:string){

    if(this.productos.length === 0){
      //cargar los productos
      this.cargarProductos().then( (resp)=>{
          //se ejecutara despues de tener los productos
          //aplicar filtro
          this.filtrarProducto(productoBuscar);
          console.log(resp);
      } );

    }else{
      //aplicar el filtro
      this.filtrarProducto(productoBuscar);
    }
    //buscamos el producto con filter que recorre el producto 
    
  }

  private filtrarProducto(buscar:string){
    //console.log(this.productos);
    this.productosFiltrado = [];

    //convertimos el buscar en minusculas
    buscar = buscar.toLocaleLowerCase();

    this.productos.forEach( prod =>{

      const tituloLowe = prod.titulo?.toLocaleLowerCase();

      if(prod.categoria != undefined && tituloLowe != undefined){
        //este indexOf es sensible a mayusculas por lo que las busquedas tenemos que convertirlo a minuscula
        if ( prod.categoria.indexOf( buscar ) >= 0 || tituloLowe.indexOf( buscar ) >= 0){
          this.productosFiltrado.push(prod);
        }
      }
      
    });
  }
}
