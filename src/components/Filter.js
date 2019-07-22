import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <b>Filter: </b>
        <div
          className="ui left attached button"
          role="button"
          tabindex="0"
          onClick={() => this.props.greased("null")}
        >
          All
        </div>
        <div
          className="ui left attached button"
          role="button"
          tabindex="0"
          onClick={() => this.props.greased("true")}
        >
          Greased
        </div>
        <div
          className="ui right attached button"
          role="button"
          tabindex="0"
          onClick={() => this.props.greased("false")}
        >
          Ungreased
        </div>
      </div>
    );
  }
}

export default Filter;
