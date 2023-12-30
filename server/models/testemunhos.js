import mongoose from 'mongoose';

const testemunhoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    estrelas: {
        type: Number,
        required: true
    },
})

const Testemunho = mongoose.model('testemunhos', testemunhoSchema)
export default Testemunho