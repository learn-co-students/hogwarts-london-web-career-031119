import React, { Component } from 'react';

const style = {
    position: 'fixed',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
    
  }

class HogDetails extends Component {

    render() { 

        const medal = this.props.hog['highest medal achieved']
        const weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        
        return ( 
            <div style={style} className="ui card" onClick={this.props.handleClickBack}>
            <div className="content">
              <div className="header">{this.props.hog.name}</div>
            </div>
            <div className="content">
              <h4 className="ui sub header">Summary</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">
                       Weight: {weight}
                    </div>
                  </div>
                </div>     
                <div className="event">
                  <div className="content">
                    <div className="summary">
                       Highest Medal Achieved: {medal}
                    </div>
                  </div>
                </div>     
              </div>
            </div>
          </div>
         );
    }
}
 
export default HogDetails;