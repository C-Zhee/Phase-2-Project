import './App.css'
import { useEffect, useState } from 'react'
import OverwatchHeroes from './OverwatchHeroes'

const App = () => {
  
  const [heroes, setHeroes] = useState([])

  useEffect (()=>{
    const Hello = async() => {
      let hey = await fetch("http://localhost:3000/heroes")
      let hi = await hey.json()
      setHeroes(hi)
    }
    Hello()
  },[])

  return (
    <div className="App">
      <OverwatchHeroes heroes={heroes}/>
    </div>
  )
}

export default App
