import React, { useState } from 'react';
import * as materialModules from "@/shared/modules/material";
import "./applicant.scss";;
import creatorImg from "@/assets/creator-img.png";
import reposterImg from "@/assets/resposter-img.png";
import JobChildDesign from '../../job-child/job-child.design';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#770cf1',
        },
        secondary: {
            main: '#8331D6',
        },
        red: { main: '#FF5733' }
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
    }
});

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
        navigate(`/brand/${path}`)
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
                                                <h5 className="heading-color user-name">{creator?.creatorName}</h5>
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
                                        <ThemeProvider theme={theme}>
                                            <Button variant='contained' color='primary' className="btn-views">View Proposal</Button>
                                        </ThemeProvider>
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
