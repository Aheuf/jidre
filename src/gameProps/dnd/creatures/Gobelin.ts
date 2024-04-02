import { CreatureDND } from "../../../models/dnd/CreatureDnd";
import { ArcCourt } from "../objects/armes/ArcCourt";
import { Cimeterre } from "../objects/armes/Cimeterre";

export const Gobelin: CreatureDND = {
    name: "Gobelin",
    image: "src/assets/dnd/goblin.jpg",
    desc: "Humanoide (gobelinoide) de petite taille, Neutre mauvais",
    classeArmure: "15 (armure de cuir, bouclier)",
    pv:"7 (2d6)",
    vitesse: "9m",
    baseStatistique:{
        for:"8 (-1)",
        dex:"14 (+2)",
        con:"10",
        int:"10",
        sag:"8 (-1)",
        cha:"8 (-1)"
    },
    competence:"Discretion +6",
    sens:"Vision dans le noir 18m, perception passive 9",
    langues: "commun gobelin",
    facteurPuissance: "1/4 (50px)",
    specs:["Fuite agile. Le gobelin peut effectuer l'action de se désengager ou se cacher par une action bonus à chacun de ses tours."],
    action:[
        `${Cimeterre.nom}. ${Cimeterre.detail}, ${Cimeterre.touche} pour toucher, allonge ${Cimeterre.allonge}, ${Cimeterre.nbCible}, touché ${Cimeterre.blesse} ${Cimeterre.typeDgt}.`,
        `${ArcCourt.nom}. ${ArcCourt.detail}, ${ArcCourt.touche} pour toucher, allonge ${ArcCourt.allonge}, ${ArcCourt.nbCible}, touché ${ArcCourt.blesse} ${ArcCourt.typeDgt}.`
    ]

}