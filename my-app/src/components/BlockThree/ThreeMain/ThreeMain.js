import React from 'react';
import './ThreeMain.css';
class ThreeMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberTabs: 0
        }
        this.getTabsWithContent = this.getTabsWithContent.bind(this);
    }

    getTabsWithContent(tabs) {
        return tabs.map((el, i)=>{
            return (
                <div className={this.props.classTabs} key={el} activecheck = {this.state.numberTabs === i ? 'active' : ''} onClick = { () => this.setState({numberTabs: i})}>
                    {el}
                    <div className="underline"></div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="flex-al-center threeMain-tabs-conteiner">
                    {this.getTabsWithContent(this.props.data.tabs)}
                </div>

                {this.props.data.content[this.state.numberTabs]}
                
            </React.Fragment>
        );
    }
};
  
export default ThreeMain;