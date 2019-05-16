import React, { Component } from "react";
import Hog from "./Hog";

class Hogs extends Component {
  render() {
    return (
      <div className="ui three column grid container">
        {this.props.hogs.map((hog, idx) => (
          <Hog key={idx} hog={hog} hide={this.props.hide} />
        ))}
      </div>
    );
  }
}

export default Hogs;
