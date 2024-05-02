import React, { useState, useEffect } from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import * as materialModules from "@/shared/modules/material";
import "./support-chatbox.scss";
import avatarMale from "@/assets/avatarMale.jpg";
import avatarFemale from "@/assets/avatar-female.jpg";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { IconButton, TextField } from '@mui/material';

const SupportChatboxDesign = () => {
    // const [messages, setMessages] = useState([
    //     {
    //         text: 'Hi Kitsbase, Let me know you need help and you can ask us any questions', isSender: true, timeMessage: "08:21 AM",
    //         chatPersonImage: `${avatarMale}`
    //     },
    //     { text: 'How to create a Creator account?', isSender: false, timeMessage: "08:22 AM", },
    //     {
    //         text: 'Open the Reposter website to get started and follow the steps. Reposter doesn’t charge a fee to create or maintain your creator account.', isSender: true, timeMessage: "08:23 AM",
    //         chatPersonImage: `${avatarFemale}`,
    //     },
    //     { text: 'How to create a Reposter account?', isSender: false, timeMessage: "08:24 AM" },
    // ]);

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [sender, setSender] = useState(false);

    useEffect(() => {
        fetchMessages();
    }, []);

    const formatDate = (date) => {
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true // Enables 12-hour clock
        };
      
        return new Date(date).toLocaleString('en-GB', options);
      };

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.get('http://localhost:3001/chatapi/messages', {
                headers: {
                    Authorization: token
                }
            });
            console.log(response)
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const sendMessage = async () => {
        console.log("here")
        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.post('http://localhost:3001/chatapi/messages', { text: newMessage }, {
                headers: {
                    Authorization: token
                }
            });
            setMessages([...messages, {text: newMessage, isSender: sender, timeMessage: formatDate(Date.now())}]);
            setNewMessage('');
            setSender(!sender)
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

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
                            {messages.map((message, index) => (
                                <div key={index} className={message.isSender ? 'support-message' : 'user-message'}>
                                    <img src={message.isSender ? avatarFemale : avatarMale} alt="" className="chat-person-img" />
                                    <div>
                                        <div className={message.isSender ? 'single-message-sender-text-container' : 'single-message-reciever-text-container'}>
                                            <p className="single-message-text">{message.text}</p>
                                        </div>
                                        <div className="time-container">
                                            <p className="time-text">{message.timeMessage}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="textarea-message-container-s">
                            <TextField multiline minRows={2} placeholder="Message Here" className="textarea-message-textarea" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></TextField>
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
        </>
    );
}

export default SupportChatboxDesign;