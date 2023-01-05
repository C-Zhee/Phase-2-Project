import './App.css'
import { useEffect, useState } from 'react'
import OverwatchHeroes from './OverwatchHeroes'
import SearchBar from './SearchBar'
import YourParty from './YourParty'

const App = () => {

  const [heroes, setHeroes] = useState([])
  const [search, setSearch] = useState("")
  const [party, setParty] = useState([])

  useEffect(() => {
    const Hello = async () => {
      let hey = await fetch("http://localhost:3000/heroes")
      let hi = await hey.json()
      setHeroes(hi)
    }
    Hello()
  }, [])
 

  const addMember = (unit) => {
    if (party.includes(unit)) return;
    setParty([...party, unit])
  }

  const removeMember = (unit) => {
    setParty(party.filter(x => x !== unit))
  }

  return (
    <div>
      <h1>Hero Comp!</h1>
      <YourParty party={party} removeMember={removeMember} />
      <SearchBar search={search} setSearch={setSearch}/>
      <OverwatchHeroes heroes={heroes} addMember={addMember} />
    </div>
  )
}

export default App