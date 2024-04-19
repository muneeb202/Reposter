import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AdminSidebarPage= () => {
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
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("admin/dasboard")}>Overall Statistics</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("admin/creator/profile")}>Users</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("admin/order/management")}>Orders</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("admin/request/table")}>Requets</h3>
                <h3 className='dashboard-side-navbar' onClick={() => handleSidebarRouting("admin/support")}>Support</h3>
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

export default AdminSidebarPage