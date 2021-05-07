import React, { memo } from "react";

const Popup = memo(({ status, selectedWord, playAgain }) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  if (status === "win") {
    finalMessage = "Congratulations! You won! 😃";
  } else if (status === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
  }
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
});

export default Popup;
