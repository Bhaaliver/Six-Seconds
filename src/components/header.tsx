import { useLocalStorage } from "usehooks-ts";
import { characterName, AC, maxHP } from "../fakeData"

export function Header(){
    const [currentHP, setCurrentHP] = useLocalStorage("currentHP", maxHP)

    return <><h1>{characterName}</h1><h2>AC {AC} Max HP {maxHP} currentHP {currentHP}</h2></>
}