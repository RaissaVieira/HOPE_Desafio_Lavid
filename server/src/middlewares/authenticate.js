const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        const [bearer, token] = header.split(' ');

        const decoded = await promisify(jwt.verify)(token, "secret");

        req.userId = decoded.id;

        return next();

    } catch (err) {
        return res.status(401).send({ error: "Token inválido" });
    }
} 