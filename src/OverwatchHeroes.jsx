import HeroInfo from "./HeroInfo"


const OverwatchHeroes = ({ heroes,  addMember }) => {
    

 
    return (
        <div className="grid" >
            {heroes.map((info) => {
                return (
                    <div onClick={() => { addMember(info) }} >
                        <HeroInfo info={info} />
                    </div>
                )
            })
            }
        </div>
    )
}


export default OverwatchHeroes