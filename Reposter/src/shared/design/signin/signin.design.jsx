import React from 'react';
import './signin.scss';
import stockFive from "@/assets/stock-five.png";
import * as materialModules from "@/shared/modules/material";
import HeaderDesign from '../header/header.design';
import sideRight from "@/assets/side-right.jpg";
import hidePassword from "@/assets/hide-password.png";
// import Visibility from '@mui/icons-material/icons/Visibility';
// import VisibilityOff from '@mui/icons-material/icons/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
const SigninDesignComponent = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container' style={{ backgroundImage: `url(${stockFive})`, backgroundRepeat: "no-repeat" }}>
            {/* <HeaderDesign /> */}
            <div className="col-12">
                <div className="col-6-signup">
                    <h2 className="signup-heading">Welcome</h2>
                    <form>
                        <div className='form-data'>
                            <div>
                                <materialModules.TextField
                                    placeholder="Email"
                                    className="text-field-design password-text-field-design"
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
                                <materialModules.Button className="login-btn">Login</materialModules.Button>
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
                    <img src={sideRight} className="side-img" />
                </div>
            </div>

        </div>


    )
}

export default SigninDesignComponent