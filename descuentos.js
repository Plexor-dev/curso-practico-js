calcularPrecioConDescuento = (precio, descuento) => {
    const porcentaje = Math.abs((descuento / 100)-1);
    return porcentaje * precio;
}

calcularDescuento = () => {
    const inputPrice = document.getElementById("precio");
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById("descuento");
    const valueDiscount = inputDiscount.value;

    const result = calcularPrecioConDescuento(valuePrice, valueDiscount);
    
    const resultP = document.getElementById("container-result");
    resultP.innerHTML = `El precio con el descuento es $${result}.`;
}