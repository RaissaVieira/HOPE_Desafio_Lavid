const bcrypt = require('bcryptjs');

function encrypt (password) {
    return bcrypt.hashSync(password, 8);
}

module.exports = encrypt;
