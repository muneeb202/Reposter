import React, { useState } from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import * as materialModules from "@/shared/modules/material";
import "./brand-upload.scss"
import AddIcon from '@mui/icons-material/Add';
import imgOne from "@/assets/img-one.png";
import imgTwo from "@/assets/img-two.png";
import imgThree from "@/assets/img-three.png";
import imgFour from "@/assets/img-four.png";

const BrandUploadDesign = () => {
    return (
        <>
            {/* <div className="container-brand-upload"> */}
                <div className="flex-container-brand-upload">
                    <div className="col-6-brand-upload">
                        <DashboardDesign />
                    </div>
                    <div className="col-8-brand-upload">
                        <h2 className="heading respronsive-h-r">Upload Content</h2>
                        <div className="upload-content-section">
                            <div className="upload-brand-section">
                                <h5>Upload Video</h5>
                                <div className='btn-select-upload-file'>
                                    <materialModules.Button className='btn-select-upload-file'
                                        startIcon={<AddIcon className="add-file-icon" />}
                                    ><h2 className="upload-heading">Video</h2></materialModules.Button>
                                </div>
                            </div>
                            <div className="upload-brand-section">
                                <h5>Upload Media</h5>
                                <div className='btn-select-upload-file'>
                                    <materialModules.Button className='btn-select-upload-file'
                                        startIcon={<AddIcon className="add-file-icon" />}
                                    ><h2 className="upload-heading">Media</h2></materialModules.Button>
                                </div>
                            </div>
                        </div>
                        <div className="upload-content-section">
                            <div className="upload-brand-section">
                                <h5>Video Description</h5>
                                {/* <div className='description-upload-text'> */}
                                    <textarea className='description-upload-text'
                                    ></textarea>
                                {/* </div> */}
                            </div>
                            <div className="upload-brand-section">
                                <h5>Media description</h5>
                                {/* <div className='description-upload-text'> */}
                                    <textarea className='description-upload-text'
                                    ></textarea>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="upload-content-section">
                            <div className="upload-brand-section">
                                <h5>Select platform</h5>
                                <div className="select-plateform-img-section">
                                    <img src={imgOne} className='selected-plateform-img' alt="" />
                                    <img src={imgTwo} className='selected-plateform-img' alt="" />
                                    <img src={imgThree} className='selected-plateform-img' alt="" />
                                    <img src={imgFour} className='selected-plateform-img' alt="" />
                                </div>
                            </div>
                            <div className="upload-brand-section">
                                <h5>Select platform</h5>
                                <div className="select-plateform-img-section">
                                    <img src={imgOne} className='selected-plateform-img' alt="" />
                                    <img src={imgTwo} className='selected-plateform-img' alt="" />
                                    <img src={imgThree} className='selected-plateform-img' alt="" />
                                    <img src={imgFour} className='selected-plateform-img' alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default BrandUploadDesign;