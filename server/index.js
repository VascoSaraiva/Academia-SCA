import nodeMailer from 'nodemailer';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Barco from './models/barcos.js';
import Evento from './models/eventos.js';
import cors from 'cors';
import { google } from 'googleapis';
import Testemunho from './models/testemunhos.js';
import Duvida from './models/duvidas.js';
import Membro from './models/membros.js'
import Contacto from './models/contactos.js';
import Aprender from "./models/aprender+.js"
import Artigo from "./models/artigos.js"


dotenv.config();

const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: ['http://localhost:5173', "https://academia-de-vela-sca-frontend.onrender.com"],
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

async function main() {
    await mongoose.connect(process.env.MONGO_CONNECT)
}

main()
    .then(() => console.log('Mongo Connected'))
    .catch(err => console.log(err));




app.get('/getBarcos', (req, res) => {
    Barco.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/getAprender', (req, res) => {
    Aprender.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})


app.get('/getFotosBarcos', (req, res) => {
    const idFotosBarcos = [
        '1p3cWlYSV3HxQIth6ka33fmngMN9Hb_tw',
        '1ehqE_x1D8XU2C_6zaAqSllieTXm2vsLe',
        '1uRaWO4N3UTdpB1C_KE5DoyjySlcd1UxA',
        '1escNf-4-BgY-UXk3u_kzRo9yWJFvv7uh',
        '11og__mKrFcotNDKEFOGl9b3KMsbRtReu',
        '1d5jD-5oBsC9CugrzUvk1k_zMRW6wQ8J3'
    ]


    async function getFotos() {

        let fotosArray = []

        await Promise.all(idFotosBarcos.map(async (e) => {
            const drive = google.drive({ version: 'v3', auth: "AIzaSyBmlvfFFSEakNY9VpYuNs1sFBoh-Wk2qDE" });
            const resp = await drive.files.list({
                q: `'${e}' in parents and mimeType='image/png'`,
                orderBy: 'createdTime desc',
                fields: 'files(name,webContentLink, imageMediaMetadata, id)',
            });
            fotosArray.push(resp.data.files)
        }))

        res.json(fotosArray)
    }

    getFotos()
})

app.get('/getGaleriaBarcos', (req, res) => {

    const idGaleriaBarcos = [
        '1IUWO8C097M5tkKeyBrsLLfo-A3PmdFEk',
        '1ICMyI5Q8x7PO5QFYc4D7-9-rW6kNyv7Y',
        '1xMUDVYPnYLSwnPPtan_TRyzpBgGTcZVv',
        '1vZpSuHkDFvNjmXDrjCsooL5DFgwmozRe',
        '1CGjwExhRGKUEKcG-DyY57sgD8n3I8IGy',
        '1uLdlkHO8n70kQYnVnB6VqHFdc5fDbROB'
    ]

    async function getGaleria() {

        let galeriaArray = []

        await Promise.all(idGaleriaBarcos.map(async (e) => {
            const drive = google.drive({ version: 'v3', auth: "AIzaSyBmlvfFFSEakNY9VpYuNs1sFBoh-Wk2qDE" });
            const resp = await drive.files.list({
                q: `'${e}' in parents`,
                orderBy: 'createdTime desc',
                fields: 'files(name,webContentLink, id)',
            });
            galeriaArray.push(resp.data.files)
        }))

        res.json(galeriaArray)

    }

    getGaleria();

})

app.get('/getTestemunhos', (req, res) => {
    Testemunho.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})


app.get('/getEventos', (req, res) => {
    Evento.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/getFotosEventos', (req, res) => {
    async function getFotos() {
        const drive = google.drive({ version: 'v3', auth: "AIzaSyBmlvfFFSEakNY9VpYuNs1sFBoh-Wk2qDE" });
        const resp = await drive.files.list({
            q: `'1B2XSyNqcaCmMzFdM-mleINYEp5-PKm1e' in parents`,
            orderBy: 'createdTime desc',
            fields: 'files(name ,webContentLink, imageMediaMetadata)',
        });
        res.json(resp.data.files)
    }

    getFotos()
})

app.post('/deleteEventos', (req, res) => {
    const data = req.query.data
    if (typeof (data) === 'string') {
        Evento.deleteOne({ _id: data }).then(msg => console.log(msg))
    } else {
        data.map(id => {
            Evento.deleteOne({ _id: id }).then(msg => console.log(msg))
        })
    }

})

app.get('/fotografiasGaleria/:token?', (req, res) => {
    async function getFotos() {
        const drive = google.drive({ version: 'v3', auth: "AIzaSyBmlvfFFSEakNY9VpYuNs1sFBoh-Wk2qDE" });
        const { token } = req.params
        const resp = await drive.files.list({
            q: `'1C21MpdFJ9vlA9zlSNyteScjSbcxvTmTp' in parents`,
            orderBy: 'createdTime desc',
            fields: 'files(id, webContentLink, imageMediaMetadata ), nextPageToken',
            pageSize: 60,
            pageToken: token
        });


        res.json(resp.data)
    }

    getFotos()
})

