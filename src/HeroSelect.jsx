import HeroPortrait from "./HeroPortrait";

const HeroSelect = ({ heroes, setcurrentlySelected }) => {
  return (
    <div className="hero-select">
      {heroes.map((hero) => {
        return (
          <HeroPortrait
            key={hero.name}
            setCurrentlySelected={setcurrentlySelected}
            hero={hero}
          />
        );
      })}
    </div>
  );
};

export default HeroSelect;
