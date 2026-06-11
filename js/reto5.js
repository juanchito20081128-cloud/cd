// Clasificador de edades
const edad = 5;
let categoria;

if (edad < 0) {
  categoria = "Edad inválida";
} else if (edad < 12) {
  categoria = "Niño";
} else if (edad < 18) {
  categoria = "Adolescente";
} else if (edad < 30) {
  categoria = "Joven adulto";
} else if (edad < 60) {
  categoria = "Adulto";
} else {
  categoria = "Adulto mayor";
}

console.log(`Con ${edad} años eres: ${categoria}`);

// Validador de contraseña
const password = "Sena2026";

if (password.length < 8) {
  console.log("La contraseña debe tener al menos 8 caracteres");
} else if (password.length > 20) {
  console.log("La contraseña no debe superar 20 caracteres");
} else {
  console.log("Contraseña válida ✔");
}

//  Calificador SENA
const nota = 100;
if (nota >= 90 && nota <= 100) {
  console.log("Sobresaliente");
} else if (nota >= 80 && nota <= 89) {
  console.log("Notable");
} else if (nota >= 70 && nota <= 79) {
  console.log("Aprobado");
} else if (nota >= 0 && nota <= 69) {
  console.log("Nota invalida ");
} else {
  console.log("nota invalida");
}
