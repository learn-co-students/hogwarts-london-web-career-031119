import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <select onChange={e => this.props.sortHogs(e)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
          <option value="greased">Greased</option>
        </select>
      </div>
    );
  }
}

export default Filter;
