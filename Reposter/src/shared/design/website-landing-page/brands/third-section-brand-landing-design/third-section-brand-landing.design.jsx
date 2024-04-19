import React, { useState, useEffect } from 'react'
import "./third-section-brand-landing-design.scss"
import * as materialModules from "@/shared/modules/material";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import pieChartIconImg from "@/assets/pie-chart-icon.png";
import userIconImg from "@/assets/user-icon.png";
import coinIconImg from "@/assets/coin-icon.png";
import fileIconImg from "@/assets/file-icon.png";

import ThirdChildAnimatedComponent from './third-child-animated-component';
const ThirdSectionBrandLandingDesign = () => {
    const [counter, setCounter] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    const [cardList, setCardList] = useState([
        {
            cardImg: `${userIconImg}`,
            cardTitle: "Organic Influencer and Creator",
            value: "22000",
            format: 'number',
            start: 19000, end: 22000

        },
        {
            cardImg: `${pieChartIconImg}`,
            cardTitle: "Organic Brands Growth",
            cardDecription: "Sharing content opens doors to collaborations and audience cross-pollination.",
            value: "480%",
            format: 'percentage',
            start: 0, end: 140

        },
        {
            cardImg: `${fileIconImg}`,
            cardTitle: "Brands Joining Reposter.ai",
            value: "50+ Millions+",
            format: 'millions',
            start: 0, end: 50

        },
        {
            cardImg: `${coinIconImg}`,
            cardTitle: "Revenue brands generating",
            value: "10943224",
            format: 'bigNumber',
            start: 1100000, end: 1900000

        },
    ]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <section className="main-card-creator-section" style={{}}>
            <h2 className="text-center-second-section-creator">Join the crew where sales grow!</h2>
            <div className={`fade-in-section-creator ${visible ? 'is-visible' : ''} third-section-main-card-list`}
                ref={domRef}
            >
                {cardList.map((card, index) => {
                    return (
                        <materialModules.Card className='third-card-brand' key={index}>
                            <img src={card.cardImg} alt="" className="card-img-s-brand" />
                            <h3 className="card-title-s-brand">{card.cardTitle}</h3>
                            <materialModules.CardContent>
                                <ScrollTrigger onEnter={() => setCounter(true)}>
                                    <h2
                                        className="color-heading-landing marginB-state-o"
                                        style={{ color: "#424242"  }}
                                    >
                                        {counter &&
                                            <>
                                                {card.format === 'number' &&
                                                    <CountUp start={card.start} end={card.end} duration={1} delay={0.5} />
                                                }
                                                {card.format === 'percentage' &&
                                                    <CountUp start={0} end={140} duration={1} delay={0.6} suffix="%" />
                                                }
                                                {card.format === 'millions' &&
                                                    <CountUp start={0} end={50} duration={1} delay={0.7} suffix=" Millions" />
                                                }
                                                {card.format === 'bigNumber' &&
                                                    <CountUp start={card.start} end={card.end} duration={1} delay={0.8} />
                                                }
                                            </>
                                        }
                                    </h2>
                                </ScrollTrigger>
                            </materialModules.CardContent>
                        </materialModules.Card>
                    )
                })}
            </div>
        </section>
    )
}

export default ThirdSectionBrandLandingDesign