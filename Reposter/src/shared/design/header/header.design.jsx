import React, { useState } from 'react'
import mainLogo from "@/assets/main-logo.png";
import "./header.scss";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useLocation, useNavigate } from 'react-router-dom';
import { NotificationDialogDesign } from '@/shared/design/notification-dialog/notification-dialog.design';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/SwipeableDrawer';

const HeaderDesign = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:768px)');
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    const handleOpenNotificationDialog = () => {
        setOpen(!open)
    }

    console.log(location)

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    /**
    * naviagation for header
    * @param {*} path 
    */
    const handleSidebarRouting = (path) => {
        navigate(`brand/${path}`)
    }
    /**
    * naviagation for header
    * @param {*} path 
    */
    const handleHomePageRouting = (path) => {
        navigate(``)
    }

    const handleHeaderToggle = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };

    return (
        <>
            {
                matches ? <>
                    {
                        location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/brand/landing/page" &&
                        <div className="header">
                            <img src={mainLogo} alt="" className="main-website-logo" onClick={() => handleHomePageRouting("/")} />
                            {location.pathname !== "/signup" && location.pathname !== "/signin" &&
                                <>
                                    <nav className="navbar">
                                        <a className={`nav-item ${isActive('/brand/applicant')}`} onClick={() => handleSidebarRouting("applicant")}>Jobs</a>
                                        <a className={`nav-item ${isActive('/brand/talent-hunt')}`} onClick={() => handleSidebarRouting("talent-hunt")}>Talent</a>
                                        <a className={`nav-item ${isActive('/brand/reports')}`} onClick={() => handleSidebarRouting("reports")}>Report</a>
                                        <a className={`nav-item ${isActive('/brand/chat')}`} onClick={() => handleSidebarRouting("chat")}>Messages</a>
                                        <a className={`nav-item ${isActive('/brand/dashboard')}`} onClick={() => handleSidebarRouting("dashboard")}>Dashboard</a>
                                    </nav>
                                    <div className='logo-nav'>
                                        <SettingsIcon className='logo-design' />
                                        <NotificationsIcon onClick={handleOpenNotificationDialog} className='logo-design' />
                                    </div>
                                    <NotificationDialogDesign open={open} setOpen={setOpen} />
                                </>
                            }
                        </div>
                    }
                </>
                    :

                    <>
                        {
                            location.pathname !== "/" && location.pathname !== "/" &&
                            <>
                                <div className='header-nav-icon'>
                                    <img src={mainLogo} alt="" className="main-website-logo" />
                                    <MenuIcon className='menu-item-icon' onClick={handleHeaderToggle} />
                                </div>
                                <Drawer
                                    open={isHeaderOpen}
                                    onClose={handleHeaderToggle}
                                    anchor={'right'}
                                >
                                    
                                        <div className="header">
                                            <img src={mainLogo} alt="" className="main-website-logo"
                                                onClick={() => handleSidebarRouting("/")} />
                                            {location.pathname !== "/signup" && location.pathname !== "/signin" &&
                                                <>
                                                    <nav className="navbar">
                                                        <a className={`nav-item ${isActive()}`} onClick={() => handleSidebarRouting("applicant")}>Jobs</a>
                                                        <a className={`nav-item ${isActive()}`} onClick={() => handleSidebarRouting("talent-hunt")}>Talent</a>
                                                        <a className={`nav-item ${isActive()}`} onClick={() => handleSidebarRouting("reports")}>Report</a>
                                                        <a className={`nav-item ${isActive()}`} onClick={() => handleSidebarRouting("chat")}>Messages</a>
                                                        <a className={`nav-item ${isActive()}`} onClick={() => handleSidebarRouting("dashboard")}>Dashboard</a>
                                                    </nav>
                                                    <div className='logo-nav'>
                                                        <SettingsIcon className='logo-design' />
                                                        <NotificationsIcon onClick={handleOpenNotificationDialog} className='logo-design' />
                                                    </div>
                                                    <NotificationDialogDesign open={open} setOpen={setOpen} />
                                                </>
                                            }
                                        </div>
                                    
                                </Drawer>
                            </>
                        }

                    </>
            }
        </>


    )
}

export default HeaderDesign