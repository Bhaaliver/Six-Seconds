import './App.css'
import { Header } from "./components/Header"
import {Route, Routes} from "react-router-dom"

function App() {
  return(
  <Routes>
    <Route path='/' element={<Header />}/>
  </Routes>
  )
}

export default App
