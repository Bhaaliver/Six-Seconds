import { useLocalStorage } from "usehooks-ts";

export function Header(props:{characterName: string, AC: number, HP: number}){
    const {characterName, AC, HP} = props
    const [currentHP, setCurrentHP] = useLocalStorage("currentHP", HP)
    return <><h1>{characterName}</h1><h2>AC {AC} Max HP {HP} currentHP {currentHP}</h2></>
}