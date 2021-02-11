const connection = require('../database/connections');

module.exports = {
    async Create (req, res) {
        const {name, email, password} = req.body;

        try {
            const [result] = await connection('users')
                .where('email', email)
                .select('name')

            if(result){
                return response.status(400).json({error: "Email já cadastrado"})
            }

            await connection('users').insert({
                name,
                email,
                password
            })

            return response.json({id})

        } catch (error) {
            return res.status(400).json({ error: "Falha no registro de usuário" });
        }
    }
}