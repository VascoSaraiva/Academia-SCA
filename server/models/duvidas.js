import mongoose from 'mongoose';

const duvidaSchema = new mongoose.Schema({
    categoria: {
        type: String,
        required: true,
        enum: ['Academia', 'Loja Online', 'Regatas', 'Aulas', 'Barcos', 'Atividades', 'Saúde', 'Voluntariado']
    },
    questao: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true,
    },
    destacar: {
        type: Boolean,
        required: true
    }
})

const Duvida = mongoose.model('duvidas', duvidaSchema)
export default Duvida


