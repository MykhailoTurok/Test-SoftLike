import React from 'react';
import Button from '../Button/Button';
import './BlockFive.css';
import blockFivetopImg from '../../IMG/blockFiveTopImg.png'
import blockFiveImg1 from '../../IMG/blockFiveImg1.png'
import blockFiveImg2 from '../../IMG/blockFiveImg2.png'
import blockFiveImg3 from '../../IMG/blockFiveImg3.png'
import blockFiveImg4 from '../../IMG/blockFiveImg4.png'
import blockFiveImg5 from '../../IMG/blockFiveImg5.png'

export default class BlockFive extends React.Component {
    render() {
        return (
            <section className="block-five">
                <div className="flex-al-center center-main-block center-main-block-with-background">
                    <div className="flex-al-center block-five-top">
                        <div className="block-five-top-img-container">
                            <img src={blockFivetopImg} alt="People near the screen with statistic" />
                        </div>
                        <div className="block-five-top-text-container">
                            <p className="top-right-text">Prior to full-scale testing of the platform which involves your team members, you can check our demo version and see how we arranged everything (no registration is needed)</p>
                            <p className="top-right-text welcome">Welcome. The kettle is on the boil :)</p>
                            <Button text="Take a look at the system" />
                        </div>
                    </div>
                    <div className="flex-al-center block-five-bottom">
                        <div className="flex-al-center block-five-bottom-blocks">
                            <div className="flex-al-center block-five-bottom-img-container">
                                <img src={blockFiveImg1} alt="" />
                            </div>
                            <p>New platform format oriented towards the problems of the MLM companies which the latter had to solve manually previously</p>
                        </div>
                        <div className="flex-al-center block-five-bottom-blocks">
                            <div className="flex-al-center block-five-bottom-img-container">
                                <img src={blockFiveImg2} alt="" /> 
                            </div>
                            <p>Seamless combination of front office and back office, common database – fully integrated approach</p>
                        </div>
                        <div className="flex-al-center block-five-bottom-blocks">
                            <div className="flex-al-center block-five-bottom-img-container">
                                <img src={blockFiveImg3} alt="" />
                            </div>
                            <p>Mobile application + desktop version give you a possibility to work in a format which suits you best, to be mobile and  thorough at the same time</p>
                        </div>
                        <div className="flex-al-center block-five-bottom-blocks">
                            <div className="flex-al-center block-five-bottom-img-container">
                                <img src={blockFiveImg4} alt="" />
                            </div>
                            <p>The system is simple to use but capable of solving very important business tasks </p>
                        </div>
                        <div className="flex-al-center block-five-bottom-blocks">
                            <div className="flex-al-center block-five-bottom-img-container">
                                <img src={blockFiveImg5} alt="" />
                            </div>
                            <p>The platform is being constantly developed – each day we improve and amend it</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
  };