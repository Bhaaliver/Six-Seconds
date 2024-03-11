export function StatDisplay(props:{id: number, value: number}){
    const {id, value} = props

    return <div className="stat"><h3>{idMap(id)}</h3><p>{value}</p></div>
}

function idMap(id: number){
    if(id === 0)
        return "str"
    if(id === 1)
        return "dex"
    if(id === 2)
        return "con"
    if(id === 3)
        return "int"
    if(id === 4)
        return "wis"
    if(id === 5)
        return "cha"
    else
        throw "to high id to display stats"
}