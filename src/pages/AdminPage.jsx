import { useState } from 'react'
import './AdminPage.css'
import ChatBar from '../components/ChatBar'
import AdminDetailPopup from '../components/AdminDetailPopup'

export default function AdminPage({ onBack }) {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="view active admin-view">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>행정 정보</h2>
      </div>

      <ChatBar placeholder="비서에게 행정 관련 궁금한 점을 물어보세요" />

      <section className="admin-section">
        <div className="admin-card">
          <h3 className="admin-card-title">공모전 · 대외활동 / 장학금</h3>
          <ul className="admin-list">
            <li onClick={() => setSelectedItem('AI 해커톤 2026')}>
              <span className="admin-date">4/15</span>
              <span className="admin-bar" />
              <div>
                <strong>AI 해커톤 2026</strong>
                <p>4/15-4/16 · 상금 500만원</p>
              </div>
            </li>
            <li onClick={() => setSelectedItem('대학생 창업 경진대회')}>
              <span className="admin-date">5/1</span>
              <span className="admin-bar" />
              <div>
                <strong>대학생 창업 경진대회</strong>
                <p>5/1 마감 · 최대 1000만원</p>
              </div>
            </li>
            <li onClick={() => setSelectedItem('오픈소스 컨트리뷰톤')}>
              <span className="admin-date">6/30</span>
              <span className="admin-bar" />
              <div>
                <strong>오픈소스 컨트리뷰톤</strong>
                <p>3/30-6/30 · 수료증</p>
              </div>
            </li>
            <li onClick={() => setSelectedItem('교내 성적 장학금')}>
              <span className="admin-date">3/30</span>
              <span className="admin-bar" />
              <div>
                <strong>교내 성적 장학금</strong>
                <p>신청 마감 3/30</p>
              </div>
            </li>
            <li onClick={() => setSelectedItem('국가근로장학금')}>
              <span className="admin-date">4/5</span>
              <span className="admin-bar" />
              <div>
                <strong>국가근로장학금</strong>
                <p>4/5 마감 · 월 40시간</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="admin-card">
          <h3 className="admin-card-title">학사 일정</h3>
          <ul className="admin-list admin-list--static">
            <li>
              <span className="admin-date">3/28</span>
              <span className="admin-bar" />
              <div>
                <strong>2차 수강신청</strong>
                <p>3/28 오전 10:00 시작</p>
              </div>
            </li>
            <li>
              <span className="admin-date">4/1</span>
              <span className="admin-bar" />
              <div>
                <strong>수강 정정 기간</strong>
                <p>4/1 ~ 4/3</p>
              </div>
            </li>
            <li>
              <span className="admin-date">4/14</span>
              <span className="admin-bar" />
              <div>
                <strong>중간고사 기간</strong>
                <p>4/14 ~ 4/18</p>
              </div>
            </li>
            <li>
              <span className="admin-date">4/7</span>
              <span className="admin-bar" />
              <div>
                <strong>수업일수 1/4선</strong>
                <p>4/7 · 환불 마감</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {selectedItem && (
        <AdminDetailPopup
          itemName={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  )
}
