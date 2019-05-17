import React, { Component } from 'react';
import Hog from './Hog'

const style = {
    marginTop: '80px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  }

class HogList extends Component {
 
  
    render() { 
        const hog = this.props.hogs.map(hog => 
        <Hog 
            hog={hog} 
            serializedName={hog.name.toLowerCase().split(' ').join('_') + '.jpg'}
            handleClick={this.props.handleClick}
            selectedHog={this.props.selectedHog}            
        />  
        )
        return (
            <div style={style}>{hog}</div> );
    }
}
 
export default HogList;