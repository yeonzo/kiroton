import { useState, useEffect } from 'react'
import './ChatBar.css'

const AI_RESPONSES = {
  default: '안녕하세요! 무엇이든 도와드릴게요. 일정, 학업, 행정 관련 질문을 해주세요.',
  일정: '이번 주 주요 일정은 다음과 같습니다:\n• 3/23 알고리즘 과제 제출\n• 3/25 운영체제 중간고사\n• 3/28 2차 수강신청',
  과제: '현재 진행 중인 과제:\n• 머신러닝 프로젝트 (60% 완료)\n• 알고리즘 과제 (3/23 마감)\n• 데이터베이스 Ch.7-8 학습',
  시험: '다가오는 시험:\n• 운영체제 중간고사 (3/25, 4일 남음)\n• 중간고사 기간: 4/14 ~ 4/18\n\n운영체제 시험 준비를 우선적으로 추천드립니다.',
  장학금: '신청 가능한 장학금:\n• 교내 성적 장학금 (3/30 마감)\n• 국가근로장학금 (4/5 마감)\n\n성적 장학금은 GPA 3.5 이상이 필요합니다.',
  수강: '2차 수강신청이 3/28 오전 10:00에 시작됩니다. 희망 과목을 미리 확인해두세요.\n수강 정정 기간은 4/1 ~ 4/3입니다.',
  학점: '현재 이수학점: 90/130\n남은 학점: 40학점\n\n졸업까지 약 3학기 분량이 남아있습니다. 계획적으로 수강신청하세요.',
}

function getResponse(question) {
  const q = question.toLowerCase()
  for (const [key, val] of Object.entries(AI_RESPONSES)) {
    if (key !== 'default' && q.includes(key)) return val
  }
  return AI_RESPONSES.default
}

export default function ChatBar({ placeholder = '비서에게 궁금한 점을 질문하세요', onSend }) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [question, setQuestion] = useState('')

  const handleSend = () => {
    if (!text.trim() || loading) return
    const q = text.trim()
    onSend?.(q)
    setQuestion(q)
    setText('')
    setAnswer(null)
    setLoading(true)
  }

  useEffect(() => {
    if (!loading) return
    const timer = setTimeout(() => {
      setAnswer(getResponse(question))
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [loading, question])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const closeAnswer = () => {
    setAnswer(null)
    setQuestion('')
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-bar">
        <div className="chat-bar-icon"><strong>AI비서</strong></div>
        <input
          className="chat-bar-input"
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="chat-bar-send" onClick={handleSend} disabled={!text.trim() || loading}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      {loading && (
        <div className="chat-response chat-response--loading">
          <div className="chat-response-dots">
            <span /><span /><span />
          </div>
          <p>AI 비서가 당신을 위한 답변을 생성하는 중입니다...</p>
        </div>
      )}

      {answer && (
        <div className="chat-response">
          <button className="chat-response-close" onClick={closeAnswer} aria-label="답변 닫기">✕</button>
          <p className="chat-response-q">Q. {question}</p>
          <p className="chat-response-a">{answer}</p>
        </div>
      )}
    </div>
  )
}
