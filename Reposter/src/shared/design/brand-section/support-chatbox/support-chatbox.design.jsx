import React, { useState } from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import * as materialModules from "@/shared/modules/material";
import "./support-chatbox.scss";
import avatarMale from "@/assets/avatarMale.jpg";
import avatarFemale from "@/assets/avatar-female.jpg";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
const SupportChatboxDesign = () => {
    const [messages, setMessages] = useState([
        {
            text: 'Hi Kitsbase, Let me know you need help and you can ask us any questions', isSender: true, timeMessage: "08:21 AM",
            chatPersonImage: `${avatarMale}`
        },
        { text: 'How to create a Creator account?', isSender: false, timeMessage: "08:22 AM", },
        {
            text: 'Open the Reposter website to get started and follow the steps. Reposter doesn’t charge a fee to create or maintain your creator account.', isSender: true, timeMessage: "08:23 AM",
            chatPersonImage: `${avatarFemale}`,
        },
        { text: 'How to create a Reposter account?', isSender: false, timeMessage: "08:24 AM" },
    ]);

    return (
        <>
            <div className="flex-container-support-chatbox">
                <div className="col-6-support-chatbox">
                    <DashboardDesign />
                </div>
                <div className="col-8-support-chatbox">
                    <h2 className="heading responsive-heading">Support</h2>
                    <div className="chat-support-container">
                        <div className='chat-support-list-section'>

                            {messages.map((message) => {
                                return (
                                    message.isSender ?
                                        <>
                                            <div className="chatsupportlist">
                                                <img src={message?.chatPersonImage} alt="" className="chat-person-img" />
                                                <div>
                                                    <div className="single-message-sender-text-container">
                                                        <p className="single-message-text">{message.text}</p>
                                                    </div>
                                                    <div className="time-container">
                                                        <p className="time-text">{message?.timeMessage}</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </>
                                        :
                                        <div className="chatsupportlis">
                                            <div className="single-message-reciever-text-container">
                                                <div>
                                                    <div className="message-text">
                                                        <p className="single-message-text receiver-text">{message?.text}</p>
                                                    </div>
                                                    <div className="reci-time-container">
                                                        <p className="time-text">{message?.timeMessage}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                        <div className="textarea-message-container-s">
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
        </>
    );
}

export default SupportChatboxDesign;