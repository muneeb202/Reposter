import React from 'react';
import "./brand-dashboard-state.scss"
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';


const BrandDashboardStateDesign = () => {
    return (
        <>
            <div className="flex-container-project-detail">
                <div className="col-6-project-detail">
                    <DashboardDesign />
                </div>
                <div className="col-8-project-detail">
                    <h2 className='heading responsive-heading'>Overall statistics</h2>
                    <div className='dashboard-state-detail-container'>
                        <h4 className='dashboard-state-heading'>Drop Down With UTM links and Talent name</h4>
                        <div className='main-dashboard-state-detail'>
                            <div className='row-one-data'>
                                <div className='dashboard-state-detail'>
                                    <p className="umt-p">Traffic Analytics:</p>
                                </div>
                                <div className='dashboard-state-detail'>
                                    <p className="umt-p">Engagement Metrics</p>
                                </div>
                                <div className='dashboard-state-detail'>
                                    <p className="umt-p">Conversion Rates:</p>
                                </div>
                            </div>
                            <div className='row-one-data'>
                                <div className='dashboard-state-detail'>
                                    <p className="umt-p">Creator Performance</p>
                                </div>
                                <div className='dashboard-state-detail'>
                                    <p className="umt-p">Campaign ROI</p>
                                </div>
                                <div className='dashboard-state-detail'>
                                    <p className="umt-p">Click-Through Rates</p>
                                </div>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div >
        </>
    )
}

export default BrandDashboardStateDesign