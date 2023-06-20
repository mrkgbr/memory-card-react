import "./Cardboard.css";

const Cardboard = (props) => {
  const { cards, handleClick } = props;
  const content = cards.map((card) => {
    return (
      <div
        key={card.id}
        className="card"
        onClick={() => handleClick(card.id)}
        style={{ backgroundColor: card.color }}
      ></div>
    );
  });
  return <div className="Cardboard">{content}</div>;
};

export default Cardboard;
