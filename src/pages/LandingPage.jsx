import { useState } from 'react'
import './LandingPage.css'
import BriefingSlider from '../components/BriefingSlider'
import ChatBar from '../components/ChatBar'
import FeaturePopup from '../components/FeaturePopup'
import mascotImg from '../assets/mascot.png'

const briefings = [
  { time: '오전 브리핑 · 09:00', msg: '오늘 오후 2시 데이터베이스 팀 미팅이 있어요. 발표자료 준비 잊지 마세요.' },
  { time: '점심 브리핑 · 12:00', msg: '3/23 알고리즘 과제 마감까지 이틀 남았어요. 진행률을 확인해보세요.' },
  { time: '저녁 브리핑 · 18:00', msg: '운영체제 중간고사 D-4. 오늘 Ch.7 프로세스 동기화 복습을 추천해요.' },
]

const styles = {
  page: {
    minHeight: '100vh',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  topbar: {
    width: '100%',
    height: 48,
    background: '#1B3A5C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 16px',
    flexShrink: 0,
  },
  topbarRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  langToggle: {
    display: 'flex',
    gap: 2,
    background: 'rgba(255,255,255,0.15)',
    borderRadius: 6,
    padding: 2,
  },
  langBtn: {
    padding: '4px 10px',
    border: 'none',
    borderRadius: 4,
    fontSize: '0.72rem',
    fontWeight: 600,
    cursor: 'pointer',
    background: 'transparent',
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
  langBtnActive: {
    background: '#fff',
    color: '#1B3A5C',
  },
  hamburger: {
    width: 36,
    height: 36,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    padding: 6,
  },
  hamburgerLine: {
    display: 'block',
    width: 22,
    height: 2.5,
    background: '#fff',
    borderRadius: 2,
  },
  menuOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 100,
    background: 'rgba(0,0,0,0.2)',
  },
  menu: {
    position: 'absolute',
    top: 48,
    right: 12,
    background: '#fff',
    borderRadius: 10,
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    border: '1px solid #e8e8ee',
    minWidth: 160,
    overflow: 'hidden',
  },
  menuBtn: {
    display: 'block',
    width: '100%',
    padding: '12px 18px',
    border: 'none',
    background: 'none',
    textAlign: 'left',
    fontSize: '0.88rem',
    fontWeight: 500,
    color: '#1a1a2e',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 22,
    width: '100%',
    maxWidth: 420,
    padding: '36px 20px 40px',
    flex: 1,
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },
  mascot: {
    width: 130,
    height: 'auto',
    animation: 'mascotFloat 3s ease-in-out infinite',
  },
  title: {
    fontSize: '2.6rem',
    fontWeight: 900,
    color: '#1B3A5C',
    letterSpacing: -1,
    lineHeight: 1,
    marginTop: 4,
  },
  subtitle: {
    fontSize: '0.82rem',
    color: '#6b7280',
    marginTop: 4,
    fontWeight: 700,
  },
  actions: {
    display: 'flex',
    gap: 14,
    marginTop: 4,
  },
  actionBtn: {
    padding: '10px 36px',
    borderRadius: 24,
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    border: '1.5px solid #1B3A5C',
    background: '#fff',
    color: '#1B3A5C',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
  actionBtnActive: {
    background: '#1B3A5C',
    color: '#fff',
  },
  briefingWrap: {
    width: '100%',
    marginTop: 8,
  },
  chatWrap: {
    width: '100%',
  },
  dashBtn: {
    background: 'none',
    border: 'none',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#1a1a2e',
    cursor: 'pointer',
    textDecoration: 'underline',
    textUnderlineOffset: 3,
    fontFamily: 'inherit',
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    marginTop: 4,
  },
}

export default function LandingPage({ onNavigate }) {
  const [lang, setLang] = useState('kor')
  const [menuOpen, setMenuOpen] = useState(false)
  const [pressedBtn, setPressedBtn] = useState(null)
  const [featureOpen, setFeatureOpen] = useState(false)

  const t = lang === 'kor'
    ? { subtitle: '24/7 당신을 위한 대학교 개인 AI 비서', slack: 'Slack', add: '기능 추가', chat: '비서에게 궁금한 점을 질문하세요' }
    : { subtitle: '24/7 Personal AI assistant for University', slack: 'Slack', add: 'Add Feature', chat: 'Ask your assistant a question' }

  return (
    <div style={styles.page}>
      {/* 상단 네이비 바 */}
      <div style={styles.topbar}>
        <div style={styles.topbarRight}>
          <div style={styles.langToggle}>
            <button
              style={{ ...styles.langBtn, ...(lang === 'eng' ? styles.langBtnActive : {}) }}
              onClick={() => setLang('eng')}
            >Eng</button>
            <button
              style={{ ...styles.langBtn, ...(lang === 'kor' ? styles.langBtnActive : {}) }}
              onClick={() => setLang('kor')}
            >Kor</button>
          </div>
          <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* 드롭다운 메뉴 */}
      {menuOpen && (
        <div style={styles.menuOverlay} onClick={() => setMenuOpen(false)}>
          <div style={styles.menu} onClick={e => e.stopPropagation()}>
            <button style={styles.menuBtn} onClick={() => { onNavigate('dashboard'); setMenuOpen(false) }}>
              Dashboard
            </button>
            <button style={{ ...styles.menuBtn, borderTop: '1px solid #e8e8ee' }} onClick={() => { onNavigate('settings'); setMenuOpen(false) }}>
              {lang === 'kor' ? '설정' : 'Settings'}
            </button>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      <div style={styles.content}>
        {/* 마스코트 + 브랜딩 */}
        <div style={styles.brand}>
          <img src={mascotImg} alt="HY-LinkU 마스코트" style={styles.mascot} />
          <h1 style={styles.title}>HY-LinkU</h1>
          <p style={styles.subtitle}>{t.subtitle}</p>
        </div>

        {/* 액션 버튼 */}
        <div style={styles.actions}>
          <button
            style={{ ...styles.actionBtn, ...(pressedBtn === 'slack' ? styles.actionBtnActive : {}) }}
            onMouseDown={() => setPressedBtn('slack')}
            onMouseUp={() => setPressedBtn(null)}
            onMouseLeave={() => setPressedBtn(null)}
          >{t.slack}</button>
          <button
            style={{ ...styles.actionBtn, ...(pressedBtn === 'add' ? styles.actionBtnActive : {}) }}
            onMouseDown={() => setPressedBtn('add')}
            onMouseUp={() => setPressedBtn(null)}
            onMouseLeave={() => setPressedBtn(null)}
            onClick={() => setFeatureOpen(true)}
          >{t.add}</button>
        </div>

        {/* 브리핑 슬라이더 */}
        <div style={styles.briefingWrap}>
          <BriefingSlider briefings={briefings} />
        </div>

        {/* 챗바 */}
        <div style={styles.chatWrap}>
          <ChatBar placeholder={t.chat} />
        </div>

        {/* 대시보드 링크 */}
        <button style={styles.dashBtn} onClick={() => onNavigate('dashboard')}>
          Dashboard→
        </button>
      </div>
      {/* 기능 추가 팝업 */}
      {featureOpen && <FeaturePopup onClose={() => setFeatureOpen(false)} />}
    </div>
  )
}
