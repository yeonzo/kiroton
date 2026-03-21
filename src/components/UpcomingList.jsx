const upcomingData = [
  { date: '3/21 오늘', time: '14:00', title: '데이터베이스 팀 미팅', tag: '팀플', tagClass: 'blue' },
  { date: '3/22 내일', time: '10:00', title: '알고리즘 수업', tag: '수업', tagClass: 'purple' },
  { date: '3/23', time: '23:59', title: '알고리즘 과제 제출', tag: '과제', tagClass: 'gray' },
  { date: '3/25', time: '10:00', title: '운영체제 중간고사', tag: '시험', tagClass: 'red' },
  { date: '3/28', time: '15:00', title: '동아리 MT', tag: '활동', tagClass: 'green' },
]

export default function UpcomingList() {
  return (
    <div className="upcoming-card">
      <h3>다가오는 일정</h3>
      <div>
        {upcomingData.map((item, i) => (
          <div key={i} className="up-item">
            <div>
              <p className="up-date">{item.date} {item.time}</p>
              <p className="up-title">{item.title}</p>
            </div>
            <span className={`tag ${item.tagClass}`}>{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
