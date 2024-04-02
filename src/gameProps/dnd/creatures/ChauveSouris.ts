import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const ChauveSouris: CreatureDND = {
    name: "Chauve souris",
    desc: "Bête de très petite taille, non-alignée",
    classeArmure: "12",
    pv:"1 (1d4 -1)",
    vitesse: "1,50m, vol 9m",
    baseStatistique:{
        for:"2 (-4)",
        dex:"15 (+2)",
        con:"8 (-1)",
        int:"2 (-4)",
        sag:"12 (+1)",
        cha:"4 (-3)"
    },
    sens:"Vision aveugle 18m, perception passive 11",
    langues: "-",
    facteurPuissance: "0 (10px)",
    specs:[
        "Ecolocalisation. la chauve-souris ne peut pas utiliser sa vision aveugle si elle est assourdie.",
        "ouie aiguisée. la chauve-souris est avantagée lors des tests de Sagesse (Perception) basé sur l'ouie."
    ],
    action:[
        "Morsure. Attaque d'arme au corps à corps: +4 pour toucher, allonge 1,50m, une créature, touché 1 dégat perforant"
    ]
}