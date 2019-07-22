import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div>
        <b>Sort: </b>
        <div
          className="ui left attached button"
          role="button"
          tabindex="0"
          onClick={() => this.props.sortBy("null")}
        >
          Default
        </div>
        <div
          className="ui left attached button"
          role="button"
          tabindex="0"
          onClick={() => this.props.sortBy("name")}
        >
          Name (Alphabetically)
        </div>
        <div
          className="ui right attached button"
          role="button"
          tabindex="0"
          onClick={() => this.props.sortBy("weight")}
        >
          Weight (Light to Heavy)
        </div>
      </div>
    );
  }
}

export default Sort;
