import React from 'react';
import Button from '../Button/Button';
import './BlockFive.css';
import topImg from '../../IMG/blockFiveTopImg.png'
export default class BlockFive extends React.Component {
    render() {
        return (
            <section className="block-five">
                <div className="flex-al-center center-main-block center-main-block-with-background">
                    <div className="flex-al-center block-five-top-container">
                        <div className="block-five-img-container">
                            <img src={topImg} alt="People near the screen with statistic" />
                        </div>
                        <div className="block-five-top-right-container">
                            <p className="top-right-text">Prior to full-scale testing of the platform which involves your team members, you can check our demo version and see how we arranged everything (no registration is needed)</p>
                            <p className="top-right-text welcome">Welcome. The kettle is on the boil :)</p>
                            <Button text="Take a look at the system" />
                        </div>
                    </div>

                </div>
            </section>
        );
    }
  };