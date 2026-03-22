import Calendar from '../components/Calendar'
import UpcomingList from '../components/UpcomingList'
import Checklist from '../components/Checklist'
import ChatBar from '../components/ChatBar'

export default function SchedulePage({ onBack }) {
  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>중요 일정</h2>
      </div>

      <ChatBar placeholder="일정 관련 요청을 해보세요" />

      <section className="mid-section">
        <Calendar />
        <UpcomingList />
      </section>

      <Checklist />
    </div>
  )
}
