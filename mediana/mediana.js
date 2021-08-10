btn = () => {
    const input1 = document.getElementById('inputNum');
    const value1 = parseInt(input1.value);


    const input2 = document.getElementById('inputNum1');
    const value2 = parseInt(input2.value);


    const input3 = document.getElementById('inputNum2');
    const value3 = parseInt(input3.value);

    const input4 = document.getElementById('inputNum3');
    const value4 = parseInt(input4.value);


    

    const valores = [];
    valores.push(value1);
    valores.push(value2);
    valores.push(value3);
    valores.push(value4);


    console.log(valores)

    const resultadoFn = calcularMedianaAritmetica(valores);

    console.log(resultadoFn);


    const resultP = document.getElementById("container-result");


    resultP.innerHTML = `${resultadoFn}`;


    
}





const calcularMedianaAritmetica = nums => {



const numOrder = nums.sort(compareNumbers = (a, b) => a - b);

const mitadLista = numOrder.length / 2;

calcularMediaAritmetica = lista => { 
    const sumaLista = lista.reduce((valorAcumulado=0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }


let mediana;

const esPar = num => (num % 2 === 0) ? true : false

if(esPar(mitadLista)) {
    const elemento1 = numOrder[mitadLista - 1]
    const elemento2 = numOrder[mitadLista]
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2])

    mediana = promedioElemento1y2;
}
else {
    mediana = numOrder[mitadLista]
}

return mediana;

}

