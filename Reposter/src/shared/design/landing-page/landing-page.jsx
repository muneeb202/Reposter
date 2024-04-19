import React, { useState, useRef, useEffect } from 'react'
import "./landing-page.scss"
import mainLandingImg from "@/assets/main-landing-img.jpg";
import sharedFolderImg from "@/assets/shared folder.png";
import automaticImg from "@/assets/Automatic.png";
import registerImg from "@/assets/Registration.png";
import workspaceImg from "@/assets/Workspace.png";
import popularImg from "@/assets/Popular.png";
import visaImg from "@/assets/Visa.png";
import helpImg from "@/assets/Help.png";
import landingImgOne from "@/assets/landing-img-one.png";
import testImgOne from "@/assets/test-img-one.png";
import testImgTwo from "@/assets/test-i-two.png";
import testImgThree from "@/assets/testImgTwo.png";
import testImgFour from "@/assets/imgFour.png";
import landingpageAvatarImg from "@/assets/landing-page-avatar.png";
import * as materialModules from "@/shared/modules/material";
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import LandingHeaderDesign from '../landing-header/landing-header.design';
const LandingPageDesign = () => {
    const cardContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [cardsInView, setCardsInView] = useState(3);

    const handleScroll = () => {
        if (cardContainerRef.current) {
            setScrollPosition(cardContainerRef.current.scrollLeft);
        }
    }

    const updateCardsInView = () => {
        if (cardContainerRef.current) {
            const containerWidth = cardContainerRef.current.offsetWidth;
            const cardWidth = "482px"; // Set your fixed card width here
            const newCardsInView = Math.floor(containerWidth / cardWidth);
            setCardsInView(newCardsInView);
        }
    };

    useEffect(() => {
        const cardContainer = cardContainerRef.current;

        updateCardsInView();

        // Set up automatic scrolling every 3 seconds (adjust the interval as needed)
        const intervalId = setInterval(() => {
            const newScrollPosition = scrollPosition + cardContainer.offsetWidth;

            cardContainerRef.current.scrollTo({
                left: newScrollPosition < cardContainerRef.current.scrollWidth ? newScrollPosition : 0,
                behavior: 'smooth',
            });
        }, 3000);

        // Update cards in view when the window is resized
        window.addEventListener('resize', updateCardsInView);

        // Clean up the interval and event listener on component unmount
        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', updateCardsInView);
        };
    }, [scrollPosition]);


    return (
        <div>
            {/* <LandingHeaderDesign /> */}
            <div style={{ backgroundImage: `url(${mainLandingImg})` }} className="main-div">
                <div style={{ display: "flex", marginTop: "5px", background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="overlay-div1">
                        <div className='sidebar-img-container'>
                            <img src={sharedFolderImg} alt="" className='sidebar-img' />
                            <img src={automaticImg} alt="" className='sidebar-img' />
                            <img src={registerImg} alt="" className='sidebar-img' />
                            <img src={workspaceImg} alt="" className='sidebar-img' />
                            <img src={popularImg} alt="" className='sidebar-img' />
                            <img src={visaImg} alt="" className='sidebar-img' />
                            <img src={helpImg} alt="" className='sidebar-img' />
                            {/* </div> */}
                        </div>
                    </div>
                    <div className='main-text-container'>
                        <div style={{ display: "flex" }}>
                            <div style={{ display: 'flex', flexDirection: "column", margin: "25px 10px" }}>
                                <p className="main-landing-tex-one" style={{ color: "#FE920C", textShadow: "2px 2px 2px #000000 " }}>
                                    Turn Your Creativity Into Cash – Shine Bright with Reposter!
                                </p>
                                <p className="second-text-p" style={{ fontSize: "50px",color: "#FFFF", textShadow: "2px 2px 2px #000000 " }}>
                                    "Craft content, share stories, and watch your bank account grow!"
                                </p>
                                <div className='main-user-data-landing-page'>
                                    <div>
                                        <h2 className="creator-reposter-landing-heading"
                                            style={{ color: "#FFFF", textShadow: "2px 2px 2px #000000 " }}>
                                            CREATOR / REPOSTER
                                        </h2>
                                        <materialModules.Button className="going-to-dashboard-btn">Dashboard</materialModules.Button>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: "wrap" }}>
                                        <div >
                                            <h2 style={{
                                                fontSize: "60px", color: "#FFF",
                                                textShadow: "2px 2px 2px #000000 "
                                            }}>Jennifer William</h2>
                                            <h4 style={{
                                                display: 'flex', justifyContent: "end", color: "#FFF",
                                                textShadow: "2px 2px 2px #000000 "
                                            }}>Entry Level</h4>
                                            <div className='landing-text-user'>
                                                <h4 style={{
                                                    color: "#FFF",
                                                    textShadow: "2px 2px 2px #000000", fontSize: "20px", width: "15px"
                                                }}>20% Commission</h4>
                                                <h4 style={{
                                                    color: "#5A5A5A",
                                                    textShadow: "2px 2px 2px #000000", fontSize: "20px", width: "15px"
                                                }}>80M Views</h4>
                                               <h4 style={{
                                                    color: "#FFF",
                                                    textShadow: "2px 2px 2px #000000",
                                                    fontSize: "20px",
                                                    width: "15px"
                                                }}>65K+ Earned</h4>

                                            </div>
                                        </div>
                                        <div>
                                            <img src={landingpageAvatarImg} style={{ width: "75px", marginLeft: "10px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='heading-color' style={{ margin: "10px 0 0 25px" }}>Find Job</h2>
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px", width: "100%" }}>
                    <div className="find-job-container">
                        <img src={landingImgOne} alt="" className='find-job-img' />
                        <h3>Title , commission and retainer</h3>
                    </div>
                    <div className="find-job-container">
                        <img src={landingImgOne} alt="" className='find-job-img' />
                        <h3>Title , commission and retainer</h3>
                    </div>
                    <div className="find-job-container">
                        <img src={landingImgOne} alt="" className='find-job-img' />
                        <h3>Title , commission and retainer</h3>
                    </div>
                    <div className="find-job-container">
                        <img src={landingImgOne} alt="" className='find-job-img' />
                        <h3>Title , commission and retainer</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center", width: "100%" }}>
                        <materialModules.Button className="landing-page-footer-btn">View all</materialModules.Button>
                    </div>
                </div>
            </div>
            <div className="main-text-img-c">
                <img src={testImgOne} alt="" className="test-img-c" />
                <img src={testImgTwo} alt="" className="test-img-c" />
            </div>
            <div className="main-text-img-c">
                <img src={testImgThree} alt="" className="test-img-cc" />
            </div>
            <div className="main-text-img-c">
                <img src={testImgFour} alt="" className="test-img-cc" />
            </div>
            <div>
                <div style={{ marginTop: "20px" }}>
                    <h2 style={{ textAlign: "center" }}>What our clients say </h2>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <h2 style={{ textAlign: "center", width: "15%", margin: "10px 0", fontSize: "10px" }}>Community development is often linked with community work or community planning, and may involve stakeholders, foundations, </h2>

                    </div>
                </div>
                <div className="main-card-rating-container" ref={cardContainerRef}
                    onScroll={handleScroll}
                    style={{ display: 'flex', overflowX: 'hidden' }}>
                    <div
                        className="card-rating-container"

                    >
                        {/* Your Card components go here */}
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <Card style={{ width: "482px", padding: "10px" }}>
                                <CardContent style={{ background: "#FFFFFF" }}>
                                    <Rating value={3} />
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                                    </Typography>
                                    <Typography sx={{ mt: 2.5, fontWeight: 'bold' }} color="text.secondary">
                                        Sabo Masties
                                    </Typography>
                                    <Typography sx={{ mt: 1, fontWeight: 'bold' }} className='body2'>
                                        Nastyaswan
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="arrow-container">
                        <KeyboardBackspaceIcon className="left-arrow" />
                        <EastIcon className="right-arrow" />
                    </div>
                </div>
                <div className="landing-page-footer">
                    <div className="footer-content">
                        <div className="landing-page-footer-icon">
                            <EmailIcon style={{ color: "#fff", fontSize: "28px" }} />
                            <CallIcon style={{ color: "#fff", fontSize: "28px" }} />
                            <PlaceIcon style={{ color: "#fff", fontSize: "28px" }} />
                        </div>
                        <div className="landing-page-footer-btn-div">
                            <materialModules.Button className="landing-page-footer-btn">Call us</materialModules.Button>
                            <materialModules.Button className="landing-page-footer-btn">Sign Up</materialModules.Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-div">
                <h3 className="copy-right-heading">copyright reserved 2023 </h3>
            </div>
        </div>

    )
}

export default LandingPageDesign