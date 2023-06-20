import "./App.css";
import Header from "./components/Header";
import Cardboard from "./components/Cardboard";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const items = [
    {
      id: 0,
      color: "white",
    },
    {
      id: 1,
      color: "black",
    },
    {
      id: 2,
      color: "blue",
    },
    {
      id: 3,
      color: "red",
    },
    {
      id: 4,
      color: "green",
    },
    {
      id: 5,
      color: "orange",
    },
    {
      id: 6,
      color: "purple",
    },
    {
      id: 7,
      color: "yellow",
    },
    {
      id: 8,
      color: "grey",
    },
  ];

  const handleShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [cards, setCards] = useState(handleShuffle(items));
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    if (bestScore < score) {
      setBestScore(score);
    }
    setScore(0);
    setCards([...handleShuffle(cards)]);
    setClicked([false, false, false, false, false, false, false, false, false]);
  };

  const handleClick = (id) => {
    if (clicked[id]) {
      resetScore();
      setTimeout(
        () => alert("You clicked twice on the same color! Try again!"),
        0
      );
      return;
    }
    const newClicked = [...clicked];
    newClicked[id] = true;
    setClicked(newClicked);
    setCards([...handleShuffle(cards)]);
    setScore(score + 1);
  };

  useEffect(() => {
    if (score === items.length) {
      resetScore();
      setTimeout(() => alert("Great Job! Start it over!"), 0);
    }
  });

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Cardboard cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
