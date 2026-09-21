function buildMessage(name) {
  const alvo = name && name.trim() ? name.trim() : "Docker";
  return { message: `Ola, ${alvo}!`, status: "ok" };
}

function soma(a, b) {
  return a + b;
}

function ehPar(n) {
  return n % 2 === 0;
}

function inverter(texto) {
  return String(texto).split("").reverse().join("");
}

module.exports = { buildMessage, soma, ehPar, inverter };