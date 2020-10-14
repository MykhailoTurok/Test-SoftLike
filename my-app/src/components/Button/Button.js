import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        document.getElementById('modal').style.display = 'flex';
    }

    render() {
        return (<p className="button-conteiner" onClick={this.openModal}>{this.props.text}</p>);
    }
};
  
export default Button;