app.get('/getDuvidas', (req, res) => {
    Duvida.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/getMembros', (req, res) => {
    Membro.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/getFotosMembros', (req, res) => {
    async function getFotos() {
        const drive = google.drive({ version: 'v3', auth: "AIzaSyBmlvfFFSEakNY9VpYuNs1sFBoh-Wk2qDE" });
        const resp = await drive.files.list({
            q: `'1zSBNRJQOGH1jG6sc75cN4Tqr57QzS5d1' in parents`,
            orderBy: 'createdTime desc',
            fields: 'files(name ,webContentLink)',
        });
        res.json(resp.data.files)
    }

    getFotos()
})

app.get('/getContactos', (req, res) => {
    Contacto.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/getArtigos', (req, res) => {
    Artigo.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/getFotosArtigos', (req, res) => {
    async function getFotos() {
        const drive = google.drive({ version: 'v3', auth: "AIzaSyBmlvfFFSEakNY9VpYuNs1sFBoh-Wk2qDE" });
        const resp = await drive.files.list({
            q: `'1PH0f1d3yjeMRwrL4nfPes4fKo4_tJtG9' in parents`,
            orderBy: 'createdTime desc',
            fields: 'files(name ,webContentLink)',
        });
        res.json(resp.data.files)
    }
    getFotos()
})

app.post('/formularioEmail', (req, res) => {

    const { nome, email, assunto, mensagem } = req.query

    let config = {
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_EMAIL_PASSWORD
        }
    }

    let transporter = nodeMailer.createTransport(config)

    let message = {
        from: process.env.USER_EMAIL,
        to: process.env.USER_EMAIL,
        subject: `${nome} enviou um email sobre: ${assunto}`,
        html: `<p><b>Nome:</b> ${nome}</p> <p><b>Email:</b> ${email}</p> <p><b>Assunto:</b> ${assunto}</p> <p><b>Mensagem:</b> ${mensagem}</p>`
    }

    transporter.sendMail(message)
        .then(e => res.send(e))
        .catch(e => console.log(e))

})


app.post("/editarElemento", (req, res) =>{
    
    
    let data = req.query;
    //console.log(data)
     switch(data.collection){
        case "Eventos":
            Evento.updateOne({ "_id": data.id }, { "$set": { "titulo": data.titulo, "descricao": data.descricao, "tematica": data.tematica, "data": data.data, "hora":data.hora, "inscricaoURL": data.inscricaoURL}})
            .then(e=> res.send(e))
            .catch(e=> console.log(e))
                break;
            case "Loja":
                let arrayTamanhos = []

                if(data.XS === 'true'){
                    arrayTamanhos.push('XS')
                }

                if(data.S === 'true'){
                    arrayTamanhos.push('S')
                }

                if(data.M === 'true'){
                    arrayTamanhos.push('M')
                }

                if(data.L === 'true'){
                    arrayTamanhos.push('L')
                }

                if(data.XL === 'true'){
                    arrayTamanhos.push('XL')
                }

                if(data.XXL === 'true'){
                    arrayTamanhos.push('XXL')
                }


                Artigo.updateOne({ "_id": data.id }, { "$set": { "tipo": data.tipo, "nome": data.nome, "preço":data.preço, "materiais": data.materiais, "URL": data.URL, "tamanhos": arrayTamanhos}})
                .then(e=> res.send(e))
                .catch(e=> console.log(e))
                break;
                case "Aprender":
                    Aprender.updateOne({ "_id": data.id }, { "$set": { "titulo": data.titulo, "categoria": data.categoria, "link":data.link}})
                    .then(e=> res.send(e))
                    .catch(e=> console.log(e))
                        break;
                    case "Testemunhos":
                        Testemunho.updateOne({ "_id": data.id }, { "$set": { "nome": data.nome, "comentario": data.comentario, "estrelas":data.estrelas}})
                        .then(e=> res.send(e))
                        .catch(e=> console.log(e))
                        break;
                        case "Barcos":
                            Barco.updateOne({ "_id": data.id }, { "$set": { "nome": data.nome, "velocidadeMaxima": data.velocidadeMaxima, "tripulacaoMaxima":data.tripulacaoMaxima, "nivelDificuldade": data.nivelDificuldade, "materiais":data.materiais, "peso": data.peso, "comprimento":data.comprimento, "descricao": data.descricao, "designer":data.designer}})
                            .then(e=> res.send(e))
                            .catch(e=> console.log(e))
                            break; 
                            case "Equipa":                              
                                Membro.updateOne({ "_id": data.id }, { "$set": { "nome": data.nome, "cargo": data.cargo}})  
                                .then(e=> res.send(e))
                                .catch(e=> console.log(e))                             
                                break;
                                case "Dúvidas":
                                    Duvida.updateOne({ "_id": data.id }, { "$set": { "categoria": data.categoria, "questao": data.questao, "resposta": data.resposta, "destacar": data.destacar}}) 
                                    .then(e=> res.send(e))
                                    .catch(e=> console.log(e)) 
                                    break;
                                    case "Contactos":
                                        Contacto.updateOne({ "_id": data.id }, { "$set": { "tipo": data.tipo, "contacto": data.contacto, "URL": data.URL}})  
                                        .then(e=> res.send(e))
                                        .catch(e=> console.log(e))
                                        break; 
    } 

})


