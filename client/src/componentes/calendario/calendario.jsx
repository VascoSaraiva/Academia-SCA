/* import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import ptLocale from '@fullcalendar/core/locales/pt';

const MyCalendar = () => {
  const calendarRef = useRef(null);
  const modalRef = useRef(null);


  useEffect(() => {
    const calendar = calendarRef.current.getApi();
    calendar.setOption('locale', ptLocale);


    calendar.setOption('eventTimeFormat', {
        hour: 'numeric',
        minute: '2-digit',
        meridiem: false
      });
      
      calendar.setOption('eventFormat', {
        title: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      
      calendar.setOption('headerToolbar', {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      });

    calendar.setOption('displayEventTime', true);

    calendar.setOption('googleCalendarApiKey', 'AIzaSyAVLE2aBBxWOLjLo_qVV5Y4xkc-KEKJJro');

    calendar.setOption('eventSources', [
      {
        googleCalendarId: 'scaprojetoua@gmail.com',
        color: 'green',
        textColor: 'white'
      }
    ]);

    calendar.on('eventClick', (arg) => {
        const modal = modalRef.current;
        modal.querySelector('.modal-title').textContent = arg.event.title;
        modal.querySelector('.modal-body').innerHTML = arg.event.extendedProps.description;
  
        modal.classList.add('show');
        modal.style.display = 'block';
      });
  
      window.onclick = (event) => {
        const modal = modalRef.current;
        if (event.target === modal) {
          modal.classList.remove('show');
          modal.style.display = 'none';
        }
      };
    }, []);


  return (
    <>
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
    />
     <div className="modal" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
 */

import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import ptLocale from '@fullcalendar/core/locales/pt';
import timeGridPlugin from '@fullcalendar/timegrid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Calendario = () => {
  const calendarRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const calendar = calendarRef.current.getApi();
    calendar.setOption('locale', ptLocale);
    AOS.init()



    calendar.setOption('eventTimeFormat', {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false
    });

    calendar.setOption('eventFormat', {
      title: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    if (innerWidth > 640) {
      calendar.setOption('headerToolbar', {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      });
    } else {
      calendar.setOption('headerToolbar', {
        right: 'prev,next,today dayGridMonth,listWeek',
        left: 'title',
      });
    }


    calendar.setOption('displayEventTime', true);

    calendar.setOption('googleCalendarApiKey', 'AIzaSyAVLE2aBBxWOLjLo_qVV5Y4xkc-KEKJJro');

    calendar.setOption('eventSources', [
      {
        googleCalendarId: 'scaprojetoua@gmail.com',
        color: '#258542',
        textColor: 'white'
      }
    ]);

    calendar.on("eventClick", (info) => {
      info.jsEvent.preventDefault();
      let startTime = info.event.start.getHours() + ':' + info.event.start.getMinutes().toString().padStart(2, '0');
      let endTime = info.event.end.getHours() + ':' + info.event.end.getMinutes().toString().padStart(2, '0');
      let eventTime = startTime + ' - ' + endTime;

      if (eventTime == "0:00 - 0:00") {
        eventTime = "Todo o dia";
      }

      const modal = modalRef.current;
      modal.querySelector(".modal-title").innerHTML = info.event.title + "  -  " + " <span style='color: green'>" + eventTime + "</span>";

      if (info.event.extendedProps.description == undefined || info.event.extendedProps.description == "") {
        modal.querySelector(".modal-body").innerHTML = "Não existem informações sobre este evento.";
      } else {
        modal.querySelector(".modal-body").innerHTML = info.event.extendedProps.description;
      }
      modal.classList.add("block");
      modal.classList.remove("hidden");
    });

    window.onclick = (event) => {
      const modal = modalRef.current;
      if (event.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("block");
      }
    };
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="1000" className='md:w-[760px] md:mx-auto lg:w-[1020px] mb-20'>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        initialView={window.innerWidth > 640 ? "dayGridMonth" : "listWeek"}

      />

      <div ref={modalRef} className="fixed z-10 inset-0 overflow-y-auto hidden text-preto bg-preto bg-opacity-40">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-lg w-2/3 lg:w-1/2 bg-branco shadow-2xl">
            <div className="p-4">
              <h3 className="text-[20px] font-unbounded font-semibold leading-6 text-gray-900 mb-4 modal-title"></h3>
              <div className="text-cinzento3 font-inter leading-5 text-sm modal-body w-fit"></div>
            </div>
            <div className="flex justify-center p-4 ">
              <button type="button" className="bg-opacity-0 font-medium text-verde text-center rounded-full border-verde border px-6 py-1.5 hover:text-branco hover:bg-verde transition delay-120 duration-500 ease-in-out text-[14px] font-unbounded my-3 md:text-botao1_grande md:border-3" onClick={() => modalRef.current.classList.add("hidden")}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;