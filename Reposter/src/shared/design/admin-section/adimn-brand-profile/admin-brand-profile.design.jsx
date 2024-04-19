import React from 'react';
import "./admin-brand-profile.scss"
import * as materialModules from "@/shared/modules/material";

import creatorImg from "@/assets/creator-img.png";
import Rating from '@mui/material/Rating';
import AdminSidebarDesign from '../admin-sidebar/admin-sidebar.design';
const AdminBrandProfileDesign = () => {
    return (
        <>
            <div className="flex-container-admin-user-profile">
                <div className="col-6-admin-user-profile">
                    <AdminSidebarDesign />
                </div>
                <div className="col-8-admin-user-profile">
                    <h2 className="heading">Profile</h2>
                    <div className="all-user-data">
                        <div className="user-profile-section">
                            <img src={creatorImg} alt="" className="user-profile-img" />
                            <div className="user-detail">
                                <h5 className="user-profile-username">Maria Db</h5>
                                <h6 className="user-profile-brand">Brand</h6>
                                <h6 className="user-profile-location">Location : USA</h6>
                            </div>
                        </div>
                        <div className=''>
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
                        <h2 className="heading">Products</h2>
                        <div className="product-section-container">
                            <div className='admin-product-section-div'>
                                <div className='products-list'>
                                    <div className='products-data-list'>
                                        <div className='product-data'>
                                            <h3 className="product-h1">Product 1</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='admin-product-section-div'>
                                <div className='products-list'>
                                    <div className='products-data-list'>
                                        <div className='product-data'>
                                            <h3 className="product-h1">Product 1</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='admin-product-section-div'>
                                <div className='products-list'>
                                    <div className='products-data-list'>
                                        <div className='product-data'>
                                            <h3 className="product-h1">Product 1</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='admin-view-all-heading'>View All</p>
                    </div>
                    <div className="">
                        <h2 className="heading">Feedbacks</h2>
                        <div className="product-section-container">
                            <div className='admin-product-section-div'>
                                <div className='feedback-list'>
                                    <div className='feedback-data'>
                                        <Rating name="read-only" value={5} readOnly className='rating-section' />
                                        <h5>William James - Creator</h5>
                                        <p className="feedback-comment">All the feedbacks of any creator and reposter will be visible here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='admin-view-all-heading'>View All</p>
                    </div>
                    <div className="">
                        <h2 className="heading">Packages Subscribed</h2>
                        <div className="product-section-container">
                            <div className='admin-show-packaages'>
                                <div className='admin-packages'>
                                    <h4 className='growth'>Growth</h4>
                                    <h3 className="h3-heading">Manage plan</h3>
                                </div>
                                <h2 className="price-tag">$25</h2>
                            </div>
                        </div>
                        <div className="admin-btn-div">
                            <materialModules.Button className="btn-admin-disable-account">Disable Account Account</materialModules.Button>
                            <materialModules.Button className="btn-admin-close-account">Close Account</materialModules.Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminBrandProfileDesign