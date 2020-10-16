import React from 'react';
import referal3Img from '../../../../IMG/referal3.png';
import markImg from '../../../../IMG/Shape8.png';

export default class ReferralSystem extends React.Component {
    render() {
        return (
            <div className="threeMain-content-container">
                <div className="threeMain-content-top-text">
                    <p>Automatic connection of employees to the company and access to their own structural unit.</p>
                    <ul>
                        <li><img src={markImg} alt="mark" /> The owner of the structure generates a link that sends to a new member.</li>
                        <li><img src={markImg} alt="mark" /> The new member in his in turn, using the link, automatically joins the necessary structure, excluding the process of multi-way search throughout the system.</li>
                    </ul>
                </div>
                <p className="threeMain-content-bottom-text">
                    Timely and effortless access to your workplace.
                    <br/>
                    <br/>
                    Do you want to get rid of the confusion at the online shopping platform? We can help
                </p>
                <img src={referal3Img} className="threeMain-content-img" alt="screen" />
            </div>
        );
    }
};