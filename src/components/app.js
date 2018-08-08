import React, { Component } from 'react';
import SearchBar from './searchbar';
import Arrow from './arrow';
import MyCanvas from './canvas';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <Arrow className='app__arrow'/>
        <p className='app__title'>CorpEngine</p>
        <SearchBar className='app__search-bar'/>
        <div className='app__details'>
        <MyCanvas />
        </div>
        <div className='app__location'>Return Location</div>
        <div className='app__image'>IMG</div>
        <div className='hexagon'></div>
      </div>
    );
  }
}
