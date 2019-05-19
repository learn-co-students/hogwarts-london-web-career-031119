import React from 'react'

const style = {
    top: '20px' 
}

const Filter = props => {
    
        return (
          <div style={style} className="ui form" >
            <div>
                <label>Sort by: </label>
                <select onChange={event => props.updateSort(event.target.value)} defaultValue='no sorting'>
                    <option value='name'>name</option>
                    <option value='weight'>weight</option>
                </select>
            </div>
            <div>
                <label>Greased:</label>
                <input onClick={props.showGreased} type="checkbox" />
              </div>

          </div>
        )
      }


 
  


export default Filter
