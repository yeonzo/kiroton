import { useState } from 'react'

export default function Checklist() {
  const [items, setItems] = useState([])
  const [adding, setAdding] = useState(false)
  const [newText, setNewText] = useState('')

  const toggle = (idx) => {
    setItems(prev => prev.map((item, i) =>
      i === idx ? { ...item, done: !item.done } : item
    ))
  }

  const remove = (idx) => {
    setItems(prev => prev.filter((_, i) => i !== idx))
  }

  const addItem = () => {
    if (!newText.trim()) return
    setItems(prev => [...prev, { text: newText.trim(), done: false }])
    setNewText('')
    setAdding(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addItem()
    if (e.key === 'Escape') { setAdding(false); setNewText('') }
  }

  return (
    <section className="checklist-section">
      <div className="checklist-card">
        <div className="checklist-header">
          <h3>체크리스트</h3>
          <button className="checklist-add-btn" onClick={() => setAdding(true)}>+ 추가</button>
        </div>
        <hr className="checklist-divider" />
        {adding && (
          <div className="checklist-input-row">
            <input
              className="checklist-input"
              type="text"
              placeholder="할 일을 입력하세요"
              value={newText}
              onChange={e => setNewText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button className="checklist-confirm-btn" onClick={addItem}>확인</button>
          </div>
        )}
        {items.length === 0
          ? <p className="checklist-empty">등록된 체크리스트가 없습니다</p>
          : <ul className="checklist-ul">
              {items.map((item, i) => (
                <li key={i} className={item.done ? 'done' : ''}>
                  <span className="check-circle" onClick={() => toggle(i)} />
                  <span onClick={() => toggle(i)}>{item.text}</span>
                  <button className="checklist-delete" onClick={() => remove(i)} aria-label="삭제">✕</button>
                </li>
              ))}
            </ul>
        }
      </div>
    </section>
  )
}
