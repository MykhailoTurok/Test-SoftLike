import React from 'react';
import './App.css';
import BlockOne from '../BlockOne/BlockOne.js';
import BlockTwo from '../BlockTwo/BlockTwo.js';
import Message from '../Message/Message';

class App extends React.Component {
  
  render() {
    return (
      <div className="conteiner">
        <BlockOne />
        <BlockTwo />
        <Message />
      </div> 
    );
  }
};

export default App;