import React, { useState } from 'react';
import * as materialModules from "@/shared/modules/material";
import "./proposal-on-job.scss";;
import creatorImg from "@/assets/creator-img.png";
import JobChildDesign from '../../job-child/job-child.design';
import Rating from '@mui/material/Rating';
import projectImg from "@/assets/project-img.png";
import verifiedImg from "@/assets/verified.png";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { useNavigate } from 'react-router-dom';

const ProposalOnJobDesign = () => {
    const navigate = useNavigate();


    /**
     * navigate to message
     * @param {*} path 
     */
    const handlMessageRouting = (path) => {
        navigate(`/${path}`)
    }
    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="container-prposal-on-job">
                <div className="flex-container-prposal-on-job">
                    <div className="col-6-prposal-on-job">
                        <JobChildDesign />
                    </div>
                    <div className="col-8-prposal-on-job">
                        <h2 className="heading space-ab responsive-heading">Proposal</h2>
                        <div className='main-prposal-jobs-list'>
                            <div className='prposal-jobs-list'>
                                <div className='proposal-jobs'>
                                    <div className="propsal-on-this-job">
                                        <img src={projectImg} alt="" className='pro-img' />
                                        <div>
                                            <h6 className="company-name-p">ELITE LIMITED</h6>
                                            <h3 className="job-title-proposal">Figma Designer</h3>
                                        </div>

                                    </div>
                                    <div>
                                        <BookmarkBorderIcon />
                                    </div>
                                </div>
                                <div className='project-overview-section'>
                                    <h5>Project Overview</h5>
                                    <p className="project-overview-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div className='project-overview-section'>
                                    <h5>Skills</h5>
                                    <div className="skill-tag-list">
                                        <p className="skill-tag">Ui Designer</p>
                                        <p className="skill-tag">Figma</p>
                                        <p className="skill-tag">Landing Page</p>
                                    </div>
                                </div>
                                <div className='project-overview-section-r'>
                                    <div>
                                        <h5>Detail Project</h5>
                                        <h5>5.00 of 48 reviews</h5>
                                        <Rating name="disabled" value={3} disabled className='p-rating-section' />
                                    </div>
                                    <div className="propsal-tag-list">
                                        <h5>28 success project</h5>
                                        <div className="propsal-verified-section">
                                            <img src={verifiedImg} alt="" className="verified-icon" />
                                            <h5>Project Verified</h5>
                                        </div>
                                    </div>
                                    <div className="propsal-tag-list">
                                        <h5>28 success project</h5>
                                        <div className="propsal-verified-section">
                                            <img src={verifiedImg} alt="" className="verified-icon" />
                                            <h5>Project Verified</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='project-overview-section'>
                                    <div className="propsal-tag-list">
                                        <div className="prp-heading">
                                            <div className="input-with-icon">
                                                <input type="text" className='copy-url' value="https://jobored.com/job/8ffsys78" disabled />
                                                <ContentCopyIcon className='copy-url-icon' />
                                            </div>
                                            <materialModules.Button className="btn-chat-now" onClick={() => handlMessageRouting('chat')}
                                            >Chat Now</materialModules.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='project-overview-section'>
                                    <div className="propsal-tag-list">
                                        <div className="prp-heading">
                                            <div className='samples-of-project-list'>
                                                <div className='samples-of-project-data-list'>
                                                    <div className='samples-of-project-data'>
                                                        <h4 className="heading-color make-font-small">Work Sample 1</h4>
                                                        <p className='p-description'>Description</p>
                                                        <div className="folder-icon">
                                                            <FolderCopyIcon className='folder-i' />
                                                            <FolderCopyIcon className='folder-i' />
                                                            <FolderCopyIcon className='folder-i' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='samples-of-project-list'>
                                                <div className='samples-of-project-data-list'>
                                                    <div className='samples-of-project-data'>
                                                        <h3 className="heading-color make-font-small">Work Sample 1</h3>
                                                        <p className='p-description'>Description</p>
                                                        <div className="folder-icon">
                                                            <FolderCopyIcon className='folder-i' />
                                                            <FolderCopyIcon className='folder-i' />
                                                            <FolderCopyIcon className='folder-i' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='samples-of-project-list'>
                                                <div className='samples-of-project-data-list'>
                                                    <div className='samples-of-project-data'>
                                                        <h3 className="heading-color make-font-small">Work Sample 1</h3>
                                                        <p className='p-description'>Description</p>
                                                        <div className="folder-icon">
                                                            <FolderCopyIcon className='folder-i' />
                                                            <FolderCopyIcon className='folder-i' />
                                                            <FolderCopyIcon className='folder-i' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8-prposal-on-job">
                        <h2 className="heading space-ab responsive-heading">Profile</h2>
                        <div className="all-user-data-prposal">
                            <div className="user-profile-section-prposal">
                                <img src={creatorImg} alt="" className="user-personal-img" />
                                <div>
                                    <h3 className="user-personal-info">Jennifer</h3>
                                    <h4 className="user-personal-info">Creator</h4>
                                    <h5 className="user-personal-info">Top Level</h5>
                                    <h5 className="user-personal-info">Live Count : 240</h5>
                                </div>
                            </div>
                        </div>
                        <div className="complete-user-info">
                            <div className="user-profile-portfolio">
                                <div>
                                    <h4 className="info-tag">Erning </h4>
                                    <h5 className="info-tag">Response Time</h5>
                                    <h5 className="info-tag">Total jobs</h5>
                                </div>
                            </div>
                            <div className="user-profile-portfolio">
                                <div>
                                    <h4 className="info-detail-tag">$2k</h4>
                                    <h5 className="info-detail-tag">1 Hour</h5>
                                    <h5 className="info-detail-tag">4</h5>
                                </div>
                            </div>
                        </div>
                        <div className="prposal-on-job-container">
                            <div className='prposal-on-job-div'>
                                <div className='user-feedback-list'>
                                    <div className='feedback-data-prposal'>
                                        <Rating name="read-only" value={5} readOnly className='rating-section-prposal' />
                                        <h6 style={{marginTop:"5px"}}>William James - Creator</h6>
                                        <p className="feedback-comment-prposal">All the feedbacks of any creator and reposter will be visible here</p>
                                    </div>
                                </div>
                                <div className='user-feedback-list'>
                                    <div className='feedback-data-prposal'>
                                        <Rating name="read-only" value={5} readOnly className='rating-section-prposal' />
                                        <h6 style={{marginTop:"5px"}}>William James - Creator</h6>
                                        <p className="feedback-comment-prposal">All the feedbacks of any creator and reposter will be visible here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btn-views-profile-from-p'>
                            <materialModules.Button className="btn-views">View Profile</materialModules.Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ProposalOnJobDesign;
