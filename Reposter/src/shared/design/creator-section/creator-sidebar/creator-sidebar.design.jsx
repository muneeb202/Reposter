import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const CreatorSidebarDesign = () => {
    const location = useLocation();
    const navigate = useNavigate();

    /**
     * naviagation of sidebar
     * @param {*} path 
     */
    const handleSidebarRouting = (path) => {
        navigate(`/${path}`)
    }

    return (
        <>
            <div className='dashboard-container'>
                <h1 className="dashboard-heading">Dashboard</h1>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("")}>Projects</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("creator/schedule-post")}>Schedule Posts</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("creator/setting")}>Settings</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("creator/profile")}>Profile</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("creator/payment")}>Payment</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("creator/package")}>Package</h3>
                {location.pathname === "/support" &&
                    // {location.pathname === "/support" || location.pathname == "/request-form"  && 
                    <div className="chat-support-div">
                        <materialModules.Button className="btb-chat-support"
                            startIcon={<ChatBubbleIcon />} onClick={() => handleSidebarRouting("chatbox")}>Chat Support</materialModules.Button>
                    </div>
                }
            </div>
        </>
    )
}

export default CreatorSidebarDesign