import Calendar from '../components/Calendar'
import UpcomingList from '../components/UpcomingList'
import Checklist from '../components/Checklist'

export default function DashboardPage({ onNavigate }) {
  return (
    <div className="view active">
      {/* 프로필 헤더 */}
      <section className="profile-header">
        <div className="profile-left">
          <div className="avatar">😊</div>
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
          <span className="pill-icon">🎯</span>
          <div>
            <p className="pill-label">이번 주</p>
            <p>과제 3개 · 시험 1개</p>
          </div>
        </div>
      </section>

      {/* 요약 카드 */}
      <section className="summary-cards">
        <div className="sum-card" data-nav="schedule" onClick={() => onNavigate('schedule')}>
          <div className="sum-card-icon purple">📅</div>
          <h3>중요 일정</h3>
          <ul className="sum-list">
            <li><span className="dot purple" /><span className="sum-date">오늘</span>데이터베이스 팀 미팅</li>
            <li><span className="dot purple" /><span className="sum-date">3/23</span>알고리즘 과제 제출</li>
            <li><span className="dot purple" /><span className="sum-date">3/25</span>운영체제 중간고사</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
        <div className="sum-card" data-nav="academic" onClick={() => onNavigate('academic')}>
          <div className="sum-card-icon blue">📖</div>
          <h3>중요 학업 정보</h3>
          <ul className="sum-list">
            <li><span className="dot blue" /><span className="sum-date">진행중</span>머신러닝 프로젝트 (60%)</li>
            <li><span className="dot blue" /><span className="sum-date">시험</span>운영체제 (4일 남음)</li>
            <li><span className="dot blue" /><span className="sum-date">학습</span>데이터베이스 Ch.7-8</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
        <div className="sum-card" data-nav="admin" onClick={() => onNavigate('admin')}>
          <div className="sum-card-icon green">📄</div>
          <h3>중요 행정 정보</h3>
          <ul className="sum-list">
            <li><span className="dot green" /><span className="sum-date">수강신청</span>2차 수강신청 3/28</li>
            <li><span className="dot green" /><span className="sum-date">장학금</span>신청 마감 3/30</li>
            <li><span className="dot green" /><span className="sum-date">공모전</span>AI 해커톤 참가 추천</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
      </section>

      {/* 캘린더 + 다가오는 일정 */}
      <section className="mid-section">
        <Calendar />
        <UpcomingList />
      </section>

      <Checklist />

      <div className="motivation-banner">
        <p>🌤 오늘도 잘 하고 있어요. 이번 주 과제 3개 중 1개 완료했어요 💪</p>
      </div>

      {/* 학업 성취도 / 시험 준비 / 진행중 과제 */}
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

      {/* 하단 섹션 */}
      <section className="bottom-section">
        <div className="card">
          <h3 className="card-title">교내외 활동</h3>
          <div className="act-list">
            {[
              { ico:'👥', name:'AI 연구회', desc:'회장 · 2024-현재', tag:'동아리', tagCls:'purple' },
              { ico:'🏅', name:'해커톤 2024', desc:'우수상 · 2024.02', tag:'공모전', tagCls:'blue' },
              { ico:'❤️', name:'코딩 멘토링', desc:'멘토 · 2023-2024', tag:'봉사', tagCls:'green' },
              { ico:'💻', name:'컴퓨터학회', desc:'회원 · 2023-현재', tag:'학회', tagCls:'gray' },
            ].map(a => (
              <div key={a.name} className="act-item">
                <div className="act-ico">{a.ico}</div>
                <div className="act-info"><strong>{a.name}</strong><p>{a.desc}</p></div>
                <span className={`tag ${a.tagCls}`}>{a.tag}</span>
              </div>
            ))}
          </div>
          <h3 className="card-title" style={{marginTop:20}}>추천 공모전</h3>
          <div className="contest-item"><strong>AI 해커톤 2026</strong><p>4/15-4/16 · 상금 500만원</p><div className="tag-row"><span className="tag purple">인공지능</span><span className="tag blue">팀프로젝트</span></div></div>
          <div className="contest-item"><strong>대학생 창업 경진대회</strong><p>5/1 마감 · 최대 1000만원</p><div className="tag-row"><span className="tag green">창업</span><span className="tag gray">비즈니스</span></div></div>
          <div className="contest-item"><strong>오픈소스 컨트리뷰톤</strong><p>3/30-6/30 · 수료증</p><div className="tag-row"><span className="tag blue">오픈소스</span><span className="tag gray">개발</span></div></div>
        </div>
        <div className="card">
          <h3 className="card-title">Communication History</h3>
          <div className="comm-list">
            {[
              { ava:'👨‍🏫', name:'김교수님', msg:'연구실 인턴 지원 안내', date:'3/20', unread:true },
              { ava:'🏫', name:'학과사무실', msg:'장학금 신청 안내', date:'3/19', unread:true },
              { ava:'👤', name:'팀원_박지현', msg:'팀플 진행상황 공유', date:'3/18' },
              { ava:'👥', name:'동아리', msg:'MT 참가 신청 확인', date:'3/17' },
              { ava:'👨‍🏫', name:'이조교님', msg:'과제 피드백', date:'3/16' },
            ].map((c, i) => (
              <div key={i} className={`comm-item ${c.unread ? 'unread' : ''}`}>
                <div className="comm-ava">{c.ava}</div>
                <div className="comm-info"><strong>{c.name}</strong><p>{c.msg}</p><span className="comm-date">{c.date}</span></div>
                {c.unread && <span className="unread-dot" />}
              </div>
            ))}
          </div>
          <div className="unread-box"><p>읽지 않은 메시지</p><strong>2</strong></div>
        </div>
      </section>
    </div>
  )
}
