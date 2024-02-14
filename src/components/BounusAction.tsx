export function BounusAction(props:{name: string, description: string}){
    const {name, description} = props
    return <><h2>{name}</h2><p>{description}</p></>
}