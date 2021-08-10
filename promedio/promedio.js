// const lista1 = [
//     100, 200, 300, 400, 500
// ];



//enviar un array con numeros
calcularMediaAritmetica = lista => { 
// let sumaLista = 0;

// for(let i = 0; i < lista.length; i++){
//     sumaLista = sumaLista + lista[i];
// }

/*
!explicacion map / filter etc
[■,■,■,■].map(■→●) ⇒ [●,●,●,●]
[■,●,■,▲].filter(■→true) ⇒ [■,■]
[■,●,■,▲].find(●→true) ⇒ ●
[■,●,■,▲].findIndex(●→true) ⇒ 1
[■,●,■,▲].fill(●) ⇒ [●,●,●,●]
[■,●,■,▲].some(●→true) ⇒ true
[■,●,■,▲].every(●→true) ⇒ false
*/

const sumaLista = lista.reduce((valorAcumulado=0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
}

);



const promedioLista = sumaLista / lista.length;

return promedioLista;
}
