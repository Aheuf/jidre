import { CreatureDND } from "../../../models/dnd/CreatureDnd";
import { ArcCourt } from "../objects/armes/ArcCourt";
import { EpeeCourte } from "../objects/armes/EpeeCourte";

export const SqueletteDeMinotaure: CreatureDND = {
    name: "Squelette De Minotaure",
    image: "src/assets/dnd/minotaur-skeleton.jpg",
    desc: "Mort-vivant de grande taille, Loyal mauvais",
    classeArmure: "12 (armure naturelle)",
    pv:"67 (9d10 + 18)",
    vitesse: "12m",
    baseStatistique:{
        for:"18 (+4)",
        dex:"11",
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
    facteurPuissance: "2 (450px)",
    specs:["Charge. si le quelette se déplace de 3m au moins en ligne droite vers une cible contre laquelle il réussit ensuite une attaque de coup de corne lors du même tour, cette cible subit 9 (2d8) dégats perforants supplémentaires. Si la cible est une créature, elle doit réussir un jet de sauvegarde de Force DD14 sans quoi elle est repoussée de 3 mètres et se retrouve à terre"],
    action:[
        `${ArcCourt.nom}. ${ArcCourt.detail}, ${ArcCourt.touche} pour toucher, allonge ${ArcCourt.allonge}, ${ArcCourt.nbCible}, touché ${ArcCourt.blesse} ${ArcCourt.typeDgt}.`,
        `${EpeeCourte.nom}. ${EpeeCourte.detail}, ${EpeeCourte.touche} pour toucher, allonge ${EpeeCourte.allonge}, ${EpeeCourte.nbCible}, touché ${EpeeCourte.blesse} ${EpeeCourte.typeDgt}.`
    ]
}