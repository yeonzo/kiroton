export default function AdminPage({ onBack }) {
  const items = [
    { icon:'📋', title:'2차 수강신청', sub:'마감 3/28 (토) 오전 10시', detail:'희망 강의 목록 미리 확인 필요. 인기 강의는 빠르게 마감될 수 있어요.', tag:'D-7', tagCls:'red', urgent:true },
    { icon:'💰', title:'장학금 신청', sub:'마감 3/30 (월) 오후 5시', detail:'성적 우수 장학금 신청 기간. 학과 사무실 방문 또는 포털 온라인 신청 가능.', tag:'D-9', tagCls:'orange', urgent:true },
    { icon:'🏆', title:'AI 해커톤 2026 참가 추천', sub:'4/15-4/16 · 상금 500만원', detail:'인공지능 분야 팀 프로젝트 공모전. 작년 우수상 수상 경험 활용 가능.', tag:'추천', tagCls:'purple' },
    { icon:'📝', title:'연구실 인턴 지원', sub:'김교수님 연구실 · 마감 4/5', detail:'머신러닝 연구실 학부 인턴 모집. 지원서 및 성적증명서 제출 필요.', tag:'신규', tagCls:'blue' },
    { icon:'🎓', title:'졸업 요건 확인', sub:'이수학점 90/130 · 전공 필수 2과목 미이수', detail:'다음 학기 수강 계획 시 전공 필수 과목 우선 배치 권장.', tag:'확인', tagCls:'gray' },
    { icon:'🏅', title:'오픈소스 컨트리뷰톤', sub:'3/30-6/30 · 수료증 발급', detail:'오픈소스 기여 활동. 포트폴리오 강화에 도움이 돼요.', tag:'진행중', tagCls:'green' },
  ]

  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>📄 중요 행정 정보</h2>
      </div>
      <div className="page-content">
        <div className="admin-grid">
          {items.map((item, i) => (
            <div key={i} className={`admin-item ${item.urgent ? 'urgent-card' : ''}`}>
              <div className="admin-icon">{item.icon}</div>
              <div className="admin-body">
                <strong>{item.title}</strong>
                <p>{item.sub}</p>
                <p className="admin-detail">{item.detail}</p>
              </div>
              <span className={`tag ${item.tagCls}`}>{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
