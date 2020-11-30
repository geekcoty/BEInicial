const fs = require ("fs");
const person = require ("./person.js");
const gatitAscii = require("cat-me");

const {name, age} = person.person;

console.log("Hello back world!");
console.log (`Hola. Soy ${name} y tengo ${age} años`);
console.log (gatitAscii());

fs.writeFile("person.txt", `Hola. Soy ${name} y tengo ${age} años`, () => {
  console.log("Todo ok");
});


