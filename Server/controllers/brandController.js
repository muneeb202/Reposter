const Brand = require('../models/brandModel')
const bcrypt = require('bcrypt');
const jwtToken = require('../jwtToken');
const axios = require('axios');
const GOOGLE_SIGN_IN_PWD = 'Google_Sign_In_$58291&#10_($)231'

exports.addUser = async (req, res) => {
    try {
        const { firstName, lastName, emailAddress, phoneNumber, brandName, companyName, location, marketingBudget, goal, password } = req.body;

        const existingUser = await Brand.findOne({ where: { emailAddress } });
        if (existingUser) {
            return res.status(400).json({ error: 'Brand with this email already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Brand.create({
            firstName,
            lastName,
            emailAddress,
            phoneNumber,
            brandName,
            companyName,
            location,
            marketingBudget,
            goal,
            password: hashedPassword
        });

        const token = jwtToken.genToken(newUser.id)

        return res.status(201).json({ token, newUser, message: 'Registration successful'});
    } catch (error) {
        console.error('Error inserting user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { emailAddress, password } = req.body;
        const existingUser = await User.findOne({ where: { emailAddress } });
        
        if (existingUser) {
            let isPasswordMatch = await bcrypt.compare(GOOGLE_SIGN_IN_PWD, existingUser.password);
            
            if (isPasswordMatch) {
                return res.status(401).json({ error: 'Account signed in with Google' });
            }

            isPasswordMatch = await bcrypt.compare(password, existingUser.password);

            if (isPasswordMatch) {
                const token = jwtToken.genToken(existingUser.id)

                return res.status(200).json({ token, existingUser, message: 'Login successful' });
            } else {
                return res.status(401).json({ error: 'Incorrect email or password' });
            }
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error logging user:', error)
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.googleLogin = async (req, res) => {
    accessToken = req.body.user.access_token
    try {
        const url = "https://www.googleapis.com/oauth2/v1/userinfo";
        const headers = {
            "Authorization": `Bearer ${accessToken}`,
            "Accept": "application/json"
        };
        const response = await axios.get(url, { headers });
        emailAddress = response.data.email
        
        const existingUser = await User.findOne({ where: { emailAddress } });
        if (existingUser) {
            
            const token = jwtToken.genToken(existingUser.id)

            return res.status(200).json({ token, existingUser, message: 'Login successful' });
        } else {
            const hashedPassword = await bcrypt.hash(GOOGLE_SIGN_IN_PWD, 10);
            const newUser = await User.create({
                firstName : response.data.given_name,
                lastName: response.data.family_name,
                emailAddress: response.data.email,
                password: hashedPassword,
                profilePic: response.data.picture
            });
            
            const token = jwtToken.genToken(newUser.id)
    
            return res.status(201).json({ token, newUser, message: 'Registration successful'});
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
}

// module.exports = {
//     addUser : addUser,
//     loginUser : loginUser,
//     googleLogin: googleLogin
// }