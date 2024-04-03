import { useNavigate } from "react-router";
import { LecteurAudio } from "../../../components/lecteurAudio/LecteurAudio";
import { OOT_ROUTES } from "../../routes";
import { CreatureTable } from "../../../components/creatureTable/creatureTable";
import { Cockatrice } from "../../../../gameProps/dnd/creatures/Cockatrice";
import { Bandit } from "../../../../gameProps/dnd/creatures/Bandit";
import { Alert, Button, ButtonGroup } from "@mui/material";
import { DiceRoll } from "../../../components/diceRoll/DiceRoll";

export function CocoricoVillage () {
    const navigate = useNavigate();
  return (
    <div id="act">
      <div id="controls">
        <h3>redirection</h3>
        <ButtonGroup variant="text" aria-label="Basic button group" orientation="vertical">
          <Button onClick={() => navigate(OOT_ROUTES.hub)}>sortie du village</Button>
          <Button onClick={() => navigate(OOT_ROUTES.cimetiere)}>vers le cimetière</Button>
          <Button onClick={() => navigate(OOT_ROUTES.montagne)}>vers la montagne</Button>
        </ButtonGroup>
        <h3>médias</h3>
        <LecteurAudio loop={true} titre="village cocorico" source="src/assets/isekai-oot-os/music/KakarikoVillage.mp3"/>
        <LecteurAudio loop={true} titre="bataille" source="src/assets/isekai-oot-os/music/Battle.mp3"/>
        <LecteurAudio loop={true} titre="bataille" source="src/assets/isekai-oot-os/music/Battle.mp3"/>
        <h3>lancé de dé</h3>
        <DiceRoll/>
      </div>
      <div id="aventure">
        <h2>village cocorico</h2>
        <img src="src/assets/isekai-oot-os/img/KakarikoVillage.jpg" alt="plan du village" className="map"/><br/>
        <i>si l'arrivée se fait depuis le cimetiere apres le combat de boss</i><br/>
        <p> un villageois passe devant vous et vous interpèle</p>
        <p className="conversation">
          vous êtes allé prier notre gardien ? Sans ce spectre ce village ne serait pas debout à cause de toutes les attaques des créatures exterieurs et les raids des voleurs, heureusement qu'il est là...
          Il est un peu mesquin et aime bien faire peur mais jamais il ne ferais de mal à l'un d'entre nous, *commence à partir* cmerci d'être allé lui rendre hommage !!
        </p><br/>

        <i>si l'arrivée se fait après la montagne ET que le cimetiere à été fouillé, expliquer que le chemin à pris une journée tout entière allé retour</i><br/>
        <p>
          vous arrivez dans le village, à feu et à sang, plus aucun villageois ne semble present. Vous appercevez, des bandits (3) qui semble fouiller les décombres
          à la recherche de choses qu'ils auraient pu oublier.
          vous les entendez converser à propos d'une barrière magique qui s'est levé du village et que c'est une aubaine pour eux
        </p>
        <CreatureTable creature={Bandit}/>

        <i>autre arrivée</i><br/>
        <p> Vous arrivez dans un village somme toute classique, quelques habitation, un moulin... sur le chemin vous croisez une poule.</p>
        <p>
            E0n avançant vous en voyez quelques une, et une personne qui semble... dépasser par les evenements.<br/>
            Vous êtes au milieux du village, des panneaux devant vous qui pointe dans deux directions.<br/>
            Dessus vous pouvez voir "Cimetiere" sur le panneau pointant à l'ouest et montagne sur le panneau pointant à droite.<br/>
        </p>
        <h3>Phase joueur</h3>
        <Alert variant="standard" severity="warning">
          Si la moindre violence est faite au poule, combat contre 5 cockatrice
        </Alert><br/>
        <Alert variant="standard" severity="success">
          Si les poules sont rassemblées le barde apprends le chant des cockatrices et peut en invoquer une depuis n'importe où pour un coup de bec DEVASTATEUR... presque (test de charisme)
        </Alert>
        <CreatureTable creature={Cockatrice}/>
      </div>
    </div>
  );
}
