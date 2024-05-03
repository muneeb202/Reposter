import React, { useEffect, useState } from 'react';
import * as materialModules from "@/shared/modules/material";
import "./request-form.scss";
import AddIcon from '@mui/icons-material/Add';
import emptyImg from "@/assets/empty-img.png";
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RequestFormDesign = () => {
    const [problemSubject, setProblemSubject] = useState('');
    const [problemDescription, setProblemDescription] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const updatedSelectedFiles = [...selectedFiles];

        files.forEach((file, index) => {
            if (index < selectedFiles.length) {
                // updatedSelectedFiles[index] = URL.createObjectURL(file);
                updatedSelectedFiles[index] = file;
            }
        });

        setSelectedFiles([...selectedFiles, ...files]);
    };

    const handleSubmit = async () => {
        try {
            console.log(selectedFiles)
            const formData = new FormData();
            formData.append('problemSubject', problemSubject);
            formData.append('problemDescription', problemDescription);
            for (let index = 0; index < selectedFiles.length; index++) {
                const element = selectedFiles[index];
                formData.append('uploadFile', element);
            }

            const response = await axios.post('http://localhost:3001/chatapi/create', formData, {
                headers: {
                    Authorization: `${localStorage.getItem('accessToken')}`
                }
            });

            console.log('Chat created:', response.data);
            navigate(`/brand/chatbox/${response.data['id']}`)
        } catch (error) {
            console.error('Error creating chat:', error);
        }
    };

    const deleteImage = (indexToRemove) => {
        setSelectedFiles(prevSelectedFiles => {
            // Filter out the file to be removed based on its index
            const updatedFiles = prevSelectedFiles.filter((_, index) => index !== indexToRemove);
            return updatedFiles;
        });
    };
    

    useEffect(() => {
        console.log(selectedFiles)
    }, [selectedFiles]);

    return (
        <>
            <div className="flex-container-request-form">
                <div className="col-6-request-form">
                    <DashboardDesign />
                </div>
                <div className="col-8-request-form">
                    <h2 className="heading responsive-heading">Upload Request</h2>
                    <br />
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
                            <div className='btn-upload-file-request-form'>
                                <materialModules.Button onClick={() => document.getElementById('uploadFile').click()} className='btn-upload-file-request-form'
                                    startIcon={<AddIcon className="add-file-icon" />}
                                ><h3 className="upload-heading">File</h3></materialModules.Button>
                            </div>
                            <input
                                id="uploadFile"
                                type="file"
                                multiple
                                hidden
                                className="text-field-design-input"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="upload-and-select-img">
                            
                                {selectedFiles.map((image, index) => (
                                    <div className="selected-img-request-form">
                                        <i onClick={() => deleteImage(index)} className="fa-solid fa-xmark"></i>
                                        <img
                                            key={index}
                                            src={URL.createObjectURL(image) || emptyImg}
                                            alt={`Image ${index + 1}`}
                                            className="current-selected-img"
                                        />
                                        <p>{image.name}</p>
                                    </div>
                                ))}
                        </div>
                        <div className="submit-div">
                            <materialModules.Button className="btn-buy-now" onClick={handleSubmit}>Submit</materialModules.Button>
                        </div><br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestFormDesign;
