import React, { Fragment, memo } from "react";

const Header = memo(() => {
  return (
    <Fragment>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </Fragment>
  );
});

export default Header;
