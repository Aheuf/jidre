import { CreatureDND } from "../../../models/dnd/CreatureDnd";
import { ArbaleteLegere } from "../objects/armes/ArbaleteLegere";
import { Cimeterre } from "../objects/armes/Cimeterre";

export const Bandit: CreatureDND = {
    name: "Bandit",
    desc: "Humanoîde (n'importe quelle race) de taille moyenne, n'importe quel alignement autre que Loyal",
    classeArmure: "12 (armure en cuir)",
    pv:"11 (2d8 +2)",
    vitesse: "9m",
    baseStatistique:{
        for:"11",
        dex:"12 (+1)",
        con:"12 (+1)",
        int:"10",
        sag:"10",
        cha:"10"
    },
    sens:"perception passive 10",
    langues: "une langue au choix (généralement le commun)",
    facteurPuissance: "1/8 (25px)",
    action:[
        `${ArbaleteLegere.nom}. ${ArbaleteLegere.detail}, ${ArbaleteLegere.touche} pour toucher, allonge ${ArbaleteLegere.allonge}, ${ArbaleteLegere.nbCible}, touché ${ArbaleteLegere.blesse} ${ArbaleteLegere.typeDgt}.`,
        `${Cimeterre.nom}. ${Cimeterre.detail}, ${Cimeterre.touche} pour toucher, allonge ${Cimeterre.allonge}, ${Cimeterre.nbCible}, touché ${Cimeterre.blesse} ${Cimeterre.typeDgt}.`,
        "-- Les bandits errent en gangs parfois menés par des malfrats, des vétérents ou des lanceurs de sorts. Tous les bandits ne sont pas malfaisants. L'oppression, la pénurie, la maladie ou la famine poussent souvent des gens par ailleurs honnêtes à sombrer dans le banditisme --",
        "-- Les pirates sont les bandits des hautes mers. Il peut s'agir de flibustier essentiellement intéressés par le massacre et les trésors ou de corsaires que la couronne autorise à attaquer et piller les navires de nations ennemies --"
    ]
}