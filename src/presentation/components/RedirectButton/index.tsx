import { useNavigate } from "react-router";
import { RedirectButtonView } from "./RedirectButtonView";

export interface Props {
    name:string;
    link:string;
}

export function RedirectButton ({name, link}: Props) {
    const navigate = useNavigate();
    return (<RedirectButtonView link={link} name={name} navigate={navigate}/>);
}
