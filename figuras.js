//codigo cuadrado
console.group("Cuadrado");

//let ladoCuadrado;
//console.log(`los lados del cuadrado miden ${ladoCuadrado}cm`)

const perimetroCuadrado = lado => lado *4;
//console.log(`El perimetro del cuadrado es ${perimetroCuadrado(ladoCuadrado)}cm`)


const areaCuadrado = lado => lado ** 2 ;
//console.log(`El perimetro del cuadrado es ${areaCuadrado(ladoCuadrado)}cm²`)

console.groupEnd()

//Codigo triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

//const alturaTriangulo = 5.5;
//console.log(`La altura del triangulo es ${alturaTriangulo} cm`);

const perimetroTriangulo = (ladoT1, ladoT2, baseT) => ladoT1 + ladoT2 + baseT;
//console.log(`El perimetro del cuadrado es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseT, alturaT) => (baseT * alturaT) / 2;
//console.log(`El area del triangulo es ${AreaT}cm²`);

console.groupEnd();

// Codigo Circulo
console.group("Circulos");
//Radio
//const radioCirculo = 4;

//console.log(`El radio del circulo es ${radioCirculo}cm`);

//Diametro
const diametroCirculo = radio => radio * 2;
//console.log(`El diametro del circulo es ${diametroCirculo}cm`);


//PI
const PI = Math.PI;
//console.log(`PI es: ${PI}`)

//Circunferencia
const perimetroCirculo = radio => diametroCirculo(radio) * PI;
//console.log(`El perimetroCirculo es: ${perimetroCirculo}cm`)


//Area
const areaCirculo = radio => (radio * radio) * PI;


//console.log(`El areaCirculo es: ${areaCirculo}cm²`);




console.groupEnd()

//Interaccion con Html

//Cuadrado
calcularPerimetroCuadrado = () => { const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

calcularAreaCuadrado = () => {const input = document.getElementById("InputCuadrado");
const value = input.value;
const area = areaCuadrado(value);
alert(area);
}

//Triangulo
calcularPerimetroTriangulo = () => { 
const input1 = document.getElementById("InputTriangulo1");
const value1 = parseInt(input1.value);

const input2 = document.getElementById("InputTriangulo2");
const value2 = parseInt(input2.value);

const base = document.getElementById("baseTriangulo");
const baseValue = parseInt(base.value);

const result = perimetroTriangulo(value1,value2,baseValue);
alert(result);

}

calcularAreaTriangulo = () => {
const base = document.getElementById("baseTriangulo");
const baseValue = base.value;

const altura = document.getElementById("alturaTriangulo");
const alturaValue = altura.value;

const result = areaTriangulo(baseValue,alturaValue);
alert(result);
}

calcularPerimetroCirculo = () => {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const result = perimetroCirculo(value);
    alert(result.toFixed(2));
}

calcularAreaCirculo = () => {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const result = areaCirculo(value);
    alert(result.toFixed(2));
}