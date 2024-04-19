import React, { useState } from 'react'
import "./talent-hunt-admin.scss"

import creatorImg from "@/assets/creator-img.png";
import reposterImg from "@/assets/resposter-img.png";
import * as materialModules from "@/shared/modules/material";
import AdminSidebarDesign from '@/shared/design/admin-section/admin-sidebar/admin-sidebar.design';

export const AdminTalenthuntDesign = () => {
    const [creatorList, setCreatorList] = useState([
        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },

        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },

        {
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",

        },

    ]);
    const [reposterList, setReposterList] = useState([
        {
            'creatorName': "William James",
            "creatorImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "William James",
            "creatorImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'creatorName': "William James",
            "creatorImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": "Top Level",
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },

    ]);
    return (
        <>
            <div className="container-packages">
                <div className="flex-container-appicant">
                    <div className="col-6-appicant">
                        <AdminSidebarDesign />
                    </div>
                    <div className="col-8-appicant">
                        <h2 className="heading space-a">Creator</h2>
                        <div className='talent-hunt-admin-list-div'>
                            {creatorList.map((creator) => {
                                return (
                                    <div>
                                        <div className='applicat-list' key={creator?.route}>
                                            <div className='cr-data-list'>
                                                <img src={creator?.creatorImage} alt="" className="creator-reposter-img" />
                                                <div className='applicat-data'>
                                                    <h3 className="heading-color user-name">{creator?.creatorName}</h3>
                                                    <h4>{creator?.jobTitle}</h4>
                                                    <h6>{creator?.level}</h6>
                                                </div>

                                            </div>
                                            <div className="applicat-state">
                                                <p className="applicant-p">{creator?.commison} commission</p>
                                                <p className="applicant-p">{creator?.views} views</p>
                                                <p className="applicant-p">{creator?.earned}+ earned</p>
                                            </div>

                                        </div>
                                        <div className='btn-views-prop'>
                                            <materialModules.Button className="btn-views">View Proposal</materialModules.Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <h2 className="heading space-a">Reposter</h2>
                        <div className='talent-hunt-admin-list-div'>
                            {reposterList.map((creator) => {
                                return (
                                    <div>
                                        <div className='applicat-list' key={creator?.route}>
                                            <div className='cr-data-list'>
                                                <img src={creator?.creatorImage} alt="" className="creator-reposter-img" />
                                                <div className='applicat-data'>
                                                    <h3 className="heading-color user-name">{creator?.creatorName}</h3>
                                                    <h4>{creator?.jobTitle}</h4>
                                                    <h6>{creator?.level}</h6>
                                                </div>

                                            </div>
                                            <div className="applicat-state">
                                                <p className="applicant-p">{creator?.commison} commission</p>
                                                <p className="applicant-p">{creator?.views} views</p>
                                                <p className="applicant-p">{creator?.earned}+ earned</p>
                                            </div>

                                        </div>
                                        <div className='btn-views-prop'>
                                            <materialModules.Button className="btn-views">View Proposal</materialModules.Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default AdminTalenthuntDesign