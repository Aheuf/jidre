import { CreatureDND } from "../../../models/dnd/CreatureDnd";
import { Harpon } from "../objects/armes/Harpon";

export const Merrow: CreatureDND = {
    name: "Merrow",
    desc: "Monstruosité de grande taille, chaotique mauvaise",
    image: "src/assets/dnd/merrow.jpg",
    classeArmure: "13 (armure naturelle)",
    pv:"45 (6d10 + 12)",
    vitesse: "3m, nage 12m",
    baseStatistique:{
        for:"18 (+4)",
        dex:"10",
        con:"15 (+2)",
        int:"8 (-1)",
        sag:"10",
        cha:"9 (-1)"
    },
    sens:"vision dans le noir 18m, perception passive 10",
    langues: "abtssal, aquatique",
    facteurPuissance: "2 (450px)",
    specs:[
        "Amphibie. Le merrow peut respirer à l'air libre et sous l'eau",
    ],
    action:[
        "Attaque multiple, le merrow effectue deux attaques: une avec sa morsure et une avec ses griffes ou son harpon.",
        "Griffes. Attaque d'armes au corps à corps: +6 pour toucher, allonge 1,50m, une cible. touché 9 (2d4+4) dégats tranchants",
        `${Harpon.nom}. ${Harpon.detail}, ${Harpon.touche} pour toucher, allonge ${Harpon.allonge}, ${Harpon.nbCible}, touché ${Harpon.blesse} ${Harpon.typeDgt}.`,
        "Morsure. Attaque d'arme au corps à corps: +6 pour toucher, allonge 1,50m, une cible. Touché 8 (1d8+4) dégats perforants."
    ]
}