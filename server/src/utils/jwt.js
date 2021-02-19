const jwt = require('jsonwebtoken');
    
function generateToken(params = {}) {
    return jwt.sign(params, "secret");
}

module.exports = generateToken;