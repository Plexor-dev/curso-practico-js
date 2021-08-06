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

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("precio");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    const coupons = [
        {
            name: "15%OFF",
            discount: 15,
        },
        {
            name: "30%OFF",
            discount: 30,
        },
        {
            name: "25%OFF",
            discount: 25,
        },
    ];
    isCouponValueValid = coupon => coupon.name === couponValue;
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("container-result");
        resultP.innerHTML = `El precio con el descuento es $${precioConDescuento}.`;
    }

}