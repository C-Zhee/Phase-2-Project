
const HeroInfo = ({info}) => {
    return(
        <div>
            <p>{info.name}</p>
            <p>{info.role}</p>
            <img alt="Hey" src={info.image} />
        </div>
    )
}

export default HeroInfo