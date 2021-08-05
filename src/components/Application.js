import React, { useState } from "react";
import DayList from "./DayList";
import "components/Application.scss";
import { getAppointmentsForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";
import { getInterviewersForDay } from "helpers/selectors";

const [days, setDays] = useState([]);
useEffect(() => {
  Promise.all([
    Promise.resolve(axios.get(`http://localhost:8001/api/days`)),
    Promise.resolve(axios.get(`http://localhost:8001/api/appointments`)),
    Promise.resolve(axios.get(`http://localhost:8001/api/interviewers`))
  ]).then(all => {
    const [days, appointments, interviewers] = all;
    dispatch({
      type: SET_APPLICATION_DATA,
      days: days.data,
      appointments: appointments.data,
      interviewers: interviewers.data
    });
  });
}, []);

return { state, setDay, bookInterview, cancelInterview };
}
export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day);

  const appointmentList = appointments.map( appointment => {
    return(
      <Appointment 
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={getInterview(state, appointment.interview)}
        interviewers={getInterviewersForDay(state, state.day)}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered"/>
<nav className="sidebar__menu">
<DayList days={days} day={day} setDay={setDay} />
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
