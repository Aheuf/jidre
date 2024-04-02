import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const Epouventail: CreatureDND = {
    name: "Epouventail",
    image: "src/assets/dnd/scarecrow.jpg",
    desc: "Artificiel de taille moyenne, chaotique mauvais",
    classeArmure: "11",
    pv:"36 (8d8)",
    vitesse: "9m",
    baseStatistique:{
        for:"11",
        dex:"13 (+1)",
        con:"11",
        int:"10",
        sag:"10",
        cha:"13 (+1)"
    },
    vulnerable:"feu",
    resistance:"contondants perforants et tranchants issus d'armes non magique",
    immuDgt:"poison",
    immuEtat:"charmé, empoisonné, épuisé, inconscient, paralysé, terrifié",
    sens:"Vision dans le noir 18m, perception passive 10",
    langues: "comprends toutes les langues qu'il connaissait de son vivant, mais ne peut pas parler",
    facteurPuissance: "(200px)",
    specs:["Faux-semblant. Tant que l'épouventail reste immobile, il est impossible de le différencier d'un épouventail ordinaire inanimé."],
    action:[
        "Griffe. Attaque d'arme au corps à corps +3 pour toucher, allonge 1,50m, une cible, touché: 6(2d4+1) dégats tranchants. Si la cible est une créature, elle doit faire un jet de sauvegarde de Sagesse DD11. Si elle échoue, elle est effrayé jusqu'à la fin du prochain tour de l'épouvantail",
        "Regard terrifiant. L'épouvantail vise une créature située dans son champ de vision et dans un rayon de 9m. Si sa cible le voit, elle doit réussir un jet de sauvegarde de Sagesse DD11, sans quoi elle est en proie à une terreur magique jusqu'à la fin du prochain tour de l'épouventail. La cible effrayée est paralysée"
    ]
}