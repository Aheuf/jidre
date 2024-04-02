import { Modal } from "@mui/material";
import { useState } from "react";

export interface Props {
    source:string;
    title:string;
}

const style = {
    "width":"auto",
    "height":"20rem"
}

export function ZoomableImage ({source, title}: Props) {
    const [zoomed, setZoomed] = useState(false);
    return (
        <>
            <img src={source} alt={title} style={style} onClick={() => setZoomed(true)}/>
            <Modal
                open={zoomed}
                onClose={() => setZoomed(false)}>
                <img src={source} alt={title} className='modal' style={{height:"100%", width:"auto"}}/>
            </Modal>
        </>
    );
}
