import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import HogDetails from './HogDetails'
import Filter from './Filter'


class App extends Component {
  
  state = {
    hogs: [], 
    sort: '',
    greased: false,
    selectedHog: null
  }

  getHogs = () => {
    this.setState({hogs})
  }

  componentDidMount() {
    this.getHogs()
  }

  updateSort = (sort) => {
    this.setState({sort})
  }

  handleClickGreased = () => {
    this.setState({greased: !this.state.greased})
  }

   get handleFilterAndSortHogs() {
    const {greased, sort, hogs } = this.state

    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const hogsCopy = [...hogs]
    
    // sort by name
    if (sort === 'name'){
      hogsCopy.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sort === 'weight'){
      hogsCopy.sort((a, b) => {
        if (a[weight] > b[weight]) return 1
        if (a[weight] < b[weight]) return -1
        return 0
      })
    }

    return greased ? hogsCopy.filter(hog => hog.greased) : hogsCopy
    
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
    const {updateSort, handleClickGreased, handleClickBack, handleClick, handleFilterAndSortHogs} = this
    return (
      <div className="App">
        <div className='header'>
          < Nav />
        </div>
        <div className='filter'>
        < Filter 
          updateSort={updateSort}
          showGreased={handleClickGreased}

        />
        </div>
        <div className='container'>
       
        {
          this.state.selectedHog === null 
          ? < HogList 
                hogs={handleFilterAndSortHogs}
                selectedHog={this.state.selectedHog}
                handleClick={handleClick}
                
            />
          : < HogDetails
                hog={this.state.selectedHog}   
                handleClickBack={handleClickBack}

            />
        }    
        </div>    
      </div>
    )
  }
}

export default App;
