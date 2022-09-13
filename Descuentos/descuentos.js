function CalcularDescuento(){
    const precioIn = document.getElementById("inputPrecio");
    const descuentoIn = document.getElementById("inputDescuento");
    const precioVal = precioIn.value;
    const descuentoVal = descuentoIn.value;
    

    const precioFinal = precioVal * ( 1 - (descuentoVal / 100) ) ;
    const span = document.getElementById("respuesta");
    span.innerHTML = "El precio final es: " + precioFinal;
}