import React, { useState } from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import dropdownImg from "@/assets/dropdown.png";
import "./project.scss"
import * as materialModules from "@/shared/modules/material";
import creatorImg from "@/assets/creator-img.png";
import reposterImg from "@/assets/resposter-img.png";


const ProjectsDesign = () => {
  const [creatorList, setCreatorList] = useState([
    {
      'creatorName': "Maria James",
      "creatorImage": `${creatorImg}`,
      "jobTitle": "Creator",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",
    },
    {
      'creatorName': "Maria James",
      "creatorImage": `${creatorImg}`,
      "jobTitle": "Creator",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",

    },
    {
      'creatorName': "Maria James",
      "creatorImage": `${creatorImg}`,
      "jobTitle": "Creator",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",
    },
    {
      'creatorName': "Maria James",
      "creatorImage": `${creatorImg}`,
      "jobTitle": "Creator",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",

    },
  ]);

  const [reposterList, setReposterList] = useState([
    {
      'reposterName': "William James",
      "reposterImage": `${reposterImg}`,
      "jobTitle": "Reposter",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",
    },
    {
      'reposterName': "William James",
      "reposterImage": `${reposterImg}`,
      "jobTitle": "Reposter",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",
    },
    {
      'reposterName': "William James",
      "reposterImage": `${reposterImg}`,
      "jobTitle": "Reposter",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",
    },
    {
      'reposterName': "William James",
      "reposterImage": `${reposterImg}`,
      "jobTitle": "Reposter",
      "level": 2,
      "commison": "40%",
      "views": "8k",
      "earned": "20k",
    },
  ]);
  return (
    <>
      <div className="flex-container-admin">
        <div className="col-6-projects">
          <DashboardDesign />
        </div>
        <div className="col-8-projects">
          <div className='scroll'>
            <div className="ongoing-project">
              <h2 className='heading responsive-heading'>Ongoing Projects</h2>
              <img src={dropdownImg} alt="" className='dropdown-icon'/>
            </div>
            <div className='on-going-projects'>
              <div className='ongoing-projects-list'>
                <h4 className='on-going-projects-list-heading'>William James - Instagram posting</h4>
                <h4 className='on-going-projects-list-heading'>$2000 / month</h4>
                <p className='on-going-projects-list-desc'>
                  description will be written here like The media will be like this and that.
                  How the hashtags will be used and where will be the post will be uploaded
                  and how it will be posted
                </p>
              </div>
            </div>
            <div className='on-going-projects'>
              <div className='ongoing-projects-list-two'>
                <h4 className='on-going-projects-list-heading-two'>William James - Instagram posting</h4>
                <h4 className='on-going-projects-list-heading-two'>$2000 / month</h4>
                <p className='on-going-projects-list-desc-two'>
                  description will be written here like The media will be like this and that.
                  How the hashtags will be used and where will be the post will be uploaded
                  and how it will be posted
                </p>
              </div>
            </div>
            <div className='on-going-projects'>
              <div className='ongoing-projects-list'>
                <h4 className='on-going-projects-list-heading'>William James - Instagram posting</h4>
                <h4 className='on-going-projects-list-heading'>$2000 / month</h4>
                <p className='on-going-projects-list-desc'>
                  description will be written here like The media will be like this and that.
                  How the hashtags will be used and where will be the post will be uploaded
                  and how it will be posted
                </p>
              </div>
            </div>
            <div className='on-going-projects'>
              <div className='ongoing-projects-list-two'>
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

          <div className="ongoing-project">
            <h2 className='heading responsive-heading'>Top Creator</h2>
            <img src={dropdownImg} alt="" className='dropdown-icon'/>
          </div>
          <div className='top-creator-reposter-div'>
            {creatorList.map((creator) => {
              return (
                <div className='top-cr-list' key={creator?.route}>
                  <div className='top-cr-data-list'>
                    <img src={creator?.creatorImage} alt="" />
                    <div className='top-cr-data'>
                      <h3 className="heading-color" style={{ fontSize: "11px" }}>{creator?.creatorName}</h3>
                      <h4 style={{ fontSize: "11px" }}>{creator?.jobTitle}</h4>
                      <h6 style={{ fontSize: "11px" }}>LEVEL:{creator?.level}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ongoing-project">
            <h2 className='heading responsive-heading'>Top Reposter</h2>
            <img src={dropdownImg} alt="" className='dropdown-icon'/>
          </div>
          <div className='top-creator-reposter-div'>
            {reposterList.map((reposter) => {
              return (
                <div className='top-cr-list' key={reposter?.route}>
                  <div className='top-cr-data-list'>
                    <img src={reposter?.reposterImage} alt="" />
                    <div className='top-cr-data'>
                      <h3 className="heading-color" style={{ fontSize: "11px" }}>{reposter?.reposterName}</h3>
                      <h4 style={{ fontSize: "11px" }}>{reposter?.jobTitle}</h4>
                      <h6 style={{ fontSize: "11px" }}>LEVEL:{reposter?.level}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsDesign