// verificador de acceso
const edadInvitado = 18;
const tieneEntrada = true;
const esVip = true;


const puedeEntrar = edadInvitado >= 18 && tieneEntrada;
console.log(` puede entrar: ${puedeEntrar}`); 

const accesoVip = puedeEntrar && esVip;
console.log(`¿tiene acceso VIP?: ${accesoVip} usuario VIP`);


const esMenor = !(puedeEntrar);
if (puedeEntrar) {

    console.log("Bienvendio");
    console.log(`¿es menor de edad? ${esMenor}`);

}else{

    console.log("No puede entrar");
    console.log(`¿es mayor de edad?: ${esMenor}`);
}