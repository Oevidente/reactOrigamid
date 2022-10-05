//forma 1

/* function showList(empresa, clientes) {
  //fazer loop nos clientes e exibir no console

  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList('Google', ['André', 'Bruna', 'Tais', 'Gildo']); */

//forma 2

/* function showList(empresa, ...clientes) {
  //fazer loop nos clientes e exibir no console

  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList('Google', 'André', 'Bruna', 'Tais', 'Gildo'); */

//forma 3

function showList(empresa, clientes) {
  //fazer loop nos clientes e exibir no console

  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList('Google', ['André', 'Bruna', 'Tais', 'Gildo']);

const maior = Math.max(10, 5, 20);
console.log(maior);
