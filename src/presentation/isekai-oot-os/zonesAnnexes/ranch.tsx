import { Alert } from "@mui/material";
import { DiceRoll } from "../../components/diceRoll/DiceRoll";
import { OOT_ROUTES } from "../routes";
import { LecteurAudio } from "../../components/lecteurAudio/LecteurAudio";
import { RedirectButton } from "../../components/RedirectButton";

export function Ranch () {
  return (
    <div id="act">
        <div id="controls">
          <h3>Redirection</h3>
          <RedirectButton link={OOT_ROUTES.hub} name="Plaine d'Hyrule"/>
          <h3>médias</h3>
          <LecteurAudio loop={true} source="src/assets/isekai-oot-os/music/LonLonRanch.mp3" titre="ranch lonlon"/>
          <LecteurAudio loop={true} source="src/assets/isekai-oot-os/music/MiniGame.mp3" titre="mini jeu"/>
          <h3>lancé de dés</h3>
          <DiceRoll/>
      </div>
      <div id="aventure">
        <h2>ranch lon lon</h2>
        <img src="src/assets/isekai-oot-os/img/lonlon.jpg" alt="map du ranch" className="map"/>
        <p className="conversation">
          holà voyageurs ! z'etes perdu ?
          Non j'dis ça parce que y'a rien a voir ici à par des vaches des poneys et quelques poules.
          Mais peut-être seriez-vous interessé par un bras de fer en 3 manche contre le vieux Malon ? (c'est moi)
        </p>
        <Alert variant="standard" severity="success">
          <ol>
            <li>potion d'antimagie</li>
            <li>potion de lecture dans les pensées</li>
            <li>potion d'agrandissement</li>
          </ol>
        </Alert>
      </div>
    </div>
  );
}
