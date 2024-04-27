import React, { useState } from 'react';
import HeaderDesign from '../../header/header.design';
import * as materialModules from "@/shared/modules/material";
import "./job-posting.scss";
import AddIcon from '@mui/icons-material/Add';
import imgOne from "@/assets/img-one.png";
import imgTwo from "@/assets/img-two.png";
import imgThree from "@/assets/img-three.png";
import imgFour from "@/assets/img-four.png";
import { Autocomplete, TextField } from '@mui/material';

const JobPostingDesign = () => {
    const skills = [
        "Graphic Design", "Web Development", "Content Writing", "Copywriting", "Digital Marketing",
        "Social Media Management", "Search Engine Optimization (SEO)", "Video Editing", "Photography", 
        "Illustration", "Animation", "Voiceover", "Translation", "Transcription", "Virtual Assistance",
        "Data Entry", "Market Research", "Customer Service", "Project Management", "Business Consulting",
        "Financial Consulting", "Legal Consulting", "Tax Preparation", "Bookkeeping", "Proofreading",
        "Editing", "Ghostwriting", "Resume Writing", "Cover Letter Writing", "Technical Writing",
        "Scriptwriting", "Grant Writing", "Speechwriting", "Email Marketing", "Content Marketing",
        "Affiliate Marketing", "Influencer Marketing", "Branding", "Logo Design", "Brochure Design",
        "Flyer Design", "Poster Design", "Packaging Design", "UI/UX Design", "Website Design",
        "Mobile App Design", "E-commerce Development", "CMS Development", "WordPress Development",
        "Shopify Development", "WooCommerce Development", "Magento Development", "Joomla Development",
        "Drupal Development", "React Development", "Angular Development", "Vue.js Development",
        "Node.js Development", "Express.js Development", "Django Development","Flask Development",
        "Python Development", "PHP Development", "Laravel Development", "Symfony Development",
        "CodeIgniter Development", "Ruby on Rails Development", "ASP.NET Development","Java Development",
        "Spring Boot Development", "C# Development", "C++ Development", "Unity Development",
        "Game Development", "Augmented Reality (AR) Development", "Virtual Reality (VR) Development",
        "Blockchain Development", "Smart Contract Development", "Cryptocurrency Development",
        "Mobile App Development", "iOS App Development", "Android App Development", "React Native Development",
        "Flutter Development", "Cross-Platform App Development", "API Development", "Database Management",
        "SQL Development", "NoSQL Development", "Firebase Development", "Amazon Web Services (AWS)",
        "Microsoft Azure", "Google Cloud Platform (GCP)", "Digital Illustration","Character Design", "Storyboarding",
    ];
    
    const [formData, setFormData] = useState({
        title: '',
        contractRequirements: '',
        socialMediaContent: '',
        duration: '',
        priceRange: '',
        category: '',
        projectSize: '',
        description: '',
        sampleRequired: false,
        skills: [],
        employeeRequirement: '',
        requiredDocuments: [],
    });

    // Handler to update form data
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Update form data based on input type
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="row job-posting-container">
                <div className="col-4-job-posting">
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Title</materialModules.Label>
                            <input
                                onChange={handleChange}
                                id="title1"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements1" className="label-class">Contract requirements</materialModules.Label>
                            <input
                                onChange={handleChange}
                                id="requirements1"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="title2" className="label-class">Social media content</materialModules.Label>
                            <input
                                onChange={handleChange}
                                id="title2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Duration</materialModules.Label>
                            <input
                                onChange={handleChange}
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Price Range</materialModules.Label>
                            <input
                                onChange={handleChange}
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Category</materialModules.Label>
                            <input
                                onChange={handleChange}
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-job-posting"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Project Size</materialModules.Label>
                            <input
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                            <materialModules.Switch onChange={handleChange} defaultChecked color="secondary" className="swich-class" />
                        </div>
                    </div>
                </div>
                <div className="col-4-job-posting-skill">
                    <div className='form-data-job-posting'>
                        <div>
                            {/* <materialModules.Label htmlFor="title1" className="label-class">Add Skills</materialModules.Label>
                            <input
                                onChange={handleChange}
                                id="title1"
                                className="text-field-design-job-posting"
                                placeholder="Search Skill"
                            /> */}
                            <Autocomplete
                            color='primary'
                                multiple
                                id="tags-outlined"
                                options={skills}
                                // getOptionLabel={(option) => option.title}
                                filterSelectedOptions
                                freeSolo
                                renderInput={(params) => (
                                    <TextField
                                    sx={{border:'none'}}
                                        {...params}
                                        label="Skills"
                                    />
                                )}
                            />
                        </div>

                    </div>
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Employee Requirement (full time, per hour)</materialModules.Label>
                            <input
                                onChange={handleChange}
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
