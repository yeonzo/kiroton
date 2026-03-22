const DETAIL_DATA = {
  'AI 해커톤 2026': {
    date: '2026년 4월 15일 ~ 4월 16일',
    content: 'AI 기술을 활용한 24시간 해커톤 대회. 팀 단위(3~5인) 참가, 상금 총 500만원.',
    conditions: '대학(원)생 재학 중, AI/ML 관련 프로젝트 경험 권장',
    conditionMet: true,
    fit: 92,
    reason: '데이터사이언스 전공으로 AI/ML 역량이 높고, 관련 프로젝트 경험이 있어 수상 가능성이 높습니다.',
  },
  '대학생 창업 경진대회': {
    date: '2026년 5월 1일 마감',
    content: '대학생 대상 창업 아이디어 경진대회. 최대 지원금 1000만원, 멘토링 제공.',
    conditions: '재학생 팀(2~6인), 사업계획서 제출 필수',
    conditionMet: true,
    fit: 68,
    reason: '기술 역량은 충분하나 창업 경험이 부족할 수 있습니다. 팀 구성 시 비즈니스 전공 학생과 협업 추천.',
  },
  '오픈소스 컨트리뷰톤': {
    date: '2026년 3월 30일 ~ 6월 30일',
    content: '오픈소스 프로젝트에 기여하는 장기 프로그램. 수료증 및 우수 참가자 시상.',
    conditions: 'Git/GitHub 사용 가능, 프로그래밍 언어 1개 이상 숙달',
    conditionMet: true,
    fit: 88,
    reason: '프로그래밍 역량과 Git 활용 능력이 우수하여 적극 참여 추천. 포트폴리오 강화에도 도움됩니다.',
  },
  '교내 성적 장학금': {
    date: '2026년 3월 30일 마감',
    content: '직전 학기 성적 우수자 대상 등록금 감면 장학금. 전액/반액/30% 차등 지급.',
    conditions: '직전 학기 GPA 3.5 이상, 이수학점 15학점 이상, 징계 이력 없음',
    conditionMet: false,
    fit: 35,
    reason: '현재 학점(0.0/4.5)이 기준 미달입니다. 학점 정보를 업데이트하면 재평가할 수 있습니다.',
  },
  '국가근로장학금': {
    date: '2026년 4월 5일 마감',
    content: '교내·교외 근로를 통해 월 최대 40시간 근무, 시급 지급 방식의 장학금.',
    conditions: '소득분위 8구간 이하, 재학생, 직전 학기 성적 C0(2.0) 이상',
    conditionMet: true,
    fit: 75,
    reason: '소득 조건 충족 시 신청 가능. 학업과 병행 가능한 교내 근로를 추천합니다.',
  },
}

const s = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 200,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  modal: {
    background: '#fff', borderRadius: 16, width: '90%', maxWidth: 420,
    padding: '28px 24px 22px', boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
    border: '2px solid #1B3A5C', maxHeight: '80vh', overflowY: 'auto',
  },
  titleRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    paddingBottom: 14, marginBottom: 18,
    borderBottom: '1.5px solid #e0e4ea',
  },
  title: {
    fontSize: '1.1rem', fontWeight: 700, color: '#1B3A5C', margin: 0,
  },
  closeX: {
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: '1.2rem', color: '#6b7280', padding: '2px 6px',
    lineHeight: 1, fontFamily: 'inherit', fontWeight: 600,
    transition: 'color 0.15s',
  },
  section: {
    marginBottom: 16,
  },
  label: {
    display: 'inline-block', fontSize: '0.82rem', fontWeight: 700, color: '#1B3A5C',
    background: '#e8edf3', borderRadius: 20, padding: '4px 14px',
    marginBottom: 8,
  },
  value: {
    fontSize: '0.88rem', color: '#1a1a2e', lineHeight: 1.5,
    paddingLeft: 14,
  },
  conditionRow: {
    display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 14,
  },
  conditionBadge: (met) => ({
    display: 'inline-block', padding: '3px 10px', borderRadius: 12,
    fontSize: '0.75rem', fontWeight: 600,
    background: met ? '#dcfce7' : '#fee2e2',
    color: met ? '#166534' : '#991b1b',
  }),
}

export default function AdminDetailPopup({ itemName, onClose }) {
  const data = DETAIL_DATA[itemName]
  if (!data) return null

  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={e => e.stopPropagation()}>
        <div style={s.titleRow}>
          <p style={s.title}>{itemName}</p>
          <button style={s.closeX} onClick={onClose} aria-label="닫기">✕</button>
        </div>

        <div style={s.section}>
          <p style={s.label}>날짜</p>
          <p style={s.value}>{data.date}</p>
        </div>

        <div style={s.section}>
          <p style={s.label}>내용</p>
          <p style={s.value}>{data.content}</p>
        </div>

        <div style={s.section}>
          <p style={s.label}>조건</p>
          <div style={s.conditionRow}>
            <p style={{ ...s.value, flex: 1, paddingLeft: 0 }}>{data.conditions}</p>
            <span style={s.conditionBadge(data.conditionMet)}>
              {data.conditionMet ? '부합' : '미달'}
            </span>
          </div>
        </div>

        <div style={s.section}>
          <p style={s.label}>적합도</p>
          <p style={s.value}>{data.fit}%</p>
        </div>

        <div style={s.section}>
          <p style={s.label}>이유</p>
          <p style={s.value}>{data.reason}</p>
        </div>
      </div>
    </div>
  )
}
