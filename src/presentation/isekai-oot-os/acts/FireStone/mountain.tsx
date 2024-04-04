import { OOT_ROUTES } from "../../routes";
import { CreatureTable } from "../../../components/creatureTable/creatureTable";
import { ChauveSouris } from "../../../../gameProps/dnd/creatures/ChauveSouris";
import { ChauveSourisGeante } from "../../../../gameProps/dnd/creatures/ChauveSourisGeante";
import { LecteurAudio } from "../../../components/lecteurAudio/LecteurAudio";
import { Rhinoceros } from "../../../../gameProps/dnd/creatures/Rhinoceros";
import { DiceRoll } from "../../../components/diceRoll/DiceRoll";
import { RedirectButton } from "../../../components/RedirectButton";

export function Mountain () {
    return (
        <div id="act">
            <div id="controls">
                <h3>Redirection</h3>
                <RedirectButton link={OOT_ROUTES.cocorico} name="Village Cocorico"/>
                <h3>médias</h3>
                <LecteurAudio loop={true} titre="bataille" source="src/assets/isekai-oot-os/music/Battle.mp3"/>
                <LecteurAudio loop={true} titre="boss fight" source="src/assets/isekai-oot-os/music/GoronCity.mp3"/>
                <LecteurAudio loop={true} titre="boss fight" source="src/assets/isekai-oot-os/music/BossBattle.mp3"/>
                <LecteurAudio loop={true} titre="boss clear" source="src/assets/isekai-oot-os/music/BossClear.mp3"/>
                <h3>lancé de dés</h3>
                <DiceRoll/>
            </div>
            <div id="aventure">
                <h2>la montagne norog</h2>
                <p>vous arrivez a la moitié du chemin et vous voyez une grotte un peu loin</p>
                <CreatureTable creature={ChauveSouris}/>
                <CreatureTable creature={ChauveSourisGeante}/>
                <i> si il n'y a pas eu de combat lors de l'act 1, prévoir un long couloir sombre avec 5 chauve-souris et une chauve-souris géante</i>
                <p>
                    vous vous avancez et vous arrivez dans un village troglodite,
                    habité par ce qui semblerait être des golèmes de pierre [décrire village et emplacement de joueur]
                    sur une plateforme centrale se trouve un humain qui possède un bijoux fait de pierre rouge.
                    de nombreux golems sont rassemblées en contre bas et semble prier tous tourner vers la plateforme centrale
                </p>

                <p className="conversation">
                    toi tu vis, toi... tu vis... toi.... tu meurs [boule de feu] toi tu vis... toi... [boule de feu] toi.... <br/>
                    Oh ?! hello les amis ! j'm'appelle Paul, mais ici tout le monde me surnomme Darunia!! 
                    venez, venez vous inquiétez pas vous risquez rien ils sont con comme des manches de pelles,<br/>
                    ils me prennent pour un dieu depuis que j'ai volé leur relique.<br/>
                </p>

                <p className="conversation">
                    Vous... n'avez aucune idée de ce que peux être ces pierres ? elles sont très puissante, vous en avez ?
                </p>
                <i>
                    La réaction dépends des pierres possedés. si que verte, il vous apprends que c'est une pierre de sort de soin,<br/>
                    Si graine, apprends que c'est une arnaque de la part de Saria<br/>
                    si verte et bleu, perds un peu son calme par peur du pouvoir bleu<br/>
                    refuse de passer la pierre et se transforme en BOSS pour combattre<br/>
                </i>
                <p className="conversation">
                    Vous êtes comme ce Link à vouloir toute la puissance pour vous ! "oui gna gna gna, j'dois ramener les pierres au chateau gna gna gna, les tenebres tout ça tout ça"... 
                    mourrez maintenant
                </p>
                <i>
                    Darunia se plante le bijoux au niveau du torse et une transformation s'opère.
                    ça à l'air douloureux, des cornes lui pousse sur la tête des plaques grise et rouge sur la peau.
                    Vous avez maintenant à faire a un espèce de Rhinoceros un peu écailleux comme un immense lezar avec des naissances de cornes.
                    Vous remarquez 3 boules de feu qui virevolte autour de sa tête [jet de perception] ainsi que le bijoux, incrusté comme une écaille juste sous la tête
                </i>
                <CreatureTable creature={Rhinoceros}/>

                <i> remporte la pierre + 1d20 rubis<br/></i>
            </div>
            
        </div>
    );
}
