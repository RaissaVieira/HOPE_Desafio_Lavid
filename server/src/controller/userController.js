const connection = require('../database/connections');
const encryptPassword = require('../utils/encryptPassword');
const generateJWT = require('../utils/jwt');
const bcrypt = require('bcryptjs');
const { gerarSenha } = require('gerar-senha');
const mailer = require('../modules/mailer');

module.exports = {
    async Create (req, res) {
        try {
            const {name, email, password} = req.body;
            const passCrypted = encryptPassword(password);

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
                return res.status(400).json({ error: "Senha inválida" });
            }

            const token = generateJWT({id: user.id});

            return res.json({
                user,
                token: token
            });

        } catch (err) {
            return res.status(400).json({ error: "Falha na autenticação do usuário" });
        }
    },

    async ForgotPassword (req, res) {
        const { email } = req.body;

        try {

            const user = await connection('users')
                .where('email', email)
                .select()
                .first();

            if(!user){
                return res.status(400).json({error: "Usuário não encontrado"});
            }

            const senha = gerarSenha({ simbolos: false});

            mailer.sendMail({
                to: email,
                from: 'HOPE@Lavid.Fuze.br',
                template: 'auth/forgot_password',
                context: { senha },
            }), (err) => {
                if(err)
                    return res.status(400).send({ error: "Não foi possível enviar um email de recuperação de senha"});

                res.send();
            }

            const passCrypted = encryptPassword(senha);

            await connection('users')
                .where('email', email)
                .first()
                .update({ password: passCrypted});

            return res.send();

        } catch (err) {
            console.log(err)
            return res.status(400).json({ error: "Erro em Esqueceu sua senha, tente novamente" });
        }
    },

    async Name (req, res) {
        try {
            const { userId } = req;
        
            const [user] = await connection('users')
                    .where('id', userId)
                    .select('name');

            return res.json( user );
        
        } catch (err) {
            return res.status(400).json({ error: "Can't get user information" });
        }
    }
}