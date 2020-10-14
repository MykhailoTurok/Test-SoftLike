import React from 'react';
import ThreeMain from '../ThreeMain';
import InternalMessenger from './InternalMessenger';
import ReferralSystem from './ReferralSystem';
import SocialNetwork from './SocialNetwork.js'
import TrainingAndCertification from './TrainingAndCertification';

export default class Backoffice extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className="threeMain-first-tabs-description">Simplify interaction between your team members</p>
                <ThreeMain data={{
                    tabs: [
                            <p className="text-uppercase threeMain-secondTab">Social network</p>, 
                            <p className="text-uppercase threeMain-secondTab">Training and certification</p>,
                            <p className="text-uppercase threeMain-secondTab">Internal (local) messeneger</p>,
                            <p className="text-uppercase threeMain-secondTab">Referral system</p>
                    ],
                    content: [
                        <SocialNetwork />,
                        <TrainingAndCertification />,
                        <InternalMessenger />,
                        <ReferralSystem />
                    ]
                }} classTabs={"threeMain-secondTabs"} />
            </React.Fragment>
        );
    }
};