const SelectedHero = ({ currentlySelected, heroes }) => {
  return (
    <>
      <img src={currentlySelected.image} alt={currentlySelected.name} />
    </>
  );
};

export default SelectedHero;
