import React from 'react';
import "./landing-footer-design.scss";
import footerIconImg from "@/assets/studio.png";
import footerVisaIconImg from "@/assets/footer-visa-icon.png";
import * as materialModules from "@/shared/modules/material";



const LandingFooterDesign = ({ onSelectView, currentView, isHeaderOpen, setIsHeaderOpen }) => {
    return (
        <footer className="main-footer-container">
            <div className="main-footer-container-section ">
                <div className="footer-section fist-section-footer">
                    <img src={footerIconImg}  width={200}  alt="" />
                    <div className="btn-section-footer">
                        <materialModules.Button className="request-a-call-btn">Request a Call</materialModules.Button>
                        <materialModules.Button className="get-started-land-btn">Get Started</materialModules.Button>
                    </div>
                </div>
                <div className="footer-section second-section-footer">
                    <div>
                        <p className='p-description-text-f' onClick={() => onSelectView('talent')}>Talent</p>
                        <p className='p-description-text-f' onClick={() => onSelectView('brand')}>Brand</p>
                    </div>
                    <div>
                        <p className='p-description-text-f' onClick={() => onSelectView('contactus')}>Contact Us</p>
                        <p className='p-description-text-f' onClick={() => onSelectView('pricing')}>Pricing</p>
                        <p className='p-description-text-f' onClick={() => onSelectView('privacy')}>Privacy Policy</p>
                        <p className='p-description-text-f' onClick={() => onSelectView('privacy')}>Affiliate Program</p>
                    </div>
                </div>
                <div className="footer-section second-section-footer">
                    <div>
                        <p className='p-contact-text-f'>help@reposter.ai</p>
                        <p className='p-contact-text-f'>+##############</p>
                        <p className='p-contact-text-f'>USA</p>
                        <img src={footerVisaIconImg} alt="" className='footer-visa-icon' />
                    </div>
                </div>
            </div>

            <hr className='footer-hr-class'/>
                <p className='copy-right-footer-text'>© Reposter. All rights reserved. 2024</p>
        </footer>
    )
}

export default LandingFooterDesign