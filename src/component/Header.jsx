import React from "react";

const Header = () => {
  const style = {
    color: "green",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "black",
  };
  return (
    <header>
      <nav style={style}>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </nav>
    </header>
  );
};

export default Header;
