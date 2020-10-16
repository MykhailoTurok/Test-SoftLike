import React from 'react';
import chat3Img from '../../../../IMG/chat3.png';

export default class InternalMessenger extends React.Component {
    render() {
        return (
            <div className="threeMain-content-container">
                <div className="threeMain-content-top-text">
                    <p>With a wide range of possibilities which enable comprehensive exchange of information within the team in the workplace. Personal and group chats make it possible to exchange messages and files, make phone and video calls, store and search for messages, send audio messages.  </p>
                    <ul>
                        
                    </ul>
                </div>
                <p className="threeMain-content-bottom-text">
                    Major part of the issues has to be resolved right now. If even a minor delay happens, you miss out on the opportunities. 
                    <br/>
                    <br/>
                    Do you need prompt decisions and realized opportunities provided by the messengers? 
                </p>
                <img src={chat3Img} className="threeMain-content-img" alt="screen" />
            </div>
        );
    }
};