import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import AdminSidebarPage from '../admin-sidebar/admin-sidebar.design';
const AdminSupportChatboxDesign = ({ messages }) => {


    return (
        <>
            <div className="flex-container-support-chatbox">
                <div className="col-6-support-chatbox">
                    <AdminSidebarPage />
                </div>
                <div className="col-8-support-chatbox">
                    <h2 className="heading">Support</h2>
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
        </>);
}

export default AdminSupportChatboxDesign;