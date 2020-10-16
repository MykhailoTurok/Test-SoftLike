import React from 'react';
import './BlockFour.css';
import imgOnboarding from '../../IMG/Shape3.png';
import imgTesting from '../../IMG/Shape15.png';
import imgTraining from '../../IMG/Shape16.png';
import imgInteraction from '../../IMG/shape-22.png';
import imgMobility from '../../IMG/shape-23.png';
import imgLeadGeneration from '../../IMG/shape-24.png';

const contents = [{
        blockTitle: 'Onboarding',
        title: 'Inspire the best',
        text: 'Lack of information about a company is regarded as cheating. And the policy “everyone can join us” undermines expertness of the company’s team. The best experts prefer working at a reliable company with skilled personnel and good prospects. ',
        img: imgOnboarding,
        imgName: 'Onboarding'
    },
    {
        blockTitle: 'Testing',
        title: 'Select the worthy',
        text: 'By letting anybody join your company, you build a community of the unknowns.  Persons who lack  business skills bring discredit on your company, blame you for their own failures and damage your company’s reputation',
        img: imgTesting,
        imgName: 'Testing'
    },
    {
        blockTitle: 'Training',
        title: 'Provide knowledge',
        text: 'Orientation towards network growth instead of quality of sales has a negative impact on the company’s stability and its reputation. Focusing on the quality of sales and its relations with the customers, the MLM companies improve their financial performance',
        img: imgTraining,
        imgName: 'Training'
    },
    {
        blockTitle: 'Вовлечение',
        title: 'Мотивируйте на успех',
        text: 'Многие люди достаточно саморганизованы, чтоб без контроля, без контакта с командой, “чувства локтя”, meetups, не терять мотивацию и оставаться продуктивным? Не вовлеченные в процесс консультанты - мертвый груз компании, расходующий ее усилия зря, выгоревшие сотрудники',
        img: imgInteraction,
        imgName: 'Вовлечение'
    },
    {
        blockTitle: 'Мобильность',
        title: 'Повышайте скорость работы',
        text: 'Сейчас - эпоха покупок в интернете, когда все доступно по одному клику. Задержки в коммуникациях с покупателем - это барьер покупки, который может помешать ее осуществлению.',
        img: imgMobility,
        imgName: 'Мобильность'
    },
    {
        blockTitle: 'Лидогенерация',
        title: 'Создавайте поток',
        text: 'Продавая одни и те же продукты в одних и тех же местах, не управляя географией охвата, компания своими же руками ограничивает собственный рост.',
        img: imgLeadGeneration,
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
            <div className="flex-al-center blockFour-main-content-blockImg">
                <img src={obj.img} alt={obj.imgName} />
            </div>
            <div className="blockFour-main-content-blockTitle">
                <p className="text-uppercase">{obj.blockTitle}</p>
            </div>
        </div>        
    )
}

const blockNumbers = contents.map((element,i) => (
    <div className="flex-al-center blockNumbers"><p>#{i+1}</p></div>
));

const content = contents.map(element => buildContentBlock(element));

class BlockFour extends React.Component {
    render() {
        return (
            <section className="blockFour">
                <div className="center-main-block">
                    <p className="text-uppercase blockFour-title">Attain more <br/> using your skills</p>
                    
                    <div className="blockFour-main-container">
                        <div className="flex-al-center stretch-container blockFour-main-numbers">
                            <div className="stretch-left">
                                <div className="stretch-line"></div>
                            </div>
                            {blockNumbers}
                            <div class="move-chevron-container">
                                <div class="chevron"></div>
                                <div class="chevron"></div>
                                <div class="chevron"></div>
                            </div>
                        </div>
                        <div className="blockFour-main-content">
                            {content}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};
export default BlockFour;