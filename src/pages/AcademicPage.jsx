export default function AcademicPage({ onBack }) {
  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>📖 중요 학업 정보</h2>
      </div>
      <div className="page-content">
        <div className="acad-grid">
          <div className="card">
            <h3 className="card-title">진행중 과제</h3>
            {[
              { name:'머신러닝 프로젝트', pct:60, sub:'인공지능 · 마감 3/28', detail:'데이터셋 전처리 완료, 모델 학습 진행 중' },
              { name:'데이터베이스 설계', pct:85, sub:'데이터베이스 · 마감 3/24', detail:'ERD 완성, SQL 쿼리 작성 중' },
              { name:'알고리즘 구현', pct:100, sub:'알고리즘 · 마감 3/23', detail:'제출 완료 ✓' },
            ].map(t => (
              <div key={t.name} className="task-item">
                <div className="task-row"><span className="task-name">{t.name}</span><span className="task-pct">{t.pct}%</span></div>
                <p className="task-sub">{t.sub}</p>
                <div className="progress-bar green"><div style={{width:`${t.pct}%`}} /></div>
                <p className="task-detail">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="card">
            <h3 className="card-title">시험 준비 현황</h3>
            <div className="exam-item">
              <div className="exam-top"><span>운영체제</span><span className="tag blue">진행중</span></div>
              <p className="exam-desc">Ch.7-8 프로세스 동기화</p>
              <p className="exam-date">시험일 3/25 · D-4</p>
              <div className="progress-bar" style={{marginTop:8}}><div style={{width:'55%'}} /></div>
              <p className="task-sub" style={{marginTop:4}}>학습 진도 55%</p>
            </div>
            <div className="exam-item">
              <div className="exam-top"><span>데이터베이스</span><span className="tag gray">예정</span></div>
              <p className="exam-desc">Ch.9-10 트랜잭션</p>
              <p className="exam-date">시험일 4/1 · D-11</p>
              <div className="progress-bar" style={{marginTop:8}}><div style={{width:'20%'}} /></div>
              <p className="task-sub" style={{marginTop:4}}>학습 진도 20%</p>
            </div>
            <button className="btn-outline" style={{marginTop:12}}>예상 문제 보기</button>
          </div>
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
        </div>
      </div>
    </div>
  )
}
