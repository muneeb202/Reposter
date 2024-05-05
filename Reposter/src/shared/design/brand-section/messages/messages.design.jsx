import React, { useState } from 'react'
import './messages.scss';
import HeaderDesign from '../../header/header.design';
import * as materialModules from "@/shared/modules/material";
import phoneIcon from "@/assets/phone-icon.png";
import videoCallIcon from "@/assets/video-call-icon.png";
import creatorImg from "@/assets/creator-img.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
import { IconButton, TextField } from '@mui/material';
const MessagesDesign = () => {
    const [newMessage, setNewMessage] = useState('');
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

    const sendMessage = async () => {
        console.log("here")
        // try {
        //     const token = localStorage.getItem('accessToken');
        //     const response = await axios.post('http://localhost:3001/chatapi/messages', { text: newMessage, chatId: id, isUser: sender }, {
        //         headers: {
        //             Authorization: token
        //         }
        //     });
        //     setMessages([...messages, {text: newMessage, isUser: sender, createdAt: formatDate(Date.now())}]);
        //     setNewMessage('');
        //     setSender(!sender)
        //     // fetchMessages();
        // } catch (error) {
        //     console.error('Error sending message:', error);
        // }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            sendMessage();
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className="messages">
                <h2 className="heading-color messages-heading">Messages</h2>
            </div>
            <div className="container-messages">
                <div className="">
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
                            <div className="textarea-message-container-s">
                                <TextField onKeyDown={handleKeyDown} multiline minRows={2} placeholder="Message Here" className="textarea-message-textarea" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></TextField>
                                <div className='icon-div'>
                                    <AddCircleIcon className='icon' />
                                    <h4 className='doc'>doc</h4>
                                    <IconButton onClick={sendMessage}>
                                        <SendIcon className='icon' />
                                    </IconButton>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesDesign;