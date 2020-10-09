import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return ( <a href="#" className="button-conteiner">{this.props.text}</a>);
    }
  };
  
  export default Button;