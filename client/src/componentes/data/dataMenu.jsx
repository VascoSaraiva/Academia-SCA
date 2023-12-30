export default [
    {
        nome: 'Home',
        ligação: '/home',
        subPáginas: false
    },
    // {
    //     nome: 'Aulas',
    //     ligação: '/aulas',
    //     subPáginas: false
    // },
    {
        nome: 'Atividades',
        ligação: '/atividades',
        subPáginas: [
            {
                nome: 'Calendário',
                ligação: '/calendario'
            },
            {
                nome: 'Eventos',
                ligação: '/eventos'
            },
            {
                nome: 'Voluntariado',
                ligação: '/voluntariado'
            }
        ],
    },
    {
        nome: 'Galeria',
        ligação: '/galeria',
        subPáginas: false
    },
    {
        nome: 'Modalidade',
        ligação: '/modalidade',
        subPáginas: [
            {
                nome: 'Benefícios',
                ligação: '/beneficios'
            },
            {
                nome: 'Aprender +',
                ligação: '/aprender'
            },
            {
                nome: 'Barcos',
                ligação: '/barcos'
            }
        ],
    },
    {
        nome: 'Academia',
        ligação: '/academia',
        subPáginas: [
            {
                nome: 'Sobre Nós',
                ligação: '/sobrenos'
            },
            {
                nome: 'Contactos',
                ligação: '/contactos'
            },
            {
                nome: 'Vertentes',
                ligação: '/vertentes'
            }
        ],
    },
    {
        nome: "Dúvidas",
        ligação: '/duvidas',
        subPáginas: false
    },
    {
        nome: "Loja",
        ligação: '/loja',
        subPáginas: false
    }
]