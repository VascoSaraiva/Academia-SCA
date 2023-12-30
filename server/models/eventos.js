import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true,
        maxlength: 350
    },
    tematica: {
        type: String,
        required: true,
        enum: ['Voluntariado', 'Lazer', 'Competição', 'Aprendizagem']
    },
    data: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    inscricaoURL: {
        type: String,
    },
})

const Evento = mongoose.model('eventos', eventoSchema)
export default Evento
