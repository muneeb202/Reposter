import React from 'react';
import HeaderDesign from '../../header/header.design';
import * as materialModules from "@/shared/modules/material";
import "./job-posting.scss";
import AddIcon from '@mui/icons-material/Add';
import imgOne from "@/assets/img-one.png";
import imgTwo from "@/assets/img-two.png";
import imgThree from "@/assets/img-three.png";
import imgFour from "@/assets/img-four.png";

const JobPostingDesign = () => {
    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="row">
                <div className="col-4-job-posting">
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Title</materialModules.Label>
                            <input
                                id="title1"
                                // variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements1" className="label-class">Contract requirements</materialModules.Label>
                            <input
                                id="requirements1"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="title2" className="label-class">Social media content</materialModules.Label>
                            <input
                                id="title2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Duration</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Price Range</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Category</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Project Size</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4-job-posting">
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Description</materialModules.Label>
                            <textarea
                                id="title1"
                                className="text-field-design-description"
                                multiline
                                rows={4}
                                style={{ height: '100%' }}
                                placeholder="Write a description of a post here"
                            />
                        </div>

                    </div>
                    <div className='sample-required-section'>
                        <h5 className='heading-of-sample'>Sample Required</h5>
                        <div className='swich-class'>
                            <materialModules.Switch defaultChecked color="secondary" className="swich-class" />
                        </div>
                    </div>
                </div>
                <div className="col-4-job-posting-skill">
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Add Skills</materialModules.Label>
                            <input
                                id="title1"
                                className="text-field-design-job-posting"
                                placeholder="Search Skill"
                            />
                        </div>
                        
                        <div className="skill-tag-group">
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                            <div className='btn-one'>
                                <materialModules.Button className='btn-skills'
                                    startIcon={<AddIcon className="skill-add-icon" />}
                                ></materialModules.Button>
                            </div>
                        </div>

                    </div>
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Employee Requiremnt(full time, per hour)</materialModules.Label>
                            <input
                                id="title1"
                                className="text-field-design-job-posting"
                            />
                        </div>
                    </div>
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Upload required documents and media</materialModules.Label>
                            <div className='btn-select-file'>
                                <materialModules.Button className='btn-select-file'
                                    startIcon={<AddIcon className="add-file-icon-job-posting" />}
                                ></materialModules.Button>
                            </div>
                        </div>

                        <div className="select-img-section">
                            <img src={imgOne} className='selected-img' alt="" />
                            <img src={imgTwo} className='selected-img' alt="" />
                            <img src={imgThree} className='selected-img' alt="" />
                            <img src={imgFour} className='selected-img' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobPostingDesign;
