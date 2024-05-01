import { OOT_ROUTES } from "../routes";
import { LecteurAudio } from "../../components/lecteurAudio/LecteurAudio";
import { CreatureTable } from "../../components/creatureTable/creatureTable";
import { Mimique } from "../../../gameProps/dnd/creatures/Mimique";
import { ItemTooltip } from "../../components/itemTooltip/ItemTooltip";
import { Lance } from "../../../gameProps/dnd/objects/armes/Lance";
import { Alert } from "@mui/material";
import { DiceRoll } from "../../components/diceRoll/DiceRoll";
import { RedirectButton } from "../../components/RedirectButton";

export function Lac () {
    return (
        <div id="act">
            <div id="controls">
                <h3>redirection</h3>
                <RedirectButton link={OOT_ROUTES.hub} name="Plaine d'Hyrule"/>
                <h3>médias</h3>
                <LecteurAudio loop={true} source="src/assets/isekai-oot-os/music/HyruleField.mp3" titre="hyrule field"/>
                <LecteurAudio loop={false} titre="ouverture de coffre" source="src/assets/isekai-oot-os/music/OpenTreasureBox.mp3"/>
                <LecteurAudio loop={false} titre="gros objet trouvé" source="src/assets/isekai-oot-os/music/ItemCatch.mp3"/>
                <LecteurAudio loop={false} titre="petit objet trouvé" source="src/assets/isekai-oot-os/music/SmallItemCatch.mp3"/>
                <LecteurAudio loop={true} titre="bataille" source="src/assets/isekai-oot-os/music/BossBattle.mp3"/>
                <LecteurAudio loop={true} titre="boss clear" source="src/assets/isekai-oot-os/music/BossClear.mp3"/>
                <h3>lancé de dé</h3>
                <DiceRoll/>
            </div>
            <div id="aventure">
                <h2>Lac hylia</h2>
                <img src="src/assets/isekai-oot-os/img/Lake-Hylia.jpg" alt="plan du lac" className="map"/>
                <p>
                    vous arrivez en vue d'un lac (décrire la map).
                    Il n'y a pas grand chose d'autre excepté une petite cabane et un pecheur, sur le premier ponton les pieds dans l'eau, canne à la main.
                </p>
                <i>
                    si les joueurs examine le lac [jet de perception] vois quelques gros poisson et ce qui semblerait être trois coffres de différentes tailles dans le fond du lac.
                    Si les joueurs ont la pierre d'eau ils peuvent remonter les coffres sinon ils vont devoir user de leur dexterité pour les petits coffres et dexterité + force pour le gros
                    Ils vont avoir besoin d'une canne à pèche loué pour 5 rubis
                </i>
                <p>
                    vous avez remontés [X] coffres
                </p>
                <ul>
                    <li>le petit contient 1d8 + 3 rubis</li>
                    <li>
                        le moyen contien un
                        <ItemTooltip
                            effects="propriété majeure - quand vous réussissez une attaque d'arme alors que vous êtes équipé de l'artefact, la cible subit 1d6 de plus de dgts du type de l'arme propriété mineure - vous ne pouvez être ni charmé ni effrayé tant que vous le porter"
                            item={Lance}
                            name="Boomerang magique"
                        />
                    </li>
                    <li>et le grand... vous l'entendez faire un bruit, comme un ronflement</li>
                </ul>
                <Alert variant="standard" severity="warning">
                    <ol>
                        <li>les joueurs peuvent tenter de looter le mimique sans le reveiller [test de discretion et agilité]</li>
                        <li>si les joueurs decide de fuir [test de discretion ]</li>
                    </ol>
                </Alert>
                <CreatureTable creature={Mimique}/>
                <i>
                    récupération du <ItemTooltip effects="transforme les dégats en radiant (CA +1)" name="bouclier miroir"/>
                    + 1d10 rubis
                </i>
            </div>
        </div>
    );
}
