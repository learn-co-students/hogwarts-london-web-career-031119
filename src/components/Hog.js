import React, { Component } from "react";

class Hog extends Component {
  state = {
    show: "none"
  };

  showDetails = () => {
    this.state.show === "none"
      ? this.setState({ show: "block" })
      : this.setState({ show: "none" });
  };
  //this.props.hog =
  render() {
    const { hog } = this.props;
    const { name, specialty, weight, highestMedal, img } = hog;
    return (
      <div>
        <div className="ui card" onClick={this.showDetails}>
          <div className="image">
            {/* <img src={img} /> */}
            <img
              src={require(`../hog-imgs/${name
                .toLowerCase()
                .split(" ")
                .join("_")}.jpg`)}
              alt={`${name.toLowerCase()}`}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <button
              onClick={event => {
                event.stopPropagation();
                this.props.hide(hog);
              }}
            >
              Hide
            </button>
          </div>
          <div className="content" style={{ display: this.state.show }}>
            <div className="description">
              <span className="date">Specialty: {specialty}</span>
            </div>
            <div className="description">
              <span className="date">Weight: {weight} tonnes </span>
            </div>
            <div className="description">
              <span className="date">
                <i className="trophy icon" />
                Highest Medal Won: {highestMedal}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hog;
