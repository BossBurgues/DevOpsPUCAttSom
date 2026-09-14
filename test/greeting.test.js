const test = require("node:test");
const assert = require("node:assert");
const { buildMessage } = require("../src/greeting");

test("buildMessage retorna status ok", () => {
  assert.strictEqual(buildMessage().status, "ok");
});