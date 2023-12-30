import mongoose from 'mongoose';

const artigoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
        enum: ['Roupa', 'Acessórios', 'Decoração', 'Papelaria']
    },
    nome: {
        type: String,
        required: true,
    },
    preço: {
        type: Number,
        required: true
    },
    tamanhos: {
        type: [String],
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    materiais: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        require: true
    }
})

const Artigo = mongoose.model('artigos', artigoSchema)
export default Artigo