app.post('/eliminarElemento', (req, res) => {
    const {id, categoria} = req.query
    switch(categoria){
        case "Eventos":
            Evento.deleteOne({ _id: id }).then(msg => res.send(msg)) 
            break;
            case "Loja":
                Artigo.deleteOne({ _id: id }).then(msg => res.send(msg)) 
                break;
                case "Aprender":
                    Aprender.deleteOne({ _id: id }).then(msg => res.send(msg)) 
                    break;
                    case "Testemunhos":
                        Testemunho.deleteOne({ _id: id }).then(msg => res.send(msg)) 
                        break;
                        case "Barcos":
                            Barco.deleteOne({ _id: id }).then(msg => res.send(msg)) 
                            break;
                            case "Equipa":
                                Membro.deleteOne({ _id: id }).then(msg => res.send(msg)) 
                                break;
                                case "Dúvidas":
                                    Duvida.deleteOne({ _id: id }).then(msg => res.send(msg)) 
                                    break;
                                    case "Contactos":
                                        Contacto.deleteOne({ _id: id }).then(msg => res.send(msg)) 
                                        break;
    }
    

})



app.post('/adicionarElemento', (req, res) => {
    
    const data = req.query
    let add;
    switch(data.collection){
        case "Eventos":
            add = new Evento({ "titulo": data.titulo, "descricao": data.descricao, "tematica": data.tematica, "data": data.data, "hora":data.hora, "inscricaoURL": data.inscricaoURL}) 
            break;
            case "Loja":

                let arrayTamanhos = []

                if(data.XS === 'true'){
                    arrayTamanhos.push('XS')
                }

                if(data.S === 'true'){
                    arrayTamanhos.push('S')
                }

                if(data.M === 'true'){
                    arrayTamanhos.push('M')
                }

                if(data.L === 'true'){
                    arrayTamanhos.push('L')
                }

                if(data.XL === 'true'){
                    arrayTamanhos.push('XL')
                }

                if(data.XXL === 'true'){
                    arrayTamanhos.push('XXL')
                }

                add = new Artigo({ "tipo": data.tipo, "nome": data.nome, "preço":data.preço, "materiais": data.materiais, "URL": data.URL, "tamanhos": arrayTamanhos}) 
                break;
                case "Aprender":
                    add = new Aprender({ "titulo": data.titulo, "categoria": data.categoria, "link":data.link}) 
                    break;
                    case "Testemunhos":
                        add = new Testemunho({ "nome": data.nome, "comentario": data.comentario, "estrelas":data.estrelas}) 
                        break;
                        case "Barcos":
                            add = new Barco({ "nome": data.nome, "velocidadeMaxima": data.velocidadeMaxima, "tripulacaoMaxima":data.tripulacaoMaxima, "nivelDificuldade": data.nivelDificuldade, "materiais":data.materiais, "peso": data.peso, "comprimento":data.comprimento, "descricao": data.descricao, "designer":data.designer, "boca":data.boca}) 
                            break;
                            case "Equipa":
                                add = new Membro({ "nome": data.nome, "cargo": data.cargo}) 
                                break;
                                case "Dúvidas":
                                    add = new Duvida({ "categoria": data.categoria, "questao": data.questao, "resposta": data.resposta, "destacar": data.destacar}) 
                                    break;
                                    case "Contactos":
                                        add = new Contacto({ "tipo": data.tipo, "contacto": data.contacto, "URL": data.URL}) 
                                        break;
                                        
    } 
    add.save()
    .then(e => res.send(e))
    .catch(e => console.log(e))

})



app.post('/verificarAdmin', (req, res) => {
    const {chave}=req.query
    if(chave === process.env.ADMIN_KEY){
        res.send({chave:false, msg:"hidden"})
    }else{
        res.send({chave:true, msg:"block"})
    }

})



app.listen(3000, () => {
    console.log('Listening on 3000')
})