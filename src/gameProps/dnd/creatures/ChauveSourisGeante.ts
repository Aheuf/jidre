import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const ChauveSourisGeante: CreatureDND = {
    name: "Chauve souris géante",
    desc: "Bête de grande taille, non-alignée",
    classeArmure: "13",
    pv:"22 (4d10)",
    vitesse: "3m, vol 18m",
    baseStatistique:{
        for:"15 (+2)",
        dex:"16 (+3)",
        con:"11",
        int:"2 (-4)",
        sag:"12 (+1)",
        cha:"6 (-2)"
    },
    sens:"Vision aveugle 18m, perception passive 11",
    langues: "-",
    facteurPuissance: "1/4 (50px)",
    specs:[
        "Ecolocalisation. la chauve-souris ne peut pas utiliser sa vision aveugle si elle est assourdie.",
        "ouie aiguisée. la chauve-souris est avantagée lors des tests de Sagesse (Perception) basé sur l'ouie."
    ],
    action:[
        "Morsure. Attaque d'arme au corps à corps: +4 pour toucher, allonge 1,50m, une créature, touché 5 (1d6+2) dégat perforant"
    ]
}