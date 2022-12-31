const HeroPortrait = ({ setCurrentlySelected, hero }) => {
  return (
    <img
      onClick={() => setCurrentlySelected(hero)}
      className="hero-img"
      alt={hero.name}
      src={hero.image}
    />
  );
};

export default HeroPortrait;

// onclick change the currently selected state to the target.hero
