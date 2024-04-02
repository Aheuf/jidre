import { Alert, Button } from "@mui/material";
import { OOT_ROUTES } from "../../routes";
import { DiceRoll } from "../../../components/diceRoll/DiceRoll";
import { useNavigate } from "react-router";
import { LecteurAudio } from "../../../components/lecteurAudio/LecteurAudio";
import { CreatureTable } from "../../../components/creatureTable/creatureTable";
import { ArmureAnimee } from "../../../../gameProps/dnd/creatures/ArmureAnimee";
import { Spectateur } from "../../../../gameProps/dnd/creatures/Spectateur";
import { Zombie } from "../../../../gameProps/dnd/creatures/Zombi";
import { ItemTooltip } from "../../../components/itemTooltip/ItemTooltip";

export function ChateauDEluryh () {
    const navigate = useNavigate();
    /* TODO - avant d'aller au temple */
    /* TODO - au temple */
    /* TODO - boss final */
    return (
    <div id="act">
        <div id="controls">
            <h3>Redirection</h3>
            <Button onClick={() => navigate(OOT_ROUTES.hub)}>retour au plaines</Button>
            <h3>médias</h3>
            <LecteurAudio loop={true} titre="ville" source="src/assets/isekai-oot-os/music/Town.mp3"/>
            <LecteurAudio loop={true} titre="temple" source="src/assets/isekai-oot-os/music/TempleOfTime.mp3"/>
            <LecteurAudio loop={true} titre="battaile ganondorf" source="src/assets/isekai-oot-os/music/GanondorfBattle.mp3"/>
            <LecteurAudio loop={true} titre="première victoire" source="src/assets/isekai-oot-os/music/StaffRoll.mp3"/>
            <LecteurAudio loop={true} titre="battaile finale ganondorf" source="src/assets/isekai-oot-os/music/FinalBattleAgainstGanon.mp3"/>
            <LecteurAudio loop={false} titre="game over" source="src/assets/isekai-oot-os/music/GameOver.mp3"/>
            <h3>lancé de dés</h3>
            <DiceRoll/>
        </div>
        <div id="aventure">
            <h2>La ville</h2>
            <img src="src/assets/isekai-oot-os/img/castle-town.webp" alt="plan de la ville" className="map"/><br/>
            <p>Bienvenue au chateau D'Eluryh ! C'est de cette manière qu'un panneau vous acceuille.</p>
            <p>Une fête bat son plein dans le village, des gens portent des masques de lunes. Les magasins sont exceptionnellement marqué fermé pour cette fête.</p>
            <p>Vous distinguez un grand portail menant à un chateau, mais celui-ci est fermé et gardé efficacement par plusieurs garde, devant, derrière et sur les chemins de ronde qui le surplombe.</p>
            <Alert variant="standard" severity="warning">
                Les joueurs ne peuvent pas aller au chateau
            </Alert>
            <p>Au loin une immense cathédrale surplombe le village</p>

            <h2>Temple</h2>
            <img src="src/assets/isekai-oot-os/img/templeoftime.jpg" alt="plan du temple" className="map"/><br/>
            <p>
                vous arrivez au temple, 
                une cathédrale immence avec un triangle fait de trois autre en son coeur et en face, un pied d'estale avec 3 emplacements.
                sur la base vous pouvez distinguer des gravures ressemblant au reliques. La première ressemble à la pierre du temple du village des enfants
                Les deux autres sont méconnaissable, comme si une bête avait griffé les symboles.
            </p>
            <Alert variant="standard" severity="info">
                <ol>
                    <li>Si les trois pierres sont rassemblé, 
                        l'<ItemTooltip effects="Vous bénéficiez d'un bonus de +2 aux jets d'attaque et de dégâts effectués avec cette arme, et la propriété de l'épée inflige désormais 4d6 dégâts radiants, augmentés à 6d6 contre les fées, les démons et les morts-vivants." name="épée des légendes"/> 
                        est débloquée.
                    </li>
                    <li>Si au moins les deux autres sont trouvés, déclenche le combat de boss</li>
                </ol>
            </Alert>
            <h2>Boss final</h2>
            <p className="conversation">Merci les amis !</p>
            <p>Derrière vous arrive Saria, encapuché de sa cape verte</p>
            <p className="conversation">Merci beaucoup les amis !</p>
            <p className="conversation">
                Vous comprenez, Link était mon nemesis.
                ça a mit du temps pour avoir sa confiance et approcher la première relique. cependant, il était probablement l'élu d'une prophétie.
                sa mort à été une bénédiction merci
                ça fait 50 ans que j'essaye par tous les moyens d'ouvrir cette porte.
            </p>
            <Alert variant="standard" severity="info">
                Si ouvert
                <p className="conversation">
                    maintenant j'ai un accès privilégié à un pouvoir incommensurable. Merci humains
                </p>
            </Alert><br/>
            <Alert variant="standard" severity="info">
                Si fermé
                <p className="conversation">
                    maintenant je n'ai plus qu'à completer ce qu'il vous manque. mais la pagaille que vous avez semmé va me faciliter la tache. Merci humains
                </p>
            </Alert><br/>
            <CreatureTable creature={ArmureAnimee}/>
            <p>
                le chevalier s'éffondre, des flammes bleue le consumme, le temple vrombit.
                comme si il s'appretait à enssevelir votre adversaire et condamner le pouvoir qu'il convoitait.
                vous avez le temps de sortir du temple avant que les premières pierres s'éffondrent.
            </p>
            <p> Soudainement, vous entendez tous dans votre tête : </p>
            <p className="conversation">
                vous pensez vraiment qu'au bout de 50 ans sur ce plan d'existance, je me laisserai vaincre par de simples humain ?
                mon maitre ne me le pardonnerai jamais.
            </p>
            <p className="conversation">
                Il me reste 51 ans pour détruire ce plan, et la chute du temple ne m'empechera pas d'accèder à la Quadriforce (marque déposée).
                Cependant je vais changer mes plans.
            </p>
            <Alert variant="standard" severity="info">
                Le temps s'assombris, les arbres noircisses et les feuilles pourrissent sur place. L'eau devient sang et les villageois si joyeux se transforme en effroyable zombis.
                Pour certains, la transformation n'est pas complète, sur d'autre elle prends plus de temps mais deux d'entre eux ont l'air d'avoir muté completement et se retourne doucement vers vous.
                L'ombre d'une sphère avec des tentacules vous surplombe. Vous vous retournez vers elle et voyez une sphère de chaire écailleuse volante, muni d'un seul oeil et d'une bouche immense.
                4 tentacules lui sorte là ou pourrait être ses bras, eux aussi muni d'un oeil
            </Alert><br/>
            <p className="conversation">
                Je vais détruire ce plan, comme prévu mais avec vous. Ensuite j'irais visiter le votre, et je l'offrirai en petit bonus à mon maitre.
            </p>
            <p className="conversation">
                Donnez moi ça ! *vous sentez quelque chose sortir de votre corps, vous voyez des éclats noir, bleu et rose sortir. Ce n'est pas juste d'avoir laissé des parties de portails en vous, avoir plusieurs vies c'est de la triche non ?
            </p>
            <CreatureTable creature={Spectateur}/>
            <CreatureTable creature={Zombie}/>
            <p>
                vous apprenez que le spectateur (la créature que vous venez de tuer) à été invoqué par un certain Ganondorf. Celui-ci désire conquérir les différents plans physique
                et spirituel en menant un assaut simultané.
                Personne n'avait encore connaissance de notre plan excepté les twilis, peuple vivant sur le plan spirituel du crépuscule qui on essayé de s'échapper par des portails ouvert sur votre monde. portail dans lequel vous êtes tombé.
                Le spectateur le savais et à manipulé les portails pour acceder a deux plans supplémentaire, mais le temps de mettre tout ça en place, les résultats on été plutôt... hazardeux
            </p>
        </div>
    </div>
    );
}
