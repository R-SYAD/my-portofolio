import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import DetailProjects from './pages/Projects/DetailProjects'
import Experience from './pages/Experience/Experience'
import Certification from './pages/Certifications/Certification'
import Contact from './pages/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <Router>
  <div className="min-h-screen w-full bg-white text-gray-900 antialiased transition-colors duration-200 dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<DetailProjects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certification />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
