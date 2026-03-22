import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import SchedulePage from './pages/SchedulePage'
import AcademicPage from './pages/AcademicPage'
import AdminPage from './pages/AdminPage'
import ProjectPage from './pages/ProjectPage'
import CareerPage from './pages/CareerPage'
import CommunicationPage from './pages/CommunicationPage'

export default function App() {
  const [view, setView] = useState('landing')

  const pages = {
    landing: <LandingPage onNavigate={setView} />,
    dashboard: <DashboardPage onNavigate={setView} />,
    schedule: <SchedulePage onBack={() => setView('dashboard')} />,
    academic: <AcademicPage onBack={() => setView('dashboard')} />,
    admin: <AdminPage onBack={() => setView('dashboard')} />,
    project: <ProjectPage onBack={() => setView('dashboard')} />,
    career: <CareerPage onBack={() => setView('dashboard')} />,
    communication: <CommunicationPage onBack={() => setView('dashboard')} />,
  }

  return pages[view] || pages.landing
}
