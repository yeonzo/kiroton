import { useState } from 'react'
import './ProjectPage.css'

export default function ProjectPage({ onBack }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: '캡스톤 디자인 - UI 개발',
      status: '진행중',
      progress: 60,
      deadline: '2026-04-15',
      members: ['김민수', '이지은', '박서준'],
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
      progress: 40,
      deadline: '2026-03-27',
      members: ['나', '정하늘'],
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
      progress: 10,
      deadline: '2026-04-05',
      members: ['모집중'],
      tasks: [
        { text: '주제 선정', done: true },
        { text: '팀원 모집', done: false },
        { text: '사전 기획', done: false },
      ],
    },
  ])

  const toggleTask = (projectId, taskIdx) => {
    setProjects(projects.map((p) => {
      if (p.id !== projectId) return p
      const newTasks = p.tasks.map((t, i) => i === taskIdx ? { ...t, done: !t.done } : t)
      const doneCount = newTasks.filter((t) => t.done).length
      return { ...p, tasks: newTasks, progress: Math.round((doneCount / newTasks.length) * 100) }
    }))
  }

  return (
    <div className="view active project-view">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 대시보드</button>
        <h1 className="page-title">프로젝트</h1>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-card-header">
              <h3>{project.name}</h3>
              <span className={`project-status status-${project.status === '진행중' ? 'active' : project.status === '예정' ? 'upcoming' : 'urgent'}`}>
                {project.status}
              </span>
            </div>

            <div className="project-progress-section">
              <div className="project-progress-bar">
                <div className="project-progress-fill" style={{ width: `${project.progress}%` }} />
              </div>
              <span className="project-progress-text">{project.progress}%</span>
            </div>

            <div className="project-meta">
              <span className="project-deadline">마감: {project.deadline}</span>
              <span className="project-members">{project.members.join(', ')}</span>
            </div>

            <div className="project-divider" />

            <ul className="project-tasks">
              {project.tasks.map((task, i) => (
                <li key={i} className={task.done ? 'done' : ''} onClick={() => toggleTask(project.id, i)}>
                  <span className="task-check">{task.done ? '✓' : '○'}</span>
                  {task.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
