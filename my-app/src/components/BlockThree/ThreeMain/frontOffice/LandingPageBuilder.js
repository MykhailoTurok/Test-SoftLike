import React from 'react';
import constructorImg from '../../../../IMG/constructor.png';
import markImg from '../../../../IMG/Shape8.png';

export default class LandingPageBuilder extends React.Component {
    render() {
        return (
            <div className="threeMain-content-conteiner">
                <div className="threeMain-content-top-text">
                    <p>Creation of website-cum-online office in 30 minutes is a mandatory lead generation tool.</p>
                    <ul>
                        <li><img src={markImg} alt="mark" /> Block library</li>
                        <li><img src={markImg} alt="mark" /> Adaptable templates</li>
                        <li><img src={markImg} alt="mark" /> Intuitive interface</li>
                    </ul>
                </div>
                <p className="threeMain-content-bottom-text">New MLM is not high-pressure selling. It is dealing with target users and satisfying their demand, propaganda and customer development, and not merely sales.  
                <br/>
                <br/>
                Do you want to give your staff more possibilities and to increase the market potential?</p>
                <img src={constructorImg} className="threeMain-content-img" alt="screen" />
            </div>
        );
    }
};