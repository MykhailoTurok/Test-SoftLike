import React from 'react';
import './App.css';
import BlockOne from '../BlockOne/BlockOne.js';
import BlockTwo from '../BlockTwo/BlockTwo.js';
import Message from './Message/Message';
import BlockThree from '../BlockThree/BlockThree';
import BlockFour from '../BlockFour/BlockFour';

class App extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <BlockOne />
        <BlockTwo />
        <BlockThree />
        <BlockFour />
        <Message />
      </React.Fragment>
    );
  }
};

export default App;