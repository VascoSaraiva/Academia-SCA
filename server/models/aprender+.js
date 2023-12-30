import mongoose from 'mongoose';

const aprenderSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true,
        enum: ['Lúdico', 'Técnico', 'Educativo', 'Informativo']
    },
    link: {
        type: String,
        required: true
    },
})

const Aprender = mongoose.model('aprender+', aprenderSchema)
export default Aprender
