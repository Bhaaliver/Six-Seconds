export function BounusAction(props:{name: string, description: string}){
    const {name, description} = props
    return <><h1>{name}</h1><p>{description}</p></>
}