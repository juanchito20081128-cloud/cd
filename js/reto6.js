let saldo = 1000000;
let retiro = 30000;

if (retiro > saldo) {

  console.log("saldo insuficiente");

} else if (retiro <= 0) {

  console.log("monto invalido");

} else if (retiro % 10000 == 0) {

  console.log("si es multiplo");

  saldo = saldo - retiro;
  console.log(`tu nuevo saldo es : ${saldo}`);

} else {
  console.log("solo se permiten retiros multiplos de 10.000 ");
}


