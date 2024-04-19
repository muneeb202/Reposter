import React, { useState, useEffect } from 'react';
import "./second-section-brand-landing-design.scss";
import * as materialModules from "@/shared/modules/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import avatarImg from "@/assets/avatar.png";
import showStatecardOneImg from "@/assets/show-state-card-one.png";
import showStatecardSecondImg from "@/assets/third-card-stat.jpeg";
import amazoncardImg from "@/assets/amazon-card.png";
import showCardStateThreeImg from "@/assets/show-card-state-three.jpg";
import amazoncardOtherImg from "@/assets/attachment.svg";

const SecondSectionBrandLandingDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const isWideScreen = useMediaQuery('(min-width:769px)');
    const domRef = React.useRef();
    const [visible, setVisible] = React.useState(false);

    const carouselItems = [
        { title: 'Jennifer William 1', cardImg: ` ${showStatecardSecondImg}` },
        { title: 'Jennifer William 2', cardImg: `${showStatecardOneImg}` },
        { title: 'Jennifer William 2', cardImg: `${amazoncardImg}` },
        { title: 'Jennifer William 3', cardImg: `${amazoncardOtherImg}` },
        { title: 'Jennifer William 4', cardImg: `${showCardStateThreeImg}` },
    ];



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [carouselItems.length]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);


    return (
        <section>
            <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <h2 className='headingSecond'>Brand's Achievement</h2>
                </div>
            </div>
            <div className={`fade-in-section-creator ${visible ? 'is-visible' : ''} main-card-rating-creator-landing-container`}
                ref={domRef}
                style={{ display: 'flex', overflowX: 'hidden',transition: 'opacity 1s ease' /* Adjust the duration here */
                }}>
                <div className="card-state-container-brand">
                    {carouselItems.map((item, index) => (
                        <materialModules.Card className="brand-state-cards">
                            <img
                                src={item.cardImg}
                                className='card-main-img-brand'
                            />
                            <materialModules.CardContent>
                                <div className='show-text-state-brand-card'>
                                    <materialModules.Typography variant="body2" color="text.secondary">
                                        Average ROI
                                    </materialModules.Typography>
                                    <materialModules.Typography variant="body2" className="state-num-brand-c" style={{ width: '60px' }}>
                                        300%
                                    </materialModules.Typography>
                                </div>
                                <hr className='divider-card-info' />
                                <div className='show-text-state-brand-card'>
                                    <materialModules.Typography variant="body2" color="text.secondary">
                                        Average ROI
                                    </materialModules.Typography>
                                    <materialModules.Typography variant="body2" className="state-num-brand-c" style={{ width: '60px' }}>
                                        300%
                                    </materialModules.Typography>
                                </div>

                            </materialModules.CardContent>
                        </materialModules.Card>
                    ))}
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

export default SecondSectionBrandLandingDesign