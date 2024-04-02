import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Araignee: CreatureDND = {
    name: "Araignée",
    image:"src/assets/dnd/spider.jpg",
    desc: "Bête de très petite taille, non-alignée",
    classeArmure: "12",
    pv:"1 (1d4 -1)",
    vitesse: "6m, escalade 6m",
    baseStatistique:{
        for:"2 (-4)",
        dex:"14 (+2)",
        con:"8 (-1)",
        int:"1 (-5)",
        sag:"14 (+2)",
        cha:"7 (-2)"
    },
    competence:"Discretion +4",
    sens:"Vision aveugle 9m, perception passive 10",
    langues: "-",
    facteurPuissance: "0 (10px)",
    specs:[
        "Marche dans les toiles. L'araignée ignore les restrictions de déplacement imposées par les toiles d'araignée",
        "Pattes d'araignée. L'araignée peut escalader les surfaces difficiles y compris les plafonds la tête en bas, sans faire de test de caractéristique.",
        "Perception sur les toiles. Tant qu'elle est en contact avec une toile d'araignée, l'araignée connaît l'exacte position de toutes les autres créatures en contact avec la même toile."
    ],
    action:[
        "Morsure. Attaque d'arme au corps à corps: +4 pour toucher, allonge 1,50m, une créature, touché 1 dégat perforant et ma cible doit effectuer un jet de sauvegarde de constitution DD 9 pour ne pas subir 2(1d4) dégâts de poison."
    ]
}