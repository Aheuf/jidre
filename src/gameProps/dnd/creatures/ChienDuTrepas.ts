import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const ChienDuTrepas: CreatureDND = {
    name: "Chien du trépas",
    image: "src/assets/dnd/death-dog.jpg",
    desc: "Monstruosité de taille moyenne, neutre mauvais",
    classeArmure: "12",
    pv:"39 (6d8 + 12)",
    vitesse: "12m",
    baseStatistique:{
        for:"15 (+2)",
        dex:"14 (+2)",
        con:"14 (+2)",
        int:"3 (-4)",
        sag:"13 (+1)",
        cha:"6 (-2)"
    },
    sens:"Vision dans le noir 36m, perception passive 15",
    competence:"Discretion +4, Perception +5",
    langues: "-",
    facteurPuissance: "1 (200px)",
    specs:["Bicéphale. le chien est avantagé lors des tests de Sagesse (Perception) et des jets de sauvegarde contre les états assourdi, aveuglé, charmé, effrayé, étourdi et inconscient."],
    action:[
        "Attaque multiple. Le chien effectue deux attaques de morsure.",
        "Morsure. attaque au corps à corps: +4 pour toucher, allonge 1,50m, une cible. touché 5 (1d6+2) dégats perforant. si la cible est  une créature elle doit réussir un jet de sauvegarde de constitution DD 12 contre la maladie pour ne pas être empoisonnée jusqu'à ce que cette maladie soit guérie. Toutes les 24 heures par la suite, la créature doit retenter le jet de sauvegarde et réduire de 5 (1d10) son total maximum de points de vie en cas d'échec. Cette réduction persiste jusqu'à guérison de la maladie. La créature meurt si la maladie réduit à 0 son total maximum de point de vie"
    ]
}