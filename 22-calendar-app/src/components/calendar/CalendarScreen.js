import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es');

const localizer = momentLocalizer(moment);



export const CalendarScreen = () => {

  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' )

  const dispatch = useDispatch();
  const { events } = useSelector( state => state.calendar )



  const onDoubleClick = () =>{
     dispatch( uiOpenModal() );
  }

  const onSelectEvent = (e) =>{
    dispatch( eventSetActive( e ) )
  //  dispatch( uiOpenModal( ) )
    
 }

 const onViewChange = (e) =>{
    console.log(e);
    setLastView(e);

    localStorage.setItem('lastView',e);
 }

  const eventStyleGetter = ( event, start, end, isSelected) => {
    const style ={
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity:0.8,
      display:'block',
      color:'white'
    }

    return {
      style
    }
  }
  return (
    <div className="calendar-screen">
        <Navbar />

        <Calendar
            localizer={ localizer }
            events={ events }
            startAccessor="start"
            endAccessor="end"
            messages={ messages }
            eventPropGetter={ eventStyleGetter }
            onDoubleClickEvent = { onDoubleClick }
            onSelectEvent = { onSelectEvent }
            onView = { onViewChange }
            view= { lastView }
            components={{
              event:CalendarEvent           
            }}
            />
        <AddNewFab />
        <CalendarModal />
    </div>
  )
}
