import React from "react";

const Footer = () => {
  let style = {
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div style={style}>
      <div>
        <h4>Instagram</h4>
        <h4>Facebook</h4>
        <h4>VK</h4>
        <h4>WhatApp</h4>
      </div>
      <div>
        <h4>05555555</h4>
        <h4>77342904732</h4>
        <h4>8594365894365</h4>
      </div>
    </div>
  );
};

export default Footer;
