import { useState, useMemo } from 'react'
import './AcademicPage.css'
import ChatBar from '../components/ChatBar'

const motivations = [
  '오늘도 잘 하고 있어요. 꾸준함이 실력이 됩니다',
  '작은 진전도 큰 성장의 시작이에요. 파이팅!',
  '지금 이 순간의 노력이 미래의 나를 만들어요',
  '완벽하지 않아도 괜찮아요. 하고 있다는 게 중요해요',
  '오늘 하루도 성장하는 중이에요. 멋져요!',
  '힘들 때일수록 한 걸음만 더. 거의 다 왔어요',
  '어제보다 나은 오늘이면 충분해요. 잘하고 있어요',
  '쉬어가도 괜찮아요. 다시 시작하면 되니까요',
  '목표를 향해 달려가는 지금 이 순간이 빛나요',
  '포기하지 않는 것만으로도 이미 대단해요',
]

function getTodayMotivation() {
  const today = new Date()
  const dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % motivations.length
  return motivations[dayIndex]
}

const examItems = [
  { name: '운영체제', tag: '진행중', tagCls: 'blue', desc: 'Ch.7-8 프로세스 동기화', date: '시험일 3/25', notionUrl: 'https://notion.so/your-workspace/운영체제-정리본' },
  { name: '데이터베이스', tag: '예정', tagCls: 'gray', desc: 'Ch.9-10 트랜잭션', date: '시험일 4/1', notionUrl: 'https://notion.so/your-workspace/데이터베이스-정리본' },
]

const taskItems = [
  { name: '머신러닝 프로젝트', sub: '인공지능 · 마감 3/28', notionUrl: 'https://notion.so/your-workspace/머신러닝-프로젝트' },
  { name: '데이터베이스 설계', sub: '데이터베이스 · 마감 3/24', notionUrl: 'https://notion.so/your-workspace/데이터베이스-설계' },
  { name: '알고리즘 구현', sub: '알고리즘 · 마감 3/23', notionUrl: 'https://notion.so/your-workspace/알고리즘-구현' },
]

const defaultGrades = [
  { name: '운영체제', grade: '3.8' },
  { name: '데이터베이스', grade: '4.0' },
  { name: '알고리즘', grade: '3.5' },
  { name: '머신러닝', grade: '4.2' },
]

function calcPct(grade) {
  const g = parseFloat(grade) || 0
  return Math.round((g / 4.5) * 100)
}

function calcAvg(grades) {
  if (grades.length === 0) return '0.0'
  const sum = grades.reduce((s, g) => s + (parseFloat(g.grade) || 0), 0)
  return (sum / grades.length).toFixed(1)
}

const EditIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    <path d="m15 5 4 4"/>
  </svg>
)

export default function AcademicPage({ onBack }) {
  const todayMessage = useMemo(() => getTodayMotivation(), [])
  const [grades, setGrades] = useState(defaultGrades)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(defaultGrades)

  const startEdit = () => {
    setDraft(grades.map(g => ({ ...g })))
    setEditing(true)
  }

  const saveEdit = () => {
    setGrades(draft.filter(g => g.name.trim()))
    setEditing(false)
  }

  const cancelEdit = () => setEditing(false)

  const updateDraft = (i, field, value) => {
    setDraft(prev => prev.map((g, idx) => idx === i ? { ...g, [field]: value } : g))
  }

  const removeDraft = (i) => {
    setDraft(prev => prev.filter((_, idx) => idx !== i))
  }

  const addDraft = () => {
    setDraft(prev => [...prev, { name: '', grade: '' }])
  }

  const avg = calcAvg(grades)

  return (
    <div className="view active">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>학업 정보</h2>
      </div>

      <ChatBar placeholder="학업 관련 질문을 해보세요" />
      <div style={{ height: 14 }} />
      <div className="motivation-banner"><p>{todayMessage}</p></div>

      <section className="summary-cards">
        {/* 학업 성취도 */}
        <div className="card">
          <div className="card-title-row">
            <h3 className="card-title">학업 성취도</h3>
            {!editing && (
              <button className="card-edit-btn" onClick={startEdit} aria-label="학업 성취도 편집">
                <EditIcon />
              </button>
            )}
          </div>
          <div className="grade-content">
            {editing ? (
              <>
                <div className="grade-edit-list">
                  {draft.map((g, i) => (
                    <div key={i} className="grade-edit-row">
                      <input
                        className="grade-edit-input name"
                        value={g.name}
                        onChange={e => updateDraft(i, 'name', e.target.value)}
                        placeholder="과목명"
                      />
                      <input
                        className="grade-edit-input grade"
                        value={g.grade}
                        onChange={e => updateDraft(i, 'grade', e.target.value)}
                        placeholder="학점"
                      />
                      <button className="grade-delete-btn" onClick={() => removeDraft(i)} aria-label="삭제">✕</button>
                    </div>
                  ))}
                </div>
                <button className="grade-add-btn" onClick={addDraft}>+ 과목 추가</button>
                <div className="grade-edit-actions">
                  <button className="grade-save-btn" onClick={saveEdit}>저장</button>
                  <button className="grade-cancel-btn" onClick={cancelEdit}>취소</button>
                </div>
              </>
            ) : (
              <>
                <div className="grade-list">
                  {grades.map(g => (
                    <div key={g.name}>
                      <div className="grade-row"><span>{g.name}</span><span className="gval">{g.grade}</span></div>
                      <div className="progress-bar"><div style={{ width: `${calcPct(g.grade)}%` }} /></div>
                    </div>
                  ))}
                </div>
                <p className="avg-grade">평균 학점 <strong>{avg} / 4.5</strong></p>
              </>
            )}
          </div>
        </div>

        {/* 시험 준비 */}
        <div className="card">
          <h3 className="card-title">시험 준비</h3>
          {examItems.map(ex => (
            <div key={ex.name} className="exam-item">
              <div className="exam-top"><span>{ex.name}</span><span className={`tag ${ex.tagCls}`}>{ex.tag}</span></div>
              <p className="exam-desc">{ex.desc}</p>
              <div className="exam-bottom">
                <p className="exam-date">{ex.date}</p>
                <a className="notion-btn" href={ex.notionUrl} target="_blank" rel="noopener noreferrer">정리본 보기</a>
              </div>
            </div>
          ))}
        </div>

        {/* 진행중 과제 */}
        <div className="card">
          <h3 className="card-title">진행중 과제</h3>
          {taskItems.map(t => (
            <div key={t.name} className="task-item">
              <div className="task-row"><span className="task-name">{t.name}</span></div>
              <div className="task-bottom">
                <p className="task-sub">{t.sub}</p>
                <a className="notion-btn" href={t.notionUrl} target="_blank" rel="noopener noreferrer">문서 보기</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
