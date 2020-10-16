import React from 'react';
import Button from '../Button/Button';
import './BlockSix.css';
class BlockSix extends React.Component {
    render() {
        return (
            <section className="block-six" id="Packages">
                <h2 className="text-uppercase block-six-title">
                    This is your 360 degree view
                </h2>
                <p className="block-six-description">
                    Networking Lab provides the necessary tools for implementation of your strategy of development.
                    <br/><br/>
                    By using assessment of knowledge, educational modules, you will be able to build your organization in accordance with digital trends, upgrade skills and information awareness of personnel, create a team that will be working faster and more efficiently.
                </p>
                <h3 className="block-six-blue-text">Set up a testing team and get a free 6 week trial</h3>
                <Button text="Начать командное испытание" />
            </section>
        );
    }
  };
  
  export default BlockSix;