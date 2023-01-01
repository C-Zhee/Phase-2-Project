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
