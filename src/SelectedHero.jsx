const SelectedHero = ({ currentlySelected }) => {
  const renderSelectedHero = () => {
    return (
      <>
        <div className="selected-hero">
          <img
            className="selected-img"
            src={currentlySelected.image}
            alt={currentlySelected.name}
          />
          <div className="hero-info">
            <h1>{currentlySelected.name}</h1>
            <h3>{currentlySelected.role + " role"}</h3>
            <h4>{"Born in  " + currentlySelected.origin}</h4>
            <p className="description">{currentlySelected.description}</p>
          </div>
        </div>
        <img
          className="bg-img"
          src={currentlySelected.BGimage}
          alt={currentlySelected.name}
        />
      </>
    );
  };

  return (
    <>
      {currentlySelected ? (
        renderSelectedHero()
      ) : (
        <img className="logo" src="src/assets/overwatch-logo.png" alt="logo" />
      )}
    </>
  );
};

export default SelectedHero;
