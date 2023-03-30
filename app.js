const productos = [
  { nombre: "Harina", precio: 50 },
  { nombre: "Galletas", precio: 100 },
  { nombre: "Cerveza", precio: 150 },
  { nombre: "Leche", precio: 200 },
  { nombre: "Refresco", precio: 250 },
];

let carrito = [];

let seleccion = prompt("Hola, desea comprar algun producto");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor, solo ingresar si o no");
  seleccion = prompt("Hola, desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por venir, hasta pronto");
}

while (seleccion != "no") {
  let producto = prompt("Agrega un producto a tu carrito");
  let precio = 0;

  if (
    producto == "Harina" ||
    producto == "Gallletas" ||
    producto == "Leche" ||
    producto == "Cerveza" ||
    producto == "Refresco"
  ) {
    switch (producto) {
      case "Harina":
        precio = 50;
        break;
      case "Galletas":
        precio = 100;
        break;
      case "Cerveza":
        precio = 150;
        break;
      case "Leche":
        precio = 200;
        break;

      case "Refresco":
        precio = 250;
        break;
        default:
            break
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)

  }else{
    alert("No contamos con ese producto")
  }

  seleccion = prompt("Desea seguir comprando")

  while(seleccion == "no"){
    alert("Gracias por la compra")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar del producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)