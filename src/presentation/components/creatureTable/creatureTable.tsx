import { CreatureDND } from '../../../models/dnd/CreatureDnd';
import './creatureTable.css';
import { ZoomableImage } from '../zoomableImage/ZoomableImage';

interface Props {
  creature: CreatureDND
  className?:string
}

export function CreatureTable ({creature, className}:Props) {
  return (
    <fieldset className={className}>
      <h4> {creature.name}</h4>
      <p className="desc">{creature.desc}</p>
      <div className="imageAndStats">
        {creature.image && <ZoomableImage source={creature.image} title={`${creature.name} image`}/>}
        <div>
          {/* table vie */}
          <table>          
            <tr>
              <th scope="row">classe d'armure</th>
              <td>{creature.classeArmure}</td>
            </tr>
            <tr>
              <th scope="row">point de vie</th>
              <td>{creature.pv}</td>
            </tr>
            <tr>
              <th scope="row">vitesse</th>
              <td>{creature.vitesse}</td>
            </tr>
          </table>

          {/* table des stats */ }   
          <table>
            <thead>
            <tr>
                <th>for</th>
                <th>dex</th>
                <th>con</th>
                <th>int</th>
                <th>sag</th>
                <th>cha</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>{creature.baseStatistique.for}</td>
                <td>{creature.baseStatistique.dex}</td>
                <td>{creature.baseStatistique.con}</td>
                <td>{creature.baseStatistique.int}</td>
                <td>{creature.baseStatistique.sag}</td>
                <td>{creature.baseStatistique.cha}</td>
              </tr>
            </tbody>
          </table>

          {/* table res */}
          <table>          
            <tr>
              <th scope="row">jet de sauvegarde</th>
              <td>{creature.save}</td>
            </tr>
            <tr>
              <th scope="row">resistance aux dégats</th>
              <td>{creature.resistance}</td>
            </tr>
            <tr>
              <th scope="row">immunité contre les dégats</th>
              <td>{creature.immuDgt}</td>
            </tr>
            <tr>
              <th scope="row">immunité contre l'état</th>
              <td>{creature.immuEtat}</td>
            </tr>
            <tr>
              <th scope="row">sens</th>
              <td>{creature.sens}</td>
            </tr>
            <tr>
              <th scope="row">langue</th>
              <td>{creature.langues}</td>
            </tr>
            <tr>
              <th scope="row">facteur de puissance</th>
              <td>{creature.facteurPuissance}</td>
            </tr>
            <tr>
              <th scope="row">competence</th>
              <td>{creature.competence}</td>
            </tr>
          </table>
        </div>
      </div>
      <ol>
        {creature.specs?.map(spec => <li>{spec}</li>)}
      </ol>
      <ol>
        {creature.action.map(act => <li>{act}</li>)}
      </ol>
      <ol>
        {creature.reaction?.map(react => <li>{react}</li>)}
      </ol>
    </fieldset>

  );
}
