import { Avatar, Button} from '@mui/material';

export interface Props {
    type: string;
    desc?:string;
    handleClick: () => void;
}

export function BadgeDeTest ({type, desc, handleClick}: Props) {
  return (
    <Button id="badgeDeTest" onClick={handleClick} color="secondary" variant="outlined">
      <Avatar src="src/assets/commons/diceLogo.jpg" alt="dice logo"/>
        <div style={{margin:"3px"}}>
          <h4 style={{margin:"0"}}>{type}</h4>
          <p style={{margin:"0"}}>{desc}</p>
        </div>
    </Button>
  );
}
