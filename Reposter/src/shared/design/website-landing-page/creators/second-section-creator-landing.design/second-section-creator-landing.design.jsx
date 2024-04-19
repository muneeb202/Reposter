import React, { useState } from 'react'
import "./second-section-creator-landing.design.scss";
import * as materialModules from "@/shared/modules/material";

import benefitDollarImg from "@/assets/benefit-dollar.png";
import handshakeImg from "@/assets/handshake.png";
import userAltImg from "@/assets/users-alt.png";

const SecondSectionCreatorLandingDesign = () => {
    const [cardList, setCardList] = useState([
        {
            cardImg: `${benefitDollarImg}`,
            cardTitle: "Expanded Reach",
            cardDecription: "Reposting boosts the original creator's visibility, reaching a broader audience.",

        },
        {
            cardImg: `${handshakeImg}`,
            cardTitle: "Expanded Reach",
            cardDecription: "Sharing content opens doors to collaborations and audience cross-pollination.",

        },
        {
            cardImg: `${userAltImg}`,
            cardTitle: "Expanded Reach",
            cardDecription: "Reposting fosters community engagement, creating positive interactions.",

        },
    ])
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();


    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <section className="main-card-creator-section" style={{ }}>
            <h2 className="text-center-second-section-creator h22">The benefits of collaboration with us</h2>
            <div className={`fade-in-section-creator ${isVisible ? 'is-visible' : ''} benefits-card-list`}
                ref={domRef}
            >
                {cardList.map((card, index) => {
                    return (
                        <materialModules.Card className='second-card-list-creator' key={index}>
                            <img src={card.cardImg} alt="" className="card-img-s" />
                            <h3 className="card-title-s">{card.cardTitle}</h3>
                            <materialModules.CardContent>
                                <p className="card-descp-s">
                                    {card.cardDecription}
                                </p>
                            </materialModules.CardContent>
                        </materialModules.Card>
                    )
                })}
            </div>
        </section>
    )
}

export default SecondSectionCreatorLandingDesign