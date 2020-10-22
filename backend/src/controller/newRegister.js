
const connection = require('../database/connection')

module.exports = {

    async index (require, response) {

        const registros = await connection('registro')
        .select('*')

        return response.json(registros)
    },
    
    async create(require, response) {
        const {titulo, data, hora, descricao, nome, telefone, email} = require.body;

        await connection('registro').insert({
            titulo,
            data,
            hora,
            descricao,
            nome,
            telefone,
            email
        })
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('registro').where('id', id).delete();
            return response.status(204).send();
            
    }
}
