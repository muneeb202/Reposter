import React from 'react'
import creatorImg from "@/assets/creator-img.png";
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import imgOne from "@/assets/img-one.png";
import imgTwo from "@/assets/img-two.png";
import imgThree from "@/assets/img-three.png";
import imgFour from "@/assets/img-four.png";
import * as materialModules from "@/shared/modules/material";
import ReposterSidebarDesign from '../reposter-sidebar/reposter-sidebar.design';
const ReposterPackagesDesign = () => {
    return (
        <>
            <div className="container-packages">
                <div className="flex-container-packages">
                    <div className="col-6-packages">
                        <ReposterSidebarDesign />
                    </div>
                    <div className="col-8-packages">
                        <h2 className="heading">Packages Subscribed</h2>
                        <div className='show-packaages' style={{ marginTop: "20px" }}>
                            <div className='packages'>
                                <h4 className='growth'>Growth</h4>
                                <h3 className="h3-heading">Renew</h3>
                                <h3 className="h3-heading">change plan</h3>
                            </div>
                            <h2 className="price-tag">$25</h2>
                        </div>
                        <div className='more-offer-section'>
                            <h2 className="heading">Feedbacks</h2>
                            <div style={{
                                display: "flex", gap: "30px", marginTop: "20px"
                            }}>
                                <div style={{
                                    border: '2px solid #770cf1', borderRadius: "15px",
                                    width: "25%", marginTop: "10px"
                                }}>
                                    <div>
                                        <h4 className="heading" style={{ textAlign: "center", padding: "10px 0" }}>
                                            Growth
                                        </h4>
                                        <div className="btn-buy-now-div">
                                            <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                        </div>
                                        <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <div>

                                                <h3 className="heading" style={{ padding: "10px 0" }}>$25</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    border: '2px solid #770cf1', borderRadius: "15px",
                                    width: "25%", marginTop: "10px"
                                }}>
                                    <div>
                                        <h4 className="heading" style={{ textAlign: "center", padding: "10px 0" }}>
                                            Scale
                                        </h4>
                                        <div className="btn-buy-now-div">
                                            <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                        </div>
                                        <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <div>

                                                <h3 className="heading" style={{ padding: "10px 0" }}>$25</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    border: '2px solid #770cf1', borderRadius: "15px",
                                    width: "25%", marginTop: "10px"
                                }}>
                                    <div>
                                        <h4 className="heading" style={{ textAlign: "center", padding: "10px 0" }}>
                                            Dominance
                                        </h4>
                                        <div className="btn-buy-now-div">
                                            <materialModules.Button className="btn-buy-now">Buy Now</materialModules.Button>
                                        </div>
                                        <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <h3 style={{ padding: "10px 0" }}>first package item</h3>
                                            <div>

                                                <h3 className="heading" style={{ padding: "10px 0" }}>$25</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ReposterPackagesDesign;