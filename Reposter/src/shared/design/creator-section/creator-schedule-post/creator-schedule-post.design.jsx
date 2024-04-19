import React, { useState } from 'react'
import "./creator-schedule-post.scss";
import { useLocation, useNavigate } from 'react-router-dom';

import CreatorSidebarDesign from '../creator-sidebar/creator-sidebar.design';
import * as materialModules from "@/shared/modules/material";

import AddIcon from '@mui/icons-material/Add';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import tiktokIcon from "@/assets/TikTok.png";
import facebookIcon from "@/assets/Facebook.png";
import twitterIcon from "@/assets/Twitter.png";
import instagramIcon from "@/assets/Instagram.png";
import pinterestIcon from "@/assets/Pinterest.png";
import youtubetIcon from "@/assets/YouTube.png";


const CreatorSchedulePostDesign = () => {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const onChange = (newDate) => {
        setDate(newDate);
    };

    /**
    * naviagation for header
    * @param {*} path 
    */
    const handleSidebarRouting = (path) => {
        navigate(`creator/${path}`)
    }

    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-container-creartor-shedule">
                <div className="col-3-creator-reports">
                    <CreatorSidebarDesign />
                </div>
                {/* <div className="testin-purpose"> */}
                <div className="col-8-creator-schedule">
                    <h2 className="heading-color" style={{ paddingLeft: "10px" }}>Schedule Posts</h2>
                    <div style={{ marginTop: "10px" }}>
                        <h3 style={{ paddingLeft: "10px" }}>Platforms</h3>
                        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", width: "100%" }}>
                            <div style={{ width: "23%" }}>
                                <img src={facebookIcon} alt="" style={{ width: "70px", }} />
                            </div>
                            <div style={{ width: "23%" }}>
                                <img src={tiktokIcon} alt="" style={{ width: "70px", }} />

                            </div>
                            <div style={{ width: "23%" }}>
                                <img src={twitterIcon} alt="" style={{ width: "70px", }} />
                            </div>
                            <div style={{ width: "23%" }}>
                                <img src={instagramIcon} alt="" style={{ width: "70px", }} />
                            </div>
                            <div style={{ width: "23%" }}>
                                <img src={pinterestIcon} alt="" style={{ width: "70px", }} />

                            </div>
                            <div style={{ width: "23%" }}>
                                <img src={youtubetIcon} alt="" style={{ width: "70px", }} />
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "15px" }}>
                            <div>
                                <h5 style={{ margin: "10px" }}>Media</h5>
                                <div className='btn-select-upload-file-scheduled-post'>
                                    <materialModules.Button className='btn-select-upload-file-scheduled-post'
                                        startIcon={<AddIcon className="add-file-icon" />}
                                    ></materialModules.Button>
                                </div>
                            </div>
                            <div>
                                <h5 style={{ margin: "10px" }}>Hashtags</h5>
                                <div className=''>
                                    <textarea className='btn-hastag'
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-8-creator-schedule">
                    <h3 className="heading-color" style={{
                        marginTop: "5px", fontFamily: "italic",
                        textDecoration: "underline", cursor: "pointer"
                    }}
                        onClick={() => handleSidebarRouting("creator/view/schedule/meeting")}
                    >View Scheduled Posts</h3>
                    <div style={{ marginTop: "30px" }}>
                        <materialModules.Label htmlFor="requirements2" className="label-class"
                            style={{ marginBottom: "10px" }}>Price Range</materialModules.Label>
                        <input
                            id="requirements2"
                            variant="outlined"
                            className="text-field-design-order-processing"
                        />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <materialModules.Label htmlFor="requirements2" className="label-class"
                            style={{ marginBottom: "10px" }}>Calender</materialModules.Label>
                        <div className="calender-s">
                            <Calendar onChange={onChange} value={date} />

                        </div>
                        <div display={{ display: "flex" }}>

                            <div className="btn-schedlue-post-div">
                                <materialModules.Button className="btn-schedlue-post">schedule now</materialModules.Button>
                                <materialModules.Button className="btn-schedlue-post">schedule later</materialModules.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </>
    )
}

export default CreatorSchedulePostDesign