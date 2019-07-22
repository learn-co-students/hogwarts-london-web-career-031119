import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hogs from "./Hogs";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    allHogs: [...hogs],
    hogs: hogs,
    sortBy: null, //other options: "weight" "name"
    greased: null // all, true=greased, false=nongreased
  };

  handleSortByAttribute = attribute => {
    const hogs = [...this.state.hogs];
    hogs.sort((hog1, hog2) => {
      const a = hog1[attribute];
      const b = hog2[attribute];
      if (a > b) return 1;
      if (a < b) return -1;
      if (a === b) return 0;
    });

    switch (attribute) {
      case "name":
        this.setState({ hogs });
        break;
      case "weight":
        this.setState({ hogs: hogs.reverse() });
        break;
      case "null":
        this.setState({ hogs: this.state.allHogs });
    }
  };

  handleFilterByGreased = attr => {
    const hogs = [...this.state.allHogs];
    attr == "null"
      ? this.setState({ hogs: this.state.allHogs })
      : this.setState({
          hogs: hogs.filter(hog => hog.greased.toString() === attr)
        });
  };

  handleHide = hog => {
    const hogs = [...this.state.hogs];
    this.setState({ hogs: hogs.filter(h => h !== hog) });
  };

  assignID = () => {
    const updatedHogs = [...hogs];
    let counter = 0;
    updatedHogs.forEach(hog => {
      hog["id"] = counter;
      counter++;
    });
    this.setState({ hogs: updatedHogs });
  };

  componentDidMount() {
    this.assignID();
  }

  // assignImage = array => {
  //   const arr = array.map(object => object.url); //array with only URLs
  //   const updatedHogs = [...hogs];
  //   let counter = 0;
  //   updatedHogs.forEach(hog => {
  //     hog["id"] = counter;
  //     hog["img"] = arr[counter];
  //     counter++;
  //   });
  //   this.setState({ hogs: updatedHogs });
  // };

  // fetchAPI = () =>
  //   fetch(
  //     "https://api.tenor.com/v1/search?tag=pigs&key=VQ61ZL3WD8Y6&limit=13&anon_id=40e495226c804bff8dc0c9a5ac17c36f"
  //   ).then(resp => resp.json());

  // componentDidMount() {
  //   this.fetchAPI().then(data => {
  //     this.setState({ hogs: data["results"], allHogs: [...data["results"]] });
  //     this.assignImage(data["results"]); //data is array of 13 objects
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Nav
          hogs={this.state.hogs}
          sortBy={attr => this.handleSortByAttribute(attr)}
          greased={attr => this.handleFilterByGreased(attr)}
        />
        <Hogs hogs={this.state.hogs} hide={this.handleHide} />
      </div>
    );
  }
}

export default App;
