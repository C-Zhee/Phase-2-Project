import HeroInfo from "./HeroInfo"


const OverwatchHeroes = ({heroes, search}) => {

const heroFilter = heroes.filter((hero) => {
    return(
        hero.name.toLowerCase().includes(search.toLowerCase())
        )
    })

    return(
        <div className="grid">
        {heroFilter.map((info)=>{    
                return(
                    <div >
                        <HeroInfo info={info}/>
                    </div>
                )
            })
        }
        </div>
    )
}


export default OverwatchHeroes