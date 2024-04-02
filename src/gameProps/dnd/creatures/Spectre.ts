import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Spectre: CreatureDND = {
    name: "Spectre",
    image: "src/assets/dnd/specter.jpg",
    desc: "Mort-vivant de taille moyenne, chaotique mauvais",
    classeArmure: "12",
    pv:"22 (5d8)",
    vitesse: "0m, vol 15m (vol stationnaire)",
    facteurPuissance: "1 (200px)",
    baseStatistique:{
        for:"1 (-5)",
        dex:"14 (+2)",
        con:"11",
        int:"10",
        sag:"10",
        cha:"11"
    },
    resistance:" acide, feu, foudre, froid, tonnerre; contondants, perforant et tranchant infligé par des attaques non magiques.",
    immuDgt:"poison et nécrotique",
    immuEtat:"à terre, charmé, agrippé, empoisonné, épuisé, inconscient, entravé, paralysé et pétrifié",
    sens:"Vision dans le noir 18m, perception passive 10",
    langues: "comprends toutes les langues qu'il connaissait de son vivant, mais ne peut pas parler",
    specs:[
        "Déplacement intangible. Le spectre peut traverser créatures et objets en les considérant comme un terrain difficile. Il subit 5 (1d10) dégâts de force s'il termine son tour à l'interieur d'un objet",
        "Sensibilité à la lumière du soleil. Le spectre est désavantagé lors des jets d'attaque et des tests de sagesse (perception) basé sur la vue lorsqu'il est exposé à la lumière du soleil."
    ],
    action:["Absorption de vie. Attaque d'arme au corps à corps: +4 pour toucher, allonge 1,50m, une créature. touché 10(3d6) dégats nécrotiques. La cible doit réussir un jet de sauvegarde de constitution DD10 pour ne pas voir son total maximum de points de vie réduit d'un montant égal aux dégats subis. Cette réduction persiste jusqu'au moment où la créature termine un repos long. La cible meurt si cet effet réduit son total maximum de' points de vie à 0"]
}