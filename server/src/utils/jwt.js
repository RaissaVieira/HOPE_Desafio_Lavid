const jwt = require('jsonwebtoken');
    
function generateToken() {
    return jwt.sign({ id: this.id }, "secret", {
        expiresIn: 86400
    });
}

module.exports = generateToken;