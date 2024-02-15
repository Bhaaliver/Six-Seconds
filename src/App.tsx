import './App.css'
import { Header } from "./components/Header"
import { Actions } from "./fakeData"
import { Action } from "./components/Action"

function App() {

  return <><Header /><br />{Actions.map((action,index)=><Action key={index} name={action.name} description={action.description}/>)}</>
}

export default App
