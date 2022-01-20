/*const cupones = [
    "cupon15",
    "cupon25",
    "cupon50"
]*/

const cupones =[
    {
        name : "cupon15",
        discount : 15,

    },{
        name : "cupon25",
        discount : 25,

    },{
        name : "cupon50",
        discount : 50,

    },
];

function calcularPrecioConDescuento(precio, cupon) {
    const porcentajeDescuento = 100 - cupon;
    const precioArticuloConDescuento = (precio * porcentajeDescuento) / 100
    return precioArticuloConDescuento


}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const cuponValue = inputDiscount.value;


    let descuentos;
/**SOLUCION #1 - USO DE SWITCH */
/*
switch (cuponValue) {
    case cupones[0]:
        descuentos = 15
        console.log("Soy el 15%")
        break;

    case cupones[1]:
        descuentos = 25
        console.log("Soy el 25%")

        break;

    case cupones[2]:
        descuentos = 50
        console.log("Soy el 50%")

        break;

    default:
        console.log("Cupon Inválido")
        break;
}

*/

/**SOLUCION #2 - ERROR FIRST  CON array.includes */
/*
if(!cupones.includes(cuponValue)){
    alert("El cupón "+ cuponValue +" no es válido")
}else if(cuponValue==="cupon15"){
    descuentos=15;
}else if(cuponValue==="cupon25"){
    descuentos=25;
}else if(cuponValue==="cupon50"){
    descuentos=50;
}*/
/**SOLUCION #3 - arrays y condicionales mas inteligentes */
//  Mejorar la legibilidad no (Necesariamente) significa reducir lineas de codigo

const isCouponValueValid = function(coupon){
    return coupon.name === cuponValue
};

const userCoupon = cupones.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + cuponValue + " no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


    /*const ejecutarFuncion = calcularPrecioConDescuento(priceValue, descuentos);

    console.log(ejecutarFuncion)*/

}