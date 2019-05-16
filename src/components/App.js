import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
// import hogs from "../porkers_data";
import HogList from "./HogList";
import Filter from "./Filter";
import axios from "axios";

class App extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:3000/hogs")
      .then(res => this.setState({ hogs: res.data }));
  }

  handleEvent = e => {
    this.setState({ method: e.target.value });
  };

  sortController = () => {
    switch (this.state.method) {
      case "asc":
        return this.handleSort("name", 1, -1);
      case "desc":
        return this.handleSort("name", -1, 1);
      case "low":
        return this.handleSort(
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water",
          1,
          -1
        );
      case "high":
        return this.handleSort(
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water",
          -1,
          1
        );
      case "greased":
        return this.getGreased();
      default:
        return this.state.hogs;
    }
  };

  getGreased = () => {
    return this.state.hogs.slice().filter(item => item.greased == true);
  };

  handleSort = (k1, v1, v2) =>
    this.state.hogs.slice().sort((a, b) => (a[k1] > b[k1] ? v1 : v2));

  render() {
    console.log(this.state.hogs);
    return (
      <div className="App">
        <Nav />
        <Filter sortHogs={this.handleEvent} />
        {this.state.hogs && <HogList hogs={this.sortController()} />}
      </div>
    );
  }
}

export default App;
