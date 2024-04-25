import React from 'react';
import './signup.scss';
import stockFive from "@/assets/stock-five.png";
import * as materialModules from "@/shared/modules/material";
import HeaderDesign from '../header/header.design';
import sideRight from "@/assets/side-right.jpg";
import { ThreeDots } from 'react-loader-spinner'
import hidePassword from "@/assets/hide-password.png";
// import Visibility from '@mui/icons-material/icons/Visibility';
// import VisibilityOff from '@mui/icons-material/icons/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MenuItem } from '@mui/material';

const SignupDesignComponent = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        brandName: '',
        companyName: '',
        location: '',
        marketingBudget: '',
        goal: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        for (const key in formData) {
            if (formData[key] === '') {
                toast.error('Please fill in all fields.'); // Step 3: Display error toast
                return;
            }
        }
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/user/add', formData);
            localStorage.setItem('token', response.data.token)
            if (response.status === 201) {
                console.log('User registration successful');
            } else {
                toast.error('Email already exists')
                console.error('Failed to register user');
            }
        } catch (error) {
            toast.error('Email already exists')
            console.error('Error registering user:', error);
        }
        setLoading(false)
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container' style={{ backgroundImage: `url(${stockFive})`, backgroundRepeat: "no-repeat" }}>
            {/* <HeaderDesign /> */}
            <div className="col-12">
                <div className="col-6-signup">
                    <h2 className="signup-heading">Let's get you started</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">First name</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    name="firstName"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="Ade"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Last name</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    name="lastName"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="Tiger"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Email Address</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    name="emailAddress"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="abc@gmail.com"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Phone number</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    name="phoneNumber"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="+234
                                    800
                                    2738
                                    9700"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Brand name</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    name="brandName"
                                    variant="outlined"
                                    className="text-field-design"
                                    value={formData.brandName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Company name</materialModules.Label>
                                <materialModules.TextField
                                    // id="my-input"
                                    name="companyName"
                                    variant="outlined"
                                    className="text-field-design"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Location</materialModules.Label>
                                <materialModules.Select
                                    id="my-input"
                                    name="location"
                                    className="select-field" z
                                    value={formData.location}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'chicago'}>Chicago</MenuItem>
                                    <MenuItem value={'brooklyn'}>Brooklyn</MenuItem>
                                    <MenuItem value={'new york'}>New York</MenuItem>
                                </materialModules.Select>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Marketing Budget</materialModules.Label>
                                <materialModules.Select
                                    id="my-input"
                                    name="marketingBudget"
                                    className="select-field"
                                    value={formData.marketingBudget}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'50'}>50</MenuItem>
                                    <MenuItem value={'100'}>100</MenuItem>
                                    <MenuItem value={'200'}>200</MenuItem>
                                </materialModules.Select>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Goal</materialModules.Label>
                                <materialModules.Select
                                    id="my-input"
                                    name="goal"
                                    className="select-field"
                                    value={formData.goal}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'sales'}>Sales</MenuItem>
                                    <MenuItem value={'ads'}>Ads</MenuItem>
                                    <MenuItem value={'marketing'}>Marketing</MenuItem>
                                </materialModules.Select>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Create Password</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    className="text-field-design password-text-field-design"
                                    placeholder="...."
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Create Password</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    variant="outlined"
                                    className="text-field-design password-text-field-design"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleTogglePasswordVisibility}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div> */}
                        </div>
                        <div className='form-data'>
                            <p>Password must contain a minimum of 8 characters</p>
                        </div>
                        <div className='form-data'>
                            <p>Password must contain at least one symbol e.g. @, !</p>
                        </div>
                        <div className='form-data'>
                            <div className="login-btn-div">
                                <materialModules.Button type="button" className="login-btn" disabled={loading} onClick={handleSubmit}>
                                    {loading ?
                                        <ThreeDots height='100%' color='white' visible={loading} />
                                        :
                                        'Sign Up'}
                                </materialModules.Button>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <p><hr />Or <hr /></p>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div className='google-btn'>
                                <materialModules.Button className='google-btn'
                                    startIcon={<GoogleIcon />}

                                >Google</materialModules.Button>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <p>Already a account  <a href="">Login</a></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-6-signup">
                    <div className="right-img-container">
                        <img src={sideRight} className="side-img" />
                    </div>
                </div>
                {/* <div className="col-6" style={{ backgroundImage: `url(${sideRight})`, backgroundRepeat: "no-repeat", objectFit:"contain" }}>
                    <img />
                </div> */}
            </div>

        </div>


    )
}

export default SignupDesignComponent