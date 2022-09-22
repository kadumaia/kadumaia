function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("BAD VALUE");
      return;
    }

    setTimeout(() => {
      resolve(msg);
      return;
    }, tempo);
  });
}

// function esperaAi(msg, tempo) {
//   setTimeout(() => {
//     console.log(msg);
//   }, tempo);
// }

esperaAi("[Conexão com o BD]", aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("--> Buscando dados na BASE", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("--> Tratando os Dados", aleatorio(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("--> Mostrando os dados na tela");
  })
  .catch((e) => {
    console.log(e);
  });

console.log("Isso aqui será exibido antes de qualquer promise");

// Conexão com o BD
// Buscando dados na BASE
// Tratando os Dados
// Mostrando os dados na tela
