import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import HogDetails from './HogDetails'
import Filter from './Filter'


class App extends Component {
  
  state = {
    hogs: hogs, 
    filtered: {
      type: 'all'
    },
    selectedHog: null
  }

  handleFilter = (event) => {
    const type = event.target.value
    const greasedHogs = this.state.hogs.filter(hog => hog.greased === true)
    const hogsNames = this.state.hogs.map(hog => hog.name)
    const alphabetHogs = hogsNames.sort()
    console.log(alphabetHogs)

    if (type === 'greased') {
      this.setState({
        filtered: {type: type },
        hogs: greasedHogs
      }) 
    }
    else if (type === 'A-z'){
      // sort alphabetically
      this.setState({
        filtered: {type: type },
        hogs: {...hogs, name: alphabetHogs}
      }) 

    }
    else if (type === 'Greasy'){
      // sort by weight
    }
    else {     
      this.setState({
        filtered: {type: type},
        hogs: hogs
      }) 
    }
  }

  handleClick = (hog) => {
    this.setState({
        selectedHog: hog
    })
  }

  handleClickBack = () => {
    this.setState({
        selectedHog: null
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className='header'>
          < Nav />
        </div>
        <div className='filter'>
        < Filter handleFilter={this.handleFilter}/>
        </div>
        <div className='container'>
       
        {
          this.state.selectedHog === null 
          ? < HogList 
                hogs={this.state.hogs}
                selectedHog={this.state.selectedHog}
                handleClick={this.handleClick}
                
            />
          : <HogDetails
                hog={this.state.selectedHog}   
                handleClickBack={this.handleClickBack}

            />
        }    
        </div>    
      </div>
    )
  }
}

export default App;
