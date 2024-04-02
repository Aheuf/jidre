import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Cockatrice: CreatureDND = {
    name: "Cockatrice",
    image: "src/assets/dnd/cockatrice.jpg",
    desc: "Monstruosité de petite taille, Loyal mauvais",
    classeArmure: "11",
    pv:"27 (6d6 + 6)",
    vitesse: "6m, vol 12m",
    baseStatistique:{
        for:"6 (-2)",
        dex:"12 (+1)",
        con:"12 (+1)",
        int:"2 (-4)",
        sag:"13 (+1)",
        cha:"5 (-3)"
    },
    sens:"Vision dans le noir 18m, perception passive 11",
    langues: "-",
    facteurPuissance: "1/2 (100px)",
    action:[
        "Morsure. attaque au corps à corps: +3 pour toucher, allonge 1,50m, une cible. touché 3 (1d4+1) dégats perforant et la cible doit réussir un jet de sauvegarde DD11 pour ne pas être pétrifié par magie. en cas d'échec le corps de la créature commence à se transformer en pierre et elle est entravée. Elle doit retenter le jet de sauvegarde a la fin de son prochain tour. En cas de réussite l'effet prend fin. En cas d'echec, la créature est pétrifiée pendant 24h."
    ]
}