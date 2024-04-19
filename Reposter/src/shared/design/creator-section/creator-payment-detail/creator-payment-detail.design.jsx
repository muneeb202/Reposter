import React from 'react'
import CreatorSidebarDesign from '../creator-sidebar/creator-sidebar.design'
import * as materialModules from "@/shared/modules/material";
import AddIcon from '@mui/icons-material/Add';

const CreatorpaymentDetailDesign = () => {
    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-container-payment-detail">
                <div className="col-6-payment-detail">
                    <CreatorSidebarDesign />
                </div>
                <div className="col-8-payment-detail">
                    <div className="ongoing-payment">
                        <h2 className='heading'>Payouts</h2>
                    </div>

                    <div className='main-on-going-payment-detail'>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p>Available Balance</p>
                                <p>&25</p>
                            </div>
                        </div>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p>Pending Balance</p>
                                <p>&25</p>
                            </div>
                        </div>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p>In review</p>
                                <p>&25</p>
                            </div>
                        </div>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p>Work in progress</p>
                                <p>&25</p>
                            </div>
                        </div>
                    </div>
                    <div className="ongoing-withdraw" style={{marginTop:"10px"}}>
                        <h2 className='heading'>Withdraw Balance</h2>
                        <div className='ongoing-withdraw-d-flex'>
                            <div className='ongoing-withdraw-detail'>
                                <div className="w-flex-withdraw-detail">
                                    <h2>Current Bank</h2>
                                    <p className='current-account-detail'>Bank name : xxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <p className='current-account-detail'>Account holder name : xxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <p className='current-account-detail'>Account number : xxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <p className='current-account-detail'>Address : xxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <p className='current-account-detail'>Swift Code : xxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                </div>


                            </div>
                            <div className="addbank-div">
                                <div className='add-bank-d'>
                                    <h5 className="add-new-bank-title">Add new bank account</h5>
                                    <div className='btn-add-bank'>
                                        <materialModules.Button className='btn-select-upload-file'
                                            startIcon={<AddIcon className="add-file-icon" />}
                                            type="file"
                                        ></materialModules.Button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default CreatorpaymentDetailDesign