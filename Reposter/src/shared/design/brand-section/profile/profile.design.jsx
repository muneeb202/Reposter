import React from 'react';
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import HeaderDesign from '../../header/header.design';
import * as materialModules from "@/shared/modules/material";
import "./profile.scss";
import creatorImg from "@/assets/creator-img.png";
import Rating from '@mui/material/Rating';
const ProfileDesign = () => {
    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="container-user-profile">
                <div className="flex-container-user-profile">
                    <div className="col-6-user-profile">
                        <DashboardDesign />
                    </div>
                    <div className="col-8-user-profile">
                        <h2 className="heading profile-heading-responsive">Profile</h2>
                        <div className="all-user-data-profile">
                            <div className="user-profile-section">
                                <img src={creatorImg} alt="" className="user-profile-img" />
                                <div className="user-detail">
                                    <h3 className="user-profile-username">Maria Db</h3>
                                    <h6 className="user-profile-brand">Brand</h6>
                                    <h6 className="user-profile-location">Location : USA</h6>
                                </div>
                            </div>
                            <div className='user-profile-part'>
                                <div className='products-list'>
                                    <div className='user-histor-list'>
                                        <div className='user-history'>
                                            <h3 className="history-tag">Hires : 10</h3>
                                            <h3 className="history-tag">Active : 1</h3>
                                            <h3 className="history-tag">Total Spent : 10k</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="heading profile-heading-responsive">Products</h2>
                            <div className="product-section-container-profile">
                                <div className='product-section-div'>
                                    <div className='products-list'>
                                        <div className='products-data-list'>
                                            <div className='product-data'>
                                                <h3 className="product-h1">Product 1</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='product-section-div'>
                                    <div className='products-list'>
                                        <div className='products-data-list'>
                                            <div className='product-data'>
                                                <h3 className="product-h1">Product 1</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='product-section-div'>
                                    <div className='products-list'>
                                        <div className='products-data-list'>
                                            <div className='product-data'>
                                                <h3 className="product-h1">Product 1</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='view-all-heading'>View All</p>
                        </div>
                        <div className="">
                            <h2 className="heading profile-heading-responsive">Feedbacks</h2>
                            <div className="product-section-container">
                                <div className='product-section-div-feedback'>
                                    <div className='feedback-list'>
                                        <div className='feedback-data'>
                                            <Rating name="read-only" value={5} readOnly className='rating-section' />
                                            <h5>William James - Creator</h5>
                                            <p className="feedback-comment">All the feedbacks of any creator and reposter will be visible here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <p className='view-all-heading'>View All</p> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileDesign;
