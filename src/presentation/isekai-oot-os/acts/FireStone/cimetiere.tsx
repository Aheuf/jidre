import { LecteurAudio } from "../../../components/lecteurAudio/LecteurAudio";
import { OOT_ROUTES } from "../../routes";
import { ItemTooltip } from "../../../components/itemTooltip/ItemTooltip";
import { CreatureTable } from "../../../components/creatureTable/creatureTable";
import { Squelette } from "../../../../gameProps/dnd/creatures/Squelette";
import { Spectre } from "../../../../gameProps/dnd/creatures/Spectre";
import { Alert } from "@mui/material";
import { DiceRoll } from "../../../components/diceRoll/DiceRoll";
import { RedirectButton } from "../../../components/RedirectButton";

export function Cimetiere () {
  return (
    <div id="act">
      <div id="controls">
        <h3>redirection</h3>
        <RedirectButton link={OOT_ROUTES.cocorico} name="Village Cocorico"/>
        <h3>médias</h3>
        <LecteurAudio loop={true} titre="boss fight" source="src/assets/isekai-oot-os/music/BossBattle.mp3"/>
        <LecteurAudio loop={true} titre="boss clear" source="src/assets/isekai-oot-os/music/BossClear.mp3"/>
        <h3>lancé de dé</h3>
        <DiceRoll/>
      </div>
      <div id="aventure">
        <h2>Le cimetierre</h2>
        <img src="src/assets/isekai-oot-os/img/Graveyard.jpg" alt="plan du cimetiere" className="map"/><br/>
        <p>
          vous arrivez au niveau du cimetiere et il n'y a pas grand chose à voir,
          hormis une dizaine de tombe et au fond une grande stelle qui semblerait aussi être une sepulture,
          seulement elle à l'air plus importante que les autres aux yeux des villageois. 
          Peut être un monument au mort ou autre chose. 
          (si les joueurs veulent la lire, il y a écrit "Depuis que la lune à pleuré l'ame du village repose en paix et nous protège des ténebres depuis l'autre monde")
        </p>
        <Alert variant="standard" severity="warning">
          <p>Si les petites tombes sont creusé rien n'est trouvé à part quelques bijoux et rubis (1d8)</p>
          <p>Si la grande sepulture est creusée, une larme de lune est trouvé et un combat de boss se lance,</p>
          <p>Si les petites tombes ont été creusées aussi, un squelette se leve pour chaque pair de tombes [max 2]</p>
        </Alert>

        <CreatureTable creature={Squelette}/>
        <CreatureTable creature={Spectre}/>
        <p>
          Pendant que vous être concentré sur la fouille de la sépulture, la luminosité baisse le ciel se couvre au dessus de vous, prenant des teintes rouges menaçante. De la lumière bleuté commence à vous entourer.
          Le sol se met à trembler vous faisant naturellement reculer d'une 10ène de mètre naturellement. vous êtes globalement, dans la merde.
          vous avez reveillé un spectre
        </p>
        <p>
          bien entendu, votre cupidité vous a poussé à fouiller des tombes, vous avez reveillé [X] squelette
        </p>
        <p>
          [lancez d'intelligence]. vous remarquez que la lueur de leurs yeux brille de la même radiance que la pierre de lune.
        </p>
        <p>
          Le ciel reprends des couleurs normales, les créatures semble prendre feu, d'un feu bleu pâle, quelques feu folet se rue vers la pierre de lune et semble
          y penetrer.
          Dans les cendres des guenilles du spectre vous arrivez à distinguer <ItemTooltip name="gantelet" effects="+2 aux jets de force, permet de soulever des rochers"/>
        </p>
      </div>
    </div>
  );
}
