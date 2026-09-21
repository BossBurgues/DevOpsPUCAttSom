const test = require("node:test");
const assert = require("node:assert");
const { buildMessage, soma, ehPar, inverter } = require("../src/greeting");

test("buildMessage retorna status ok", () => {
  assert.strictEqual(buildMessage().status, "ok");
});

test("buildMessage usa 'Docker' quando nao recebe nome", () => {
  assert.strictEqual(buildMessage().message, "Ola, Docker!");
});

test("buildMessage usa o nome informado", () => {
  assert.strictEqual(buildMessage("Gustavo").message, "Ola, Gustavo!");
});

test("soma dois numeros", () => {
  assert.strictEqual(soma(2, 3), 5);
});

test("ehPar identifica numero par e impar", () => {
  assert.strictEqual(ehPar(4), true);
  assert.strictEqual(ehPar(7), false);
});

test("inverter inverte a string", () => {
  assert.strictEqual(inverter("abc"), "cba");
});