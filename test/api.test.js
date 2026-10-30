const test = require("node:test");
const assert = require("node:assert");
const { todos } = require("../src/server");
test("todos start empty", () => { assert.deepStrictEqual(todos, []); });
