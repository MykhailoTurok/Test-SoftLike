import React from 'react';
import './BlockFour.css';

const contents = [{
        bolockTitle: 'Onboarding',
        title: 'Inspire the best',
        text: 'Lack of information about a company is regarded as cheating. And the policy “everyone can join us” undermines expertness of the company’s team. The best experts prefer working at a reliable company with skilled personnel and good prospects. ',
        img: '../../IMG/Shape 3.png',
        imgName: 'Onboarding'
    },
    {
        bolockTitle: 'Testing',
        title: 'Select the worthy',
        text: 'By letting anybody join your company, you build a community of the unknowns.  Persons who lack  business skills bring discredit on your company, blame you for their own failures and damage your company’s reputation',
        img: '../../IMG/Shape%15.png',
        imgName: 'Testing'
    },
    {
        bolockTitle: 'Training',
        title: 'Provide knowledge',
        text: 'Orientation towards network growth instead of quality of sales has a negative impact on the company’s stability and its reputation. Focusing on the quality of sales and its relations with the customers, the MLM companies improve their financial performance',
        img: '../../IMG/Shape%16.png',
        imgName: 'Training'
    },
    {
        bolockTitle: 'Вовлечение',
        title: 'Мотивируйте на успех',
        text: 'Многие люди достаточно саморганизованы, чтоб без контроля, без контакта с командой, “чувства локтя”, meetups, не терять мотивацию и оставаться продуктивным? Не вовлеченные в процесс консультанты - мертвый груз компании, расходующий ее усилия зря, выгоревшие сотрудники',
        img: '../../IMG/logo.png',
        imgName: 'Вовлечение'
    },
    {
        bolockTitle: 'Мобильность',
        title: 'Повышайте скорость работы',
        text: 'Сейчас - эпоха покупок в интернете, когда все доступно по одному клику. Задержки в коммуникациях с покупателем - это барьер покупки, который может помешать ее осуществлению.',
        img: '../../IMG/Shape%23.png',
        imgName: 'Мобильность'
    },
    {
        bolockTitle: 'Лидогенерация',
        title: 'Создавайте поток',
        text: 'Продавая одни и те же продукты в одних и тех же местах, не управляя географией охвата, компания своими же руками ограничивает собственный рост.',
        img: '../../IMG/Shape%24.png',
        imgName: 'Лидогенерация'
    }
];

function buildContentBlock (obj) {
    return (
        <div className="flex-al-center blockFour-main-content-blocks">
            <div className="blockFour-main-content-blockText">
                <h2>{obj.title}</h2>
                <p>{obj.text}</p>
            </div>
            <div className="blockFour-main-content-blockImg">
                <img src={obj.img} alt={obj.imgName} />
            </div>
            <div className="blockFour-main-content-blockTitle">
                <span className="text-uppercase">{obj.blockTitle}</span>
            </div>
        </div>        
    )
}

const blockNumbers = contents.map((element,i) => (
    <div className="flex-al-center blockNumbers"><span>#{i+1}</span></div>
));

const content = contents.map(element => buildContentBlock(element));

class BlockFour extends React.Component {
    render() {
        return (
            <div className="blockFour">
                <p className="text-uppercase blockFour-title">Attain more <br/> using your skills</p>
                
                <div className="blockFour-main">
                    <div className="flex-al-center blockFour-main-numbers">
                        {blockNumbers}
                    </div>
                    <div className="blockFour-main-content">
                        {content}
                    </div>
                </div>
            </div>
        )
    }
};
export default BlockFour;