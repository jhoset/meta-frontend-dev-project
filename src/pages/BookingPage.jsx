import { useReducer } from "react";
import { BookingForm } from "../components"
const timesByDay = {
  'monday': ['17:00', '18:00', '19:00'],
  'tuesday': ['20:00', '21:00', '22:00'],
  'wednesday': ['17:00', '18:00', '19:00', '20:00'],
  'thursday': ['18:00', '19:00', '20:00', '21:00'],
  'friday': ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  'saturday': ['17:00', '18:00', '19:00', '20:00', '21:00'],
  'sunday': ['17:00', '18:00', '19:00'],
};

function getTimesByDate(payload) {
  const currentDate = new Date(payload);
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
  return timesByDay[dayOfWeek] || [];
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return getTimesByDate(action.payload);
    default:
      throw new Error();
  }
};

const init = () => {
  // Aquí puedes inicializar los horarios disponibles
  // Por ahora, simplemente devolvemos un array vacío
  return [];
};

export const BookingPage = () => {

  const [times, dispatch] = useReducer(reducer, [], init);



  return (
    <div className="mt-90">
      <div className="main-title">Booking Form</div>
      <BookingForm availableTimes={times} updateTimes={dispatch} />
    </div>
  )
}