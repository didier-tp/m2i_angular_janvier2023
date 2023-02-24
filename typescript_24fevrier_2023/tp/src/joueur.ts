import { Personne } from "./personne";

export class Joueur extends Personne{
   classement : number ;

   constructor(prenom:string="",nom:string="",age:number=0, classement : number=0){
       super(prenom,nom,age);
       //super()
       this.classement = classement;
   }

   afficher(): void {
      console.log("Joueur , classement= " + this. classement );
      super.afficher();
   }
   
}