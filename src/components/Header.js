import React from "react";
import Navigation from "./Navigation";

const Header = ({ header }) => {
  return (
    <div>
      <h1>Hope Mansfield</h1>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
