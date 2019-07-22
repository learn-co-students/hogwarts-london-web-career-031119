import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsData from "../porkers_data";
import HogList from "./HogList";

class App extends Component {
  state = {
    hogs: hogsData,
    allHogs: [...hogsData]
  };

  addIds = () => {
    const newHogs = [...hogsData];
    let counter = 0;
    newHogs.forEach(hog => {
      hog["id"] = counter;
      counter++;
    });
    this.setState({ hogs: newHogs });
  };

  handleSortByName = () => {
    const hogsCopy = [...this.state.hogs];
    const sortByName = hogsCopy.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ hogs: sortByName });
  };

  handleSortByWeight = () => {
    const hogsCopy = [...this.state.hogs];
    const sortByWeight = hogsCopy.sort(function(a, b) {
      return b.weight - a.weight;
    });
    this.setState({ hogs: sortByWeight });
  };

  handleSortReset = () => {
    this.setState({
      hogs: this.state.allHogs
    });
  };

  handleSortByGrease = () => {
    const hogsCopy = [...this.state.hogs];
    const sortByGrease = hogsCopy.filter(hog => hog.greased === true);
    this.setState({
      hogs: sortByGrease
    });
  };

  handleHide = id => {
    const hogsCopy = [...this.state.hogs];
    const hide = hogsCopy.filter(hog => hog.id !== id);
    this.setState({
      hogs: hide
    });
  };

  componentDidMount() {
    this.addIds();
  }
  render() {
    return (
      <div className="App">
        <Nav
          sortReset={this.handleSortReset}
          sortByName={this.handleSortByName}
          sortByWeight={this.handleSortByWeight}
          sortByGrease={this.handleSortByGrease}
        />
        <HogList hogsAll={this.state.hogs} hide={this.handleHide} />
      </div>
    );
  }
}

export default App;
