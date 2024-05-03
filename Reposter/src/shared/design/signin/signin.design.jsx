import React, { useState } from 'react';
import './signin.scss';
import stockFive from "@/assets/stock-five.png";
import * as materialModules from "@/shared/modules/material";
import HeaderDesign from '../header/header.design';
import sideRight from "@/assets/side-right.jpg";
import hidePassword from "@/assets/hide-password.png";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const SigninDesignComponent = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (event) => {
        setEmailAddress(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:3001/brand/login', { emailAddress, password });
            const { token, existingUser } = response.data;
            localStorage.setItem('accessToken', token);
            localStorage.setItem('user', existingUser);
            if (response.status === 200) {
                console.log('Login successful');
                navigate('/brand/applicant');
            } else {
                toast.error('Invalid email or password')
                console.error('Failed to login user');
            }
        } catch (error) {
            toast.error('Invalid email or password')
            console.error('Error registering user:', error);
        }
        setLoading(false)
    };

    const googleLogin = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            try {
                console.log(codeResponse)
                const response = await axios.post(`http://localhost:3001/user/auth/google`, {
                    user: codeResponse
                });
                const { token, existingUser } = response.data;
                localStorage.setItem('accessToken', token);
                localStorage.setItem('user', existingUser);
                navigate('/brand/applicant')
                console.log("Token\n", token, " Message:\n", response.data.message)
            } catch (error) {
                console.log('Login Error:', error);
            }
        },
        onError: (error) => console.log('Login Failed:', error),
        scope: ['openid'],
    });

    const handleGoogleLogin = () => {
        googleLogin();
    };

    return (
        <div className='container' style={{ backgroundImage: `url(${stockFive})`, backgroundRepeat: "no-repeat" }}>
            {/* <HeaderDesign /> */}
            <div className="col-12">
                <div className="col-6-signup">
                    <h2 className="signup-heading">Welcome</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-data'>
                            <div>
                                <materialModules.TextField
                                    placeholder="Email"
                                    className="text-field-design password-text-field-design"
                                    type='text'
                                    value={emailAddress}
                                    onChange={handleEmailChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton>
                                                    <EmailIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.TextField
                                    placeholder="Password"
                                    className="text-field-design password-text-field-design"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton>
                                                    <LockIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <h4 className="signup-heading forgot-password">Forgot Password?</h4>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div className="login-btn-div">
                                <materialModules.Button type="submit" className="login-btn" onClick={handleSubmit}>
                                {loading ? 
                                <ThreeDots height='100%' color='white' visible={loading}/>
                                :
                                'Login'}
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
                                <materialModules.Button 
                                className='google-btn'
                                startIcon={<GoogleIcon />}
                                onClick={handleGoogleLogin}
                                >Google</materialModules.Button>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <p>Have no account yet?</p>
                            </div>
                        </div>
                        <div className='form-data'>
                            <div className='google-btn'>
                                <materialModules.Button className='google-btn'>Registration</materialModules.Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-6-signup">
                    <div className="right-img-container">
                        <img src={sideRight} className="side-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninDesignComponent;
