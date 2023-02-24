export class Adresse{
    constructor(
        public numero :number =0 , 
        public rue : string ="?", 
        public codePostal: string ="?", 
        public ville: string="?"
    ){}
}

export class AdresseAvecDesctructuration{
    numero :number;
    rue : string; 
    codePostal: string; 
    ville: string;
    constructor(options : {
        numero? :number;
        rue? : string; 
        codePostal?: string; 
        ville?: string;
         }= {})
    { 
        this.numero = options.numero || 0;
        this.rue = options.rue || "?";
        this.codePostal = options.codePostal || "?";
        this.ville = options.ville || "?";
    }
}