import mongoose from 'mongoose';

const membroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    }
})

const Membro = mongoose.model('membros', membroSchema)
export default Membro