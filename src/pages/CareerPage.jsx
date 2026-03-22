import './CareerPage.css'
import ChatBar from '../components/ChatBar'

export default function CareerPage({ onBack }) {
  const sections = [
    {
      title: '지원 현황',
      items: [
        { status: '마감임박', text: '네이버 인턴십 지원', detail: '~3/28 마감', cls: 'urgent' },
        { status: '서류통과', text: '카카오 채용연계형 인턴', detail: '코딩테스트 4/3', cls: 'active' },
        { status: '준비중', text: '삼성 SW 역량테스트', detail: '상반기 접수 예정', cls: 'upcoming' },
      ],
    },
    {
      title: '코딩테스트 준비',
      items: [
        { status: '진행중', text: '백준 골드 달성 목표', detail: '현재 실버1 (1,847점)', cls: 'active' },
        { status: '매일', text: '프로그래머스 1문제 풀기', detail: '이번 주 3/5 완료', cls: 'active' },
        { status: '예정', text: 'SQL 고득점 Kit 완주', detail: '12/50 완료', cls: 'upcoming' },
      ],
    },
    {
      title: '면접 · 스터디',
      items: [
        { status: '예정', text: '모의 면접 스터디', detail: '4/2 (수) 19:00', cls: 'upcoming' },
        { status: '진행중', text: 'CS 기초 스터디', detail: '매주 화 20:00 · 운영체제 Ch.5', cls: 'active' },
        { status: '완료', text: '자기소개서 첨삭', detail: '3/18 완료', cls: 'done' },
      ],
    },
  ]

  return (
    <div className="view active career-view">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>취업</h2>
      </div>

      <ChatBar placeholder="취업 관련 질문을 해보세요" />

      <section className="career-section">
        {sections.map((section) => (
          <div className="career-card" key={section.title}>
            <h3 className="career-card-title">{section.title}</h3>
            <ul className="career-list">
              {section.items.map((item, i) => (
                <li key={i} className="career-item">
                  <span className={`career-tag tag-${item.cls}`}>{item.status}</span>
                  <div>
                    <strong>{item.text}</strong>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
