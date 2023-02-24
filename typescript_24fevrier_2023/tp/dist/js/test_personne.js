"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personne_1 = require("./personne");
let p1;
p1 = new personne_1.Personne();
p1.prenom = "jean";
p1.nom = "Bon";
p1.age = 40;
p1.incrementerAge();
console.log(p1.prenom + " " + p1.nom + " " + p1.age);
console.log(JSON.stringify(p1));
let p2 = new personne_1.Personne("alain", "Therieur", 30);
try {
    p2.age = -5;
}
catch (erreur) {
    console.log(erreur);
}
console.log(JSON.stringify(p2));
