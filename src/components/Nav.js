import piggy from "../porco.png";
import React from "react";

import Filter from "./Filter";
import Sort from "./Sort";

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
          <img src={piggy} className="App-logo" alt="piggy" />
        </a>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <Sort hogs={props.hogs} sortBy={props.sortBy} />
      <Filter hogs={props.hogs} greased={props.greased} />
    </div>
  );
};

export default Nav;
