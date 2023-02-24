import { Joueur } from "./joueur";
import { Personne } from "./personne";


let p1 : Personne ;
p1 = new Personne();
p1.prenom = "jean"; p1.nom = "Bon"; p1.age=40;
p1.incrementerAge();
console.log(p1.prenom + " " + p1.nom + " " + p1.age);
console.log(JSON.stringify(p1));

let p2 = new Personne("alain" , "Therieur" , 30);
try {
p2.age = -5;
}catch(erreur){
    console.log(erreur);
}
console.log("p2=" + JSON.stringify(p2));

let j1 = new Joueur();
j1.prenom = "luc"; j1.nom = "NomA" ; j1.age=25; j1.email="luc.NomA@gmail.com";
console.log("j1=" + JSON.stringify(j1));

let j2 = new Joueur("john","macenero",52,2);
console.log("j2=" + JSON.stringify(j2));
j2.afficher();

