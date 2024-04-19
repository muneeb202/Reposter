import React from 'react';
import "./admin-creator-reposter-profile.scss"
import AdminSidebarDesign from '../admin-sidebar/admin-sidebar.design';
import creatorImg from "@/assets/creator-img.png";
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import imgOne from "@/assets/img-one.png";
import imgTwo from "@/assets/img-two.png";
import imgThree from "@/assets/img-three.png";
import imgFour from "@/assets/img-four.png";
import * as materialModules from "@/shared/modules/material";
import SettingsIcon from '@mui/icons-material/Settings';
const AdminCreatorReposterProfilDesign = () => {
    return (
        <>
            <div className="flex-container-admin-creator-profile">
                <div className="col-6-admin-creator-profile">
                    <AdminSidebarDesign />
                </div>
                <div className="col-8-admin-creator-profile">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2 className="heading">Profile</h2>
                        <SettingsIcon style={{ color: "#770cf1" }} />
                    </div>
                    <div className="admin-creator-user-data">
                        <div className="admin-user-profile-section">
                            <img src={creatorImg} alt="" className="user-profile-img" />
                            <div className="user-detail">
                                <h4 className="creator-user-profile-">Maria Db</h4>
                                <h5 className="user-profile-brand" style={{ marginBottom: "5px" }}>Brand</h5>
                                <h6 className="user-profile-username">Top Level</h6>
                                <h6 className="user-profile-username">Live Count : 240</h6>
                            </div>
                        </div>
                        <div className="admin-creator-user-profile-state">
                            <h3 className="admin-creator-user-profile-heading">Earings</h3>
                            <h3 className="admin-creator-user-profile-heading heading-color">$2k</h3>
                        </div>
                        <div className="admin-creator-user-profile-state">
                            <h3 className="admin-creator-user-profile-heading">Response Time</h3>
                            <h3 className="admin-creator-user-profile-heading heading-color">1 Hour</h3>
                        </div>
                        <div className="admin-creator-user-profile-state">
                            <h3 className="admin-creator-user-profile-heading">Total Jobs</h3>
                            <h3 className="admin-creator-user-profile-heading heading-color">4</h3>
                        </div>
                        <div className="product-section-container">
                            <div className='admin-creator-user-profile-div'>
                                <div className='creator-user-profile-feedback-list'>
                                    <div className='feedback-data'>
                                        <Rating name="read-only" value={5} readOnly className='rating-section' />
                                        <h5>William James - Creator</h5>
                                        <p className="feedback-comment">here will be the fedback...</p>
                                    </div>
                                </div>
                                <div className='creator-user-profile-feedback-list'>
                                    <div className='feedback-data'>
                                        <Rating name="read-only" value={5} readOnly className='rating-section' />
                                        <h5>William James - Creator</h5>
                                        <p className="feedback-comment">here will be the fedback...</p>
                                    </div>
                                </div>
                                <div className='creator-user-profile-feedback-list'>
                                    <div className='feedback-data'>
                                        <Rating name="read-only" value={5} readOnly className='rating-section' />
                                        <h5>William James - Creator</h5>
                                        <p className="feedback-comment">here will be the fedback...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8-admin-creator-profile-d">
                    <h2>Creator</h2>
                    <div className="creator-user-data">
                        <div className="user-profile-section">
                            <p className='explain-skill'>
                                I am an experienced graphic designer and fullstack web developer proficient in Node.js, HTML, CSS,
                                MySQL, and MongoDB. I specialize in creating visually appealing designs and seamless user
                                experiences that are optimized for performance and functionality. Additionally, I have expertise as a
                                C++ developer, enabling me to handle complex programming challenges. I am committed to delivering
                                ..... Read more
                            </p>
                        </div>

                        <div className="admin-creator-media-section">
                            <h3>Media</h3>
                            <div className="admin-select-img-section">
                                <img src={imgOne} className='admin-selected-img' alt="" />
                                <img src={imgTwo} className='admin-selected-img' alt="" />
                                <img src={imgThree} className='admin-selected-img' alt="" />
                                <img src={imgFour} className='admin-selected-img' alt="" />
                            </div>
                        </div>
                        <div className="admin-creator-media-section">
                            <h3>Skills</h3>
                            <div className="admin-section">
                                <materialModules.Button className="btn-admin-skilss">
                                    TikTok Marketing
                                </materialModules.Button>
                                <materialModules.Button className="btn-admin-skilss">
                                    TikTok Marketing
                                </materialModules.Button>
                                <materialModules.Button className="btn-admin-skilss">
                                    TikTok Marketing
                                </materialModules.Button>
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
    )
}

export default AdminCreatorReposterProfilDesign;