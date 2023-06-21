import Scoreboard from "./Scoreboard";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <div className="Header-title">MEMORY GAME</div>
      <Scoreboard score={props.score} bestScore={props.bestScore} />
    </header>
  );
};

export default Header;
