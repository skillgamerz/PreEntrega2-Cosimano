const productos = [
    { nombre: "harina", precio: 50},
    { nombre: "galletitas", precio: 100},
    { nombre: "cerveza", precio: 150},
    { nombre: "carne", precio: 200},
    { nombre: "gaseosa", precio: 250},
];
let carrito = []

let seleccion = prompt ("Bienvenido desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert ("por favor ingresa si o no")
    seleccion = prompt ("Hola desea comprar algo? si o no")
}
if(seleccion == "si"){
    alert("Nuestra lista de productos")
    let todoslosProductos =  productos.map (
        (producto) => producto.nombre + " " +  producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "));
} else if (seleccion == "no"){
    alert("gracias por pasar, hasta pronto!")
}
while(seleccion != "no"){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "harina" || producto == "galletitas" || producto == "cerveza" || producto== "carne" || producto== "gaseosa" ){
        switch (producto) {
            case "harina":
                precio = 50;
                break;
            case "galletitas":
                precio = 100;
                break;
            case "cerveza":
                precio =150;
                break;
            case "carne":
             precio =200;
                break;
            case "gaseosa":
             precio =250;
                break;
                default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
   
    carrito.push({producto, unidades, precio})
    console.log(carrito)}
     else {
        alert("no contamos con ese producto")
    }
    seleccion = prompt("Desea seguir comprando? si o no")
    while(seleccion === "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por podructo ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`)







/////Futuro carrito.





