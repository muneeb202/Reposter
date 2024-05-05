import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./job-child.scss";
import projectImg from "@/assets/project-img.png";
import verifiedImg from "@/assets/verified.png";
import Rating from '@mui/material/Rating';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const JobChildDesign = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobsByUserId = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/job/user/jobs`, {
                    headers: {
                        Authorization: `${localStorage.getItem('accessToken')}`
                    }
                });
                const modifiedJobs = response.data.map(job => ({
                    ...job,
                    selectedSkills: job.selectedSkills.split(",")
                }));
                setJobs(modifiedJobs);
            } catch (error) {
                console.error('Error fetching jobs by userId:', error);
            }
        };

        fetchJobsByUserId();
    }, []);

    return (
        <>
            <h2 className="heading main-job-heading">Jobs</h2>
            <div className='main-jobs-list'>
                {jobs.map(job => (
                    <div key={job.id} className='jobs-list'>
                        <div className='jobs'>
                            <img src={projectImg} alt="" className='pro-img' />
                            <div>
                                <h5 className="job-title">{job.title}</h5>
                                <p className='job-data-desc'>{job.description}</p>
                            </div>
                            <BookmarkBorderIcon />
                        </div>
                        <div className="job-tag-list">
                            {job.selectedSkills.map(skill => (
                                <p key={skill} className="job-tag">{skill}</p>
                            ))}
                        </div>
                        <div className="job-tag-list-r">
                            <Rating name="disabled" value={job.rating} disabled className='applicaint-job-rating'/>
                            <div>
                                <div className="project-verified-section">
                                    <img src={verifiedImg} alt="" className="verified-icon" />
                                    <h6 className='project-verify-tag'>Project Verified</h6>
                                    <h6 className='proposal-count'>Proposals: {job.proposalCount}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default JobChildDesign;

// import React from 'react';
// import "./job-child.scss";
// import projectImg from "@/assets/project-img.png";
// import verifiedImg from "@/assets/verified.png";
// import Rating from '@mui/material/Rating';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// const JobChildDesign = () => {
//     return (
//         <>
//             <h2 className="heading main-job-heading">Jobs</h2>
//             <div className='main-jobs-list'>
//                 <div className='jobs-list'>
//                     <div className='jobs'>
//                         <img src={projectImg} alt="" className='pro-img' />
//                         <div>
//                             <h5 className="job-title">Figma Designer</h5>
//                             <p className='job-data-desc'>We are looking for figma designers who can help desiging the entire mobile application ...</p>
//                         </div>
//                         <BookmarkBorderIcon />

//                     </div>
//                     <div className="job-tag-list">
//                         <p className="job-tag">Ui Designer</p>
//                         <p className="job-tag">Figma</p>
//                         <p className="job-tag">Landing Page</p>
//                     </div>
//                     <div className="job-tag-list-r">
//                         <Rating name="disabled" value={3} disabled className='applicaint-job-rating'/>
//                         <div>
//                             <div className="project-verified-section">
//                                 <img src={verifiedImg} alt="" className="verified-icon" />
//                                 <h6 className='project-verify-tag'>Project Verified</h6>
//                                 <h6 className='proposal-count'>Proposals: 10 to 15</h6>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='jobs-list'>
//                     <div className='jobs'>
//                         <img src={projectImg} alt="" className='pro-img' />
//                         <div>
//                             <h5 className="job-title">Figma Designer</h5>
//                             <p className='job-data-desc'>We are looking for figma designers who can help desiging the entire mobile application ...</p>
//                         </div>
//                         <BookmarkBorderIcon />

//                     </div>
//                     <div className="job-tag-list">
//                         <p className="job-tag">Ui Designer</p>
//                         <p className="job-tag">Figma</p>
//                         <p className="job-tag">Landing Page</p>
//                     </div>
//                     <div className="job-tag-list-r">
//                         <Rating name="disabled" value={3} disabled className='applicaint-job-rating'/>
//                         <div>
//                             <div className="project-verified-section">
//                                 <img src={verifiedImg} alt="" className="verified-icon" />
//                                 <h6 className='project-verify-tag'>Project Verified</h6>
//                                 <h6 className='proposal-count'>Proposals: 10 to 15</h6>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='jobs-list'>
//                     <div className='jobs'>
//                         <img src={projectImg} alt="" className='pro-img' />
//                         <div>
//                             <h5 className="job-title">Figma Designer</h5>
//                             <p className='job-data-desc'>We are looking for figma designers who can help desiging the entire mobile application ...</p>
//                         </div>
//                         <BookmarkBorderIcon />

//                     </div>
//                     <div className="job-tag-list">
//                         <p className="job-tag">Ui Designer</p>
//                         <p className="job-tag">Figma</p>
//                         <p className="job-tag">Landing Page</p>
//                     </div>
//                     <div className="job-tag-list-r">
//                         <Rating name="disabled" value={3} disabled className='applicaint-job-rating'/>
//                         <div>
//                             <div className="project-verified-section">
//                                 <img src={verifiedImg} alt="" className="verified-icon" />
//                                 <h6 className='project-verify-tag'>Project Verified</h6>
//                                 <h6 className='proposal-count'>Proposals: 10 to 15</h6>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='jobs-list'>
//                     <div className='jobs'>
//                         <img src={projectImg} alt="" className='pro-img' />
//                         <div>
//                             <h5 className="job-title">Figma Designer</h5>
//                             <p className='job-data-desc'>We are looking for figma designers who can help desiging the entire mobile application ...</p>
//                         </div>
//                         <BookmarkBorderIcon />

//                     </div>
//                     <div className="job-tag-list">
//                         <p className="job-tag">Ui Designer</p>
//                         <p className="job-tag">Figma</p>
//                         <p className="job-tag">Landing Page</p>
//                     </div>
//                     <div className="job-tag-list-r">
//                         <Rating name="disabled" value={3} disabled className='applicaint-job-rating'/>
//                         <div>
//                             <div className="project-verified-section">
//                                 <img src={verifiedImg} alt="" className="verified-icon" />
//                                 <h6 className='project-verify-tag'>Project Verified</h6>
//                                 <h6 className='proposal-count'>Proposals: 10 to 15</h6>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default JobChildDesign