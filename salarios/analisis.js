//*Helpers
esPar = num=> num % 2 === 0;

calcularMediaAritmetica = lista => { 
    const sumaLista = lista.reduce((valorAcumulado=0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

//*Calculadora Mediana Salarios
medianaSalarios = lista => {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personMitad1 = lista[mitad - 1];
        const personmitad2 = lista[mitad];

        const calcMedia = calcularMediaAritmetica([personMitad1, personmitad2])
        return calcMedia;
    }
    else {
        const personMitad = lista[mitad];
        return personMitad;
    }
}


//!Mediana General
const salariosCol = colombia.map(person => person.salary);

const salariosColSorted = salariosCol.sort(
    (salarioA,salarioB) => salarioA - salarioB
)

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//!Mediana del top 10%
//!cmo funciona splice const arrayEjemplo = [0,1,2,3,6,5,4,7,8,10,5,6,1,7,2,8]
// const ejemplo = arrayEjemplo.splice(5,2);
// console.log(ejemplo)


const spliceStart = (salariosColSorted.length * 90) /100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarioColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTopCol10 = medianaSalarios(salarioColTop10);

console.log(medianaGeneralCol,medianaTopCol10);