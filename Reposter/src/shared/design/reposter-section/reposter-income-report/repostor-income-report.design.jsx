import React from 'react'
import * as materialModules from "@/shared/modules/material";
import tabtImg from "@/assets/tabs.jpg";
import graphtImg from "@/assets/graph.jpg";
import AddIcon from '@mui/icons-material/Add';

const ReposterIncomeReportDesign = () => {
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
            <div className="col-6-transaction-history">
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
                <div className="col-8-transaction-history">
                    <div className='container-trans' style={{width:"80%",paddingTop:"155px"}}>
                        <div className='reposter-transaction-history-income'>
                            <h5 className="project-heading">Total Income</h5>
                            <div className='show-project-income-state' style={{width:"165px"}}>
                                <p className="show-project-desc" style={{fontWeight:"bold"}}>$100k</p>
                            </div>
                        </div>
                        {/* <div> */}
                        <div className='reposter-transaction-history-income'>
                            <h5 className="project-heading">Weekly Incomet</h5>
                            <div className='show-project-income-state' style={{width:"165px"}}>
                                <h1 className="show-project-desc" style={{fontWeight:"bold"}}>$100k</h1>
                            </div>
                        </div>
                        <div className='reposter-transaction-history-income' style={{marginTop:"20px"}}>
                            <h5 className="project-heading">Add new bank account</h5>
                                <div className='btn-add-new-bank' style={{width:"350px"}}>
                                    <materialModules.Button className='btn-add-new-bank'
                                        startIcon={<AddIcon className="add-file-icon" />}
                                    ></materialModules.Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ReposterIncomeReportDesign;