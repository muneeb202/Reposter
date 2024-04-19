import React, { useState } from 'react';
import * as materialModules from "@/shared/modules/material";
import "./applicant.scss";;
import creatorImg from "@/assets/creator-img.png";
import reposterImg from "@/assets/resposter-img.png";
import JobChildDesign from '../../job-child/job-child.design';
import { useNavigate } from 'react-router-dom';

const ApplicantDesign = () => {
    const navigate = useNavigate();

    const [creatorList, setCreatorList] = useState([
        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "William James",
            "creatorImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },
        {
            'creatorName': "William James",
            "creatorImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },
        {
            'creatorName': "William James",
            "creatorImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
    ]);

    /**
     * naviagate to propsal detail
     * @param {*} path 
     */
    const handleNewPostRouting = (path) => {
        navigate(`/${path}`)
    }

    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-container-appicant">
                <div className="col-6-appicant">
                    <JobChildDesign />
                </div>
                <div className="col-8-appicant">
                    <div className='applicant-or-post-job-d-flex'>
                        <h2 className="heading space-a">Applicants</h2>
                        <h4 className="heading space-a" onClick={() => handleNewPostRouting('job-posting')}
                            style={{
                                cursor: "pointer",
                                textDecoration: "underline"
                            }}
                        >Post new job</h4>

                    </div>
                    <div className='applicat-list-div'>
                        {creatorList.map((creator) => {
                            return (
                                <div onClick={() => handleNewPostRouting('prposal-on-job')}>
                                    <div className='applicat-list' key={creator?.route}>
                                        <div className='cr-data-list'>
                                            <img src={creator?.creatorImage} alt="" className="creator-reposter-img" />
                                            <div className='applicat-data'>
                                                <h3 className="heading-color user-name">{creator?.creatorName}</h3>
                                                <h4>{creator?.jobTitle}</h4>
                                                <h6>{creator?.level}</h6>
                                            </div>
                                        </div>
                                        <div className="applicat-state">
                                            <p className="applicant-p">{creator?.commison} commission</p>
                                            <p className="applicant-p">{creator?.views} views</p>
                                            <p className="applicant-p">{creator?.earned}+ earned</p>
                                        </div>
                                    </div>
                                    <div className='btn-views-appli'>
                                        <materialModules.Button className="btn-views">View Proposal</materialModules.Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplicantDesign;
