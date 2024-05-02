const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env.development' });

const genToken = (id) => {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

const verifyToken = (req, res, next) => {
    console.log("JWT: ", req.body)
    // console.log("JWT: ", req.files)
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.userId = decoded.userId;
        next();
    });
};

module.exports = {
    genToken,
    verifyToken
}
