import React from "react";
import { Card, Segment, Grid } from "semantic-ui-react";

class Hog extends React.Component {
  state = {
    isClicked: false,
    hidden: false
  };

  handleClick = e => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  render() {
    return (
      <Grid.Column>
        <Card>
          <button name="hidden" onClick={this.handleClick}>
            {!this.state.hidden ? "DESTROY PIG" : "revive..."}
          </button>
          {!this.state.hidden && (
            <img
              src={require(`../hog-imgs/${this.props.imgSrc}.jpg`)}
              name="isClicked"
              onClick={this.handleClick}
            />
          )}
          {this.state.isClicked && !this.state.hidden ? (
            <div>
              <Card.Content>
                <Card.Header>{this.props.hog.name}</Card.Header>
                <Card.Meta>
                  <span className="date">{this.props.hog.weight}</span>
                </Card.Meta>
                <Card.Description>
                  {this.props.hog.specialty}
                  <br />
                  {this.props.hog.greased ? "Greased" : "Ungreased"}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {/* <a>
  <Icon name='user' />
  22 Friends
</a> */}
              </Card.Content>
            </div>
          ) : null}
        </Card>
      </Grid.Column>
    );
  }
}
export default Hog;
