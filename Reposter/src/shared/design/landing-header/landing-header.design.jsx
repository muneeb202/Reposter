import React, { useState } from 'react'
import "./landing-header.scss";
import * as materialModules from "@/shared/modules/material";
import { useLocation, useNavigate } from 'react-router-dom';
// import mainLogo from "@/assets/main-logo.png";
import mainLogo from '@/assets/studio.png';
import headerVector from "@/assets/header-vector.png";
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';

const LandingHeaderDesign = ({ onSelectView, currentView, isHeaderOpen, setIsHeaderOpen }) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:768px)');
    // const [isHeaderOpen, setIsHeaderOpen] = useState(false);


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
                matches ?
                    <>
                        {
                            location.pathname === "/" &&
                            <header>
                                <div className="main-header-landing-container">
                                    <div className="containter-first-side-header">
                                        <img src={mainLogo} alt="" className='main-website-logo-landing' />
                                        
                                       
                                    </div>
                                    <div className='btntop'>
                                    <div className='nav-container-landing-headerr ' style={{
                                             backgroundImage: `url(${headerVector})`
                                        }} >
                                           
                                            {
                                                currentView === "talent" ?
                                                    <p className="navbar-heading-landingg active1"
                                                        onClick={() => onSelectView('talent')}>Talent</p>

                                                    :
                                                    <p className="navbar-heading-landingg"
                                                        onClick={() => onSelectView('talent')}>Talent</p>
                                            }
                                            {
                                                currentView === "brand" ?

                                                    <p className="navbar-heading-landingg active1"
                                                        onClick={() => onSelectView('brand')}>Brand</p>

                                                    :
                                                    <p className="navbar-heading-landingg"
                                                        onClick={() => onSelectView('brand')}>Brand</p>

                                            }
                                        </div>
                                        <materialModules.Button className="new-signup-btn2">Sign Up</materialModules.Button>
                                        <materialModules.Button className="new-login-btn2">Log In</materialModules.Button>
                                    </div>
                                </div>
                            </header >

                        }

                    </>
                    :
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
                            <header>
                                <div className="main-header-landing-container">
                                    <div className="containter-first-side-header">
                                        <div className="add-close-icon-with-logo">
                                            <img src={mainLogo} alt="" className='main-website-logo-landing' />
                                            <CloseIcon style={{ color: "#000" }} className='close-icon-mobile-menu'
                                                onClick={handleHeaderToggle}
                                            />
                                        </div>


                                        <div className='nav-container-landing-headerr'>
                                            {
                                                currentView === "talent" ?

                                                    <p className="navbar-heading-landing active"
                                                        onClick={() => onSelectView('talent')}>Talent</p>

                                                    :
                                                    <p className="navbar-heading-landing"
                                                        onClick={() => onSelectView('talent')}>Talent</p>

                                            }
                                            {
                                                currentView === "brand" ?

                                                    <p className="navbar-heading-landing active"
                                                        onClick={() => onSelectView('brand')}>Brand</p>

                                                    :
                                                    <p className="navbar-heading-landing"
                                                        onClick={() => onSelectView('brand')}>Brand</p>

                                            }
                                        </div>

                                    </div>
                                    <div className="show-mobile-nav-btn">
                                        <materialModules.Button className="new-signup-btn2">Sign Up</materialModules.Button>
                                        <materialModules.Button className="new-login-btn2">Log In</materialModules.Button>
                                    </div>
                                </div>
                            </header >
                        </Drawer>
                    </>

            }
        </>




    )
}

export default LandingHeaderDesign