import React, { useState } from 'react'
import "./seven-section-creator-landing-design.scss";
import * as materialModules from "@/shared/modules/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import avatarImg from "@/assets/avatar.png";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const SevenSectionCreatorLandingDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const isWideScreen = useMediaQuery('(min-width:769px)');
    const cardsToDisplay = isWideScreen ? 2 : 1;
    const carouselItems = [
        { title: 'Jennifer William 1', avatar: `${avatarImg}`, content: 'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.' },
        { title: 'Jennifer William 2', avatar: `${avatarImg}`, content: 'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.' },
        { title: 'Jennifer William 3', avatar: `${avatarImg}`, content: 'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.' },
        { title: 'Jennifer William 4', avatar: `${avatarImg}`, content: 'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.' },
    ];


    const handlePrev = () => {
        if (isWideScreen) {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0));

        }
        else {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));

        }
    };

    const handleNext = () => {
        if (isWideScreen) {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 2, carouselItems.length - 2));
        }
        else {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, carouselItems.length - 1));
        }
    };

    const handleClick = () => {
        setIsActive(!isActive);
    };



    return (
        <section>
            <div style={{ marginTop: "20px" }}>
                <h2 style={{ textAlign: "center" }} className='h22'>What our clients say </h2>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <p className="sub-text-description" >
                        Approve direct camping requests camping from brands, you’Il see the bried along with the payment details.
                    </p>

                </div>
            </div>
            <div className="main-card-rating-creator-landing-container"
                style={{ display: 'flex', overflowX: 'hidden' }}>
                <div className="card-rating-container-creator">
                    <div className="arrow-icons-footer" onClick={handlePrev}>
                        <KeyboardArrowLeftIcon className='right-arrow-l' />
                    </div>
                    {carouselItems.slice(currentIndex, currentIndex + cardsToDisplay).map((item, index) => (
                        <materialModules.Card sx={{ maxWidth: 505 }} ke={index} className="show-rating-card-seven-creator">
                            <materialModules.CardHeader
                                avatar={
                                    <materialModules.Avatar>
                                        <img src={item.avatar} alt="" />
                                    </materialModules.Avatar>
                                }
                                title={<materialModules.Typography className="customTitle">{item.title}</materialModules.Typography>}
                                action={
                                    <materialModules.Rating className="rating-on-card-creator" value={4} />
                                }
                            />
                            <materialModules.CardContent>
                                <materialModules.Typography variant="body2" color="text.secondary">
                                    {item.content}
                                </materialModules.Typography>

                                <div className="end-section-card-creator">
                                    <materialModules.Typography sx={{ mt: 2.5, fontWeight: 'bold' }} color="text.secondary">
                                        Nastyaswan
                                    </materialModules.Typography>
                                    <materialModules.Typography className="date-type">
                                        23.01.2024
                                    </materialModules.Typography>
                                </div>
                            </materialModules.CardContent>
                        </materialModules.Card>
                    ))}
                    <div className="arrow-icons-footer"  >
                        <KeyboardArrowRightIcon className='right-arrow-r' onClick={handleNext} />
                    </div>
                </div>
                <hr
                    className="carousel-line"
                    style={{
                        width: '60%',
                        background: `linear-gradient(to left, ${currentIndex % 4 === 0 ? 'rgba(219, 185, 157, 0.65)' : 'rgba(254, 146, 12, 1)'} 50%, rgba(219, 185, 157, 0.65) 50%)`,
                        marginBottom: "50px",
                        marginLeft: "300px"
                    }}
                    onClick={() => handleIndicatorClick((currentIndex + 2) % carouselItems.length)}
                />
            </div>
        </section>
    )
}

export default SevenSectionCreatorLandingDesign