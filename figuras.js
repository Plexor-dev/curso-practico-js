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

const perimetroTriangulo = (ladoT1, ladoT2, baseT) => ladoT1 + ladoT2 +baseT;
//console.log(`El perimetro del cuadrado es ${perimetroTriangulo}cm`);

const AreaTriangulo = (baseT, alturaT) => (baseT * alturaT) / 2;
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
console.log(`PI es: ${PI}`)

//Circunferencia
const perimetroCirculo = radio => diametroCirculo(radio) * PI;
//console.log(`El perimetroCirculo es: ${perimetroCirculo}cm`)


//Area
const areaCirculo = radio => (radio * radio) * PI;


//console.log(`El areaCirculo es: ${areaCirculo}cm²`);




console.groupEnd()