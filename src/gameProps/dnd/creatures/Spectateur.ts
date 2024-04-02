import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Spectateur: CreatureDND = {
    name: "Spectateur",
    image:"src/assets/dnd/spectator.jpg",
    desc: "Aberration de taille Moyenne, Loyal neutre",
    classeArmure: "14 (armure naturelle)",
    pv:"39 (6d8 + 12)",
    vitesse: "0m, vol 9m (vol stationnaire)",
    baseStatistique:{
        for:"8 (-1)",
        dex:"14 (+2)",
        con:"14 (+2)",
        int:"13 (+1)",
        sag:"14 (+2)",
        cha:"11"
    },
    competence:"Perception +6",
    immuEtat:"a terre",
    sens:"vision dans le noir 36m, perception passive 16",
    langues: "commun des profondeurs, profond, télépathie 36m",
    facteurPuissance: "3 (700 px)",
    action:[
        "morsure. attaque d'arme au corps à corps: +1 pour toucher allonge 1,50m, une cible. touché 2 (1d6 -1) dégats perforants.",
        "rayon oculaire. Le spectateur tire jusqu'à des deux rayons oculaires magiques suivants, sur une ou deux créatures situées à 27m ou moins de lui dans son champs de vision. Il ne peut utiliser chaque rayon qu'une seule fois par tour",
        "1. Rayon de confusion. La cible doit effectuer un jet de sauvegarde de Sagesse DD13. En cas d'echec, elle ne peut plus effectuer de réactions jusqu'à la fin de son prochain tour. A son tour, elle ne peut pas se déplacer et elle utilise son action pour effectuer une attaque au corps à corps ou à distance contre une créature déterminée aléatoirement et à portée. Si la cible ne peut pas attaquer, elle ne fait rien pendant son tour",
        "2. Rayon de paralysie. La créature visée doit réussir un jet de sauvegarde de constitution DD 13 pour ne pas être paralysée pendant 1 minute. La cible peut retenter le jet de sauvegarde à la fin de chacun de ses tours et met fin à l'effet dont elle est victime en cas de réussite.",
        "3. Rayon de terreur. La créature ciblée doit réussir un jet de sauvegarde de sagesse DD 13 pour ne pas être effrayé pendant 1 minute.  La cible peut retenter le jet de sauvegarde à la fin de chacun de ses tours (elle est désaventagée lors de ce jet si le spectateur est dans son champ de vision) et met fin à l'effet dont elle est victime en cas de réussite.",
        "4. Rayon de blessure. La cible doit effectuer un jet de sauvegarde de Constitution DD 13. Si elle échoue, elle subit 16 (3d10) dégats nécrotiques, sinon, la moitié seulement.",
        "Création de nourriture et d'eau. le spectateur crée par magie suffisamment de nourriture et d'eau pour se sustenter pendant 24h"
    ],
    reaction:[
        "renvoi de sort. Si le spectateur réussit un jet de sauvegarde contre un sort ou si une attaque de sort le rate, il peut désigner une autre créature (y compris le lanceur du sort) située à 9m ou moins de lui et dans son champ de vision. Le sort prend pour cible la créature désignée au lieu du spéctateur. Si le sort était une attaque, il faut refaire le jet d'attaque contre la créature désignée."
    ]
}