import React from 'react';
import * as materialModules from "@/shared/modules/material";
import "./order-processing.scss";
import AddIcon from '@mui/icons-material/Add';
import imgOne from "@/assets/img-one.png";
import imgTwo from "@/assets/img-two.png";
import imgThree from "@/assets/img-three.png";
import imgFour from "@/assets/img-four.png";

const OrderProcessingDesign = () => {
    return (
        <>
            <div className="row">
                <div className="col-4-order-processing">
                    <div className='form-data-order-processing'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Title</materialModules.Label>
                            <input
                                id="title1"
                                className="text-field-design-order-processing"
                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements1" className="label-class">Contract requirements</materialModules.Label>
                            <input
                                id="requirements1"
                                variant="outlined"
                                className="text-field-design-order-processing"

                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="title2" className="label-class">Social media content</materialModules.Label>
                            <input
                                id="title2"
                                variant="outlined"
                                className="text-field-design-order-processing"

                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Duration</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-order-processing"

                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Price Range</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-order-processing"

                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Category</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-order-processing"

                            />
                        </div>
                        <div>
                            <materialModules.Label htmlFor="requirements2" className="label-class">Project Size</materialModules.Label>
                            <input
                                id="requirements2"
                                variant="outlined"
                                className="text-field-design-order-processing"

                            />
                        </div>
                    </div>
                </div>
                <div className="col-4-order-processing">
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
                </div>
                <div className="col-4-order-processing">
                    <div className='form-data-job-posting'>
                        <div>
                            <materialModules.Label htmlFor="title1" className="label-class">Upload required documents and media</materialModules.Label>
                            <div className='btn-select-file'>
                                <materialModules.Button className='btn-select-file'
                                    startIcon={<AddIcon className="add-file-icon" />}
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
                    <div className="go-to-checkout-div">
                        <materialModules.Button className="go-to-checkout">Go to Checkout - $400.75</materialModules.Button>
                    </div>
                    <div className="send-order-processing-div">
                        <materialModules.Button className="send-order-processing">Send</materialModules.Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderProcessingDesign;
