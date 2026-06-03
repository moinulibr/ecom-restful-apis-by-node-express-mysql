const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        token = req.headers.authorization.split(' ')[1]; // separate token from Bearer token 'Bearer <token>'
    }
    if(!token){
       return res.status(401).json({
            status: 'fail',
            message: 'You are not logged in. Please login to get access. ❌'
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            status: 'fail',
            message: 'Invalid token. Please login to get access. ❌'
        });
    }
};

const restrictTo = (...allowedRoles) => {

    return (req, res, next) => {
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                status: 'fail',
                message: 'You do not have permission to perform this action. 🚫'
            });
        }
        next();
    }
}


module.exports = { verifyToken, restrictTo };
