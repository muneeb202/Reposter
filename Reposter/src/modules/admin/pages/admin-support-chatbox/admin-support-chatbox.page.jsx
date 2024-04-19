import React, { useState } from 'react'
import avatarMale from "@/assets/avatarMale.jpg";
import avatarFemale from "@/assets/avatar-female.jpg";
import AdminSupportChatboxDesign from '@/shared/design/admin-section/admin-support-chatbox/admin-support-chatbox.design';
const AdminSupportChatboxPage = () => {
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
        <AdminSupportChatboxDesign messages={messages} />
    );
}

export default AdminSupportChatboxPage;