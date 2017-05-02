//só pode ter um  <<  module.exports >> do modelo abaixo a funcção fica sem um NOME para ser chamada.
/*module.exports = function (parametro) {
  console.log(`O parametro informdao foi ${parametro}`);
};*/

function Teste0(parametro) {
  //console.log(`O parametro informdao foi ${parametro}`);
  return `O parametro informdao foi ${parametro}`;
}

function Teste1() {
  return "Teste1";
}

const Teste2 = name => {
  return {
    name: name,
    email: "filipe@sisnet.com.br",
    password: "123456"
  };
};

function Teste3() {
  return "Teste3";
}

const Teste4 = () => {
  return {
    email: "filipe@sisnet.com.br"
  };
};

module.exports = { Teste0, Teste1, Teste2, Teste3, Teste4 };
