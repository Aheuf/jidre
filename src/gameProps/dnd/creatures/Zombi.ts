import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Zombie: CreatureDND = {
    name: "Zombie",
    image: "src/assets/dnd/zombie.jpg",
    desc: "Mort-vivant de taille moyenne, Neutre mauvais",
    classeArmure: "8",
    pv:"22 (3d8 +9)",
    vitesse: "6m",
    baseStatistique:{
        for:"13 (+1)",
        dex:"6 (-2)",
        con:"16 (+3)",
        int:"3 (-4)",
        sag:"6 (-2)",
        cha:"5 (-3)"
    },
    save:"Sag +0",
    immuDgt:"poison",
    immuEtat:"empoisonné",
    sens:"Vision dans le noir 18m, perception passive 8",
    langues: "comprends toutes les langues qu'il connaissait de son vivant, mais ne peut pas parler",
    facteurPuissance: "1/4 (50px)",
    specs:[
        "Robustesse de la non-vie. Si des dégats réduisent à 0 les points de vie du zombi, celui-ci doit effectuer un jet de sauvegarde de constitution DD 5 + les dégats subis, à moins que ces dégats ne soient de type radiant ou infligés par un coup critique. En cas de réussite, le zombi tombe à 1 pv à la place."
    ],
    action:[
        "coup. Attaque d'arme au corps à corps. +3 pour toucher, allonge 1,50m, une cible, touché 4 (1d6+1) dégats contondants."
    ]
}