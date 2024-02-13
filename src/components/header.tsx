export function Header(props:{characterName: string, AC: number, HP: number}){
    const {characterName, AC, HP} = props
    return <><h1>{characterName}</h1><br /><h2>AC {AC} Max HP {HP}</h2></>
}