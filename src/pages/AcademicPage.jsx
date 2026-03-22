import './AcademicPage.css'
import ChatBar from '../components/ChatBar'

export default function AcademicPage({ onBack }) {
  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>중요 학업 정보</h2>
      </div>

      <ChatBar placeholder="학업 관련 질문을 해보세요" />

      <div className="motivation-banner">
        <p>오늘도 잘 하고 있어요. 이번 주 과제 3개 중 1개 완료했어요</p>
      </div>

      <section className="summary-cards">
        <div className="card">
          <h3 className="card-title">학업 성취도</h3>
          <div className="grade-list">
            {[['운영체제','3.8',76],['데이터베이스','4.0',80],['알고리즘','3.5',70],['머신러닝','4.2',84]].map(([name,grade,pct]) => (
              <div key={name}>
                <div className="grade-row"><span>{name}</span><span className="gval">{grade}</span></div>
                <div className="progress-bar"><div style={{width:`${pct}%`}} /></div>
              </div>
            ))}
          </div>
          <p className="avg-grade">평균 학점 <strong>3.8 / 4.5</strong></p>
        </div>
        <div className="card">
          <h3 className="card-title">시험 준비</h3>
          <div className="exam-item">
            <div className="exam-top"><span>운영체제</span><span className="tag blue">진행중</span></div>
            <p className="exam-desc">Ch.7-8 프로세스 동기화</p>
            <p className="exam-date">시험일 3/25</p>
          </div>
          <div className="exam-item">
            <div className="exam-top"><span>데이터베이스</span><span className="tag gray">예정</span></div>
            <p className="exam-desc">Ch.9-10 트랜잭션</p>
            <p className="exam-date">시험일 4/1</p>
          </div>
          <button className="btn-outline">예상 문제 보기</button>
        </div>
        <div className="card">
          <h3 className="card-title">진행중 과제</h3>
          {[
            { name: '머신러닝 프로젝트', pct: 60, sub: '인공지능 · 마감 3/28' },
            { name: '데이터베이스 설계', pct: 85, sub: '데이터베이스 · 마감 3/24' },
            { name: '알고리즘 구현', pct: 100, sub: '알고리즘 · 마감 3/23' },
          ].map(t => (
            <div key={t.name} className="task-item">
              <div className="task-row"><span className="task-name">{t.name}</span><span className="task-pct">{t.pct}%</span></div>
              <p className="task-sub">{t.sub}</p>
              <div className="progress-bar green"><div style={{width:`${t.pct}%`}} /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
