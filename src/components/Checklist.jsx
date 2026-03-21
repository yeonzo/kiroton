import { useState } from 'react'

const INITIAL = [
  { text: '데이터베이스 발표자료 만들기', done: true },
  { text: '알고리즘 과제 코드 작성', done: true },
  { text: '운영체제 7장 복습', done: false },
  { text: '머신러닝 프로젝트 데이터셋 준비', done: false },
  { text: '수강신청 시간표 짜기', done: false },
]

export default function Checklist() {
  const [items, setItems] = useState(INITIAL)

  const toggle = (idx) => {
    setItems(prev => prev.map((item, i) =>
      i === idx ? { ...item, done: !item.done } : item
    ))
  }

  return (
    <section className="checklist-section">
      <div className="checklist-card">
        <h3>체크리스트</h3>
        <ul className="checklist-ul">
          {items.map((item, i) => (
            <li key={i} className={item.done ? 'done' : ''} onClick={() => toggle(i)}>
              <span className="check-circle" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
