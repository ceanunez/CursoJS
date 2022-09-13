//Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado) {
    console.log("Lado cuadrado ingresado: " + ladoCuadrado + "cm")
    return ladoCuadrado * 4;
}
//console.log("Perímetro cuadrado: " + perimetroCuadrado + "cm")
function areaCuadrado(ladoCuadrado)
{
    return ladoCuadrado * ladoCuadrado;
}

console.groupEnd();
//End Cuadrado

//Triángulo
console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(altura, base){
   return (altura * base)/2;
} 


console.groupEnd();
//End Triángulo

//Círculo
console.group("Círculo");

const piValue = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function circunferencia(radio){
    return diametroCirculo(radio) * piValue;
}

function areaCirculo(radio){
    return radio * radio * piValue;
} 

console.groupEnd();
//End Círculo

//HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoInput");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro es: " + perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("ladoInput");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área es: " + area);
}