import { useState } from 'react'
import './ProjectPage.css'
import ChatBar from '../components/ChatBar'

const defaultProjects = [
  {
    id: 1,
    name: '캡스톤 디자인 - UI 개발',
    status: '진행중',
    statusCls: 'active',
    deadline: '2026-04-15',
    members: '김민수, 이지은, 박서준',
    driveUrl: 'https://drive.google.com/drive/folders/your-capstone-folder-id',
    tasks: [
      { text: 'Figma 디자인 완성', done: true },
      { text: '프론트엔드 컴포넌트 구현', done: true },
      { text: 'API 연동', done: false },
      { text: '테스트 및 배포', done: false },
    ],
  },
  {
    id: 2,
    name: '오픈소스 프로젝트 PR 제출',
    status: 'D-5',
    statusCls: 'urgent',
    deadline: '2026-03-27',
    members: '나, 정하늘',
    driveUrl: 'https://drive.google.com/drive/folders/your-opensource-folder-id',
    tasks: [
      { text: '이슈 분석', done: true },
      { text: '코드 수정', done: false },
      { text: 'PR 작성 및 제출', done: false },
    ],
  },
  {
    id: 3,
    name: '해커톤 팀 빌딩',
    status: '예정',
    statusCls: 'upcoming',
    deadline: '2026-04-05',
    members: '모집중',
    driveUrl: 'https://drive.google.com/drive/folders/your-hackathon-folder-id',
    tasks: [
      { text: '주제 선정', done: true },
      { text: '팀원 모집', done: false },
      { text: '사전 기획', done: false },
    ],
  },
]

function calcProgress(tasks) {
  if (!tasks.length) return 0
  return Math.round((tasks.filter((t) => t.done).length / tasks.length) * 100)
}

export default function ProjectPage({ onBack }) {
  const [projects, setProjects] = useState(defaultProjects)

  const toggleTask = (projectId, taskIdx) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p
        const newTasks = p.tasks.map((t, i) => (i === taskIdx ? { ...t, done: !t.done } : t))
        return { ...p, tasks: newTasks }
      })
    )
  }

  return (
    <div className="view active project-view">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h2>프로젝트</h2>
      </div>

      <ChatBar placeholder="프로젝트 관련 질문을 해보세요" />

      <section className="project-section">
        {projects.map((project) => {
          const progress = calcProgress(project.tasks)
          return (
            <div className="project-card" key={project.id}>
              <div className="project-card-top">
                <h3 className="project-card-title">{project.name}</h3>
                <span className={`project-tag tag-${project.statusCls}`}>{project.status}</span>
              </div>

              <div className="project-meta">
                <span>마감: {project.deadline}</span>
                <span>{project.members}</span>
              </div>

              <div className="project-progress">
                <div className="project-progress-bar">
                  <div className="project-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="project-progress-text">{progress}%</span>
              </div>

              <div className="project-divider" />

              <ul className="project-task-list">
                {project.tasks.map((task, i) => (
                  <li
                    key={i}
                    className={`project-task-item ${task.done ? 'done' : ''}`}
                    onClick={() => toggleTask(project.id, i)}
                  >
                    <span className="project-task-check">{task.done ? '✓' : '○'}</span>
                    {task.text}
                  </li>
                ))}
              </ul>

              <a
                className="drive-link-btn"
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Google Drive 폴더 열기
              </a>
            </div>
          )
        })}
      </section>
    </div>
  )
}
