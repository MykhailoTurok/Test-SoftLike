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
        return ( 
            <div>
                <a href="#" className="button-conteiner" onClick={this.openModal}>{this.props.text}</a>
            </div>
        );
    }
};
  
export default Button;