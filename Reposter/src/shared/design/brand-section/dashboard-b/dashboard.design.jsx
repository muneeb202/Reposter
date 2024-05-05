import React, { useState } from 'react';
import './dashboard.scss'
import * as materialModules from "@/shared/modules/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/SwipeableDrawer';
import { useMediaQuery } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const DashboardDesign = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:768px)');
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const handleOpenNotificationDialog = () => {
        setOpen(!open)
    }

    const isActive = (path) => {
        return location.pathname === `/brand/${path}` ? 'active' : '';
    };


    /**
     * naviagation of sidebar
     * @param {*} path 
     */
    const handleSidebarRouting = (path) => {
        navigate(`/brand/${path}`)
    }

    return (
        <>
            {matches ? (
                <div className='dashboard-container'>
                    <h1 className="dashboard-heading">Dashboard</h1>
                    <h3 className={`dashboard-side-navbar ${isActive('dashboard')}`} onClick={() => handleSidebarRouting("dashboard")}>Hires</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('project')}`} onClick={() => handleSidebarRouting("project")}>Project</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('dashboard/state')}`} onClick={() => handleSidebarRouting("dashboard/state")}>Overall Statistics</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('assets')}`} onClick={() => handleSidebarRouting("assets")}>Assets</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('settings')}`} onClick={() => handleSidebarRouting("settings")}>Settings</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('profile')}`} onClick={() => handleSidebarRouting("profile")}>Profile</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('payment-detail')}`} onClick={() => handleSidebarRouting("payment-detail")}>Payments</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('support')}`} onClick={() => handleSidebarRouting("support")}>Support</h3>
                    <h3 className={`dashboard-side-navbar ${isActive('package')}`} onClick={() => handleSidebarRouting("package")}>Packages</h3>
                    {location.pathname === "/support" &&
                        // {location.pathname === "/support" || location.pathname == "/request-form"  && 
                        <div className="chat-support-div">
                            <materialModules.Button className="btb-chat-support"
                                startIcon={<ChatBubbleIcon />} onClick={() => handleSidebarRouting("chatbox")}>Chat Support</materialModules.Button>
                        </div>
                    }
                </div>
            ) : (
                <>
                    <KeyboardArrowRightIcon style={{ fontSize: '40px', color: '#770cf1' }} onClick={handleDrawerToggle} />
                    <Drawer
                        open={isDrawerOpen}
                        onClose={handleDrawerToggle}
                    >
                        <div className='dashboard-container' style={{ margin: "20px" }}>
                            <h1 className="dashboard-heading">Dashboard</h1>
                            <h3 className='dashboard-side-navbar active' onClick={() => handleSidebarRouting("dashboard")}>Hires</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("project")}>Project</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("overall-statistics")}>Overall Statistics</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("assets")}>Assets</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("settings")}>Settings</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("profile")}>Profile</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("payment-detail")}>Payments</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("support")}>Support</h3>
                            <h3 className={`dashboard-side-navbar ${isActive('')}`} onClick={() => handleSidebarRouting("package")}>Packages</h3>
                            {(location.pathname === "/support" || location.pathname === "/request-form" || location.pathname === "/request-table") &&
                                <div className="chat-support-div">
                                    <materialModules.Button className="btb-chat-support"
                                        startIcon={<ChatBubbleIcon />} onClick={() => handleSidebarRouting("chatbox")}>
                                        Chat Support
                                    </materialModules.Button>
                                </div>
                            }
                        </div>
                    </Drawer>
                </>

            )}
        </>

    )
}

export default DashboardDesign