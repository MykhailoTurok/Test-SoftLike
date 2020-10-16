import React from 'react';
import marketingImg from '../../../../IMG/marketing.png';
import markImg from '../../../../IMG/Shape8.png';
export default class AutomatedMarketing extends React.Component {
    render() {
        return (
            <div className="threeMain-content-container">
                <div className="threeMain-content-top-text">
                    <p>Bulk mailing for simultaneous delivery of information or creation of a letter thread with an aim to prompt the message recipient into action (automatic marketing funnel)</p>
                    <ul>
                        <li><img src={markImg} alt="mark" /> Letter templates + flexible template editor</li>
                        <li><img src={markImg} alt="mark" /> Flexible management of recipient list and working sequence</li>
                        <li><img src={markImg} alt="mark" /> User-friendly intuitive interface, simple set-up</li>
                    </ul>
                </div>
                <p className="threeMain-content-bottom-text">MLM oversteps the limits of interpersonal communication and goes online.Offline possibilities for creating traffic are very limited.  
                <br/>
                <br/>
                Do you want to give your employees to improve sales and develop your network still faster? </p>
                <img src={marketingImg} className="threeMain-content-img" alt="screen" />
            </div>
        );
    }
};