import { useState, useEffect } from 'react'
import BriefingSlider from '../components/BriefingSlider'

const briefings = [
  { time: '오전 브리핑 · 09:00', msg: '오늘 오후 2시 데이터베이스 팀 미팅이 있어요. 발표자료 준비 잊지 마세요.' },
  { time: '점심 브리핑 · 12:00', msg: '3/23 알고리즘 과제 마감까지 이틀 남았어요. 진행률을 확인해보세요.' },
  { time: '저녁 브리핑 · 18:00', msg: '운영체제 중간고사 D-4. 오늘 Ch.7 프로세스 동기화 복습을 추천해요.' },
]

export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing-view">
      <div className="landing-wrap">
        <div className="landing-avatar">
          <div className="landing-avatar-img">😊</div>
          <p className="landing-name">김지수</p>
          <p className="landing-sub">서울대학교 컴퓨터공학과 3학년</p>
        </div>

        <div className="landing-actions">
          <button className="landing-btn slack-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
              <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
              <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
              <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
              <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
              <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
              <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
            </svg>
            Slack 연결
          </button>
          <button className="landing-btn add-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            기능 추가
          </button>
        </div>

        <BriefingSlider briefings={briefings} />

        <button className="dashboard-btn" onClick={() => onNavigate('dashboard')}>
          Dashboard <span className="dash-arrow">→</span>
        </button>
      </div>
    </div>
  )
}
