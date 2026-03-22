import { useState } from 'react'
import './SchedulePage.css'
import Calendar from '../components/Calendar'
import Checklist from '../components/Checklist'
import ChatBar from '../components/ChatBar'

const eventsByDate = {
  '2026-03-21': [{ time: '14:00', title: '데이터베이스 팀 미팅' }],
  '2026-03-22': [{ time: '10:00', title: '알고리즘 수업' }],
  '2026-03-23': [{ time: '23:59', title: '알고리즘 과제 제출' }],
  '2026-03-25': [{ time: '10:00', title: '운영체제 중간고사' }],
  '2026-03-28': [{ time: '15:00', title: '동아리 MT' }],
}

function getUpcomingEvents() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const upcoming = []
  for (const [date, events] of Object.entries(eventsByDate)) {
    const d = new Date(date + 'T00:00:00')
    if (d >= today) {
      for (const ev of events) {
        upcoming.push({ date, ...ev })
      }
    }
  }
  upcoming.sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date)
    return a.time.localeCompare(b.time)
  })
  return upcoming
}

function formatDateLabel(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  const month = d.getMonth() + 1
  const day = d.getDate()
  const dayNames = ['일', '월', '화', '수', '목', '금', '토']
  const dow = dayNames[d.getDay()]
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.round((d - today) / (1000 * 60 * 60 * 24))
  let label = `${month}/${day} (${dow})`
  if (diff === 0) label = `오늘 · ${label}`
  else if (diff === 1) label = `내일 · ${label}`
  else if (diff > 0) label = `D-${diff} · ${label}`
  return label
}

export default function SchedulePage({ onBack }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const upcoming = getUpcomingEvents()

  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] || []) : []
  const dateLabel = selectedDate
    ? `${parseInt(selectedDate.split('-')[1])}/${parseInt(selectedDate.split('-')[2])} 일정`
    : null

  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>일정</h2>
      </div>

      <ChatBar placeholder="AI 비서에게 일정 관련 요청을 해보세요" />

      <div style={{ height: 18 }} />

      <section className="mid-section">
        <div>
          <Calendar onSelectDate={setSelectedDate} />
          {selectedDate && (
            <div className="selected-date-card">
              <h3>{dateLabel}</h3>
              {selectedEvents.length === 0
                ? <p className="no-event">등록된 일정이 없습니다</p>
                : selectedEvents.map((ev, i) => (
                    <div key={i} className="up-item">
                      <span className="up-time">{ev.time}</span>
                      <span className="up-bar" />
                      <div className="up-body">
                        <p className="up-title">{ev.title}</p>
                      </div>
                    </div>
                  ))
              }
            </div>
          )}
        </div>

        {/* 다가오는 일정 박스 */}
        <div className="upcoming-card">
          <h3 className="upcoming-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>
              <path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/>
              <path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>
            </svg>
            다가오는 일정
          </h3>
          <div className="up-scroll">
            {upcoming.length === 0 ? (
              <p className="no-event">다가오는 일정이 없습니다</p>
            ) : (
              upcoming.map((ev, i) => (
                <div key={i} className="up-item-row">
                  <div className="up-date-badge">{formatDateLabel(ev.date)}</div>
                  <div className="up-detail">
                    <span className="up-time">{ev.time}</span>
                    <span className="up-bar" />
                    <div className="up-body">
                      <p className="up-title">{ev.title}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Checklist />
    </div>
  )
}
