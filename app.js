// ── 뷰 전환 ───────────────────────────────────────
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 랜딩 → 대시보드
document.getElementById('go-dashboard').addEventListener('click', () => showView('dashboard'));

// 요약 카드 클릭
document.querySelectorAll('.sum-card[data-nav]').forEach(card => {
  card.addEventListener('click', () => showView(card.dataset.nav));
});

// 뒤로가기
document.querySelectorAll('[data-back]').forEach(btn => {
  btn.addEventListener('click', () => showView('dashboard'));
});

// ── 브리핑 슬라이더 ───────────────────────────────
let currentSlide = 0;
const slides = document.querySelectorAll('.briefing-slide');
const dots   = document.querySelectorAll('.bdot');

function goSlide(idx) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

dots.forEach(dot => dot.addEventListener('click', () => goSlide(+dot.dataset.idx)));

// 자동 슬라이드 (4초)
setInterval(() => goSlide((currentSlide + 1) % slides.length), 4000);

// ── 캘린더 ────────────────────────────────────────
let currentYear  = 2026;
let currentMonth = 2;

const eventDates = ['2026-03-21','2026-03-22','2026-03-23','2026-03-25','2026-03-28'];

function renderCalendar() {
  const cal   = document.getElementById('calendar');
  const title = document.getElementById('cal-title');
  title.textContent = `${currentYear}년 ${currentMonth + 1}월`;
  cal.innerHTML = '';

  ['일','월','화','수','목','금','토'].forEach(d => {
    const el = document.createElement('div');
    el.className = 'cal-day-label';
    el.textContent = d;
    cal.appendChild(el);
  });

  const firstDay    = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const todayStr    = new Date().toISOString().split('T')[0];

  for (let i = 0; i < firstDay; i++) {
    const el = document.createElement('div');
    el.className = 'cal-num empty';
    cal.appendChild(el);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dow = new Date(dateStr + 'T00:00:00').getDay();
    const el  = document.createElement('div');
    let cls = 'cal-num';
    if (dow === 0) cls += ' sunday';
    if (dow === 6) cls += ' saturday';
    if (dateStr === todayStr) cls += ' today';
    if (eventDates.includes(dateStr)) cls += ' has-event';
    el.className = cls;
    el.textContent = d;
    cal.appendChild(el);
  }
}

document.getElementById('prev-month').addEventListener('click', () => {
  if (--currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderCalendar();
});
document.getElementById('next-month').addEventListener('click', () => {
  if (++currentMonth > 11) { currentMonth = 0; currentYear++; }
  renderCalendar();
});

// ── 다가오는 일정 ──────────────────────────────────
const upcomingData = [
  { date: '3/21 오늘', time: '14:00', title: '데이터베이스 팀 미팅', tag: '팀플',   tagClass: 'blue' },
  { date: '3/22 내일', time: '10:00', title: '알고리즘 수업',        tag: '수업',   tagClass: 'purple' },
  { date: '3/23',      time: '23:59', title: '알고리즘 과제 제출',   tag: '과제',   tagClass: 'gray' },
  { date: '3/25',      time: '10:00', title: '운영체제 중간고사',    tag: '시험',   tagClass: 'red' },
  { date: '3/28',      time: '15:00', title: '동아리 MT',            tag: '활동',   tagClass: 'green' },
];

function renderUpcoming() {
  const el = document.getElementById('upcoming-list');
  el.innerHTML = upcomingData.map(item => `
    <div class="up-item">
      <div>
        <p class="up-date">${item.date} ${item.time}</p>
        <p class="up-title">${item.title}</p>
      </div>
      <span class="tag ${item.tagClass}">${item.tag}</span>
    </div>`).join('');
}

// ── 체크리스트 ────────────────────────────────────
const checklistData = [
  { text: '데이터베이스 발표자료 만들기',      done: true },
  { text: '알고리즘 과제 코드 작성',           done: true },
  { text: '운영체제 7장 복습',                 done: false },
  { text: '머신러닝 프로젝트 데이터셋 준비',   done: false },
  { text: '수강신청 시간표 짜기',              done: false },
];

function renderChecklist() {
  const ul = document.getElementById('checklist');
  ul.innerHTML = '';
  checklistData.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = item.done ? 'done' : '';
    li.innerHTML = `<span class="check-circle"></span><span>${item.text}</span>`;
    li.addEventListener('click', () => {
      checklistData[i].done = !checklistData[i].done;
      renderChecklist();
    });
    ul.appendChild(li);
  });
}

// ── 초기화 ────────────────────────────────────────
renderCalendar();
renderUpcoming();
renderChecklist();
