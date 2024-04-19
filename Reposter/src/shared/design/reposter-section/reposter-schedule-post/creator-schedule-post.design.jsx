import React, { useState } from 'react'
import "./creator-schedule-post.scss"
import CreatorSidebarDesign from '../creator-sidebar/creator-sidebar.design'
import * as materialModules from "@/shared/modules/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcon from '@mui/icons-material/Add';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CreatorSchedulePostDesign = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <>
            {/* <HeaderDesign /> */}
            <div className="flex-container-reports">
                <div className="col-3-creator-reports">
                    <CreatorSidebarDesign />
                </div>
                {/* <div className="testin-purpose"> */}
                <div className="col-3-creator-reports">
                    <h2 className="heading-color">Schedule Posts</h2>
                    <div style={{ marginTop: "10px" }}>
                        <h3>Platforms</h3>
                        <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            <FacebookIcon style={{ fontSize: "130px", color: "#770CF1" }} />
                            <TwitterIcon style={{ fontSize: "130px", color: "#770CF1" }} />
                            <InstagramIcon style={{ fontSize: "130px", color: "#770CF1" }} />
                            <PinterestIcon style={{ fontSize: "130px" }} />
                            <YouTubeIcon style={{ fontSize: "130px" }} />
                        </div>
                        <div className="upload-content-section">
                            <div className="upload-brand-section">
                                <h5>Media</h5>
                                <div className='btn-select-upload-file'>
                                    <materialModules.Button className='btn-select-upload-file'
                                        startIcon={<AddIcon className="add-file-icon" />}
                                    ></materialModules.Button>
                                </div>
                            </div>
                            <div className="upload-brand-section">
                                <h5>Hashtags</h5>
                                <div className='btn-hastag'>
                                    <materialModules.Button className='btn-select-upload-file'
                                    ></materialModules.Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-8-creator-reports" style={{ height: "50%" }}>
                    <h2 className="heading-color">View Scheduled Posts</h2>
                    <div style={{ marginTop: "30px" }}>
                        <materialModules.Label htmlFor="requirements2" className="label-class">Price Range</materialModules.Label>
                        <input
                            id="requirements2"
                            variant="outlined"
                            className="text-field-design-order-processing"
                        />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <materialModules.Label htmlFor="requirements2" className="label-class">Calender</materialModules.Label>
                        <div className="calender-s">
                        </div>
                        <div display={{ display: "flex" }}>
                            <div className="btn-schedlue-post-div">
                                <materialModules.Button className="btn-schedlue-post">schedule now</materialModules.Button>
                                <materialModules.Button className="btn-schedlue-post">schedule later</materialModules.Button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12-calender" style={{ width: 'calc(100% - 300px)' }}>
                    <div className="custom-calendar-container">
                        <Calendar onChange={onChange} value={date} />
                    </div>
                </div>
            </div>

            {/* </div> */}
        </>
    )
}

export default CreatorSchedulePostDesign