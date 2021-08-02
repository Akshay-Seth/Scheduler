import React from "react";

import "components/Application.scss";

export default function Application(props) {
  return (
    <main className="layout">
      <section className="sidebar">
        {<img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>}
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
