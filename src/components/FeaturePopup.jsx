import { useState } from 'react'

const FEATURES = [
  { id: 'notion', label: '노션' },
  { id: 'email', label: '이메일 전송' },
  { id: 'calendar', label: '캘린더 작성' },
]

const s = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 200,
    background: 'rgba(0,0,0,0.35)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  modal: {
    background: '#fff', borderRadius: 16, width: '90%', maxWidth: 380,
    padding: '28px 24px 22px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    border: '1px solid #e8e8ee',
  },
  title: {
    fontSize: '1.1rem', fontWeight: 700, color: '#1B3A5C', marginBottom: 20,
  },
  sectionLabel: {
    fontSize: '0.78rem', fontWeight: 600, color: '#6b7280', marginBottom: 10,
  },
  toggleRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '10px 0', borderBottom: '1px solid #f0f0f5',
  },
  toggleLabel: {
    fontSize: '0.9rem', fontWeight: 500, color: '#1a1a2e',
  },
  toggle: {
    width: 42, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
    position: 'relative', transition: 'background 0.2s', padding: 0, flexShrink: 0,
  },
  toggleKnob: {
    width: 18, height: 18, borderRadius: '50%', background: '#fff',
    position: 'absolute', top: 3, transition: 'left 0.2s',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  },
  addedSection: {
    marginTop: 18,
  },
  pillWrap: {
    display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8,
  },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '6px 14px', borderRadius: 20,
    background: '#e8edf3', color: '#1B3A5C',
    fontSize: '0.82rem', fontWeight: 600,
  },
  pillX: {
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: '0.72rem', color: '#6b7280', padding: 0, lineHeight: 1,
    fontFamily: 'inherit', fontWeight: 700,
  },
  doneBtn: {
    marginTop: 22, width: '100%', padding: '11px 0', borderRadius: 10,
    background: '#1B3A5C', color: '#fff', border: 'none',
    fontSize: '0.92rem', fontWeight: 600, cursor: 'pointer',
    fontFamily: 'inherit', transition: 'opacity 0.15s',
  },
  empty: {
    fontSize: '0.8rem', color: '#b0b0b0', marginTop: 8,
  },
}

export default function FeaturePopup({ onClose }) {
  const [selected, setSelected] = useState(new Set())

  const toggle = (id) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const remove = (id) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const added = FEATURES.filter(f => selected.has(f.id))

  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={e => e.stopPropagation()}>
        <p style={s.title}>기능 추가</p>

        {FEATURES.map(f => (
          <div key={f.id} style={s.toggleRow}>
            <span style={s.toggleLabel}>{f.label}</span>
            <button
              style={{ ...s.toggle, background: selected.has(f.id) ? '#1B3A5C' : '#d1d5db' }}
              onClick={() => toggle(f.id)}
              aria-label={`${f.label} 토글`}
            >
              <span style={{ ...s.toggleKnob, left: selected.has(f.id) ? 21 : 3 }} />
            </button>
          </div>
        ))}

        <div style={s.addedSection}>
          <p style={s.sectionLabel}>추가된 기능</p>
          {added.length === 0
            ? <p style={s.empty}>선택된 기능이 없습니다</p>
            : <div style={s.pillWrap}>
                {added.map(f => (
                  <span key={f.id} style={s.pill}>
                    {f.label}
                    <button style={s.pillX} onClick={() => remove(f.id)} aria-label={`${f.label} 제거`}>✕</button>
                  </span>
                ))}
              </div>
          }
        </div>

        <button style={s.doneBtn} onClick={onClose}>완료</button>
      </div>
    </div>
  )
}
