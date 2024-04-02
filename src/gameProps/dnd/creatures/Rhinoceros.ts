import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Rhinoceros: CreatureDND = {
    name: "Rhinoceros",
    desc: "Bête de grande taille, non-alignée",
    classeArmure: "11",
    pv:"45 (6d10 + 12)",
    vitesse: "12 m",
    baseStatistique:{
        for:"21 (+5)",
        dex:"8 (-1)",
        con:"15 (+2)",
        int:"2 (-4)",
        sag:"10",
        cha:"5 (-3)"
    },
    sens:"perception passive 11",
    langues: "-",
    facteurPuissance: "2 (450px)",
    specs:[
        "Charge. Si le rhinoceros se déplace en ligne droite sur une distance minimale de 6m vers une cible contre laquelle il réussit ensuite une attaque de coup de corne lors du même tour, sa victime subit 9 (2d8) dégâts contondants supplémentaires. Si la cible est une créature, elle doit réussir un jet de sauvegarde de Force DD 15 pour ne pas être ejtée à terre",
    ],
    action:[
        "Coup de corne. Attaque d'arme au corps à corps: +7 pour toucher. allonge 1,50m, un cible. 14 (2d8+5) dégâts contondants."
    ]
}