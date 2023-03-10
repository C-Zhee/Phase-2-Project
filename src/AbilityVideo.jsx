import { useState } from "react";

// Make this page its own ROUTE. Have the "Abilites Button" link to the (selected) Heroes page

const AbilityVideo = ({ currentlySelected }) => {
  const [isHidden, setHidden] = useState(true);

  return (
    <>
      <div className="abilities">
        {currentlySelected.abilities.map((ability) => {
          return (
            <div
              key={ability.name}
              className="ability"
              onClick={() => setHidden(!isHidden)}
              tabIndex="0"
            >
              <img
                className="ability-img"
                src={ability.image}
                alt={ability.name}
              />
              <h3>{ability.name}</h3>
              <video
                style={{}}
                className="video"
                width="320"
                loop
                autoPlay
                muted
              >
                <source src={ability.video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AbilityVideo;
