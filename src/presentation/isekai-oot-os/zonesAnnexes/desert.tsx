import { OOT_ROUTES } from "../routes";
import { LecteurAudio } from "../../components/lecteurAudio/LecteurAudio";
import { CreatureTable } from "../../components/creatureTable/creatureTable";
import { Bandit } from "../../../gameProps/dnd/creatures/Bandit";
import { Alert } from "@mui/material";
import { DiceRoll } from "../../components/diceRoll/DiceRoll";
import { RedirectButton } from "../../components/RedirectButton";

export function DesertOdureg () {
    return (
    <div id="act">
        <div id="controls">
            <h3>redirection</h3>
            <RedirectButton link={OOT_ROUTES.hub} name="Plaine d'Hyrule"/>
            <h3>médias</h3>
            <LecteurAudio loop={true} titre="gerudo valley" source="src/assets/isekai-oot-os/music/GerudoValley.mp3"/>
            <LecteurAudio loop={true} source="src/assets/isekai-oot-os/music/Battle.mp3" titre="battle"/>
            <h3>lancé de dé</h3>
            <DiceRoll/>
        </div>
        <div id="aventure">
            <h2>desert Odureg</h2>
            <img src="src/assets/isekai-oot-os/img/DesertColossus.jpg" alt="map du desert" className="map"/>
            <p>
                ici la température est rude, Les montagnes entourant les plaines retiennent tous les vents chaud ici
                ce qui fait de ce desert une zone à la limite du vivable, très venteux mais d'un vent qui vous brule la peau
                vous sentez que vous n'allez pas pouvoir tenir ici très longtemps sans eau
            </p>
            <Alert variant="standard" severity="info">
                si les joueurs demande plus de détails sur ce qu'ils ont à vu
                <p>
                    vous voyez ici et là des rochers qui sortent de terre, comme les plateaux des deserts américains.
                    (suivant jet de perception) : vous croyer apercevoir dans les deformations de l'horizon dû à la chaleur
                    quelques palmiers au sud ainsi qu'une immense status plein ouest.
                </p>
            </Alert><br/>
            <Alert variant="standard" severity="info">
                si les joueurs se dirige vers l'oasis petit combat de rien du tout
                <p>
                    vous appercevez enfin de l'eau dans cet environnement qui ne veux que votre mort
                    plus vous vous rapprochez, plus vous remarquez deux silhouettes tout de rouge vétu vous faire dos
                </p>
            </Alert><br/>
            <CreatureTable creature={Bandit}/>
            <Alert variant="standard" severity="info">
                si les joueurs se dirige vers la status
                <p> cette statue ressemble de plus en plus à l'entrée d'un temple. En vous rapprochant vous distinguez une silhouette verte</p>
            </Alert><br/>
            <Alert variant="standard" severity="warning">
                Si les joueurs s'en vont
                <p>
                    le vent apporte des cris de detresse jusqu'à vos oreilles.
                    Cependant les bourasques sont tellement violente en arrivant vers vous que vous n'arrivez
                    ni à situé l'emplacement des cris, ni à savoir si ils sont réel car la chaleur peut vous jouer des tours
                </p>
            </Alert><br/>
            <Alert variant="standard" severity="success">
                si les joueurs arrivent à trouver Saria
                <p>
                    Jouer une Saria débousolé et qui ne reconnais pas les joueurs
                    si les joueurs ont une potion de lecture de pensées,
                    dire aux joueurs que Saria est complètement perdu et ne comprends pas un traitre mot de ce dont les joueurs parlent
                    Elle en sait quand même un peu plus qu'il n'en parait notamment sur l'organisation en place les failles et les sages
                    
                    En gros le roi des voleurs tente de prendre le pouvoir en organisant un putch cependant il a besoin d'un pouvoir gardé précieusement
                    dans un temple de la capitale. Les failles sont manipulé par le roi des voleurs pour appeler des créatures d'autres univers
                    Les sages ont tous été massacré dans le temple derrière elle.
            </p>
            </Alert><br/>

            <p className="conversation">
                J'ai été enlevé alors que je me rendait au chateau pour dire à la princesse de laisser mon Link tranquille.
                Je ne me rappelle pas de grand chose, ils devait être deux, peut-être trois, ils ont voulu m'enfermer dans le temple des ombres
                Mais j'ai su eviter les horreurs présentent à l'interieur et m'enfuir cependant je suis perdu, blessée et assoifée je ne pense pas aller bien loin comme ça...
                J'espère que tout se passe bien au village, ça commence à faire longtemps que je suis parti, tout le monde doit s'inquieter.
            </p>
        </div>
    </div>
    );
}
