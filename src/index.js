"use strict";

function test1() {
  return Promise.resolve(50);
}

async function test2() {
  const x = await test1();
  return x + 50;
}

async function test3() {
  const x = await test1();
  const y = await test2();
  console.log("hello", x, y);
}

test3();
