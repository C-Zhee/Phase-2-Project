
const HeroInfo = ({info}) => {
    return(
        <div>
            <p>{info.name}</p>
            <p>{info.role}</p>
            <img alt="Hey" src={info.image} />
            <img alt="Hoi" src={info.BGimage} height ="200px" width ="200px"/>
        </div>
    )
}

export default HeroInfo