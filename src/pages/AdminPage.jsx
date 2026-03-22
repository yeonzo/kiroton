import './AdminPage.css'
import ChatBar from '../components/ChatBar'

export default function AdminPage({ onBack }) {
  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>중요 행정 정보</h2>
      </div>

      <ChatBar placeholder="행정 관련 궁금한 점을 물어보세요" />

      <section className="bottom-section">
        <div className="card">
          <h3 className="card-title">교내외 활동</h3>
          <div className="act-list">
            {[
              { ico:'', name:'AI 연구회', desc:'회장 · 2024-현재', tag:'동아리', tagCls:'purple' },
              { ico:'', name:'해커톤 2024', desc:'우수상 · 2024.02', tag:'공모전', tagCls:'blue' },
              { ico:'', name:'코딩 멘토링', desc:'멘토 · 2023-2024', tag:'봉사', tagCls:'green' },
              { ico:'', name:'컴퓨터학회', desc:'회원 · 2023-현재', tag:'학회', tagCls:'gray' },
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
              { ava:'', name:'김교수님', msg:'연구실 인턴 지원 안내', date:'3/20', unread:true },
              { ava:'', name:'학과사무실', msg:'장학금 신청 안내', date:'3/19', unread:true },
              { ava:'', name:'팀원_박지현', msg:'팀플 진행상황 공유', date:'3/18' },
              { ava:'', name:'동아리', msg:'MT 참가 신청 확인', date:'3/17' },
              { ava:'', name:'이조교님', msg:'과제 피드백', date:'3/16' },
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
