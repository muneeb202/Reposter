import React from 'react'
import "./creator-income-reposter.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import * as materialModules from "@/shared/modules/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcon from '@mui/icons-material/Add';
import CreatorSidebarDesign from '../creator-sidebar/creator-sidebar.design'

const CreatorIncomeReportPage = () => {
    /**
     * naviagate of project list
     */
    const handleProjectListRouting = () => {
        navigate(`/${'project'}`)
    }

    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-container-reports">
                <div className="col-3-creator-reports">
                    <CreatorSidebarDesign />
                </div>
                <div className="col-6-creator-reports">
                    <div className="messages">
                        {/* <h2 className="heading-color messages-heading">Overview</h2> */}
                        <div className='form-data-job-posting'>
                            <div>
                                <materialModules.Label htmlFor="title1" className="label-class">Project lists</materialModules.Label>
                                <input
                                    id="title1"
                                    className="text-field-design-report"
                                    value="William James - Instagram posting"
                                    disabled
                                />
                            </div>
                            <div className="view-all-project-btn">
                                <materialModules.Button className="view-all-project-btn"
                                    onClick={handleProjectListRouting}
                                >See project list</materialModules.Button>
                            </div>
                        </div>
                        <div className='on-going-projects'>
                            <h4 className='on-going-project-heading'>Ongoing projects</h4>
                            <div className='on-going-projects-list'>
                                <h4 className='on-going-projects-list-heading'>William James - Instagram posting</h4>
                                <p className='on-going-projects-list-desc'>
                                    description will be written here like The media will be like this and that.
                                    How the hashtags will be used and where will be the post will be uploaded
                                    and how it will be posted
                                </p>
                            </div>
                            <div className='on-going-projects-list-two'>
                                <h4 className='on-going-projects-list-heading-two'>William James - Instagram posting</h4>
                                <h4 className='on-going-projects-list-heading-two'>$2000 / month</h4>
                                <p className='on-going-projects-list-desc-two'>
                                    description will be written here like The media will be like this and that.
                                    How the hashtags will be used and where will be the post will be uploaded
                                    and how it will be posted
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8-creator-reports">
                    <h2 className="heading-color">View Detail</h2>

                    <div className='show-project-income'>
                        <h3 className="project-heading">Total Income</h3>
                        <h3 className="project-heading">Total Income</h3>
                        <h3 className="project-heading">Total Income</h3>
                    </div>
                    <div className='show-project-income'>
                        <div className='show-project-income-state'>
                            <p className="show-project-desc" style={{fontWeight:"bold"}}>$100k</p>
                        </div>
                        <div className='show-project-income-state'>
                            <p className="show-project-desc" style={{fontWeight:"bold"}}>$100k</p>
                        </div>
                        <div className='show-project-income-state'>
                            <p className="show-project-desc" style={{fontWeight:"bold"}}>$100k</p>
                        </div>
                    </div>
                    <div className="show-social-accounts-detail">
                        <h3 className="project-heading">Social Account Hits</h3>
                    </div>
                    <div className="social-media-section">
                        <div className="show-social-accounts">
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
                        <div className='form-data-add-icon'>
                            <div>
                                <materialModules.Label htmlFor="title1" className="label-class"
                                    style={{ fontSize: "14px" }}>Add new bank account</materialModules.Label>
                                <div className='btn-add-socail-media-detail'>
                                    <materialModules.Button className='btn-add-bank-report'
                                        startIcon={<AddIcon className="add-file-icon" />}
                                    ></materialModules.Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreatorIncomeReportPage;