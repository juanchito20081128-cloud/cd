// calcular el área y perimetro de un rectangulo
const base = 8;
const altura = 5;
const area = base * altura;
const perimetro = 2 * (base + altura);
console.log (`Área: ${area} cm²`);
console.log (`perímetro: ${perimetro} cm`);

// saber si un numero es par o impar usando el operador  % 
const numero = 7;
const esPar = numero % 2 === 0;
console.log (`¿${numero} es par? : ${esPar}`);

// calcular el promedio de tres notas
const nota1= 80;
const nota2 = 90;
const nota3 = 70;
const promedio = (nota1 + nota2 + nota3) / 3;
console.log (`Promedio: ${promedio}`);

// área de un triangulo
const base2 = 15;
const altura2 = 9;
const area2 = (base2 * altura2) / 2;
console.log (`Área del triangulo: ${area2}cm²`)

// area del circulo
const radio = 12;
const area3 = Math.PI * radio **2;
console.log (`Área del circulo ${area3}cm²`);

// volumendel cubo
const lado = 5;
const volumen = lado**3;
console.log (`Volumen del circulo ${volumen} cm³`)