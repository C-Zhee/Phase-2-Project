
const YourParty = ({ party, removeMember }) => {
    return (
        <div className="your-party">
            Your Overwatch Composition
            {
                party.map((unit) => {
                    return (
                        <div onClick={() => { removeMember(unit) }}>
                            <img src={unit.image} />
                            <p>{unit.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default YourParty