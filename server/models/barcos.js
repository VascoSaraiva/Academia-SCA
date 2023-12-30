import mongoose from 'mongoose';

const barcoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
      },
      velocidadeMaxima: {
        type: Number,
        required: true
      },
      tripulacaoMaxima: {
        type: Number,
        required: true
      },
      nivelDificuldade: {
        type: String,
        required: true
      },
      materiais: {
        type: String,
        required: true
      },
      peso: {
        type: String,
        required: true
      },
      comprimento: {
        type: String,
        required: true
      },
      boca: {
        type: String,
        required: true
      },
      descricao: {
        type: String,
        required: true
      },
      designer: {
        type: String,
        required: true
      }
})

const Barco = mongoose.model('barcos', barcoSchema)
export default Barco