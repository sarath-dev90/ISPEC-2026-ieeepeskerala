import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CursorTrail from './components/CursorTrail'
import HomePage from './pages/HomePage'
import './index.css'

// ── Lazy-load all non-home pages so they only download when visited ──
const AboutPage = lazy(() => import('./pages/AboutPage'))
const CommitteePage = lazy(() => import('./pages/CommitteePage'))
const CallForPapersPage = lazy(() => import('./pages/CallForPapersPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PresentationGuidelinePage = lazy(() => import('./pages/PresentationGuidelinePage'))
const SponsorshipPage = lazy(() => import('./pages/SponsorshipPage'))
const StudentSupportPage = lazy(() => import('./pages/StudentSupportPage'))
const TravelPage = lazy(() => import('./pages/TravelPage'))
const VenuePage = lazy(() => import('./pages/VenuePage'))
const SpecialSessionPage = lazy(() => import('./pages/SpecialSessionPage'))
const PaperSubmissionPage = lazy(() => import('./pages/PaperSubmissionPage'))
const ImportantDatesPage = lazy(() => import('./pages/ImportantDatesPage'))
const CMTAcknowledgmentPage = lazy(() => import('./pages/CMTAcknowledgmentPage'))

// Simple fallback shown while a page chunk loads
const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00629b', fontSize: '1.1rem' }}>
    <i className="fas fa-circle-notch fa-spin" style={{ marginRight: '10px' }}></i> Loading…
  </div>
)

function App() {
  return (
    <Router>
      <CursorTrail />
      <ScrollToTop />
      <div className="app">
        <Routes>
          {/* Home — eager (no lazy needed, it's the landing page) */}
          <Route path="/" element={
            <>
              <Navbar />
              <main><HomePage /></main>
              <Footer />
            </>
          } />

          {/* All other pages — lazy loaded */}
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
          <Route path="/committee" element={<Suspense fallback={<PageLoader />}><CommitteePage /></Suspense>} />
          <Route path="/call-for-papers" element={<Suspense fallback={<PageLoader />}><CallForPapersPage /></Suspense>} />
          <Route path="/special-sessions" element={<Suspense fallback={<PageLoader />}><SpecialSessionPage /></Suspense>} />
          <Route path="/submission" element={<Suspense fallback={<PageLoader />}><PaperSubmissionPage /></Suspense>} />
          <Route path="/registration" element={<Suspense fallback={<PageLoader />}><RegistrationPage /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
          <Route path="/presentation-guideline" element={<Suspense fallback={<PageLoader />}><PresentationGuidelinePage /></Suspense>} />
          <Route path="/important-dates" element={<Suspense fallback={<PageLoader />}><ImportantDatesPage /></Suspense>} />
          <Route path="/sponsorship" element={<Suspense fallback={<PageLoader />}><SponsorshipPage /></Suspense>} />
          <Route path="/student-support" element={<Suspense fallback={<PageLoader />}><StudentSupportPage /></Suspense>} />
          <Route path="/travel" element={<Suspense fallback={<PageLoader />}><TravelPage /></Suspense>} />
          <Route path="/venue" element={<Suspense fallback={<PageLoader />}><VenuePage /></Suspense>} />
          <Route path="/cmt-acknowledgment" element={<Suspense fallback={<PageLoader />}><CMTAcknowledgmentPage /></Suspense>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App