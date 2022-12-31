import HeroInfo from "./HeroInfo"


const OverwatchHeroes = ({heroes}) => {
    return(
        <div className="grid">
        { heroes.map((info)=>{    
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