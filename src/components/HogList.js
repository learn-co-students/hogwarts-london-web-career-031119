import React, { Component } from "react";
import Hog from "./Hog";
import { Grid, Image, Segment } from "semantic-ui-react";

class HogList extends Component {
  state = {};

  convertName = name =>
    name
      .split(" ")
      .join("_")
      .toLowerCase();

  render() {
    return (
      <Grid columns="three">
        {this.props.hogs.map((hog, index) => (
          <Hog key={index} hog={hog} imgSrc={this.convertName(hog.name)} />
        ))}
      </Grid>
    );
  }
}

export default HogList;
