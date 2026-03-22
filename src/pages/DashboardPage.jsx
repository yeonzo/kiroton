import { useState } from 'react'
import './DashboardPage.css'
import mascot from '../assets/mascot.png'

const EditIcon = () => (
  <svg className="edit-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
)

export default function DashboardPage({ onNavigate }) {
  const [gpa, setGpa] = useState('0.0')
  const [credits, setCredits] = useState('90')
  const [editingField, setEditingField] = useState(null)
  const [fieldDraft, setFieldDraft] = useState('')
  const [weeklyGoal, setWeeklyGoal] = useState('과제 3개 · 시험 1개')
  const [isEditingGoal, setIsEditingGoal] = useState(false)
  const [goalDraft, setGoalDraft] = useState(weeklyGoal)
  const [widgets, setWidgets] = useState([])
  const [showWidgetPicker, setShowWidgetPicker] = useState(false)

  const widgetOptions = [
    { id: 'project', label: '프로젝트', icon: '📋' },
    { id: 'career', label: '취업', icon: '💼' },
    { id: 'communication', label: '커뮤니케이션', icon: '💬' },
  ]

  const widgetContent = {
    project: {
      title: '프로젝트',
      items: [
        { dot: 'purple', label: '진행중', text: '캡스톤 디자인 - UI 개발' },
        { dot: 'purple', label: 'D-5', text: '오픈소스 프로젝트 PR 제출' },
        { dot: 'purple', label: '예정', text: '해커톤 팀 빌딩' },
      ],
    },
    career: {
      title: '취업',
      items: [
        { dot: 'blue', label: '마감임박', text: '네이버 인턴십 지원 (~3/28)' },
        { dot: 'blue', label: '준비중', text: '코딩테스트 대비 (백준 골드)' },
        { dot: 'blue', label: '예정', text: '모의 면접 스터디 (4/2)' },
      ],
    },
    communication: {
      title: '커뮤니케이션',
      items: [
        { dot: 'green', label: '읽지않음', text: '팀 프로젝트 슬랙 메시지 3건' },
        { dot: 'green', label: '오늘', text: '교수님 면담 예약 확인' },
        { dot: 'green', label: '알림', text: '학과 공지사항 업데이트' },
      ],
    },
  }

  const addWidget = (id) => {
    if (!widgets.find((w) => w === id)) {
      setWidgets([...widgets, id])
    }
    setShowWidgetPicker(false)
  }

  const removeWidget = (id) => {
    setWidgets(widgets.filter((w) => w !== id))
  }

  const availableOptions = widgetOptions.filter((o) => !widgets.includes(o.id))

  const startEditField = (field) => {
    setFieldDraft(field === 'gpa' ? gpa : credits)
    setEditingField(field)
  }
  const saveField = () => {
    if (editingField === 'gpa') setGpa(fieldDraft)
    else if (editingField === 'credits') setCredits(fieldDraft)
    setEditingField(null)
  }
  const fieldKeyDown = (e) => {
    if (e.key === 'Enter') saveField()
    if (e.key === 'Escape') setEditingField(null)
  }

  const handleGoalSave = () => {
    setWeeklyGoal(goalDraft)
    setIsEditingGoal(false)
  }

  const handleGoalKeyDown = (e) => {
    if (e.key === 'Enter') handleGoalSave()
    if (e.key === 'Escape') setIsEditingGoal(false)
  }

  return (
    <div className="view active dashboard-view">
      <div className="page-header">
        <button className="back-btn" onClick={() => onNavigate('landing')}>← 홈으로</button>
      </div>

      {/* 프로필 헤더 */}
      <section className="profile-header">
        <div className="profile-left">
          <img className="avatar" src={mascot} alt="프로필" />
          <div className="profile-info">
            <h2>한양대학교 / 3학년</h2>
            <p className="dept">데이터사이언스전공</p>
            <div className="badges">
              {editingField === 'gpa' ? (
                <span className="badge">
                  학점 <input className="badge-input" value={fieldDraft} onChange={(e) => setFieldDraft(e.target.value)} onBlur={saveField} onKeyDown={fieldKeyDown} autoFocus /> / 4.5
                </span>
              ) : (
                <span className="badge">
                  학점 {gpa} / 4.5
                  <button className="badge-edit-btn" onClick={() => startEditField('gpa')} aria-label="학점 편집"><EditIcon /></button>
                </span>
              )}
              {editingField === 'credits' ? (
                <span className="badge">
                  이수학점 <input className="badge-input" value={fieldDraft} onChange={(e) => setFieldDraft(e.target.value)} onBlur={saveField} onKeyDown={fieldKeyDown} autoFocus /> / 130
                </span>
              ) : (
                <span className="badge">
                  이수학점 {credits} / 130
                  <button className="badge-edit-btn" onClick={() => startEditField('credits')} aria-label="이수학점 편집"><EditIcon /></button>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="weekly-pill">
          <div>
            <p className="pill-label-top">This week</p>
            <p className="pill-label">목표</p>
            {isEditingGoal ? (
              <input
                className="goal-input"
                value={goalDraft}
                onChange={(e) => setGoalDraft(e.target.value)}
                onBlur={handleGoalSave}
                onKeyDown={handleGoalKeyDown}
                autoFocus
              />
            ) : (
              <p className="goal-text">
                {weeklyGoal}
                <button
                  className="goal-edit-btn"
                  onClick={() => { setGoalDraft(weeklyGoal); setIsEditingGoal(true) }}
                  aria-label="이번 주 목표 편집"
                >
                  <EditIcon />
                </button>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 요약 카드 */}
      <section className="summary-cards">
        <div className="sum-card" data-nav="schedule" onClick={() => onNavigate('schedule')}>
          <h3>중요 일정</h3>
          <ul className="sum-list">
            <li><span className="dot purple" /><span className="sum-date">오늘</span>데이터베이스 팀 미팅</li>
            <li><span className="dot purple" /><span className="sum-date">3/23</span>알고리즘 과제 제출</li>
            <li><span className="dot purple" /><span className="sum-date">3/25</span>운영체제 중간고사</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
        <div className="sum-card" data-nav="academic" onClick={() => onNavigate('academic')}>
          <h3>학업 정보</h3>
          <ul className="sum-list">
            <li><span className="dot blue" /><span className="sum-date">진행중</span>머신러닝 프로젝트 (60%)</li>
            <li><span className="dot blue" /><span className="sum-date">시험</span>운영체제 (4일 남음)</li>
            <li><span className="dot blue" /><span className="sum-date">학습</span>데이터베이스 Ch.7-8</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>
        <div className="sum-card" data-nav="admin" onClick={() => onNavigate('admin')}>
          <h3>중요 행정 정보</h3>
          <ul className="sum-list">
            <li><span className="dot green" /><span className="sum-date">수강신청</span>2차 수강신청 3/28</li>
            <li><span className="dot green" /><span className="sum-date">장학금</span>신청 마감 3/30</li>
            <li><span className="dot green" /><span className="sum-date">공모전</span>AI 해커톤 참가 추천</li>
          </ul>
          <span className="sum-arrow">→</span>
        </div>

        {/* 추가된 위젯 카드들 */}
        {widgets.map((wId) => {
          const data = widgetContent[wId]
          return (
            <div className="sum-card widget-card" key={wId} onClick={() => onNavigate(wId)}>
              <button className="widget-remove-btn" onClick={(e) => { e.stopPropagation(); removeWidget(wId) }} aria-label="위젯 제거">✕</button>
              <h3>{data.title}</h3>
              <ul className="sum-list">
                {data.items.map((item, i) => (
                  <li key={i}><span className={`dot ${item.dot}`} /><span className="sum-date">{item.label}</span>{item.text}</li>
                ))}
              </ul>
              <span className="sum-arrow">→</span>
            </div>
          )
        })}

        {/* 위젯 추가 카드 */}
        {availableOptions.length > 0 && (
          <div className={`sum-card widget-add-card ${showWidgetPicker ? 'picker-open' : ''}`} onClick={() => setShowWidgetPicker(!showWidgetPicker)}>
            {!showWidgetPicker ? (
              <div className="widget-add-placeholder">
                <span className="widget-add-icon">+</span>
                <p>위젯 추가</p>
              </div>
            ) : (
              <div className="widget-picker">
                <h3>위젯 선택</h3>
                <div className="widget-options">
                  {availableOptions.map((opt) => (
                    <button
                      key={opt.id}
                      className="widget-option-btn"
                      onClick={(e) => { e.stopPropagation(); addWidget(opt.id) }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
