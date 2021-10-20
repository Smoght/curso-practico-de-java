// const precioProducto = 100;
// const descuento = 15;

// const porcentajePrecioDescuento = 100 - descuento;

// const precioConDescuento = (precioProducto *porcentajePrecioDescuento) / 100;

// console.log({
//     precioProducto,
//     descuento,
//     precioConDescuento,
// })

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento
}
function priceDiscountbutton (){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    
    const precioDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const parrafo = document.getElementById("resultPrice")
    parrafo.innerText = "El precio final de tu proeducto queda en $ " + precioDescuento;


}