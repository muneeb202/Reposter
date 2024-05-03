import React, { useState } from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import "./brand-support.scss";
import * as materialModules from "@/shared/modules/material";
import notificationImg from "@/assets/notification.png";
import settingLineImg from "@/assets/settings-line.png";
import paymentImg from "@/assets/payment.png";
import grpImg from "@/assets/grp.png";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
// import { IconButton } from '@mui/core';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
const BrandSupportDesign = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [expandedTwo, setExpandedTwo] = React.useState(false);
    const [expandedThree, setExpandedThree] = React.useState(false);
    const navigate = useNavigate();

    const handleAccordionToggle = (panel) => (event, isExpanded) => {
        setIsAccordionOpen(!isAccordionOpen);
        switch (panel) {
            case 1:
                setExpanded(isExpanded);
                break;
            case 2:
                setExpandedTwo(isExpanded);
                break;
            case 3:
                setExpandedThree(isExpanded);
                break;
            default:
                break;
        }

    };

    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-container-brand-support">
                <div className="col-6-brand-support">
                    <DashboardDesign />
                </div>
                <div className="col-8-brand-support">
                    <div>
                        <h2 className='heading responsive-h' style={{ margin: "0 10px" }}>How can we help?</h2>
                        <div className='main-search-keyword-container'>
                            <input type="text" placeholder="Search your keywords" className='search-keyword-container' />
                            <SearchIcon className='search-icon' />
                        </div>

                        <div className='support-options-container'>
                            <div className="support-options">
                                <img src={notificationImg} className="icons-list" />
                                <h6 className="heading-h5">Questions about</h6>
                                <h5 className="heading-h6">Getting Started</h5>
                            </div>
                            <div className="support-options green">
                                <img src={settingLineImg} className="icons-list" />
                                <h6 className="heading-h5">Questions about</h6>
                                <h5 className="heading-h6">How to Invest</h5>
                            </div>
                            <div className="support-options red">
                                <img src={paymentImg} className="icons-list" />
                                <h6 className="heading-h5">Questions about</h6>
                                <h5 className="heading-h6">Payment Method</h5>
                            </div>
                            <div className="support-options purple">
                                <img src={grpImg} className="icons-list" />
                                <h6 className="heading-h5">Questions about</h6>
                                <h5 className="heading-h6">How to Invest</h5>
                            </div>
                        </div>
                        <div className="top-question-container">
                            <div className="top-question-section">
                                <h2 className='heading' style={{ marginBottom: "10px" }}>Top Questions</h2>
                                <h5 className='heading'>View all</h5>
                            </div>
                            <div className="top-question-section">
                                <materialModules.Accordion expanded={isAccordionOpen && expanded}
                                    onChange={handleAccordionToggle(1)}
                                >
                                    <materialModules.AccordionSummary
                                        expandIcon={
                                            isAccordionOpen && expanded ? (
                                                <RemoveIcon />
                                            ) : (
                                                <AddIcon />
                                            )
                                        }
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <materialModules.Typography className="accordion-title">Are you Creator/ Reposter?</materialModules.Typography>
                                    </materialModules.AccordionSummary>
                                    <materialModules.AccordionDetails>
                                        <materialModules.Typography className="accordion-description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur.
                                        </materialModules.Typography>
                                    </materialModules.AccordionDetails>
                                </materialModules.Accordion>
                            </div>
                            <div className="top-question-section">
                                <materialModules.Accordion expanded={isAccordionOpen && expandedTwo}
                                    onChange={handleAccordionToggle(2)}
                                >
                                    <materialModules.AccordionSummary
                                        expandIcon={
                                            isAccordionOpen && expandedTwo ? (
                                                <RemoveIcon />
                                            ) : (
                                                <AddIcon />
                                            )
                                        }
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <materialModules.Typography className="accordion-title">How to add a payment method by this website?</materialModules.Typography>
                                    </materialModules.AccordionSummary>
                                    <materialModules.AccordionDetails>
                                        <materialModules.Typography className="accordion-description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur.
                                        </materialModules.Typography>
                                    </materialModules.AccordionDetails>
                                </materialModules.Accordion>
                            </div>
                            <div className="top-question-section">
                                <materialModules.Accordion expanded={isAccordionOpen && expandedThree}
                                    onChange={handleAccordionToggle(3)}
                                >
                                    <materialModules.AccordionSummary
                                        expandIcon={
                                            isAccordionOpen && expandedThree ? (
                                                <RemoveIcon />
                                            ) : (
                                                <AddIcon />
                                            )
                                        }
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <materialModules.Typography className="accordion-title">How to add a payment method by this website?</materialModules.Typography>
                                    </materialModules.AccordionSummary>
                                    <materialModules.AccordionDetails>
                                        <materialModules.Typography className="accordion-description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur.
                                        </materialModules.Typography>
                                    </materialModules.AccordionDetails>
                                </materialModules.Accordion>
                            </div>
                        </div>
                        <div className='swich-user-container'>
                            <h2 className='heading responsive-h'>Still have Questions? We’re here to help!</h2>
                            <div className='swich-user-list'>
                                <div className='swich-user-section'>
                                    <h5 className='heading-of-sample'>Creator</h5>
                                    <div className='swich-class'>
                                        <materialModules.Switch defaultChecked color="secondary" className="swich-class" />
                                    </div>
                                </div>
                                <div className='swich-user-section'>
                                    <h5 className='heading-of-sample'>Reposter</h5>
                                    <div className='swich-class'>
                                        <materialModules.Switch defaultChecked color="secondary" className="swich-class" />
                                    </div>
                                </div>
                            </div>
                            <div className="next-div">
                                <materialModules.Button onClick={() => navigate('/brand/request-table')} className="btn-buy-now">Chat Support</materialModules.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default BrandSupportDesign