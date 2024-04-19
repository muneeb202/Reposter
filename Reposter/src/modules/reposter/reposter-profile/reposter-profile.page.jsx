import React from 'react';
import "./creator-profile.scss"
import CreatorSidebarDesign from '../creator-sidebar/creator-sidebar.design'
import creatorImg from "@/assets/creator-img.png";
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import imgOne from "@/assets/img-one.png";
import imgTwo from "@/assets/img-two.png";
import imgThree from "@/assets/img-three.png";
import imgFour from "@/assets/img-four.png";
import * as materialModules from "@/shared/modules/material";
const CreatorProfileDesign = () => {
    return (
        <>
            <div className="flex-container-admin-user-profile">
                <div className="col-6-creator-profiles">
                    <CreatorSidebarDesign />
                </div>
                <div className="col-6-creator-profiles">
                    <h2 className="heading">Profile</h2>
                    <div className="admin-creator-user-data">
                        <div className="admin-user-profile-section">
                            <img src={creatorImg} alt="" className="user-profile-img" />
                            <div className="user-detail">
                                <h4 className="creator-user-profile-">Maria Db</h4>
                                <h3 className="user-profile-brand">Brand</h3>
                                <h5 className="user-profile-username">Top Level</h5>
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
                <div className="col-6-creator-profiles-d">
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
                            <h3 className="heading-color">Skills</h3>
                            <div className="admin-select-img-section">
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
                    </div>
                    <h2>Portfolio</h2>
                    <div style={{
                        margin: "20px 0", display: "flex", gap: "20px"
                    }}>
                        <div style={{
                            background: "linear-gradient(180deg, #770CF1 0%, rgba(194, 18, 146, 0.3) 100%)",
                            // display: "flex",
                            padding: "10px",
                            width: "200px",
                            height: "100px"
                        }}>
                            <h5 style={{
                                paddingTop: "4px", color: "#FFFFFF", display: "flex",
                                justifyContent: "center", alignItems: "center", height: '100%'

                            }}>Job Done</h5>
                        </div>
                        <div style={{
                            background: "linear-gradient(180deg, #C21292 0%, rgba(194, 18, 146, 0.3) 100%)",
                            // display: "flex",
                            padding: "10px",
                            width: "200px"
                        }}>
                            <h5 style={{
                                paddingTop: "4px", color: "#FFFFFF", display: "flex",
                                justifyContent: "center", alignItems: "center", height: '100%'

                            }}>Job Done</h5>
                        </div>
                        <div style={{
                            background: "linear-gradient(180deg, #EF4040 0%, rgba(239, 64, 64, 0.3) 100%)",

                            // display: "flex",
                            padding: "10px",
                            width: "200px"
                        }}>
                            <h5 style={{
                                paddingTop: "4px", color: "#FFFFFF", display: "flex",
                                justifyContent: "center", alignItems: "center", height: '100%'

                            }}>Job Done</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatorProfileDesign