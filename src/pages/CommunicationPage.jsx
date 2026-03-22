import './CommunicationPage.css'
import ChatBar from '../components/ChatBar'

export default function CommunicationPage({ onBack }) {
  const channels = [
    {
      title: '팀 프로젝트',
      messages: [
        { sender: '김민수', text: 'UI 디자인 시안 올렸습니다. 확인 부탁드려요!', time: '14:32', unread: true },
        { sender: '이지은', text: '내일 미팅 장소 변경됐어요 - 공학관 302호', time: '13:15', unread: true },
        { sender: '박서준', text: 'API 문서 업데이트 완료했습니다', time: '11:40', unread: false },
      ],
    },
    {
      title: '교수님 · 조교',
      messages: [
        { sender: '김교수님', text: '면담 일정 확인 부탁드립니다 (3/25 화 14:00)', time: '오전 10:00', unread: true },
        { sender: '조교 이현우', text: '과제 제출 기한 하루 연장되었습니다', time: '어제', unread: false },
      ],
    },
    {
      title: '학과 공지',
      messages: [
        { sender: '학과사무실', text: '2026-1학기 수강신청 2차 안내', time: '3/20', unread: true },
        { sender: '학과사무실', text: '졸업요건 변경사항 공지', time: '3/18', unread: false },
        { sender: '학생회', text: '학과 MT 참가 신청 (~3/30)', time: '3/17', unread: false },
      ],
    },
  ]

  return (
    <div className="view active comm-view">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>커뮤니케이션</h2>
      </div>

      <ChatBar placeholder="커뮤니케이션 관련 질문을 해보세요" />

      <section className="comm-section">
        {channels.map((channel) => (
          <div className="comm-card" key={channel.title}>
            <div className="comm-card-top">
              <h3 className="comm-card-title">{channel.title}</h3>
              <span className="comm-unread-badge">
                {channel.messages.filter((m) => m.unread).length}건
              </span>
            </div>
            <ul className="comm-list">
              {channel.messages.map((msg, i) => (
                <li key={i} className={`comm-item ${msg.unread ? 'unread' : ''}`}>
                  <div className="comm-item-top">
                    <span className="comm-sender">{msg.sender}</span>
                    <span className="comm-time">{msg.time}</span>
                  </div>
                  <p className="comm-text">{msg.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
