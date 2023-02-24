"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joueur_1 = require("./joueur");
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
console.log("p2=" + JSON.stringify(p2));
let j1 = new joueur_1.Joueur();
j1.prenom = "luc";
j1.nom = "NomA";
j1.age = 25;
j1.email = "luc.NomA@gmail.com";
console.log("j1=" + JSON.stringify(j1));
let j2 = new joueur_1.Joueur("john", "macenero", 52, 2);
console.log("j2=" + JSON.stringify(j2));
j2.afficher();
