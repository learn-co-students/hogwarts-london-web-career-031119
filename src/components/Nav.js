import piggy from "../porco.png";
import React from "react";

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

      <div className="ui centered grid">
        <div className="center aligned column">
          <div className="ui compact menu">
            <button className="item" onClick={props.sortReset}>
              All
            </button>
            <button className="item" onClick={props.sortByWeight}>
              Weight
            </button>
            <button className="item" onClick={props.sortByName}>
              Name
            </button>
            {/* <div className="link item active">Grease</div> */}
            <button className="item" onClick={props.sortByGrease}>
              Grease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
