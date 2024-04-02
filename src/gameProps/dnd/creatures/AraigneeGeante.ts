import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const AraigneeGeante: CreatureDND = {
    name: "Araignée Géante",
    image:"src/assets/dnd/giant-spider.jpg",
    desc: "Bête de grande taille, non-alignée",
    classeArmure: "14 (armure naturelle)",
    pv:"26 (4d10 + 4)",
    vitesse: "9m, escalade 9m",
    baseStatistique:{
        for:"14 (+2)",
        dex:"16 (+3)",
        con:"12 (+1)",
        int:"2 (-4)",
        sag:"11",
        cha:"4 (-3)"
    },
    competence:"Discretion +7",
    sens:"Vision aveugle 3m, vision dans le noir 18m, perception passive 10",
    langues: "-",
    facteurPuissance: "1 (200px)",
    specs:[
        "Marche dans les toiles. L'araignée ignore les restrictions de déplacement imposées par les toiles d'araignée",
        "Pattes d'araignée. L'araignée peut escalader les surfaces difficiles y compris les plafonds la tête en bas, sans faire de test de caractéristique.",
        "Perception sur les toiles. Tant qu'elle est en contact avec une toile d'araignée, l'araignée connaît l'exacte position de toutes les autres créatures en contact avec la même toile."
    ],
    action:[
        "Morsure. Attaque d'arme au corps à corps: +5 pour toucher, allonge 1,50m, une créature, touché 7 (1d8+3) dégats perforants et la cible doit effectuer un jet de sauvegarde de constitution DD 11 pour ne pas subir 9(2d8) dégâts de poison si elle s'échoue, la moitié seulement si elle réussit. si les dégats de poison réduisent à 0 les point de vie de la vible, celle ci est stable mais empoisonnée pendant 1 heure, même après avoir récupéré des points de vie, et elle est paralysée tant que le poison continue de faire effet.",
        "Toile d'araignée (recharge 5-6). Attaque d'arme à distance: +5 pour toucher. portée 9/18m, une créature. touché : la cible est entravée par la toile. par une action, la cible entravée peut effectuer un test de Force DD12 et se libère en cas de réussite. L'effet prend fin également si la toile est attaquée ou détruite (CA 10; 5 points de vie ; vulnérabilité aux dégats de feu ; immunité contre les dégats contondants, de poison et psychiques).",
        " -- Pour pieger ses proies, l'araignée géante tisse des toiles élaborées ou projette des filaments de toile collants depuis son abdomen. On trouve généralement les araignées géante sous terre où elles installent leurs repaires dans les hauteurs des grottes ou dans de sombres crevasses remplies de toiles, ces antres sont souvent ornés de cocons de toile contenant leurs précédentes victimes. --"
    ]
}