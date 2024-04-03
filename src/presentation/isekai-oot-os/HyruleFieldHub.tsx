import { useNavigate } from 'react-router';
import { LecteurAudio } from '../components/lecteurAudio/LecteurAudio';
import { OOT_ROUTES } from './routes';
import { CreatureTable } from '../components/creatureTable/creatureTable';
import { Merrow } from '../../gameProps/dnd/creatures/Merrow';
import { Alert, Button, ButtonGroup, Modal } from '@mui/material';
import { useState } from 'react';
import { BadgeDeTest } from '../components/testBadge/BadgeDeTest';
import { DiceRoll } from '../components/diceRoll/DiceRoll';
import { RedirectButton } from '../components/RedirectButton';

export function HyruleField () {
  const navigate = useNavigate();
  const [openMerrowModal, setOpenMerrowModal] = useState(false);
  return (
    <div id="act">
      <div id="controls">
        <h3>redirection</h3>
        <RedirectButton link={`../${OOT_ROUTES.intro}`} name="village kokiri"/>
        {/* <RedirectButton link={`../${OOT_ROUTES.intro}`} name="village cocorico"/>
        <RedirectButton link={`../${OOT_ROUTES.intro}`} name="domaine zora"/> */}
        <ButtonGroup variant="text" aria-label="Basic button group" orientation="vertical">
          <Button onClick={() => navigate(`../${OOT_ROUTES.intro}`)}>retour au village kokiri</Button>
          <Button onClick={() => navigate(OOT_ROUTES.cocorico)}>village cocorico</Button>
          <Button onClick={() => navigate(OOT_ROUTES.domaineZora)}>domaine aroz</Button>
          <Button onClick={() => navigate(OOT_ROUTES.ranch)}>ranch nol nol</Button>
          <Button onClick={() => navigate(OOT_ROUTES.lac)}>lac ailyh</Button>
          <Button onClick={() => navigate(OOT_ROUTES.desert)}>desert</Button>
          <Button onClick={() => navigate(OOT_ROUTES.chateau)}>chateau d'Eluryh</Button>
        </ButtonGroup>
        <h3>médias</h3>
        <LecteurAudio loop={true} source="src/assets/isekai-oot-os/music/Hibou.mp3" titre="chanson du hibou"/>
        <LecteurAudio loop={true} source="src/assets/isekai-oot-os/music/HyruleField.mp3" titre="hyrule field"/>
        <LecteurAudio loop={true} source="src/assets/isekai-oot-os/music/Battle.mp3" titre="battle"/>
        <h3>lancé de dés</h3>
        <DiceRoll/>
      </div>

      <div id="aventure">
        <h2>Sortie du village kokiri</h2>
        <p>vous sortez donc du village et rencontrer un vieux hibou sur le panneau qui se trouve à la sortie</p>
        <i className="conversation">AAAAHH des aventuriers !!! ça faisait longtemps que cette situation n'étais pas arrivée !</i><br/>
        <br/>
        <i className="conversation">
          mais Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation.<br/>
          Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.<br/>
          Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi.<br/>
          Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée...<br/>
          
          Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite,<br/>
          le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer.<br/>
          Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie,<br/>
          je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour !<br/>
          Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? »,<br/>
          je leur réponds très simplement que c’est ce goût de l’amour,<br/>
          ce goût donc qui m’a poussé aujourd’hui à entreprendre une carrière de hibou mentor...<br/>
          mais demain qui sait ?<br/>
          Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi.<br/>
        </i><br/>
        <i className="conversation">
          Mais bienvenue dans le royaume d'Hyr... d'Eluryh.. les droits d'auteurs ça côute cher et ça pourrait me mettre dans une mauvaise situation..<br/>
          quoi que [reboucler sur le monologue]
        </i>

        <h2>Les plaines d'Eluryh</h2>
        <img src="src/assets/isekai-oot-os/img/hyruleMap.jpg" 
          alt="hyrule map" className="map"
        /><br/>
        <Alert variant="standard" severity="info">
            si les joueurs decident d'accompagner Ruto jusqu'au chateau (suivre la rivière) décrire un chemin sans encombre 
            <BadgeDeTest type='perception' desc='voir le merrow blessé qui tente de se cacher des heros' handleClick={() => setOpenMerrowModal(true)}/>
        </Alert>
        <Modal
          open={openMerrowModal}
          onClose={() => setOpenMerrowModal(false)}>
          <CreatureTable creature={Merrow} className='modal'/>
        </Modal>
      </div>
    </div>
  );
}
