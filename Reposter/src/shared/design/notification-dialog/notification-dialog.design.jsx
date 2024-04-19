import React, { useState } from 'react';
import * as materialModules from '@/shared/modules/material';
import './notification-dialog.design.scss';
import CloseIcon from '@mui/icons-material/Close';
import notificationImg from "@/assets/noti-avatar.png";
import vecImg from "@/assets/vec.png";
import defualtAvatarImg from "@/assets/defualt-avatar.png";
import folderImg from "@/assets/n-folder.png";

export const NotificationDialogDesign = ({ open, setOpen }) => {
    const [emails, setEmails] = useState(['username@gmail.com', 'user02@gmail.com']);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className='notification-dialog'>
            <materialModules.Dialog onClose={false} open={open} >
                <materialModules.DialogTitle className="dialog-title">
                    <div className="dialog-title-div">
                        Notifications
                        <CloseIcon onClick={handleClose} />
                    </div>
                    <hr className="notification-hr" />
                    <div className="btn-mark-all-read-div">
                        <materialModules.Button className="btn-mark-all-read">Mark all as read</materialModules.Button>
                    </div>
                    <div>
                        <h5 className='noti-other=heading'>Unread</h5>
                        <div className="unread-notification-list">
                            <div className='notification-detail'>
                                <img src={notificationImg} alt="" />
                                <h6>Stewie Griffin invited you to Resources_ Product_Growth_Org Design.paper</h6>
                            </div>
                            <div className='sub-notification-list'>
                                <div className='sub-s-notification-list'>
                                    <img src={vecImg} alt="" className="notification-img" />
                                    <h6>Resources_ Product_Growth_Org Design....</h6>
                                </div>
                                <h5 className='notification-duration'>3 months ago</h5>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h5 className='noti-other=heading'>Recent</h5>
                        <div className='notification-detail'>
                            <img src={defualtAvatarImg} alt="" />
                            <h6>Stewie Griffin invited you to Resources_ Product_Growth_Org Design.paper</h6>
                        </div>
                        <div className='sub-notification-list'>
                            <div className='sub-s-notification-list'>
                                <img src={folderImg} alt="" className="notification-img" />
                                <h6>Meg Griffin invited you to edit the folder  Logo graphics</h6>
                            </div>
                            <h5 className='notification-duration'>Jul 1, 2021</h5>

                        </div>
                    </div>

                </materialModules.DialogTitle>
                <materialModules.List sx={{ pt: 0 }}>

                </materialModules.List>
            </materialModules.Dialog>
        </div>

    );
};
