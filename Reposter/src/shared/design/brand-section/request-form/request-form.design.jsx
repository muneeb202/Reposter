import React, { useState } from 'react';
import * as materialModules from "@/shared/modules/material";
import "./request-form.scss";
import AddIcon from '@mui/icons-material/Add';
import emptyImg from "@/assets/empty-img.png";
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import axios from 'axios';

const RequestFormDesign = () => {
    const [problemSubject, setProblemSubject] = useState('');
    const [problemDescription, setProblemDescription] = useState('');
    const [selectedFiles, setSelectedFiles] = useState(Array.from({ length: 14 }, () => ''));

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const updatedSelectedFiles = [...selectedFiles];

        files.forEach((file, index) => {
            if (index < selectedFiles.length) {
                // updatedSelectedFiles[index] = URL.createObjectURL(file);
                updatedSelectedFiles[index] = file;
            }
        });

        setSelectedFiles(updatedSelectedFiles);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('problemSubject', problemSubject);
            formData.append('problemDescription', problemDescription);
            formData.append('uploadFile', selectedFiles);
            // selectedFiles.forEach((file, index) => {
            //     if (file) {
            //         formData.append(`uploadFile${index}`, file);
            //     }
            // });

            const response = await axios.post('http://localhost:3001/chatapi/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `${localStorage.getItem('accessToken')}`
                }
            });

            console.log('Chat created:', response.data);
        } catch (error) {
            console.error('Error creating chat:', error);
        }
    };

    return (
        <>
            <div className="flex-container-request-form">
                <div className="col-6-request-form">
                    <DashboardDesign />
                </div>
                <div className="col-8-request-form">
                    <h2 className="heading responsive-heading">Upload Request</h2>

                    <div className='upload-form-data'>
                        <div className="upload-form-input">
                            <materialModules.Label htmlFor="problemSubject" className="label-class">Problem Subject</materialModules.Label>
                            <input
                                id="problemSubject"
                                className="text-field-design-input"
                                value={problemSubject}
                                onChange={(e) => setProblemSubject(e.target.value)}
                            />
                        </div>
                        <div className="upload-form-input">
                            <materialModules.Label htmlFor="problemDescription" className="label-class">Problem Description</materialModules.Label>
                            <textarea
                                id="problemDescription"
                                className="text-field-design-input-description"
                                value={problemDescription}
                                onChange={(e) => setProblemDescription(e.target.value)}
                            />
                        </div>
                        <div className="upload-form-input">
                            <materialModules.Label htmlFor="uploadFile" className="label-class">Upload file</materialModules.Label>
                            <input
                                id="uploadFile"
                                type="file"
                                multiple
                                className="text-field-design-input"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="upload-and-select-img">
                            <div className="selected-img-request-form">
                                {selectedFiles.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image || emptyImg}
                                        alt={`Image ${index + 1}`}
                                        className="current-selected-img"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="submit-div">
                            <materialModules.Button className="btn-buy-now" onClick={handleSubmit}>Submit</materialModules.Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestFormDesign;
