import { CreatureDND } from "../../../models/dnd/CreatureDnd";

export const BeteEclipsante: CreatureDND = {
    name: "Bete éclipsante",
    image: "src/assets/dnd/displacer-beast.jpg",
    desc: "Monstruosité de grande taille, Loyal mauvais",
    classeArmure: "13 (armure naturelle)",
    pv:"85 (10d10 + 30)",
    vitesse: "12m",
    baseStatistique:{
        for:"18 (+4)",
        dex:"15 (+2)",
        con:"16 (+3)",
        int:"6 (-2)",
        sag:"12 (+1)",
        cha:"8 (-1)"
    },
    sens:"Vision dans le noir 18m, perception passive 11",
    langues: "-",
    facteurPuissance: "3 (700px)",
    specs:[
        "Décalage. La bête éclipsante projette une illusion magique d'elle même située à côté de sa position actuelle. Les jets d'attaque effectués contre elle sont désavantagés. Si la bête éclipsante est la clible d'une attaque réussie, ce trait est également supprimé si la bête eclipsante est neutralisée ou si sa vitesse est réduite à 0.",
        "Evitement. Si la bête eclipsante est la cible d'un effet qui l'autorise à effectuer un jet de sauvegarde pour subir la moitié des dégats seulement, au lieu de cela, elle ne subit aucun dégâts si elle réussit le jet de sauvegarde et ka moitié des dégâts seulement si elle le rate."
    ],
    action:[
        "Attaque multiple. La bête éclipsante effectue deux attaques avec ses tentacules.",
        "Tentacules. Attaque d'arme au corps à corps +6 pour toucher, allonge 3m, une cible, touché 7 (1d6 +4) dégats contondants + 3 (1d6) dégats perforants. "
    ]
}