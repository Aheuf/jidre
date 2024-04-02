import { CreatureDND } from "../../../models/dnd/CreatureDnd";
import { ArcCourt } from "../objects/armes/ArcCourt";
import { EpeeCourte } from "../objects/armes/EpeeCourte";

export const Squelette: CreatureDND = {
    name: "Squelette",
    image: "src/assets/dnd/skeleton.jpg",
    desc: "Mort-vivant de taille moyenne, Loyal mauvais",
    classeArmure: "13 (débris d'armure)",
    pv:"13 (2d8 +4)",
    vitesse: "9m",
    baseStatistique:{
        for:"10",
        dex:"14 (+2)",
        con:"15 (+2)",
        int:"6 (-2)",
        sag:"8 (-1)",
        cha:"5 (-3)"
    },
    vulnerable:"contondants",
    immuDgt:"poison",
    immuEtat:"empoisonné et épuisé",
    sens:"Vision dans le noir 18m, perception passive 9",
    langues: "comprends toutes les langues qu'il connaissait de son vivant, mais ne peut pas parler",
    facteurPuissance: "1/4 (50px)",
    action:[
        `${ArcCourt.nom}. ${ArcCourt.detail}, ${ArcCourt.touche} pour toucher, allonge ${ArcCourt.allonge}, ${ArcCourt.nbCible}, touché ${ArcCourt.blesse} ${ArcCourt.typeDgt}.`,
        `${EpeeCourte.nom}. ${EpeeCourte.detail}, ${EpeeCourte.touche} pour toucher, allonge ${EpeeCourte.allonge}, ${EpeeCourte.nbCible}, touché ${EpeeCourte.blesse} ${EpeeCourte.typeDgt}.`
    ]
}