import React from 'react'
import * as materialModules from "@/shared/modules/material";
import "./request-form.scss";
import AddIcon from '@mui/icons-material/Add';
import selectedImg from "@/assets/test-select.png";
import emptyImg from "@/assets/empty-img.png";
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';

const RequestFormDesign = () => {
    return (
        <>
            <div className="flex-container-request-form">
                <div className="col-6-request-form">
                    <DashboardDesign />
                </div>
                <div className="col-8-request-form">
                    <h2 className="heading responsive-heading">Upload Request</h2>

                    <div className='upload-form-data'>
                        <div className="upload-form-input">
                            <materialModules.Label htmlFor="my-input" className="label-class">Problem Subject</materialModules.Label>
                            <input
                                id="my-input"
                                className="text-field-design-input"
                            />
                        </div>
                        <div className="upload-form-input">
                            <materialModules.Label htmlFor="my-input" className="label-class">Problem Description</materialModules.Label>
                            <textarea
                                id="my-input"
                                className="text-field-design-input-description"
                            />
                        </div>
                        <div className="upload-form-input">
                            <materialModules.Label htmlFor="my-input" className="label-class">Upload file</materialModules.Label>
                            <div className='btn-upload-file-request-form'>
                                <materialModules.Button className='btn-upload-file-request-form'
                                    startIcon={<AddIcon className="add-file-icon" />}
                                ><h3 className="upload-heading">File</h3></materialModules.Button>
                            </div>
                        </div>
                        <div className="upload-and-select-img">
                            <div className="selected-img-request-form">
                                <img src={selectedImg} alt="" className="current-selected-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                                <img src={emptyImg} alt="" className="current-empty-img" />
                            </div>
                        </div>
                        <div className="submit-div">
                            <materialModules.Button className="btn-buy-now">Submit</materialModules.Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default RequestFormDesign