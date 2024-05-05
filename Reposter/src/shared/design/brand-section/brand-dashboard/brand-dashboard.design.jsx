import React, { useState } from 'react';
import "./brand-dashboard.scss"
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import creatorImg from "@/assets/creator-img.png";
import reposterImg from "@/assets/resposter-img.png";
import * as materialModules from "@/shared/modules/material";
import { useNavigate } from 'react-router-dom';


const BrandDashboardDesign = () => {
    const navigate = useNavigate();
    const [creatorDetail, setCreatorDetail] = useState(
        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
    );
    const [reposterDetail, setReposterDetail] = useState(
        {
            'reposterName': "William James",
            "reposterImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
    );

    /**
    * naviagate to propsal detail
    * @param {*} path 
    */
    const handleProposalDetailRouting = (path) => {
        navigate(`/${path}`)
    }

    return (
        <>
            <div className="flex-container-brand-support">
                <div className="col-6-admin">
                    <DashboardDesign />

                </div>
                <div className="col-8-admin">
                    <h2 className='heading resposnsive-h-d'>Your Hires</h2>
                    <div className="main-hire-list-container">
                        <div className="hire-list">
                            <div className='creator-reposter-dashboard-div' onClick={() => handleProposalDetailRouting("prposal-on-job")}>
                                <div className='cr-list-dashboard'>
                                    <div className='cr-data-list-dashboard'>
                                        <img src={creatorDetail?.creatorImage} alt="" className="creator-reposter-img" />
                                        <div className='cr-data-dashboard'>
                                            <h3 className="heading-color">{creatorDetail?.creatorName}</h3>
                                            <h4>{creatorDetail?.jobTitle}</h4>
                                            <h6>LEVEL:{creatorDetail?.level}</h6>
                                        </div>

                                    </div>
                                    <div className="cr-state-dashboard">
                                        <p className='creator-income-p'>{creatorDetail?.commison} commission</p>
                                        <p className='creator-income-p'>{creatorDetail?.views} views</p>
                                        <p className='creator-income-p'>{creatorDetail?.earned}+ earned</p>
                                    </div>
                                </div>
                                <div className="view-project-btn-div">
                                    <div className="view-project-btn">
                                        <materialModules.Button className="view-project-btn">View Project</materialModules.Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hire-list">
                            <div className='creator-reposter-dashboard-div'>
                                <div className='cr-list-dashboard'>
                                    <div className='cr-data-list-dashboard'>
                                        <img src={reposterDetail?.reposterImage} alt="" className="creator-reposter-img" />
                                        <div className='cr-data-dashboard'>
                                            <h3 className="heading-color">{reposterDetail?.reposterName}</h3>
                                            <h4>{reposterDetail?.jobTitle}</h4>
                                            <h6>LEVEL:{reposterDetail?.level}</h6>
                                        </div>
                                    </div>
                                    <div className="cr-state-dashboard">
                                        <p className='creator-income-p'>{reposterDetail?.commison} commission</p>
                                        <p className='creator-income-p'>{reposterDetail?.views} views</p>
                                        <p className='creator-income-p'>{reposterDetail?.earned}+ earned</p>

                                    </div>

                                </div>
                                <div className="view-project-btn-div">
                                    <div className="view-project-btn">
                                        <materialModules.Button className="view-project-btn">View Project</materialModules.Button>
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

export default BrandDashboardDesign