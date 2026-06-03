import { HashRouter, Routes, Route } from 'react-router-dom'
import TailPhotoPage from './components/TailPhotoPage'
import ViolationFormPage from './components/ViolationFormPage'
import NoticePage from './components/NoticePage'
import InfoCollectionPage from './components/InfoCollectionPage'
import ViolationRecordsPage from './components/ViolationRecordsPage'
import ViolationDetailPage from './components/ViolationDetailPage'

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<TailPhotoPage />} />
          <Route path="/violation-form" element={<ViolationFormPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/info-collection" element={<InfoCollectionPage />} />
          <Route path="/violation-records" element={<ViolationRecordsPage />} />
          <Route path="/violation-detail" element={<ViolationDetailPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
