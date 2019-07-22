import React, { Component } from "react";

class HogDetails extends Component {
  state = {
    details: "none"
  };

  handleDetails = () => {
    this.state.details === "none"
      ? this.setState({ details: "block" })
      : this.setState({ details: "none" });
  };

  render() {
    return (
      <div className="container">
        <div className="ui card" onClick={this.handleDetails}>
          <div className="image">
            <img
              src={require(`../hog-imgs/${this.props.hog.name
                .toLowerCase()
                .replace(/ /g, "_")}.jpg`)}
            />
          </div>
          <div className="content">
            <a className="header">{this.props.hog.name}</a>
          </div>
          <div className="content">
            <button
              onClick={event => {
                event.stopPropagation();
                this.props.hide(this.props.hog.id);
              }}
            >
              Hide
            </button>
          </div>
          <div
            className="extra content"
            style={{ display: this.state.details }}
          >
            <div className="meta">
              <span className="date">
                Weight: {this.props.hog.weight} Newtons
              </span>
            </div>
            <div className="description">
              Super Power: {this.props.hog.specialty}
            </div>
            <a>
              <i className="trophy icon" />
              {this.props.hog.highestMedal}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HogDetails;
