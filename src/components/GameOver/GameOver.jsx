import { Fragment } from "react";

function GameOver(props) {
  return props.show ? (
    <div id="gameOver">
      <div>Parabéns, você completou o jogo!</div>
      <button id="restart" onClick={props.handleRestart}>jogue novamente</button>
    </div>
  ) : (
    <Fragment />
  );
}

export default GameOver;
