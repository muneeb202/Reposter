import React, { useState } from 'react'
import './messages.scss';
import HeaderDesign from '../../header/header.design';
import * as materialModules from "@/shared/modules/material";
import phoneIcon from "@/assets/phone-icon.png";
import videoCallIcon from "@/assets/video-call-icon.png";
import creatorImg from "@/assets/creator-img.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
const MessagesDesign = () => {
    const [creatorList, setCreatorList] = useState([
        {
            'creatorName': "Jennifer",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },
        {
            'creatorName': "creator 1",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "creator 1",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },
        {
            'creatorName': "creator 1",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "creator 1",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },
        {
            'creatorName': "creator 1",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "creator 1",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },
    ]);
    return (
        <>
            <div className="messages">
                <h2 className="heading-color messages-heading">Messages</h2>
            </div>
            <div className="container-messages">
                <div className="col-4">
                    <div className='btn-search'>
                        <materialModules.Button className='btn-search'>Search more</materialModules.Button>
                    </div>
                    <div className="creators-list-div-message">
                        {creatorList.map((creator) => {
                            return (
                                <div className='creator-list-data' key={creator?.route}>
                                    <img src={creator?.creatorImage} alt="" className="creator-profile-img" />
                                    <h5 className="creator-name">{creator?.creatorName}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-8">
                    <div>

                        <div className='creator-hire-me-div'>
                            <h2 className='heading-color creator-heading'>Jennifer</h2>
                            <materialModules.Button className="btn-hire-now">Hire Now</materialModules.Button>
                        </div>
                        <hr className='hr-line' />
                        <div className="img-class-message">
                            <img src={phoneIcon} />
                            <img src={videoCallIcon} className="call-icon" />
                        </div>
                        <div className="chat-container">
                            <div className='chat-list-section'>
                                <div className="chatlist">
                                    <div>
                                        <img src={creatorImg} alt="" className="chat-person-img-msg" />
                                    </div>
                                    <div className='messages-data-detail'>
                                        <h5>Jennifer</h5>
                                        <hr className="abc" />
                                        <hr className="abc" />
                                    </div>
                                </div>

                                <div className="chatlist">
                                    <div>
                                        <img src={creatorImg} alt="" className="chat-person-img-msg" />
                                    </div>
                                    <div className='messages-data-detail'>
                                        <h5>Brand</h5>
                                        <hr className="abc" />
                                        <hr className="abc" />
                                    </div>
                                </div>
                            </div>
                            <div className="main-textarea-message-container">
                                <div className="textarea-message-container">
                                    <div className='icon-div'>
                                        <AddCircleIcon className='icon' />
                                        <h4 className='doc'>doc</h4>
                                        <SendIcon className='icon' />
                                    </div>
                                    <textarea rows="4" cols="1" placeholder="Message Here" className="textarea-message-textarea">
                                    </textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessagesDesign;