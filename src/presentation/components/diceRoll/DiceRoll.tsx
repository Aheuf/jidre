import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export function DiceRoll () {
    const [dice,setDice] = useState<number>(0)
    const [quantite, setQuantite] = useState<number>(0)
    const [results, setResults] = useState<number[]>([])
    
    const inputStyle = {
        "border":"solid white",
        "color":"white",
        "padding":"5px",
        "widht":"30px",
        "margin-left":"5px"
    }
    
    const style = {
        "display": "flex",
        "flex-direction":"row"
    }
    
    const handleClick = () => {
        const diceSound = new Audio("src/assets/commons/soundEffect/RollingDice.mp3");
        const LaunchResult:number[] = []

        if(quantite > 0 && dice > 0){
            diceSound.play()
            for(let i = 0; i < quantite; i++ ){
                LaunchResult.push(Math.floor(Math.random() * (dice - 1) + 1))
            }
            setResults(LaunchResult)
        }
    }

    return (
        <>
            <FormControl variant="standard" style={style}>
                <Input
                    style={inputStyle} 
                    type="number" 
                    onChange={(e) => {setQuantite(e.target.value as unknown as number)}}
                />
                <p>D</p>
                <Select
                    style={inputStyle}
                    value={dice}
                    onChange={(e) => setDice(e.target.value as number)}>
                    <MenuItem value={0} disabled>faces</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
                <Button onClick={handleClick}>Lancer</Button>
            </FormControl>
            <p>{quantite}D{dice}:</p>
            {results.map(r => <i>{r}, </i>)}
        </>
    );
}
