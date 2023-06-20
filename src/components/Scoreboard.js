const Scoreboard = (props) => {
  return (
    <div className="Scoreboard">
      <div>Current score: {props.score}</div>
      <div>Best score: {props.bestScore}</div>
    </div>
  );
};

export default Scoreboard;
