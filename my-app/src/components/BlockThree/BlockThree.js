import React from 'react';
import ThreeMain from './ThreeMain/ThreeMain';
import './BlockThree.css';
import Backoffice from './ThreeMain/backoffice/Backoffice';
import FrontOffice from './ThreeMain/frontOffice/FrontOffice';
class BlockThree extends React.Component {
    render() {
        return (
            <section className="block-three" id="Functionality">
                <div className="center-main-block center-main-block-with-background">
                    <h2 className="text-uppercase block-three-title">
                        Simple actions. Tipping point
                    </h2>
                    <p className="block-three-description">
                        Being an expert, you realize that limitless possibilities provided by modern day technologies are available for you. Destroy negative image of the multi-level marketing as far as it concerns your company by altering only a few details. Without making any changes to the company’s structure, its basic principles and operating procedure, systematize its activities and allow your employees to develop the structure. Excel in what you do.
                    </p>
                    <ThreeMain data={{
                        tabs: ["backoffice","FRONT OFFICE"],
                        content: [
                            <Backoffice />, 
                            <FrontOffice />
                        ]
                    }} classTabs = {"flex-al-center text-uppercase threeMain-first-tabs"} />
                </div>
            </section>
        );
    }
  };
  
  export default BlockThree;