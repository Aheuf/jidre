import { CreatureDND } from "../../../models/dnd/CreatureDnd";
import { Lance } from "../objects/armes/Lance";

export const Sahuagin: CreatureDND = {
    name: "Sahuagin",
    desc: "Humanoîde (sahuagin) de taille moyenne, Loyal mauvais",
    image: "src/assets/dnd/sahuagin.jpg",
    classeArmure: "12 (armure naturelle)",
    pv:"22 (4d8 +4)",
    vitesse: "9m, nage 12m",
    baseStatistique:{
        for:"13 (+1)",
        dex:"11",
        con:"12 (+1)",
        int:"12 (+1)",
        sag:"13 (+1)",
        cha:"9 (-1)"
    },
    competence: "Perception +5",
    sens:"vision dans le noir 36m, perception passive 15",
    langues: "Sahuagin",
    facteurPuissance: "1/2 (100px)",
    specs:[
        "Amphibie limitée. Le sahuagin peut respirer à l'air libre et sous l'eau, mais il a besoin de s'immerger au moins une fois toutes les 4 heures pour éviter de s'asphyxier",
        "Frénésie sanguinaire. Le sahuagin est avantagé lors des jets d'attaque effectués contre les créatures qui n'ont pas la totalité de leurs points de vie.",
        "Télépathie avec les requins, Grace à ce pouvoir de télépathie limitée, le sahuagin peut donner des ordres par magie à n'importe quel requin situé à 36m ou moins de lui."
    ],
    action:[
        "Attaque multiple, le sahuagin effectue deux attaques au corps à corps: une avec sa morsure et une avec ses griffes ou sa lance.",
        "Griffes. Attaque d'armes au corps à corps: +3 pour toucher, allonge 1,50m, une cible. touché 3 (1d4+1) dégats tranchants",
        `${Lance.nom}. ${Lance.detail}, ${Lance.touche} pour toucher, allonge ${Lance.allonge}, ${Lance.nbCible}, touché ${Lance.blesse} ${Lance.typeDgt}.`,
        "Morsure. Attaque d'arme au corps à corps: +3 pour toucher, allonge 1,50m, une cible. Touché 3 (1d4+1) dégats perforants."
    ]
}