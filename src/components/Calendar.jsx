import { useState } from 'react'

const EVENT_DATES = ['2026-03-21','2026-03-22','2026-03-23','2026-03-25','2026-03-28']
const DAY_LABELS = ['일','월','화','수','목','금','토']

export default function Calendar() {
  const [year, setYear] = useState(2026)
  const [month, setMonth] = useState(2) // 0-indexed, 2 = March

  const title = `${year}년 ${month + 1}월`
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const todayStr = new Date().toISOString().split('T')[0]

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const days = []
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`e${i}`} className="cal-num empty" />)
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    const dow = new Date(dateStr + 'T00:00:00').getDay()
    let cls = 'cal-num'
    if (dow === 0) cls += ' sunday'
    if (dow === 6) cls += ' saturday'
    if (dateStr === todayStr) cls += ' today'
    if (EVENT_DATES.includes(dateStr)) cls += ' has-event'
    days.push(<div key={d} className={cls}>{d}</div>)
  }

  return (
    <div className="cal-card">
      <div className="cal-header-row">
        <button onClick={prevMonth}>‹</button>
        <span>{title}</span>
        <button onClick={nextMonth}>›</button>
      </div>
      <div className="calendar">
        {DAY_LABELS.map(d => <div key={d} className="cal-day-label">{d}</div>)}
        {days}
      </div>
    </div>
  )
}
