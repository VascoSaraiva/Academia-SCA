import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Icones from "../ícones/display_icones";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Meteorologia = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const[graus, setGraus] =useState()

  useEffect(() => {
    AOS.init()
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=40.64&longitude=-8.67&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,windspeed_10m,winddirection_10m&forecast_days=1&timezone=Europe%2FLondon'
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



if(innerWidth>1024){
    return (

        <div id="meteorologia" data-aos="fade-up" data-aos-delay="200"  className="meteorologia">

                <div className='my-14 text-center mx-auto font-unbounded font-semibold text-subtitulo_grande'>Mais detalhes</div>
    
           <div id="meteorologia_pc" className='text-center bg-azul2/90 w-full lg:w-[1000px] xl:w-[1240px] mx-auto shadow-2xl hidden lg:block pb-12 mb-48'>
            
            <div className='mt-3 mb-4 xl:mb-5 pt-[30px]'>
              <h1 className='font-unbounded text-subtitulo_grande font-semibold text-branco text-center'>{getPresentDayAndMonth()}</h1>
            </div>
            <div className='flex absolute'> 
              <div className='flex-col text-branco pr-1 text-[10px] lg:text-[10.8px] xl:text-[12px] bg-preto opacity-100 ml-0 pl-0' >
                <div className='mt-9 mb-5 ml-2 text-center mx-auto'><div>Estado</div></div>
                <div className='my-5 ml-1 text-center mx-auto'><Icones tipo="relogio_opaco" viewbox='0 0 100 100' className="fill-branco h-[1.1rem] w-[1.1rem] lg:h-4 lg:w-4 xl:h-5 xl:w-5 inline"/><div>Hora</div></div>
                <div className='my-5 ml-1 text-center mx-auto'><Icones tipo="termometro" viewbox='0 0 40 100' className="fill-branco h-[1.1rem] w-[1.1rem] lg:h-4 lg:w-4 xl:h-5 xl:w-5 inline"/><div>Temperatura</div></div>
                <div className='my-5 ml-1 text-center mx-auto'><Icones tipo="vento" viewbox='0 0 100 100' className="fill-branco h-[1.1rem] w-[1.1rem] lg:h-4 lg:w-4 xl:h-5 xl:w-5 inline"/><div>Vento</div></div>
                <div className='my-5 ml-1 text-center mx-auto'><Icones tipo="seta_vento" viewbox='0 0 70 100' className="fill-branco h-[1.1rem] w-[1.1rem] lg:h-4 lg:w-4 xl:h-5 xl:w-5 inline"/><div>Direção</div></div>
                <div className='my-5 ml-1 text-center mx-auto'><Icones tipo="precipitacao" viewbox='0 0 95 110' className="fill-branco h-[1.1rem] w-[1.1rem] lg:h-4 lg:w-4 xl:h-5 xl:w-5 inline"/><div>Precipitação</div></div>
                <div className='mt-5 mb-9 ml-1 text-center mx-auto'><Icones tipo="humidade" viewbox='0 0 70 100' className="fill-branco h-[1.1rem] w-[1.1rem] lg:h-4 lg:w-4 xl:h-5 xl:w-5 inline"/><div>Humidade</div></div>
              </div>
            </div>
          
    
            <div className='flex mx-auto pl-8 text-center justify-evenly w-[95%] xl:w-[97%] text-[11px] lg:text-[11px] xl:text-[14.5px] relative '>
           
            {data &&
      data.hourly &&
      data.hourly.temperature_2m &&
      data.hourly.weathercode && (
        <div className='flex text-branco mx-1.5'>
          {data.hourly.temperature_2m.slice(6, 21).map((temperature, i) => {
            const weatherCode = parseInt(data.hourly.weathercode.slice(6, 21)[i]);
            
                switch (weatherCode) {
                    case 0:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol'viewbox='0 0 100 100'className='fill-preto mx-auto text-center h-9 w-9' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                    case 1:
                            return (
                            <div key={i} className='mx-2 xl:mx-[9.5px]'>
                                <div className='mt-4 mx-auto text-center'>
                                <Icones tipo='sol_nuvem' viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                                </div>
                                <div className='my-9'>
                                {data.hourly.time.slice(6, 21)[i].slice(-5)}
                                </div>
                                <div className='my-9'>{parseInt(temperature)}°C</div>
                                <div className='my-9'>
                                {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                                </div>
                                <div className='my-9 xl:my-10'>
                                <Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                                </div>
                                <div className='my-9'>
                                {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                                </div>
                                <div className='my-9'>
                                {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                                </div>
                                <br></br>
                            </div>
                        );
                        case 2:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol_nuvem'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} viewbox="0 0 100 100" className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 3:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol_nuvem'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 45:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='nublado'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 48:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='nublado'viewbox='0 0 100 100'className='mx-auto fill-preto h-6 w-6' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 51:
                        return (
                            <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol_nuvem_chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 53:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol_nuvem_chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 55:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol_nuvem_chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 56:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol_nuvem_chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 57:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='sol_nuvem_chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 61:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 63:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 66:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 80:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 81:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 65:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva_forte'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 67:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva_forte'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 82:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='chuva_forte'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 71:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='neve'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 73:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='neve'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 75:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='neve'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 77:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='neve'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 85:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='neve'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 86:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='neve'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 95:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='trovoada'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 96:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='trovoada'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
                        case 99:
                        return (
                        <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='tempestade'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                        );
              default:
                return(
                    <div key={i} className='mx-2 xl:mx-[9.5px]'>
                            <div className='mt-4 mx-auto text-center'>
                            <Icones tipo='semEstado'viewbox='0 0 100 100'className='fill-preto h-9 w-9 mx-auto' />
                            </div>
                            <div className='my-9'>
                            {data.hourly.time.slice(6, 21)[i].slice(-5)}
                            </div>
                            <div className='my-9'>{parseInt(temperature)}°C</div>
                            <div className='my-9'>
                            {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h
                            </div>
                            <div className='my-9 xl:my-10'>
                            <Icones tipo="seta_vento" viewbox="0 0 100 100"  style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}}  className={`mx-auto fill-branco h-3.5 w-3.5 xl:h-5 xl:w-5`}/>
                            </div>
                            <div className='my-9'>
                            {data.hourly.precipitation_probability.slice(6, 21)[i]}%
                            </div>
                            <div className='my-9'>
                            {data.hourly.relativehumidity_2m.slice(6, 21)[i]}%
                            </div>
                            <br></br>
                        </div>
                ) ;
            }
            
          })}
        </div>
      )}
    
    </div>
    
    </div> 
    
    </div>
    )}else{
        return(
            <div className='bg-branco mb-32'>
                <div className='text-subtitulo_grande font-unbounded text-preto text-center mt-12 mb-10 font-semibold rounded-t-xl'><span className='border-b border-cinzento2'>Mais detalhes</span></div>

                
            {data && data.hourly && data.hourly.temperature_2m && data.hourly.weathercode && (
                  <div>
                    {data.hourly.temperature_2m.slice(6, 21).map((temperature, i) => {
                      const weatherCode = parseInt(data.hourly.weathercode.slice(6, 21)[i]);

                      switch(weatherCode){
                        case 0:
                            if(i==0){
                                return(
                                    <div>
                                        <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                        <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                        <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                        <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                        <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                        <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                        <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                        <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                        <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                        </div>
                                </div>
                                )
                            }else{
                                return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );
                            }
                            
                        case 1:
                            if(i==0){
                                return(
                                    <div>
                                        
                                        <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>

                                        <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>
                                        

                                        <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                        <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div>
                                        
                                        <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>

                                        <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>
                                        <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                        
                                        <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>

                                        <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>

                                        </div>
                                </div>
                                )
                            }else{
                                return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>

                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            
                            case 2:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                                
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 3:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 45:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='nublado' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='nublado' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 48:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='nublado' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='nublado' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 51:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 53:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 55:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 56:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 57:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='sol_nuvem_chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 61:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 63:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 66:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 80:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 81:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 65:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva_forte' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva_forte' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 67:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva_forte' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva_forte' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 82:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva_forte' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='chuva_forte' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 71:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 73:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 75:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 77:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 85:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 86:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='neve' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 95:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='trovoada' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='trovoada' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 96:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='trovoada' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='trovoada' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            case 99:
                                if(i==0){
                                    return(
                                        <div>
                                            <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                            <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='tempestade' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                            <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                            <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                            <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                            <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                            <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                            <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                            <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                            </div>
                                    </div>
                                    )
                                }else{
                            return(
                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                    <div className='my-1 top-0 sm:my-1.5'><Icones tipo='tempestade' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                    <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                    <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                    <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                    <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                    <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                </div>
                            );}
                            default: 
                                    if(i==0){
                                        return(
                                            <div>
                                                <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                                <div className=''><div className='mb-3 text-[8px]'><Icones tipo="relogio_" viewbox="0 0 100 100" className="fill-branco h-6 w-6 mx-auto text-center"/></div><div className='my-1 top-0 sm:my-1.5'><Icones tipo='semEstado' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div></div>                                
                                                <div className='flex-col '><Icones tipo="relogio_opaco" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/>
                                                <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div></div> 
                                                <div className='flex-col '><Icones tipo="termometro" viewbox="0 0 40 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div></div>
                                                <div className='flex-col '><Icones tipo="vento" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div></div>                                        
                                                <div className='flex-col '><div className='mb-[1.4rem]'><Icones tipo="seta_vento" viewbox="0 0 70 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/></div><div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div></div>
                                                <div className='flex-col '><Icones tipo="precipitacao" viewbox="0 0 100 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div></div>
                                                <div className='flex-col '><Icones tipo="humidade" viewbox="0 0 80 100" className="fill-preto h-6 w-6 mx-auto text-center mb-2"/><div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div></div>
                                                </div>
                                        </div>
                                        )
                                    }else{
                                return(
                                    <div key={i} className='flex justify-between mx-1 sm:mx-2 text-[11px] sm:text-[14px] text-center'>
                                        <div className='my-1 top-0 sm:my-1.5'><Icones tipo='semEstado' viewbox='0 0 100 100'className='fill-preto h-6 w-6 sm:h-7 sm:w-7 mx-auto' /></div>
                                        <div className='py-2.5 w-[60px]'>{data.hourly.time.slice(6, 21)[i].slice(-5)}H</div>
                                        <div className='py-2.5 w-[30px]'>{parseInt(temperature)}°C</div>
                                        <div className='py-2.5 w-[40px]'> {parseInt(data.hourly.windspeed_10m.slice(6, 21)[i])}Km/h</div>
                                        <div className='w-[20px] text-center self-center'><Icones tipo="seta_vento" viewbox="0 0 100 100" style={{transform:`rotate(${parseInt(data.hourly.winddirection_10m.slice(6, 21)[i])}deg)`}} className={`h-3 w-3 sm:h-[1.1rem] sm:w-[1.1rem] items-center justify-center ml-1.5 my-2.5`}/></div>
                                        <div className='py-2.5 w-[30px]'>{data.hourly.precipitation_probability.slice(6, 21)[i]}%</div>
                                        <div className='py-2.5 w-[30px]'>{data.hourly.relativehumidity_2m.slice(6, 21)[i]}%</div>
                                    </div>
                                );}
                                
                      }
        
                    })}
                    </div>
                    )}</div>)
    
    
    
    }
}
 

export default Meteorologia;