import React from 'react';
import '../../CSS/fonts.css';
import '../../CSS/animation.css'
import './BlockOne.css';
// import Button from '../Button/Button.js';

// Importing pictures
import Logo from '../../IMG/logo.png';
import Phone from '../../IMG/Shape 14.png';
import Email from '../../IMG/Shape 13.png';
import MainPic from '../../IMG/Hue_Saturation 1.png';


class BlockOne extends React.Component {
  render() {
    return (
		<section className="block-one">
            <header className="flex-al-center header">
                <div className="conteiner-logo">
                    <img src={Logo} alt="Logo" />
                    <span className="text-logo">LOGO</span>
                </div>
                <ul className="flex-al-center header-conteiner-menu">
                    <li>
                        <span className="text-uppercase">Функционал</span>
                    </li>
                    <li>
                        <span className="text-uppercase">Пакеты</span>
                    </li>
                    <li className="header-menu-lastLi">
                        <img src={Phone} alt="Phone" className="header-menu-icons" />
                        <span>+1111111100</span>
                    </li>
                    <li className="header-menu-lastLi">
                        <img src={Email} alt="Email" className="header-menu-icons" />
                        <a href="#" className="header-menu-link">hello@nlab.com</a>
                    </li>
                </ul>
            </header>
            <div className="flex-al-center">
                <div className="action-text">
                    <h2 className="text-uppercase">Raise the next generation of leaders</h2>   
                    <ul>
                        <li className="block-one-li-one">
                            <p className="block-one-li-one-one">Networking Lab is the fastest way to grow</p>
                            <p className="block-one-li-one-two">Virtual office of a multi-level marketing company, platform for integrated digitalization of a MLM company’s activities.</p>
                        </li>
                        <li className="block-one-li-two">
                            Attract skilled professionals, unite your team to pursue a common goal working expediently and
                            in perfect coordination.
                        </li>
                        <li className="block-one-li-two block-one-li-three">
                            Provide your market research consultants with efficient tools in order to achieve success in
                            online business.
                        </li>
                    </ul>
                    <a href="#" className="button-conteiner">Become the company of the new generation</a>
                </div>
                <div>
                    <img src={MainPic} alt="picture" className="block-one-img" />
                </div>
            </div>
        </section>
    );
  }
};

export default BlockOne;