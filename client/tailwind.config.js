/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {

  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xxs' : '350px',
      'xs' : '500px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.4rem',
        sm: '2.8rem',
      }, 
    },
    colors: {
      verde: "#258542",
      verde_escuro: "#195232",
      cinzento1: "#EFEFEF",
      cinzento2: "#BFBFBF",
      cinzento3: "#737373",
      amarelo: "#F2BE39",
      vermelho: "#BA0101",
      azul1: "#4D92AD",
      azul2: "#21454F",
      preto: "#000",
      branco: "#fff",
      eventos_laranja: '#F07246',
      eventos_azul: '#0083D3',
      eventos_roxo: '#AA30AC',
      eventos_verde: '#20BA26'
      
    },
    fontSize: {
      titulo_pequeno: "29px",
      titulo_grande: "32px",

      subtitulo_pequeno: "18px",
      subtitulo_grande: "20px",

      botao1_pequeno: "18px",
      botao1_grande: "20px",

      botao2_pequeno: "15px",
      botao2_grande: "16px"
    },
    fontFamily: {
      'unbounded': ["unbounded"],
      "inter": ["inter"]
    },

    extend: {
      backgroundImage: {
        'convite_1': "url('./assets/imagens/fotografias_convites/fotografia_1.webp')",
        'barco_1': "url('./assets/imagens/barcos/barco_1_background.webp')",
        'barco_2': "url('./assets/imagens/barcos/barco_2_background.webp')",
        'barco_3': "url('./assets/imagens/barcos/barco_3_background.webp')",
        'meteorologia' : "url(./assets/imagens/menu/meteorologia.webp)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

