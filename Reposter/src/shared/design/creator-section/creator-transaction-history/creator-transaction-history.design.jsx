import React from 'react';
import './creator-tansaction-history.scss'

import * as materialModules from "@/shared/modules/material";
import tabtImg from "@/assets/tabs.jpg";
import graphtImg from "@/assets/graph.jpg";
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
const CreatorTransactionHistoryDesign = () => {
    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-creator-container-transaction-history">
                <div className="col-6-creator-transaction-history">
                    <img src={tabtImg} alt="" className='tab-img' />
                    <img src={graphtImg} alt="" className='graph-img' />
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Project lists</materialModules.Label>
                            <materialModules.TextField
                                id="title1"
                                variant="outlined"
                                className="text-field-design password-text-field-design"
                                value="William James - Instagram posting"
                                disabled
                            />
                        </div>
                        <div className="view-all-project-btn">
                            <materialModules.Button className="view-all-project-btn">See project list</materialModules.Button>
                        </div>
                    </div>
                    <div className='on-going-projects'>
                        <h4 className='on-going-project-heading'>Ongoing projects</h4>
                        <div className='on-going-projects-list-two-transcation-history'>
                            <h4 className='on-going-projects-list-heading-two'>William James - Instagram posting</h4>
                            <p className='on-going-projects-list-desc-two'>
                                description will be written here like The media will be like this and that.
                                How the hashtags will be used and where will be the post will be uploaded
                                and how it will be posted
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-8-creator-container-transaction-history ">
                    <div className='show-project-income-heading'>
                        <h3 className="project-heading">Total Income</h3>
                        <h3 className="project-heading">Total Income</h3>
                        <h3 className="project-heading">Total Income</h3>
                    </div>
                    <div className='show-project-income'>
                        <div className='creator-transaction-history-show-project-income-state'>
                            <p className="show-project-desc" style={{fontWeight:"bold"}}>$100k</p>
                        </div>
                        <div className='creator-transaction-history-show-project-income-state'>
                            <p className="show-project-desc" style={{fontWeight:"bold"}}>$100k</p>
                        </div>
                        <div className='creator-transaction-history-show-project-income-state'>
                            <p className="show-project-desc" style={{fontWeight:"bold"}}>$100k</p>
                        </div>
                    </div>
                    <div  className='main-creator-container-transaction-history-show-social-accounts'>
                        <div className="creator-container-transaction-history-show-social-accounts-detail">
                            <h3 className="project-heading">Social Account Hits</h3>
                        </div>
                        <div className="creator-container-transaction-history-social-media-section">
                            <div className="creator-container-transaction-history-show-social-accounts">
                                <div className="single-social-account-detail">
                                    <FacebookIcon className='color-icon' />
                                    <h4 className="make-flex">Likes - <p>2k</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Share - <p>10</p></h4>

                                </div>
                                <div className="single-social-account-detail">
                                    <PinterestIcon className='color-icon' />
                                    <h4 className="make-flex">Likes - <p>2k</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Share - <p>10</p></h4>

                                </div>
                                <div className="single-social-account-detail">
                                    <TwitterIcon className='color-icon' />
                                    <h4 className="make-flex">Likes - <p>2k</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Share - <p>10</p></h4>

                                </div>
                                <div className="single-social-account-detail">
                                    <InstagramIcon className='color-icon' />
                                    <h4 className="make-flex">Likes - <p>2k</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Comments - <p>10</p></h4>
                                    <h4 className="make-flex">Share - <p>10</p></h4>
                                </div>

                            </div>
                            <div className='creator-container-transaction-add-icon'>
                                <div>
                                    <materialModules.Label htmlFor="title1" className="label-class"
                                        style={{ fontSize: "14px" }}>Add new bank account</materialModules.Label>
                                    <div className='creator-container-transaction-btn-add-socail-media-detail'>
                                        <materialModules.Button className='btn-add-bank-report'
                                            startIcon={<AddIcon className="add-file-icon" />}
                                        ></materialModules.Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatorTransactionHistoryDesign;