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
                            <p className="text-uppercase threeMain-second-tab">Social network</p>, 
                            <p className="text-uppercase threeMain-second-tab">Training and certification</p>,
                            <p className="text-uppercase threeMain-second-tab">Internal (local) messeneger</p>,
                            <p className="text-uppercase threeMain-second-tab">Referral system</p>
                    ],
                    content: [
                        <SocialNetwork />,
                        <TrainingAndCertification />,
                        <InternalMessenger />,
                        <ReferralSystem />
                    ]
                }} classTabs={"flex-al-center threeMain-second-tabs"} />
            </React.Fragment>
        );
    }
};