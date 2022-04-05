class Juego {
    constructor(nombre, formato, precio, info){
      this.nombre = nombre;
      this.formato = formato;
      this.precio = precio;
      this.info = info;
    }
    agregarJuego(producto){
      this.productos.push(producto);
    }
    //le suma el 65% de impuestos por compras
    calcularTotal() {
      return this.precio * 1.65;
    }
}
   
const juego1 = new Juego("Elden Ring", "digital", 4999, "un juego de aventura mundo abierto. De los creadores de Dark Souls")
const juego2 = new Juego("Hades", "digital", 329, "un roguelite basado en la mitología griega")
const juego3 = new Juego("Hunt", "digital", 799, "un battleroyale ambientado en los 70'")
const juego4 = new Juego("Portal", "físico, edición coleccionista", 1799, "un clásico de la compañía Valve")
const juegos = new Array(juego1, juego2, juego3, juego4);

//por nombre de clase

let list = document.getElementsByClassName("listas");

list[0].innerHTML = juego1.nombre+ " es " + juego1.info + " su formato es " + juego1.formato + " y su valor es de $" + juego1.precio;
list[1].innerHTML = juego2.nombre+ " es " + juego2.info + " su formato es " + juego2.formato + " y su valor es de $" + juego2.precio;
list[2].innerHTML = juego3.nombre+ " es " + juego3.info + " su formato es " + juego3.formato + " y su valor es de $" + juego3.precio;
list[3].innerHTML = juego4.nombre+ " es " + juego4.info + " su formato es " + juego4.formato + " y su valor es de $" + juego4.precio;
//por nombre de Tag
let listasLi = document.getElementsByTagName("li");
for(const datos of listasLi){
  console.log(datos)
}

let nuevaLi = document.createElement("li");
nuevaLi.innerHTML = juego4.nombre+ " es " + juego4.info + " su formato es " + juego4.formato + " y su valor es de $" + juego4.precio;;
document.body.append(nuevaLi)


// por ID
let eliminar = document.getElementById("contenedor");
eliminar.remove()
