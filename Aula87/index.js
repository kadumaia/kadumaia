function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("BAD VALUE");
        return;
      }
      resolve(msg + " - Passei na promise");
      return;
    }, tempo);
  });
}

const promises = [
  //"primeiro vaor",
  esperaAi(1000, aleatorio(1, 5)),
  esperaAi("promise 1", aleatorio(1, 5)),
  esperaAi("promise 2", aleatorio(1, 5)),
  esperaAi("promise 3", aleatorio(1, 5)),
  //"outro valor",
];

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

// promise.all -> executa todas as promises ao mesmo tempo
// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// promise.raace -> executa a primeira promise que resolver
// Promise.race(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// promise.resolve -> executa a promise
baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO", e));

// promise.reject -> rejeita a promise
