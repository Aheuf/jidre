import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Tigre: CreatureDND = {
    name: "tigres",
    desc: "Bête de moyenne taille, non alignée",
    classeArmure: "12",
    pv:"37 (5d10+10)",
    vitesse: "12m",
    baseStatistique:{
        for:"17 (+3)",
        dex:"15 (+2)",
        con:"14 (+2)",
        int:"3 (-4)",
        sag:"12 (+1)",
        cha:"8 (-1)"
    },
    sens:"Vision dans le noir 18m, perception passive 13",
    competence:"Discretion +6, Perception +3",
    langues: "-",
    facteurPuissance: "1 (200px)",
    action:[
        "Bond agressif. Si le tigre se déplace en ligne droite sur une distance minimale de 6m vers une créature contre laquelle il réussit ensuite une attaque de griffe lors du même tour, cette créature doit réussir un jet de sauvegarde de force DD 13 pour ne pas être jetée à terre. Si la cible est à terre, le tigre peut effectué une attaque de morsure contre elle par une action bonus.",
        "Odorat aiguisé. Le tigre est avantagé lors des tests de Sagesse (Perception) basé sur l'odorat."
    ]
}