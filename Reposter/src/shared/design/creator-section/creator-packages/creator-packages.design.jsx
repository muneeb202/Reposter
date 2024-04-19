import React from 'react'
import CreatorSidebarDesign from '../creator-sidebar/creator-sidebar.design'
import * as materialModules from "@/shared/modules/material";
const CreatorPackagesDesign = () => {
    return (
        <>
            <div className="container-packages">
                <div className="flex-container-packages">
                    <div className="col-6-packages">
                        <CreatorSidebarDesign />
                    </div>
                    <div className="col-8-packages">
                        <h2 className="heading">Packages Subscribed</h2>
                        <div className='show-packaages'>
                            <div className='packages'>
                                <h4 className='growth'>Single access</h4>
                                <h3 className="h3-heading">Renew</h3>
                                <h3 className="h3-heading">change plan</h3>
                            </div>
                            <h2 className="price-tag">$25</h2>
                        </div>
                        <div className='more-offer-section'>
                            <h2 className="heading">More</h2>

                            {/* <div>
                                    <h4 className="heading" style={{ textAlign: "center",padding:"10px 0" }}>
                                        Full Access
                                    </h4>
                                    <div className="btn-buy-now-div">
                                        <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                    </div>
                                    <div style={{ textAlign: "center" ,paddingTop:"10px" }}>
                                        <h3 style={{ padding:"10px 0" }}>first package item</h3>
                                        <h3 style={{ padding:"10px 0" }}>first package item</h3>
                                        <h3 style={{ padding:"10px 0" }}>first package item</h3>
                                        <h3 style={{ padding:"10px 0" }}>first package item</h3>
                                        <h3 className="heading"  style={{ padding:"10px 0" }}>$$$</h3>
                                    </div>
                                </div> */}

                            <div className='pricing-section' style={{width:"225px"}}>
                                <div className='price-growth'>
                                    <h4 className="heading-growth">Full Access</h4>
                                    <div className="btn-buy-now-div">
                                        <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                    </div>
                                </div>
                                <div className="package-benefit-section" style={{justifyContent:"center"}}>
                                    <p className="package-benefit">
                                        first package item
                                    </p>
                                </div>
                                <div className="package-benefit-section" style={{justifyContent:"center"}}>
                                    <p className="package-benefit">
                                        first package item
                                    </p>
                                </div>
                                <div className="package-benefit-section" style={{justifyContent:"center"}}>
                                    <p className="package-benefit">
                                        first package item
                                    </p>
                                </div>
                                <div className="package-benefit-section" style={{justifyContent:"center"}}>
                                    <p className="package-benefit">
                                        first package item
                                    </p>
                                </div>
                                <div className="price-growth-package" style={{margin:"10px 0"}}>
                                    <h4 className="heading-growth-p" style={{bottom:"1px"}}>
                                        $25
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CreatorPackagesDesign