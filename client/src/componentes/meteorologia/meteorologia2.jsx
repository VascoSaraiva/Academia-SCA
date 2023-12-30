import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Icones from "../ícones/display_icones";

const Meteorologia2 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [estado, setEstado] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=40.64&longitude=-8.67&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&forecast_days=1&timezone=Europe%2FLondon'
        );
        setData(response.data);
      
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching weather data');
      }
    };

    fetchData();
  }, []);

  function getPresentDayAndMonth() {
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ];

    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth();

    const diaEmPortugues = dia.toString().padStart(2, "0");
    const mesEmPortugues = meses[mes];

    return `${diaEmPortugues} de ${mesEmPortugues}`;
  }

  if (data) {
    if (!estado) {
      
      switch (data.daily.weathercode[0]) {
        case 0:
          setEstado("sol")
          break;
        case 1:
          setEstado("sol_nuvem")
          break;
        case 2:
          setEstado("sol_nuvem")
          break;
        case 3:
          setEstado("sol_nuvem")
          break;
        case 45:
          setEstado("nublado")
          break;
        case 48:
          setEstado("nublado")
          break;
        case 51:
          setEstado("sol_nuvem_chuva")
          break;
        case 53:
          setEstado("sol_nuvem_chuva")
          break;
        case 55:
          setEstado("sol_nuvem_chuva")
          break;
        case 56:
          setEstado("sol_nuvem_chuva")
          break;
        case 57:
          setEstado("sol_nuvem_chuva")
          break;
        case 61:
          setEstado("chuva")
          break;
        case 63:
          setEstado("chuva")
          break;
        case 66:
          setEstado("chuva")
          break;
        case 80:
          setEstado("chuva")
          break;
        case 81:
          setEstado("chuva")
          break;
        case 65:
          setEstado("chuva_forte")
          break;
        case 67:
          setEstado("chuva_forte")
          break;
        case 82:
          setEstado("chuva_forte")
          break;
        case 71:
          setEstado("neve")
          break;
        case 73:
          setEstado("neve")
          break;
        case 75:
          setEstado("neve")
          break;
        case 77:
          setEstado("neve")
          break;
        case 85:
          setEstado("neve")
          break;
        case 86:
          setEstado("neve")
          break;
        case 95:
          setEstado("trovoada")
          break;
        case 96:
          setEstado("trovoada")
          break;
        case 99:
          setEstado("tempestade")
          break;
        default:
          setEstado("semEstado")
        break;
      }
    }





    return (
      <div className=' py-5 px-2.5 md:px-6 lg:px-14 w-[300px] sm:w-[500px] md:w-[640px] lg:w-[768px] mx-auto mt-3 rounded-2xl bg-branco bg-opacity-70 shadow-2xl'>
        <div id="dia" className='text-center font-unbounded font-semibold text-[14px] sm:text-[16.5px] md:text-[18px] lg:text-[20px] mb-1.5'>{getPresentDayAndMonth()}</div>
        <div className='flex justify-around md:justify-between items-center font-unbounded text-[13px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium'>
          <div className='flex'>
            <Icones tipo={estado} viewbox="0 0 100 100" className="h-12 w-12 sm:h-24 sm:w-24 md:h-[6.5rem] md:w-[6.5rem] lg:h-32 lg:w-32 mr-1.5 sm:mr-4 md:mr-8" />
            <div className='items-center self-center '>
              <div className='flex-col border-r-2 pr-1.5 sm:pr-6 md:pr-9 items-center self-center border-r-cinzento3 md:ml-2 '>
                <div className='flex items-center mb-1 sm:mb-2'>{parseInt(data.daily.temperature_2m_max)}°C <Icones tipo="seta_temperatura" viewbox="0 0 100 100" className="fill-vermelho h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1.5" /></div>
                <div className='flex items-center mt-1 sm:mt-2'>{parseInt(data.daily.temperature_2m_min)}°C<Icones tipo="seta_temperatura" viewbox="0 0 100 100" className="fill-eventos_azul h-4 w-4  md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1.5" /></div>
              </div>
            </div>
          </div>


          <div className='flex-col border-r-2 px-1.5 sm:pr-8 md:pr-12 border-r-cinzento3'>
            <div className='flex items-center mb-1 sm:mb-2'><Icones tipo="nascer_sol" viewbox="0 0 100 100" className="fill-preto h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mx-1.5" /><div>{data.daily.sunrise[0].slice(-5)}H</div></div>
            <div className='flex items-center mt-1 sm:mt-2'><Icones tipo="por_sol" viewbox="0 0 100 100" className="fill-preto h-4 w-4 mx-1.5 md:h-5 md:w-5 lg:h-6 lg:w-6" /><div>{data.daily.sunset[0].slice(-5)}H</div></div>
          </div>
          <div className='items-center'>
            <div className='flex items-center  sm:mr-2 md:mr-6'><Icones tipo="uv" viewbox="0 0 100 100" className="fill-preto h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1.5 mr-1" />{parseInt(data.daily.uv_index_max)}<div className='font-bold font-unbounded text-[10.5px] md:text-[13px] lg:text-[16px]'>  UV</div></div>
          </div>

        </div>
        <div className='text-center font-unbounded font-bold text-[12px] md:text-[13.5px] lg:text-[14.5px] mt-4'>Ria de Aveiro/SCA-Vela</div>
      </div>
    )
  }





}

export default Meteorologia2;