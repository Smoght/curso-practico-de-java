/*
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm.")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado miden " + perimetroCuadrado + "cm.")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();


console.group("triangulo");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 8;
const base = 4;
const altura = 7;
console.log(
    "Los lados del triangulos miden: "
    + ladoTriangulo1
    + " cm, "
    + ladoTriangulo2
    + " cm, "
    + base
    + " cm."
    )
console.log("la altura del triangulo es de: " + altura + "cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
console.log("El perimetro del triangulos es de: " + perimetroTriangulo + "cm");
const areaTriangulo = (base * altura) / 2 ;
console.log("El area del triangulo es de " + areaTriangulo + "cm")
console.groupEnd();


console.group("Circulo")
const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;
const perimetro = diametro * pi;
const area = (radio * radio) * pi;

console.log("El radio del circulo es de: " + radio + "cm.")
console.log("El diametro del circulo es de: " + diametro + "cm.")
console.log("El perimetro del circulo es de: " + perimetro + "cm.")
console.log("El area del circulo es de: " + area + "cm")
console.groupEnd()
*/
console.group("Cuadrado")
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd()

console.group("Triangulo")
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = perimetroCuadrado(value)

    alert("El area del cuadrado es " + area)

}

function calcularPerimetroCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert("El area del cuadrado es " + perimetro)
}

