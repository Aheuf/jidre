import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Mimique: CreatureDND = {
    name: "Mimique",
    image:"src/assets/dnd/mimic.jpg",
    desc: "Monstruosité (métamorphe) de taille moyenne, Neutre",
    classeArmure: "12 (armure naturelle)",
    pv:"58 (9d8+18)",
    vitesse: "4,5m",
    baseStatistique:{
        for:"17 (+3)",
        dex:"12 (+1)",
        con:"15 (+2)",
        int:"5 (-3)",
        sag:"13 (+1)",
        cha:"8 (-1)"
    },
    competence:"Discretion +5",
    sens:"Vision dans le noir 18m, perception passive 11",
    langues: "-",
    facteurPuissance: "2 (450px)",
    specs:[
        "Collant (forme d'objet uniquement). La mimique se colle à tout ce qu'elle touche. une créature de très grande taille ou plus petite collé à la mimique est également agrippée (évasion DD13). Les tests de caracteristique effectués pour échapper à cette lutte se font avec un désavantage",
        "Science de la lutte. La mimique est avantagée lors des jets d'attaque effectués contre les créature qu'elle aggripe",
        "Faux-semblant (forme d'objet uniquement). Aussi longtemps que la mimique reste immobile, il est impossible de la distinguer d'un objet ordinaire.",
        "Métamorphe. la mimique peut utiliser son action pour se métamorphoser en objet ou pour reprendre son véritable aspect informe. Ses statistiques reste les mêmes, quelle que soit la forme adoptée. Les objets qu'elle porte ou transporte ne se transforment pas. La mimique reprend sa forme véritable si elle meurt."
    ],
    action:[
        "Morsure. Attaque d'arme au corps à corps +5 pour toucher, allongue 1,50m, une cible. touché 7 (1d8 +3) dégats perforant plus 4 (1d8) dégats d'acide",
        "Pseudopode. Attaque d'arme au corps à corps +5 pour toucher, allonge 1,50m, une cible. Touché 7 (1d8+3) dégats contondants. Si la mimique est sous forme d'objet, la cible est également victime du trait collant"
    ]
}