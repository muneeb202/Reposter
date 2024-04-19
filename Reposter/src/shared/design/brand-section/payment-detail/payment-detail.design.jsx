import React from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import dropdownImg from "@/assets/dropdown.png";
import "./payment-detail.scss"
import * as materialModules from "@/shared/modules/material";
import creatorImg from "@/assets/creator-img.png";
import AddIcon from '@mui/icons-material/Add';

const PaymentDetailDesign = () => {
    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-container-payment-detail">
                <div className="col-6-payment-detail">
                    <DashboardDesign />
                </div>
                <div className="col-8-payment-detail">
                    <div className="ongoing-payment">
                        <h2 className='heading responsive-heading' style={{marginBottom:"25px"}}>Payout</h2>
                    </div>

                    <div className='main-on-going-payment-detail'>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p style={{fontWeight:"bold"}}>Available Balance</p>
                                <p style={{fontWeight:"bold"}}>&25</p>
                            </div>
                        </div>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p style={{fontWeight:"bold"}}>Available Balance</p>
                                <p style={{fontWeight:"bold"}}>&25</p>
                            </div>
                        </div>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p style={{fontWeight:"bold"}}>Available Balance</p>
                                <p style={{fontWeight:"bold"}}>&25</p>
                            </div>
                        </div>
                        <div className='ongoing-payment-detail'>
                            <div className="w-flex-payment-detail">
                                <p style={{fontWeight:"bold"}}>Available Balance</p>
                                <p style={{fontWeight:"bold"}}>&25</p>
                            </div>
                        </div>
                    </div>
                    <div className="ongoing-withdraw">
                        <h2 className='heading responsive-heading' style={{margin:"25px 0"}}>Withdraw Balance</h2>
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
                                    <div className='btn-add-bank btn-add-bank-pament'>
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

export default PaymentDetailDesign