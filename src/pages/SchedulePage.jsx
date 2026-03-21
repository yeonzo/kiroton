export default function SchedulePage({ onBack }) {
  const schedules = [
    { label: '오늘', time: '14:00', title: '데이터베이스 팀 미팅', desc: '팀플 진행상황 공유 및 역할 분담', tag: '팀플', tagCls: 'blue', cls: 'today-item' },
    { label: '3월 22일 (일)', time: '10:00', title: '알고리즘 수업', desc: '그래프 탐색 알고리즘', tag: '수업', tagCls: 'purple', cls: '' },
    { label: '3월 23일 (월)', time: '23:59', title: '알고리즘 과제 제출', desc: '그래프 탐색 구현 과제', tag: '과제', tagCls: 'gray', cls: 'urgent' },
    { label: '3월 25일 (수)', time: '10:00', title: '운영체제 중간고사', desc: 'Ch.1-8 범위 · 공학관 101호', tag: '시험', tagCls: 'red', cls: 'urgent' },
    { label: '3월 28일 (토)', time: '15:00', title: '동아리 MT', desc: 'AI 연구회 · 가평 출발', tag: '활동', tagCls: 'green', cls: '' },
  ]

  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>📅 중요 일정</h2>
      </div>
      <div className="page-content">
        <div className="schedule-grid">
          {schedules.map((s, i) => (
            <div key={i} className="sch-group">
              <p className="sch-group-label">{s.label}</p>
              <div className={`sch-item ${s.cls}`}>
                <div className="sch-time">{s.time}</div>
                <div className="sch-body"><strong>{s.title}</strong><p>{s.desc}</p></div>
                <span className={`tag ${s.tagCls}`}>{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
