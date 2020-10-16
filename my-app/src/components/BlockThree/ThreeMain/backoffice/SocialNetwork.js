import React from 'react';
import socialnetImg from '../../../../IMG/socialnet.png';
import markImg from '../../../../IMG/Shape8.png';

export default class SocialNetwork extends React.Component {
    render() {
        return (
            <div className="threeMain-content-container">
                <div className="threeMain-content-top-text">
                    <p>Same page tool. Closed social network aimed at uniting your community in order to bring it to a new level of information awareness and involvement.</p>
                    <ul>
                        <li><img src={markImg} alt="mark" /> RSS feed</li>
                        <li><img src={markImg} alt="mark" /> Polls</li>
                        <li><img src={markImg} alt="mark" /> Blog</li>
                        <li><img src={markImg} alt="mark" /> Knowledge data base</li>
                        <li><img src={markImg} alt="mark" /> Event calendar</li>
                    </ul>
                </div>
                <p className="threeMain-content-bottom-text">The company’s performance depends on who promotes its product and the way how it is done. If you have a lot of employees, it is difficult to attain a uniform level of knowledge without gaps and misrepresentations, to communicate with each individual, to provide timely information, to make the personnel take important issues into account. Oftentimes people come out with lots of ideas, and it creates chaos at the workplace.</p>
                <img src={socialnetImg} className="threeMain-content-img" alt="screen" />
            </div>
        );
    }
};