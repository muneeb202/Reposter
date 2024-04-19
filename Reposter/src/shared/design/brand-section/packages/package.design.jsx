import React from 'react';
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import * as materialModules from "@/shared/modules/material";
import "./packages.scss";;
import greenTickImg from "@/assets/green-tick.png";

const PackagesDesign = () => {
    return (
        <>
            <div className="container-packages">
                <div className="flex-container-packages">
                    <div className="col-6-packages">
                        <DashboardDesign />
                    </div>
                    <div className="col-8-packages">
                        <h2 className="heading responsive-h-r">Packages Subscribed</h2>
                        <div className='show-packaages'>
                            <div className='packages'>
                                <h4 className='growth'>Growth</h4>
                                <h3 className="h3-heading">Renew</h3>
                                <h3 className="h3-heading">change plan</h3>
                            </div>
                            <h2 className="price-tag">$25</h2>
                        </div>
                        <div className='more-offer-section'>
                            <h2 className="heading responsive-h-r">More on offer</h2>
                            <div className='pricing-section-container'>
                                <div className='pricing-section'>
                                    <div className='price-growth'>
                                        <h4 className="heading-growth">Growth</h4>
                                        <div className="btn-buy-now-div">
                                            <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                        </div>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Basic analytics and reporting.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Single Channel access choose between Creators or Reposters
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Limited to 5 collaboration a/mo
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Standard campaign creation tools.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Email support.
                                        </p>
                                    </div>
                                    <div className="price-growth-package">
                                        <h4 className="heading-growth-p">
                                            $25
                                        </h4>
                                    </div>
                                </div>
                                <div className='pricing-section'>
                                    <div className='price-growth'>
                                        <h4 className="heading-growth">Scale</h4>
                                        <div className="btn-buy-now-div">
                                            <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                        </div>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Advanced analytics with more detailed insights.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Access to all channels creators and reposters.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Enhanced campaign creation tools.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Limited to 20 collaboration a/mo
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Amazon and Shopify UTM link ans performance tracking
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Priority email and chat support.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Integration with additional marketing tools.
                                        </p>
                                    </div>
                                    <div className="price-growth-package">
                                        <h4 className="heading-growth-p">
                                            $25
                                        </h4>
                                    </div>
                                </div>
                                <div className='pricing-section'>
                                    <div className='price-growth'>
                                        <h4 className="heading-growth">Dominance</h4>
                                        <div className="btn-buy-now-div">
                                            <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                        </div>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Comprehensive analytics with custom reports.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Access to all creators and reposters, including premium talents.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Unlimited collaboration and hirings with Creator/Affiliates and Reposters
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Full suite of campaign creation and management tools.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Dedicated account manager and 24/7 support.
                                        </p>
                                    </div>
                                    <div className="package-benefit-section">
                                        <img src={greenTickImg} alt="" className='green-tick-icon' />
                                        <p className="package-benefit">
                                            Exclusive access to new features and beta tools.
                                        </p>
                                    </div>
                                    <div className="price-growth-package">
                                        <h4 className="heading-growth-p">
                                            $25
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackagesDesign;
