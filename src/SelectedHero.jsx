import { useEffect, useState } from "react";

const SelectedHero = ({ currentlySelected }) => {
  const [isAbilities, setAbilities] = useState(false);
  const [video, setVideo] = useState("");

  return (
    <>
      {currentlySelected ? (
        <>
          <div
            className="selected-hero"
            style={{
              backgroundImage: `url(${currentlySelected.BGimage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img
              className="selected-img"
              src={currentlySelected.image}
              alt={currentlySelected.name}
            />

            {!isAbilities ? (
              <div className="hero-info">
                <h1>{currentlySelected.name}</h1>
                <h3>{currentlySelected.role + " role"}</h3>
                <h4>{"Born in  " + currentlySelected.origin}</h4>
                <p className="description">{currentlySelected.description}</p>
              </div>
            ) : (
              <div className="abilities">
                {currentlySelected.abilities.map((ability) => {
                  return (
                    <div
                      className="ability"
                      onClick={() => setVideo(ability.video)}
                    >
                      <img
                        className="ability-img"
                        src={ability.image}
                        alt={ability.name}
                      />
                      <h3>{ability.name}</h3>
                    </div>
                  );
                })}
              </div>
            )}
            <video width="220" autoplay controls muted>
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <button
              className="ablilites-btn"
              onClick={() => setAbilities(!isAbilities)}
            >
              {isAbilities ? "HERO INFO" : "ABILITIES"}
            </button>
          </div>
        </>
      ) : (
        <img className="logo" src="src/assets/overwatch-logo.png" alt="logo" />
      )}
    </>
  );
};

export default SelectedHero;

/* <video width="220" autoplay controls muted>
<source src={ability.video} type="video/webm" />
Your browser does not support the video tag.
</video> */

// Do I need useEffect for the video to render with new source??
