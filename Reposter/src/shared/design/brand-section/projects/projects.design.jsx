import React, { useState } from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import dropdownImg from "@/assets/dropdown.png";
import "./project.scss"
import * as materialModules from "@/shared/modules/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import creatorImg from "@/assets/creator-img.png";
import reposterImg from "@/assets/resposter-img.png";
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';


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

  const [onGoing, setOnGoing] = useState([
    {
      title: 'William James - Instagram posting',
      subtitle: '$2000 / month',
      description: 'description will be written here like The media will be like this and that.\
      How the hashtags will be used and where will be the post will be uploaded\
      and how it will be posted'
    },
    {
      title: 'William James - Instagram posting',
      subtitle: '$2000 / month',
      description: 'description will be written here like The media will be like this and that.\
      How the hashtags will be used and where will be the post will be uploaded\
      and how it will be posted'
    },
    {
      title: 'William James - Instagram posting',
      subtitle: '$2000 / month',
      description: 'description will be written here like The media will be like this and that.\
      How the hashtags will be used and where will be the post will be uploaded\
      and how it will be posted'
    },
    {
      title: 'William James - Instagram posting',
      subtitle: '$2000 / month',
      description: 'description will be written here like The media will be like this and that.\
      How the hashtags will be used and where will be the post will be uploaded\
      and how it will be posted'
    }
  ]);
  return (
    <>
      <div className="flex-container-admin">
        <div className="col-6-projects">
          <DashboardDesign />
        </div>
        <div className="col-8-projects">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className='project-heading'
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Ongoing Projects
            </AccordionSummary>
            <AccordionDetails>
              {onGoing.map((project, index) =>
                <div className='on-going-projects'>
                  <div className={`ongoing-projects-list${index % 2 === 1 ? '-two': ''}`}>
                    <h4 className='on-going-projects-list-heading'>{project.title}</h4>
                    <h5 className='on-going-projects-list-heading'>{project.subtitle}</h5>
                    <p className='on-going-projects-list-desc'>{project.description}</p>
                  </div>
                </div>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              className='project-heading'
              id="panel1-header"
            >
              Top Creator
            </AccordionSummary>
            <AccordionDetails>
              <div className='top-creator-reposter-div'>
                {creatorList.map((creator, index) => {
                  return (
                    <div className='top-cr-list' key={index}>
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
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              className='project-heading'
              id="panel1-header"
            >
              Top Reposter
            </AccordionSummary>
            <AccordionDetails>
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
            </AccordionDetails>
          </Accordion>

        </div>
      </div>
    </>
  )
}

export default ProjectsDesign