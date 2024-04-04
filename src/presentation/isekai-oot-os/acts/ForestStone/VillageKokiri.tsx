
import { LecteurAudio } from '../../../components/lecteurAudio/LecteurAudio';
import { ItemTooltip } from '../../../components/itemTooltip/ItemTooltip';
import { Cimeterre } from '../../../../gameProps/dnd/objects/armes/Cimeterre';
import { ArcCourt } from '../../../../gameProps/dnd/objects/armes/ArcCourt';
import { Gobelin } from '../../../../gameProps/dnd/creatures/Gobelin';
import { CreatureTable } from '../../../components/creatureTable/creatureTable';
import { Squelette } from '../../../../gameProps/dnd/creatures/Squelette';
import { OOT_ROUTES } from '../../routes';
import { Araignee } from '../../../../gameProps/dnd/creatures/Araignee';
import { AraigneeGeante } from '../../../../gameProps/dnd/creatures/AraigneeGeante';
import { Alert, Modal } from '@mui/material';
import { BadgeDeTest } from '../../../components/testBadge/BadgeDeTest';
import { useState } from 'react';
import { DiceRoll } from '../../../components/diceRoll/DiceRoll';
import { RedirectButton } from '../../../components/RedirectButton';

export function VillageKokiri () {
    const [openGobelins, setOpenGobelins] = useState(false);
    const [reliqueVolee, setReliqueVolee] = useState(false);
  return (
    <div id="act">
        <div id="controls">
            <h3>redirection</h3>
            <RedirectButton link={OOT_ROUTES.hub} name="Plaine d'Hyrule"/>
            <h3>médias</h3>
            <LecteurAudio loop={false} titre="cri de link" source="src/assets/isekai-oot-os/music/LINKSSCREAM.mp3"/>
            <LecteurAudio loop={true} titre="maison de link" source="src/assets/isekai-oot-os/music/InsideaHouse.mp3"/>
            <LecteurAudio loop={false} titre="ouverture de coffre" source="src/assets/isekai-oot-os/music/OpenTreasureBox.mp3"/>
            <LecteurAudio loop={false} titre="gros objet trouvé" source="src/assets/isekai-oot-os/music/ItemCatch.mp3"/>
            <LecteurAudio loop={false} titre="petit objet trouvé" source="src/assets/isekai-oot-os/music/SmallItemCatch.mp3"/>
            <LecteurAudio loop={true} titre="village kokiri" source="src/assets/isekai-oot-os/music/KokiriForest.mp3"/>
            <LecteurAudio loop={true} titre="boss bataille" source="src/assets/isekai-oot-os/music/BossBattle.mp3"/>
            <LecteurAudio loop={true} titre="boss clear" source="src/assets/isekai-oot-os/music/BossClear.mp3"/>
            <LecteurAudio loop={true} titre="bataille" source="src/assets/isekai-oot-os/music/Battle.mp3"/>
            <h3>lancé de dés</h3>
            <DiceRoll/>
        </div>
        <div id="aventure">
            <h2>La brèche</h2>
            <p>
                Vous êtes à la brèche allant tous au chamois lorsqu'une brèche s'ouvre à la brèche.
                La chute est longue est vous tomber sur le sol d'une maison sauf <span className="playerAction">[meilleur jet] </span>
                qui tombe sur un lit.
            </p>
            <p>
                Enfin, sur un enfant sur un lit ce qui à pour effet de le tuer sur le coup
            </p>
            <h3>Phase joueur</h3>
            <ol>
                <li>
                    une jarre (contient) un cristal vert <i>un rubi</i>
                </li>
                <li>
                    un coffre contenant :
                </li>
            <ol>
                <li><ItemTooltip item={Cimeterre} effects="juste une épée en bois" /></li>
                <li><ItemTooltip item={ArcCourt} effects="un lance pierre qui charge les projectiles de lumières" /></li>
                <li><ItemTooltip name={"flute"} effects="peut charmer une bête" /></li>
                <li><ItemTooltip name={"pavois"} effects="égage enormement de chaleur devant" /></li>
                <li><ItemTooltip name={"cape verte"} effects="donne la taille d'un enfant (90cm)" /></li>
            </ol>
            </ol>
            <h2>Première rencontre</h2>
            <img src="src/assets/isekai-oot-os/img/kokiriVillage.png" alt="village kokiri" className='map'/><br/>
            <Alert variant="standard" severity="info">
                commence quand les joueurs sortent de la maison decrire le village et la maison suspendue
            </Alert>
            <p> Vous sortez donc de la maison et voyez des enfants "jouer" ? </p>
            <p> Un enfant vous repère et vient vers vous <i>Mido</i>, il vous regarde d'en bas de la maison perchée </p>

            <h3> Phase joueur</h3>
            <p className="conversation"> Qui êtes vous ? où est ce fénéant de Link ?</p> 
            <Alert variant="standard" severity="info">
                si les joueurs sont pacifique ET parle de la brèche
                <p className="conversation"> 
                    Saria notre sage est au temple, elle connait ce phénomène.
                    *pointe la cime dla plus haute* le temple est là bas, dans l'arbre le plus grand de la fôret.
                    Peut être qu'elle pourras vous aider
                </p>
            </Alert><br/>

            <Alert variant="standard" severity="info">
                si mentionne la mort de link
                <p className="conversation">
                    *se rapproche et chuchotte* merci. A part Saria personne ne l'apprecie ici.
                    Il a même voulu voler notre relique sous pretexte qu'un grand mal menace nos contrées...
                    Bon.. En parlant de Saria, c'est notre sage. elle se trouve surement au temple à prier. C'est la plus callé sur les phénomènes chelou après Link.
                    Mais bon lui c'est parce qu'il EST chelou donc bon. *se barre*
                </p>
            </Alert><br/>

            <Alert variant="standard" severity="warning">
                l'accès aux bois perdu passent par un immense tronc malheureusement il est bouché par un immense rocher en scénarium gravé "le MJ n'as pas prévu ça"<br/>
                Si quelqu'un essaye de passer par le petit tunnel trouve un coffre vide. En se retournant, un espèce d'épouvantail brise la nuque du joueur et pars *rire d'enfant*
            </Alert>

            <h2>Le temple MOJO</h2>
            <p> vous arrivez au temple, Saria est présente. C'est une enfant du village portant une cape verte. </p>
            <p className="conversation">
                Elle n'en sait pas plus que vous sur la brêche.
                Elle est aussi de Niort, elle est arrivé quand Link n'étais pas là et a pu mettre une cape avant de se faire reperer.

                Link sait de quoi il sagit, il pourrait vous aider, il n'est pas vraiment du village non plus mais plus de la grande ville au nord de ces contrées
                <br/>
                <Alert variant="standard" severity="info">
                    si mentionne link mort, s'offusque à peine
                    <p className="conversation">
                        Link est un gros dégueulasse qui ne pense qu'à retourner en ville pour pécho une bimbo refaite de partout,
                        j'me rapelle même pas de son nom mais il a une interdiction d'approcher donc bon.
                    </p>
                </Alert><br/>
                C'est lui qui m'as nommé "Sage" comme tous ceux qui ont passé la brèche. Tenez, regardez, j'ai pris le temps de dessiner cette carte de la région avec les différents sages répertoriés
                C'est à croire que le MJ n'avait que ça à foutre.

                Il m'a parlé d'une relique dans le temple, c'est pour ça que je suis là, réuni avec les autres reliques, elle permettrais de controller les brèches mais la voler a des conséquences il parait.
                Et Link en a besoin pour un truc à la capitale... sauver le monde ou j'sais pas quoi. Au pire vous la prenez, elle est les autres et quand vous avez fini vous lui ramenez ?

                Siiiiinooooon...... en récupérant une graine de cet arbre * pointe le haut du temple * il est possible d'en fabriquer une, je ne sais pas comment mais c'est possible. Par contre c'est un blasphème.
                ça risque de grandement de foutre la merde au village
            </p>
            <Alert variant="standard" severity="info" onClick={() => {setReliqueVolee(true)}}>
                si la relique est volée
                <p>
                    vous rentrez dans le temple, [jet de perception pour voir l'araignée avant qu'elle tombe du plafond]
                    une araignée géante tombe du plafond ainsi que deux oeufs car elle était en train de les fixer au plafond avec une multitude d'autre.
                </p>
            </Alert>
            <div hidden={!reliqueVolee}>
                <CreatureTable creature={Araignee}/>
                <CreatureTable creature={AraigneeGeante}/>
                <i> loot 1d8 rubis</i>

                <p className="description"> 
                    Le temps s'assombris, les arbres noircisses et les feuilles pourrissent sur place.
                    (Saria n'est plus là)
                </p>
                <p> 
                    Vous arrivez au village mais les enfants sont tous mort.
                    vous avancez mais les enfants se relèvent
                </p>
                <CreatureTable creature={Squelette}/>
            </div>
            <div hidden={reliqueVolee}>
                <BadgeDeTest type='dext' desc='si les graines sont volées' handleClick={() => setOpenGobelins(true)}/>
                <Modal
                    open={openGobelins}
                    onClose={() => setOpenGobelins(false)}>
                    <CreatureTable creature={Gobelin} className='modal'/>
                </Modal>
            </div>
        </div>
    </div>
  );
}
