//se crea funcion asincrona autoejecutable llamada cargarDatos
// estrutura fuincion asincrona autoejecutable
//(async function <nombre de la funcion>(){})();
let URL = (async function cargarDatos() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/albums");
    let datos = await respuesta.json();
    let contador = 0;

    datos.forEach(function (element) {
      if (contador < 20) {
        contador++;
        console.log(`Titulo: ${element.title}`);
        //console.log(contador);
      }
    });
    console.log("\t\tFuncion Asincrona Autoejecutable Cargada");
  } catch (error) {
    console.log(error);
  }
})();

//recordatorio de estructura
// funcion flecha: const promesa = new Promise((resolve, reject) => {});
//funcion normal: const promesa = new Promise(function(resolve, reject) {});
function RetornoPromesa() {
  return new Promise(function (funciona, Nofunciona) {
    setTimeout(function () {
      funciona(console.log("Informacion Enviada"));
    }, 3000);
  });
}
// Uso de la función y manejo de la promesa
//cuando la funcion recibe una promesa como parametro entonces
//ejecuta una funcion que imprime en consola un mensaje si la promesa es resuelta o rechazada
RetornoPromesa()
  .then(function () {
    console.log("Promesa Resuelta");
    console.log("\t\tFuncion con Retorno Cargada");
  })
  .catch(function () {
    console.log("Promesa Rechazada");
  });

//funcion asincrona que recibe la promesa como parametro
async function RetornoPromesaRecibida(RetornoPromesa) {
  try {
    // espera a que la promesa se resuelva
    const RetornoRecibido = await RetornoPromesa;

    // imprime el mensaje recibido
    console.log("\t\tFuncion Asincrona que recibe Retorno Cargada");

    // ejecuta la función asincrónica autoejecutable cargarDatos
    cargarDatos();

    // ejecuta la función RetornoPromesa
    RetornoPromesa();
  } catch (error) {
    //console.log(error);
  }
}
// Llamado a la función RetornoPromesaRecibida
RetornoPromesaRecibida(RetornoPromesa());
