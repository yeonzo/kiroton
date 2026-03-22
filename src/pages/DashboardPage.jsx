export default function DashboardPage({ onNavigate }) {
  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={() => onNavigate('landing')}>← 홈으로</button>
      </div>

      {/* 프로필 헤더 */}
      <section className="profile-header">
        <div className="profile-left">
          <div className="avatar"></div>
          <div className="profile-info">
            <h2>서울대학교 / 3학년</h2>
            <p className="dept">컴퓨터공학과</p>
            <div className="badges">
              <span className="badge">학점 3.8 / 4.5</span>
              <span className="badge">이수학점 90 / 130</span>
            </div>
          </div>
        </div>
        <div className="weekly-pill">
          <span className="pill-icon"></span>
          <div>
            <p className="pill-label">이번 주</p>
            <p>과제 3개 · 시험 1개</p>
          </div>
        </div>
      </section>

      {/* 요약 카드 */}
      <section className="summary-cards">
        <div className="sum-card" data-nav="schedule" onClick={() => onNavigate('schedule')}>
          <div className="sum-card-icon purple"></div>
          <h3>중요 일정</h3>
          <ul className="sum-list">
            <li><span className="dot purple" /><span className="sum-date">오늘</span>데이터베이스 팀 미팅</li>
            <li><span className="dot purple" /><span className="sum-date">3/23</span>알고리즘 과제 제출</li>
            <li><span className="dot purple" /><span className="sum-date">3/25</span>운영체제 중간고사</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
        <div className="sum-card" data-nav="academic" onClick={() => onNavigate('academic')}>
          <div className="sum-card-icon blue"></div>
          <h3>중요 학업 정보</h3>
          <ul className="sum-list">
            <li><span className="dot blue" /><span className="sum-date">진행중</span>머신러닝 프로젝트 (60%)</li>
            <li><span className="dot blue" /><span className="sum-date">시험</span>운영체제 (4일 남음)</li>
            <li><span className="dot blue" /><span className="sum-date">학습</span>데이터베이스 Ch.7-8</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
        <div className="sum-card" data-nav="admin" onClick={() => onNavigate('admin')}>
          <div className="sum-card-icon green"></div>
          <h3>중요 행정 정보</h3>
          <ul className="sum-list">
            <li><span className="dot green" /><span className="sum-date">수강신청</span>2차 수강신청 3/28</li>
            <li><span className="dot green" /><span className="sum-date">장학금</span>신청 마감 3/30</li>
            <li><span className="dot green" /><span className="sum-date">공모전</span>AI 해커톤 참가 추천</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
      </section>
    </div>
  )
}
