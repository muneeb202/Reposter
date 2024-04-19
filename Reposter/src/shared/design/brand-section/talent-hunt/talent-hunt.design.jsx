import React, { useState } from 'react';
import './talent-hunt.scss';
import findUser from "@/assets/find-user -male.png";
import mySpace from "@/assets/MySpace.png";
import Ophthalmology from "@/assets/Ophthalmology.png";
import vector from "@/assets/Vector.png";
import creatorImg from "@/assets/creator-img.png";
import reposterImg from "@/assets/resposter-img.png";
import browserFolderImg from "@/assets/browser-folder.png";
import * as materialModules from "@/shared/modules/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const TalentHuntDesign = () => {
    const menuItems = [
        {
            name: 'Discover',
            icon: `${findUser}`,
            route: '/discover'
        },
        {
            name: 'Your hires',
            icon: `${mySpace}`,
            route: '/your-hires'
        },
        {
            name: 'Recently viewed',
            icon: `${Ophthalmology}`,
            route: '/recently-viewed'
        },
        {
            name: 'Saved Talent',
            icon: `${vector}`,
            route: '/saved-talent'
        }
    ];

    const [creatorList, setCreatorList] = useState([
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
            'creatorName': "Maria James",
            "creatorImage": `${creatorImg}`,
            "jobTitle": "Creator",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",



        },
    ]);
    const [reposterList, setReposterList] = useState([
        {
            'reposterName': "William James",
            "reposterImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
        {
            'reposterName': "William James",
            "reposterImage": `${reposterImg}`,
            "jobTitle": "Reposter",
            "level": 2,
            "commison": "40%",
            "views": "8k",
            "earned": "20k",
        },
    ]);
    return (
        <>
            <div className="row flex-container-talent-hunt">
                <div className="col-3">
                    {menuItems.map(item => (
                        <div key={item.route} className='left-bar'>
                            <img className='icon-class-talent-hunt' src={item.icon} alt="" />
                            <h3 className='span-name'>{item.name}</h3>
                            {/* <span>{item.route}</span> */}
                        </div>
                    ))}
                </div>
                <div className="col-6-talent-hunt">
                    <div className="mid-talent-hunt">
                        <h3 className="heading-color">Creators</h3>
                        <div className='btn-talent-hunt-search-more'>
                            <materialModules.Button className='btn-talent-hunt-search-more'>Search more</materialModules.Button>
                        </div>
                    </div>
                    <div className='creator-reposter-div'>
                        {creatorList.map((creator) => {
                            return (
                                <div className='cr-list' key={creator?.route}>
                                    <div className='cr-data-list'>
                                        <img src={creator?.creatorImage} alt="" />
                                        <div className='cr-data'>
                                            <h3 className="heading-color">{creator?.creatorName}</h3>
                                            <h4>{creator?.jobTitle}</h4>
                                            <h6>LEVEL:{creator?.level}</h6>
                                        </div>

                                    </div>
                                    <div className="cr-state">
                                        <p className="cr-p">{creator?.commison} commission</p>
                                        <p className="cr-p">{creator?.views} views</p>
                                        <p className="cr-p">{creator?.earned}+ earned</p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mid-talent-hunt">
                        <h3 className="heading-color">Reposter</h3>
                        <div className='btn-talent-hunt-search-more'>
                            <materialModules.Button className='btn-talent-hunt-search-more'>Search more</materialModules.Button>
                        </div>
                    </div>
                    <div className='creator-reposter-div'>
                        {reposterList.map((reposter) => {
                            return (
                                <div className='cr-list' key={reposter?.route}>
                                    <div className='cr-data-list'>
                                        <img src={reposter?.reposterImage} alt="" />
                                        <div className='cr-data'>
                                            <h3 className="heading-color">{reposter?.reposterName}</h3>
                                            <h4>{reposter?.jobTitle}</h4>
                                            <h6>LEVEL:{reposter?.level}</h6>
                                        </div>

                                    </div>
                                    <div className="cr-state">
                                        <p className="cr-p">{reposter?.commison} commission</p>
                                        <p className="cr-p">{reposter?.views} views</p>
                                        <p className="cr-p">{reposter?.earned}+ earned</p>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-tag-list">
                    <div className='browse-class'>
                        <img className='icon-class' src={browserFolderImg} alt="" />
                        <h4 className="heading-color browse-heading">Browse</h4>
                    </div>
                    {/* <div className='folder-btn-class'> */}
                    <div className="tag-folder-group">
                        <div className="border-talent-hunt-locaion">
                            <materialModules.Button className='folder-btn folder-btn-p-p'>Location</materialModules.Button>

                        </div>
                        <div className="border-talent-hunt">
                            <materialModules.Button className='folder-btn folder-btn-p'>Talent</materialModules.Button>
                        </div>
                        <div className="border-talent-hunt">
                            <materialModules.Button className='folder-btn folder-btn-p'>category</materialModules.Button>
                        </div>
                        <div className="border-talent-hunt">
                            <materialModules.Button className='folder-btn folder-btn-p'>level</materialModules.Button>
                        </div>
                        <div className="border-talent-hunt">
                            <materialModules.Button className='folder-btn folder-btn-p'>Response time</materialModules.Button>
                        </div>
                        <div className="border-talent-hunt">
                            <materialModules.Button className='folder-btn folder-btn-p'>conversation rate</materialModules.Button>
                        </div>
                        <div className="border-talent-hunt">
                            <materialModules.Button className='folder-btn folder-btn-p'>Reviews</materialModules.Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TalentHuntDesign;