import React from 'react'

const style = {
    top: '20px' 
}

class Filters extends React.Component {

 
  render() {
    return (
      <div style={style} onChange={this.props.handleFilter} className="ui form" >
        <h3>Greased?</h3>
        <div className="field">
          <select  name="type" id="type" >
            <option value="all">All</option>
            <option value="greased">Greased</option>
            <option value="name">A-z</option>
            <option value="weight">Greasy</option>

          </select>
        </div>
      </div>
    )
  }
}

export default Filters
