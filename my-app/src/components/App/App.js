import React from 'react';
import './App.css';
import BlockOne from '../BlockOne/BlockOne.js';
import BlockTwo from '../BlockTwo/BlockTwo.js';

class App extends React.Component {
  render() {
    return (
      <div className="conteiner">
        <BlockOne />
        <BlockTwo />
      </div> 
    );
  }
};

export default App;