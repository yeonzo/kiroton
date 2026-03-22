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

export default function SchedulePage({ onBack }) {
  const [selectedDate, setSelectedDate] = useState(null)

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
      </section>

      <Checklist />
    </div>
  )
}
