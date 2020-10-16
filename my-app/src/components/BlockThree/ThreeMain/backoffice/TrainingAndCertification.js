import React from 'react';
import webinarsImg from '../../../../IMG/webinars.png';
import markImg from '../../../../IMG/Shape8.png';

export default class TrainingAndCertification extends React.Component {
    render() {
        return (
            <div className="threeMain-content-container">
                <div className="threeMain-content-top-text">
                    <p>Implementation of training programs for internal PR and staff development.</p>
                    <ul>
                        <li><img src={markImg} alt="mark" /> Webinar room</li>
                        <li><img src={markImg} alt="mark" /> Knowledge data base (wiki)</li>
                        <li><img src={markImg} alt="mark" /> Blogging</li>
                        <li><img src={markImg} alt="mark" /> Test and poll building</li>
                        <li><img src={markImg} alt="mark" /> Certification of participants</li>
                    </ul>
                </div>
                <p className="threeMain-content-bottom-text">
                    A possibility to select the best and gradually train all those who you invite to join your team.
                    <br/>
                    Raise the bar for the personnel by developing and implementing the selection system and constantly training your team. 
                </p>
                <img src={webinarsImg} className="threeMain-content-img" alt="screen" />
            </div>
        );
    }
};