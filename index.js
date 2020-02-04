var robin = require("roundrobin");

console.log("Grupo com 3 atletas");
const gp3 = robin(3, ["Atleta 01", "Atleta 02", "Atleta 03"]);

console.log("Confrontos:");
gp3.map(round =>
  round.map(confront => console.log(`${confront[0]} x ${confront[1]}`))
);

console.log("");
console.log("Grupo com 4 atletas");
const gp4 = robin(4, ["Atleta 01", "Atleta 02", "Atleta 03", "Atleta 04"]);

console.log("Confrontos:");
gp4.map(round =>
  round.map(confront => console.log(`${confront[0]} x ${confront[1]}`))
);

console.log("");
console.log("Grupo com 5 atletas");
const gp5 = robin(5, [
  "Atleta 01",
  "Atleta 02",
  "Atleta 03",
  "Atleta 04",
  "Atleta 05"
]);

console.log("Confrontos:");
gp5.map(round =>
  round.map(confront => console.log(`${confront[0]} x ${confront[1]}`))
);

console.log("");
console.log("Grupo com 6 atletas");
const gp6 = robin(6, [
  "Atleta 01",
  "Atleta 02",
  "Atleta 03",
  "Atleta 04",
  "Atleta 05",
  "Atleta 06"
]);

console.log("Confrontos:");
gp6.map(round =>
  round.map(confront => console.log(`${confront[0]} x ${confront[1]}`))
);
