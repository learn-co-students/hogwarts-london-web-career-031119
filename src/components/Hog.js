import React, { Component } from 'react';

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  }

class Hog extends Component {

    render() { 
        return ( 
            <div style={style} className="ui card" onClick={() => this.props.handleClick(this.props.hog)}>
                <div className="image">
                    <img src= {require('../hog-imgs/'+ this.props.serializedName)} />
                </div>
                <div className="content">
                    <a className="header">{this.props.hog.name}</a>
                </div>
            </div>
         );
    }
}
 
export default Hog;