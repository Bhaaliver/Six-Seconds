import { useLocalStorage } from "usehooks-ts";
import { characterName, AC, maxHP, stats } from "../fakeData"
import { StatDisplay } from "./StatDisplay";
import socketContext from "../context/Socket/context"
import { useContext } from "react";

export function Header(){
    const [currentHP, setCurrentHP] = useLocalStorage("currentHP", maxHP)
    const { uid } = useContext(socketContext).SocketState;

    return (
        <>
            <strong>{uid}</strong>
            <h1>{characterName}</h1>
            <h2>AC {AC}</h2>
            <h2 onClick={()=>setCurrentHP(maxHP)}>Max HP {maxHP}</h2>
            <h2 onClick={()=>{if(currentHP > 0)setCurrentHP(currentHP - 1)}}>current HP {currentHP}</h2>
            
            <div className="statContainer">{stats.map((stat, index)=><StatDisplay id={index} value={stat} key={index}/>)}</div>
        </>
    )
}
