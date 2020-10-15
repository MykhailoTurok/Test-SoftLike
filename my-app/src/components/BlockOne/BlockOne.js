import React from 'react';
import '../../CSS/fonts.css';
import '../../CSS/animation.css'
import './BlockOne.css';
import Button from '../Button/Button.js';

// Importing pictures
import Logo from '../../IMG/logo.png';
import Phone from '../../IMG/Shape 14.png';
import Email from '../../IMG/Shape 13.png';
import MainPic from '../../IMG/Hue_Saturation 1.png';


class BlockOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            stretchLineHeight: 0,
        }
        this.stretchList = React.createRef();
    }
    
    componentDidMount(){
        this.showTitle(['Raise the next generation of leaders','Duplicate your success online','Make the best distributors', 'Maximize yourbusiness'])
        this.changeStretchLineHeight();
    }
    
    changeStretchLineHeight(){
        setTimeout(() => {
            let list = this.stretchList.current;
            let lastItem = list.querySelectorAll('li')[list.querySelectorAll('li').length - 1];
    
            let y1 = list.getBoundingClientRect().top
            let y2 = lastItem.getBoundingClientRect().top
            let r = y2 - y1
    
            this.setState({ stretchLineHeight: r-10 });
        }, 1000)
    }
    
    showTitle(text){
        let i = 0;
        let result = '';
        let wordDone = false;
    
        setInterval(() => {
            if(!wordDone){
                if(result.length < text[i].length){
                    result += text[i][result.length]
                } else {
                    wordDone = !wordDone;
                }
            } else {
                if(result.length > 0){
                    let arr = result.split('')
                    arr.pop();
                    result = arr.join('')
                } else {
                    wordDone = !wordDone;
                    changeText()
                }            
            }
            this.setState({ title: result })
    
            function changeText(){
                i++
                if(i >= text.length){
                    i = 0;
                }
            }
        }, 50)
    }

    render() {
        return (
            <section className="block-one">
                <div className="center-main-block">
                    <header className="flex-al-center header">
                        <a href="_blank" className="conteiner-logo">
                            <img src={Logo} alt="Logo" />
                            <span className="text-logo">LOGO</span>
                        </a>
                        <ul className="flex-al-center header-conteiner-menu">
                            <li>
                                <a href="#Functionality" className="text-uppercase">Функционал</a>
                            </li>
                            <li>
                                <a href="#Packages" className="text-uppercase">Пакеты</a>
                            </li>
                            <li className="header-menu-lastLi">
                                <img src={Phone} alt="Phone" className="header-menu-icons" />
                                <a href="tel:+1111111100">+1111111100</a>
                            </li>
                            <li className="header-menu-lastLi">
                                <img src={Email} alt="Email" className="header-menu-icons" />
                                <a href="mailto:hello@nlab.com" className="header-menu-link">hello@nlab.com</a>
                            </li>
                        </ul>
                    </header>
                    <div className="flex-al-center block-one-main">
                        <div className="block-one-text-container">
                            <h2 className="text-uppercase title-appearing">{this.state.title}</h2>

                            <div className="stretch-container">
                                <div className="stretch-left">
                                    <div className="stretch-line" style={{ height: this.state.stretchLineHeight }}></div>
                                </div>
                                <ul ref={this.stretchList} className="stretch-right">
                                    <li className="fade-in block-one-li-networking">
                                        Networking Lab is the fastest way to grow
                                    </li>
                                    <li className="fade-in block-one-li-virtualOffice">
                                        Virtual office of a multi-level marketing company, platform for integrated digitalization of a MLM company’s activities.
                                    </li>
                                    <li className="fade-in block-one-li-attractSkilled">
                                        Attract skilled professionals, unite your team to pursue a common goal working expediently and
                                        in perfect coordination.
                                    </li>
                                    <li className="fade-in block-one-li-attractSkilled block-one-li-four">
                                        Provide your market research consultants with efficient tools in order to achieve success in
                                        online business.
                                    </li>
                                </ul>
                            </div>   
                            
                            <Button text="Become the company of the new generation" />
                        </div>
                        <div>
                            <img src={MainPic} alt="illustration of a schedule" className="block-one-img" />
                        </div>
                    </div>
                </div>
                
            </section>
        );
    }
};

export default BlockOne;