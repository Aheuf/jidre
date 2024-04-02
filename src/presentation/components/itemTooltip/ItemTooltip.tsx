import * as React from 'react';
import { ArmeDND } from '../../../models/dnd/ArmeDnd';

export interface IItemTooltipProps {
  name?: string;
  item?: ArmeDND;
  effects: string;
}

export function ItemTooltip (props: IItemTooltipProps) {
  const [show, setShow] = React.useState(true)
  return (
    <div style={{color:"white"}}>
      <a onClick={() => setShow(!show)}>{props.item?.nom || props.name}</a>
      <div hidden={show} style={{"background":"#264a30", padding: "5px", position:"absolute"}}>
      <p style={{margin:"0 0 5px 0"}}>{props.effects}</p>
      {/** si l'objet est une arme */}
      { props.item?.touche &&
        <>
          <tr>
            <th>detail</th>
            <th>touche</th>
            <th>allonge</th>
            <th>nbCible</th>
            <th>blesse</th>
            <th>typeDgt</th>
          </tr><tr>
              <td>{props.item.detail}</td>
              <td>{props.item.touche}</td>
              <td>{props.item.allonge}</td>
              <td>{props.item.nbCible}</td>
              <td>{props.item.blesse}</td>
              <td>{props.item.typeDgt}</td>
          </tr>
        </>
      }
      </div>
    </div>
  );
}