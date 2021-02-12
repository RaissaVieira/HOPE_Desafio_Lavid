const connection = require('../database/connections');
const encryptPassword = require('../utils/encryptPassword');
const generateJWT = require('../utils/jwt');
const bcrypt = require('bcryptjs');

module.exports = {
    async Create (req, res) {
        try {
            const {name, email, password} = req.body;
            const passCrypted = encryptPassword.encrypt(password);

            const [result] = await connection('users')
                .where('email', email)
                .select('email');

            if(result){
                return res.status(400).json({error: "Email já cadastrado"})
            }

            await connection('users').insert({
                name,
                email,
                password:passCrypted
            });

            return res.json({ message: "Usuário cadastrado" })

        } catch (err) {
            return res.status(400).json({ error: "Falha no registro de usuário" });
        }
    },

    async Authentication (req, res) {
        try {
            const {email, password} = req.body;

            const user = await connection('users')
                .where('email', email)
                .select()
                .first();

            if(!user){
                return res.status(400).json({error: "Usuário não encontrado"})
            }

            if (!await bcrypt.compare(password, user.password)) {
                return res.status(400).json({ error: "Invalid password" });
            }

            const token = generateJWT({id: user.id});

            return res.json({
                user,
                token: token
            });

        } catch (err) {
            return res.status(400).json({ error: "Falha na autenticação do usuário" });
        }
    }
}