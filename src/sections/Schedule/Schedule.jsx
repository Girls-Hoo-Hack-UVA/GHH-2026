import { useState } from 'react'
import './Schedule.css'

const days = [
  {
    id: 'saturday',
    label: 'Saturday',
    date: 'October 17',
    events: [
      { time: '8:30 AM', title: 'Venue Opens', highlight: true },
      { time: '8:30 AM', title: 'Breakfast', detail: 'Bodo’s Bagels' },
      { time: '9:00 AM–10:00 AM', title: 'Opening Ceremony', detail: 'Rice 130', highlight: true },
      { time: '10:00 AM', title: 'Hacking Begins!', highlight: true },
      { time: '10:30 AM–11:00 AM', title: 'MLH TechTogether', detail: 'Rice 032' },
      { time: '11:30 AM–12:30 PM', title: 'ML @ UVA: Agentic AI 101', detail: 'Rice 032' },
      { time: '12:30 PM', title: 'Lunch', detail: 'Got Dumplings' },
      { time: '1:15 PM–2:00 PM', title: 'Interview Prep Workshop', detail: 'Rice 032' },
      { time: '3:00 PM–3:30 PM', title: 'MLH Workshop', detail: 'Rice 032' },
      { time: '4:30 PM–5:30 PM', title: 'Sponsor Networking/Professor Meet and Greet', detail: 'Davis Commons' },
      { time: '6:30 PM', title: 'Dinner', detail: 'Papa Johns' },
      { time: '7:30 PM–8:30 PM', title: 'Mario Party!', detail: 'Rice 032' },
      { time: '8:30 PM', title: 'Late Night Snack' },
      { time: '9:30 PM–10:30 PM', title: 'CD Painting', detail: 'Rice 032' },
    ],
  },
  {
    id: 'sunday',
    label: 'Sunday',
    date: 'October 18',
    events: [
      { time: '8:00 AM', title: 'Breakfast', detail: 'Wegmans' },
      { time: '9:00 AM–10:00 AM', title: 'How to Pitch Your Project Workshop', detail: 'Rice 032' },
      { time: '12:00 PM', title: 'Lunch', detail: 'Subway' },
      { time: '5:00 PM', title: 'Hacking Ends', highlight: true },
      { time: '5:00 PM', title: 'Refreshments' },
      { time: '5:45 PM–7:15 PM', title: 'Judging and Live Demos', detail: 'Rice 130', highlight: true },
      { time: '8:15 PM–9:15 PM', title: 'Closing Ceremony', detail: 'Rice 130', highlight: true },
    ],
  },
]

function ScheduleTime({ label }) {
  const [start, end] = label.split('–')

  return (
    <span className="schedule-event-time">
      <span>{start}</span>
      {end && <span>–{end}</span>}
    </span>
  )
}

function Schedule() {
  const [activeDay, setActiveDay] = useState(days[0].id)
  const day = days.find(({ id }) => id === activeDay)

  return (
    <section className="schedule-section" id="schedule" aria-labelledby="schedule-heading">
      <div className="schedule-content">
        <header className="schedule-header">
          <div>
            <h2 id="schedule-heading">The <span>schedule.</span></h2>
          </div>
          <p className="schedule-intro">October 17–18, 2026</p>
        </header>

        <div className="schedule-day-switcher" role="group" aria-label="Choose a schedule day">
          {days.map(({ id, label, date }) => (
            <button
              key={id}
              type="button"
              className={`schedule-day-button${activeDay === id ? ' active' : ''}`}
              aria-pressed={activeDay === id}
              aria-controls="schedule-day-content"
              onClick={() => setActiveDay(id)}
            >
              <span>{label}</span>
              <small>{date}</small>
            </button>
          ))}
        </div>

        <div className="schedule-day-content" id="schedule-day-content" key={day.id}>
          <h3>{day.label}, {day.date}</h3>
          <ol className="schedule-timeline">
            {day.events.map(({ time, title, detail, highlight }, index) => (
              <li className={`schedule-event${highlight ? ' schedule-event-highlight' : ''}`} key={`${time}-${title}-${index}`}>
                <ScheduleTime label={time} />
                <span className="schedule-event-marker" aria-hidden="true" />
                <div className="schedule-event-info">
                  <h4>{title}</h4>
                  {detail && <p>{detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Schedule
