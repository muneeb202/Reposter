const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwtToken = require('../jwtToken');

const get = (req, res) => {
    res.send("User page")
}

const addUser = async (req, res) => {
    try {
        const { firstName, lastName, emailAddress, phoneNumber, brandName, companyName, location, marketingBudget, goal, password } = req.body;

        const existingUser = await User.findOne({ where: { emailAddress } });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
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

        return res.status(201).json({ token, message: 'Registration successful'});
    } catch (error) {
        console.error('Error inserting user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { emailAddress, password } = req.body;
        const existingUser = await User.findOne({ where: { emailAddress } });
        
        if (existingUser) {
            const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

            if (isPasswordMatch) {
                const token = jwtToken.genToken(existingUser.id)

                return res.status(200).json({ token, message: 'Login successful' });
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

module.exports = {
    get : get,
    addUser : addUser,
    loginUser : loginUser,
}