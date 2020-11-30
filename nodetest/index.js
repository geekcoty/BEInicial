const fs = require ("fs");
const person = require ("./person.js");
const gatitoAscii = require("cat-me");

const {name, age} = person.person;

console.log("Hello back world!");
console.log (`Hola. Soy ${name} y tengo ${age} años`);
console.log (gatitoAscii());

fs.writeFile("person.txt", `Hola. Soy ${name} y tengo ${age} años`, () => {
  console.log("Todo ok");
});


