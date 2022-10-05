function areaQuadrado(lado) {
  return lado ** 2;
}

function perimetroQuadrado(lado) {
  return lado * 4;
}

let quadrado = {
  areaQuadrado,
  perimetroQuadrado,
};

export default quadrado;
