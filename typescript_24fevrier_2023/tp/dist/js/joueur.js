"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
const personne_1 = require("./personne");
class Joueur extends personne_1.Personne {
    constructor(prenom = "", nom = "", age = 0, classement = 0) {
        super(prenom, nom, age);
        this.classement = classement;
    }
}
exports.Joueur = Joueur;
