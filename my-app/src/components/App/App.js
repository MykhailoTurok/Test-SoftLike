import React from 'react';
import './App.css';
import BlockOne from '../BlockOne/BlockOne.js';
import BlockTwo from '../BlockTwo/BlockTwo.js';
import Message from '../Message/Message';
import BlockThree from '../BlockThree/BlockThree';

class App extends React.Component {
  
  render() {
    return (
      <div className="conteiner">
        <BlockOne />
        <BlockTwo />
        <BlockThree />
        <Message />
      </div> 
    );
  }
};

export default App;