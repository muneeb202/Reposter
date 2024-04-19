import React, { useState } from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import dropdownImg from "@/assets/dropdown.png";
import "./project-detail.scss"
import * as materialModules from "@/shared/modules/material";
import creatorImg from "@/assets/creator-img.png";


const ProjectDetailDesign = () => {
    const [creatorDetail, setCreatorDetail] = useState(
        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
            "rating": 4.7,
            "completedProject": 34
        },
    );
    return (
        <>
            <div className="flex-container-project-detail">
                <div className="col-6-project-detail">
                    <DashboardDesign />
                </div>
                <div className="col-8-project-detail">
                    <div className="ongoing-project">
                        <h2 className='heading'>Ongoing Projects</h2>
                        <img src={dropdownImg} alt="" />
                    </div>
                    <div className="ongoing-project-main-title">
                        <h3 className='heading'>William James - Instagram posting</h3>
                        {/* <h5 className='heading'>Detail Analysis</h5> */}
                    </div>
                    <div className='main-on-going-project-detail'>
                        <div className='ongoing-projects-detail'>
                            <div className="d-flex">
                                <div style={{ margin: "15px" }}>
                                    <h4 className='on-going-projects-list-heading-two'>William James - Instagram posting</h4>
                                    <p className='on-going-projects-list-desc-two'>
                                        description will be written here like The media will be like this and that.
                                        How the hashtags will be used and where will be the post will be uploaded
                                        and how it will be posted
                                    </p>
                                    <h4 className='money-spent-detail-heading'>Money Spent detail</h4>
                                    <div className='client-detail'>
                                        <div className='client-data-detail'>
                                            <img src={creatorDetail?.creatorImage} alt="" className="client-img" />
                                            <div className='cr-data-d'>
                                                <div>
                                                    <h5>{creatorDetail?.creatorName}</h5>
                                                    <hr className="abc" />
                                                    <hr className="abc" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='client-data-detail'>
                                            <img src={creatorDetail?.creatorImage} alt="" className="client-img" />
                                            <div className='cr-data-d'>
                                                <div>
                                                    <h5>{creatorDetail?.creatorName}</h5>
                                                    <hr className="abc" />
                                                    <hr className="abc" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='on-going-projects-list-heading-two'>timeline and logs - task assigned ( date , status of task etc)</h4>
                                    {/* <div className='ongoing-projects-detail'> */}
                                    <div>
                                        <h4 className='on-going-projects-list-heading-two' style={{ marginTop: '50px' }}>UTM Link : url/utm=xxxxxxxxxxxxx</h4>
                                    </div>
                                </div>

                                <div className='creator-reposter-project-detail'>
                                    <div className='cr-detail'>
                                        <div className='cr-data-detail'>
                                            <img src={creatorDetail?.creatorImage} alt="" />
                                            <div className='cr-data-d'>
                                                <div>
                                                    <h3 className="heading-color">{creatorDetail?.creatorName}</h3>
                                                    <h4>{creatorDetail?.jobTitle}</h4>
                                                    <h6>LEVEL:{creatorDetail?.level}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cr-state-detail'>
                                            <h5 className='cr-d-h5'>{creatorDetail?.earned}+ earned</h5>
                                            <h5 className='cr-d-h5'>{creatorDetail?.rating} Start Rating</h5>
                                            <h5 className='cr-d-h5'>{creatorDetail?.completedProject} Projects Completed</h5>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className='umt-project-detail'>
                                    <div className='umt-project-row-one'>
                                        <div className='umt-detail'>
                                            <p className="umt-p">Traffic Analytics:</p>
                                        </div>
                                        <div className='umt-detail'>
                                            <p className="umt-p">Engagement Metrics</p>
                                        </div>
                                        <div className='umt-detail'>
                                            <p className="umt-p">Conversion Rates:</p>
                                        </div>
                                    </div>
                                    <div className='umt-project-row-one'>
                                        <div className='umt-detail'>

                                            <p className="umt-p">Creator Performance</p>
                                        </div>
                                        <div className='umt-detail'>
                                            <p className="umt-p">Campaign ROI</p>
                                        </div>
                                        <div className='umt-detail'>
                                            <p className="umt-p">Click-Through Rates</p>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProjectDetailDesign;