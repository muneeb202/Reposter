import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ReposterSidebarDesign = () => {
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
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("overall-statistics")}>Clients</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("overall-statistics")}>Projects</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("profile")}>Overall Statistics</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("profile")}>Assets</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("project")}>Schedule Posts</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("project")}>Settings</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("assets")}>Profile</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("support")}>Payment</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("support")}>Package</h3>
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

export default ReposterSidebarDesign