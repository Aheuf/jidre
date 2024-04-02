import { useNavigate } from "react-router";
import { OOT_ROUTES } from "../../routes";
import { LecteurAudio } from "../../../components/lecteurAudio/LecteurAudio";
import { CreatureTable } from "../../../components/creatureTable/creatureTable";
import { Sahuagin } from "../../../../gameProps/dnd/creatures/Sahuagin";
import { ItemTooltip } from "../../../components/itemTooltip/ItemTooltip";
import { Lance } from "../../../../gameProps/dnd/objects/armes/Lance";
import { ZoomableImage } from "../../../components/zoomableImage/ZoomableImage";
import { Button } from "@mui/material";
import { DiceRoll } from "../../../components/diceRoll/DiceRoll";

export function ZoraDomain () {
    const navigate = useNavigate();
    return (
        <div id="act">
            <div id="controls">
                <h3>redirection</h3>
                <Button onClick={() => navigate(OOT_ROUTES.hub)}> retour vers les plaines</Button>
                <h3>médias</h3>
                <LecteurAudio loop={true} titre="domaine zora" source="src/assets/isekai-oot-os/music/ZorasDomain.mp3"/>
                <LecteurAudio loop={true} titre="boss fight" source="src/assets/isekai-oot-os/music/BossBattle.mp3"/>
                <LecteurAudio loop={true} titre="boss clear" source="src/assets/isekai-oot-os/music/BossClear.mp3"/>
                <h3>lancé de dé</h3>
                <DiceRoll/>
            </div>
            <div id="aventure">
                <p>
                    vous arrivez devant un grand mur de glace mais celà ne semble pas si épais, que faite vous ?
                </p>
                <h2>Domaine zora</h2>
                <ZoomableImage source="src/assets/dnd/merfolk.jpg" title="thalasséen"/>
                <p>
                    Vous entrez dans un royaume de glace et de marbre blanc, le temps semble comme figé dans la glace comme le décor d'ailleurs.
                    Il y a quelques colonade quelques batîments avec une architecture qui vous fait penser à des temples grecque. Et au centre de la ville, un étang gelé.
                    Il y a quelques cadavre ci et là d'homme poisson, une bataille à fait rage ça se voit mais pour quelle raison ?
                    Enfouie peu profondément sous la glace de cet étang vous voyez une lueur bleuté, comme des pierres, mais vous remarquez aussi que cette pierre est dans les bras d'un enfant... poisson ?
                    Lui même entouré par trois hommes poissons. Vous distinguez que l'enfant est en danger, le style des créatures diffère enormement de celui de l'enfant. Les assaillants ressemble plus a des créatures des profondeurs quand à l'enfant, lui à plus des traits de Thalasséens,
                    ces créatures mi humaine mi poisson peuplant l'atlantide dans nos légendes.
                </p>
                <CreatureTable creature={Sahuagin}/>

                <i>une des <ItemTooltip name="lance" item={Lance} effects=""/>  est disponible au loot</i><br/>
                <p>
                    Je m'appeler Ruto. Il y a eu une attaque de créatures jusque là inconnue, qui arrivait à se mouvoir aussi bien dans l'eau que son peuple, ils ont tous été soit massacré soit enlevé.
                    Il y a une guerre contre un autre peuple aquatique, des merrows, (des thalasséens transformé par les profondeurs et un culte malsain a une idole de démogorgon) depuis des siecles.
                    Je les soupsonne d'avoir creer ses créatures afin de mener ce raid pour la relique.
                    Pour proteger la relique elle en as utilisé le pouvoir ce qui à mis leur cité en état de stase sous le gel.
                    Beaucoup de gens convoite les reliques, certains prétendent sauver le monde, d'autre veulent juste le pouvoir qu'elles représentent individuellement et d'autres encore savent ce qu'il est possible de faire si on les regroupes avec de mauvaises intentions...
                </p>
                <ZoomableImage source="src/assets/dnd/merrow.jpg" title="merrow"/>
                <p>
                    Je dois aller au chateau prévenir la famille royale que quelque chose se trame...
                    Tenez, prenez là relique, elle sera plus en sécurité avec vous aventuriers, je pense que mes moindres mouvement vers le chateau seront surveillé.
                    Si j'arrive jusque là-bas vivante.
                </p>
            </div>
        </div>
  );
}
