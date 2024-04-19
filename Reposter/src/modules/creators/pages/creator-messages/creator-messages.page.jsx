import React, { useState } from 'react'
import creatorImg from "@/assets/creator-img.png";
import CreatorMessagesDesign from '@/shared/design/creator-section/creator-messages/creator-messages.design';
const CreatorMessagesPage = () => {
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
        <CreatorMessagesDesign creatorList={creatorList} />
    )
}

export default CreatorMessagesPage;