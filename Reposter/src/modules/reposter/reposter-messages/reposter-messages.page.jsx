import React, { useState } from 'react'

import * as materialModules from "@/shared/modules/material";
import phoneIcon from "@/assets/phone-icon.png";
import videoCallIcon from "@/assets/video-call-icon.png";
import creatorImg from "@/assets/creator-img.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
import ReposterMessagesDesign from '../../../shared/design/reposter-section/reposter-messages/reposter-messages.design';
const ReposterMessagesPage = () => {
    const [reposterList, setReposterList] = useState([
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
        <ReposterMessagesDesign reposterList={reposterList} />
    )
}

export default ReposterMessagesPage;