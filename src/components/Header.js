import Scoreboard from "./Scoreboard";

const Header = (props) => {
  return (
    <header>
      <div className="Header-title">MEMORY GAME</div>
      <Scoreboard score={props.score} bestScore={props.bestScore} />
    </header>
  );
};

export default Header;
