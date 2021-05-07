import React, { memo } from "react";

const WrongLetters = memo(({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        <p> Wrong Attempts: {6 - wrongLetters.length} remaining </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}> {letter} </span>
        ))}
      </div>
    </div>
  );
});

export default WrongLetters;
