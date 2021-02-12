const jwt = require('jsonwebtoken');
    
function generateToken(params = {}) {
    return jwt.sign(params, "secret", {
        expiresIn: 86400
    });
}

module.exports = generateToken;