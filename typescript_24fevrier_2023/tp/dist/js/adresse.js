"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdresseAvecDesctructuration = exports.Adresse = void 0;
class Adresse {
    constructor(numero = 0, rue = "?", codePostal = "?", ville = "?") {
        this.numero = numero;
        this.rue = rue;
        this.codePostal = codePostal;
        this.ville = ville;
    }
}
exports.Adresse = Adresse;
class AdresseAvecDesctructuration {
    constructor(options = {}) {
        this.numero = options.numero || 0;
        this.rue = options.rue || "?";
        this.codePostal = options.codePostal || "?";
        this.ville = options.ville || "?";
    }
}
exports.AdresseAvecDesctructuration = AdresseAvecDesctructuration;
