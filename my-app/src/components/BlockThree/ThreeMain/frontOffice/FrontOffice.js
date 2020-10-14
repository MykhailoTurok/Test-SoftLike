import React from 'react';
import ThreeMain from '../ThreeMain';
import AutomatedMarketing from './AutomatedMarketing';
import LandingPageBuilder from './LandingPageBuilder';

export default class FrontOffice extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className="threeMain-first-tabs-description">Provide tools for development of your unit managers online</p>
                <ThreeMain data={{
                    tabs: [
                        <p className="text-uppercase threeMain-secondTab">Automated marketing (mail user agent)</p>, 
                        <p className="text-uppercase threeMain-secondTab">Landing page builder</p>
                    ],
                    content: [
                        <AutomatedMarketing />,
                        <LandingPageBuilder />
                    ]
                }} classTabs={"threeMain-secondTabs"} />
            </React.Fragment>
        );
    }
};