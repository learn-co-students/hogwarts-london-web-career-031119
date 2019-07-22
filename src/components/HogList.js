import React, { Component } from "react";
import HogDetails from "./HogDetails";

class HogList extends Component {
  render() {
    return (
      <div className="ui three column grid container">
        {this.props.hogsAll.map((hog, idx) => (
          <HogDetails key={idx} hog={hog} hide={this.props.hide} />
        ))}
      </div>
    );
  }
}

export default HogList;
