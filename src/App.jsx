import GameOver from "./components/GameOver/GameOver";
import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import game from "./game/game";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, []);

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setGameOver(false);
  }

  function handleFlip(card) {
    game.flipCard(
      card.id,
      () => {
        //gameOverCallBack
        setGameOver(true);
      },
      () => {
        //noMatchCallBack
        setCards([...game.cards]);
      }
    );
    setCards([...game.cards]);
  }

  return (
    <div>
      <GameBoard cards={cards} handleFlip={handleFlip} />
      <GameOver show={gameOver} handleRestart={restart} />
    </div>
  );
}

export default App;
