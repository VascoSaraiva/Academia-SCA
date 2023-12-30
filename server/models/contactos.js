import mongoose from 'mongoose';

const contactoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
    },
    contacto: {
        type: String,
        required: true
    },
    URL: {
        type: String
    }
})

const Contacto = mongoose.model('contactos', contactoSchema)
export default Contacto