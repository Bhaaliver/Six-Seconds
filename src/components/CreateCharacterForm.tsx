import { useState } from "react"
export function CreateCharacterForm(){

    const[characterName, setCharacterName] = useState('')
    const[HP, setHP] = useState("")
    return (
    <form onSubmit={()=> console.log(characterName)}>
        <label>
            Character Name:
            <input type="text" placeholder="enter character name" onChange={(e) => {setCharacterName(e.target.value); console.log(characterName)}} />
        </label>
        <br />
        <label>
            HP:
            <input type="number" onChange={(e:number|void) => {setHP(e.target.value); console.log(HP)}}/>
        </label>
        <br />
        <input type="submit" value="Submit" />
    </form>
    )
}