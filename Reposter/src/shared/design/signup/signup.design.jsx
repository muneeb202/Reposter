import React from 'react';
import './signup.scss';
import stockFive from "@/assets/stock-five.png";
import * as materialModules from "@/shared/modules/material";
import HeaderDesign from '../header/header.design';
import sideRight from "@/assets/side-right.jpg";
import hidePassword from "@/assets/hide-password.png";
// import Visibility from '@mui/icons-material/icons/Visibility';
// import VisibilityOff from '@mui/icons-material/icons/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

const SignupDesignComponent = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container' style={{ backgroundImage: `url(${stockFive})`, backgroundRepeat: "no-repeat" }}>
            {/* <HeaderDesign /> */}
            <div className="col-12">
                <div className="col-6-signup">
                    <h2 className="signup-heading">Let’s get you started</h2>
                    <form>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">First name</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="Ade"
                                />
                            </div>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Last name</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="Tiger"


                                />
                            </div>

                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Email Address</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="abc@gmail.com"


                                />
                            </div>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Phone number</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    variant="outlined"
                                    className="text-field-design"
                                    placeholder="+234
                                    800
                                    2738
                                    9700"


                                />
                            </div>

                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Brand name</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    variant="outlined"
                                    className="text-field-design"

                                />
                            </div>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Company name</materialModules.Label>
                                <materialModules.TextField
                                    // id="my-input"
                                    variant="outlined"
                                    className="text-field-design"

                                />
                            </div>

                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Location</materialModules.Label>
                                <materialModules.Select
                                    id="my-input"
                                    className="select-field"z

                                />
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Marketing Budget</materialModules.Label>
                                <materialModules.Select
                                    id="my-input"
                                    className="select-field"

                                />
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Goal</materialModules.Label>
                                <materialModules.Select
                                    id="my-input"
                                    className="select-field"

                                />
                            </div>
                        </div>
                        <div className='form-data'>
                            <div>
                                <materialModules.Label htmlFor="my-input" className="label-class">Create Password</materialModules.Label>
                                <materialModules.TextField
                                    id="my-input"
                                    variant="outlined"
                                    className="text-field-design password-text-field-design"
                                    placeholder="...."
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
                                <materialModules.Button className="login-btn">Sign Up</materialModules.Button>
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
                    <img src={sideRight}  className="side-img"/>
                </div>
                {/* <div className="col-6" style={{ backgroundImage: `url(${sideRight})`, backgroundRepeat: "no-repeat", objectFit:"contain" }}>
                    <img />
                </div> */}
            </div>

        </div>


    )
}

export default SignupDesignComponent