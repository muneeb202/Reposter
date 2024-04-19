import React from 'react';
import "./fourth-section-creator-landing-design.scss";

import imgSectionFourthM1Img from "@/assets/m1.png";
import imgSectionFourthM2mg from "@/assets/m2.png";
import imgSectionFourthImg from "@/assets/show-mobile-img.jpg";
import vectorSectionFourthImg from "@/assets/fourt-creator-vector.svg";


const FourthSectionCreatorLandingDesign = () => {
    return (
        <section style= {{position:"relative"}}>
            <div className="main-div-section-fourth-container">
                <div className='multiple-img-container'>
                    <img src={imgSectionFourthM1Img} alt="" className='m1-img' />
                    <img src={imgSectionFourthM2mg} alt="" className='m2-img' />
                    <img src={imgSectionFourthImg} alt="" className='m3-img' />
                </div>
                <div className='container-text-fouuth-creator-div'>
                    <div className="find-campings-div">
                        <h2 className="fourt-second-side-main-heading h22">Find campings and Grow</h2>
                        <h3 className="fourt-second-side-child-heading add-padding-t">Browae among campaigns</h3>
                        <p className='fourt-second-side-child-description'>Find the fitting campings for your persona and audience from local brands to Fortune 500 campanies.</p>
                    </div>
                    <hr className="hr-section-f" />
                    <div>
                        <h3 className="fourt-second-side-child-heading add-padding-t">Apply for/ Join to campings</h3>
                        <p className='fourt-second-side-child-description'>When you find something you like, it takes a click to start working.</p>
                    </div>
                    <hr className="hr-section-f" />

                    <div>
                        <h3 className="fourt-second-side-child-heading add-padding-t">Brands will also find you directly</h3>
                        <p className='fourt-second-side-child-description'>Approve direct camping requests camping from brands, you’Il see the bried along with the payment details.</p>
                    </div>
                    <hr className="hr-section-f" />
                </div>
            </div>
            <img src={vectorSectionFourthImg} alt="" style= {{position:"absolute",top:"0", right: "0"}} />

        </section>
    )
}

export default FourthSectionCreatorLandingDesign