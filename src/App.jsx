import './App.css'
import { useEffect, useState } from 'react'
import OverwatchHeroes from './OverwatchHeroes'
import SearchBar from './SearchBar'

const App = () => {
  
  const [heroes, setHeroes] = useState([])
  const [search, setSearch] = useState("")

  useEffect (()=>{
    const Hello = async() => {
      let hey = await fetch("http://localhost:3000/heroes")
      let hi = await hey.json()
      setHeroes(hi)
    }
    Hello()
  },[])
console.log(setSearch)

  return (
    <div>
      <h1>Hero Searcher</h1>
      <SearchBar search={search} setSearch={setSearch}/>
    
      <OverwatchHeroes heroes={heroes} search={search}/>
    </div>
  )
}

export default App
