import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const ArmureAnimee: CreatureDND = {
    name: "Armure animee",
    image:"src/assets/dnd/animated-armor.jpg",
    desc: "Artificiel de taille Moyenne, non aligné",
    classeArmure: "18 (armure naturelle)",
    pv:"33 (6d8 +6)",
    vitesse: "7,50m",
    baseStatistique:{
        for:"14 (+2)",
        dex:"11",
        con:"13 (+1)",
        int:"1 (-5)",
        sag:"3 (-4)",
        cha:"1 (-5)"
    },
    immuDgt:"poison et psychique",
    immuEtat:"assourdi, aveuglé, charmé, effrayé, empoissonné, épuisé, paralysé et pétrifié",
    sens:"vision aveugle 18m ( aveugle au dela de cette distance), perception passive 6",
    langues: " - ",
    facteurPuissance: "1 (200 px)",
    specs:[
        "Faux semblant. Tant que l'armure reste immobile, il est impossible de la distinguer d'une armure ordinaire",
        "Vulnérable à l'antimagie. L'armure est neutralisée quand elle se trouve à l'interieur d'un champ d'antimagie. Visée par une dissipation de la magie, l'armure doit réussir un jet de sauvegarde de Constitution contre le DD du jet de sauvegarde du sort sans quoi elle tombe inconsciente pendant 1 minute."
    ],
    action:[
        "Attaque multiples, l'armure effectue deux attaques au corps à corps",
        "Coup. Attaque d'arme au corps à corps +4 pour toucher, allonge 1,50m, une cible, touché 5 (1d6+2) dégats contondants."
    ]
}