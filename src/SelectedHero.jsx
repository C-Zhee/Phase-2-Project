const SelectedHero = ({ currentlySelected, heroes }) => {
  return (
    <>
      <img
        className="selected-img"
        src={currentlySelected.image}
        alt={currentlySelected.name}
      />
    </>
  );
};

export default SelectedHero;
