import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import MarketingLandingPage from './pages/MarketingLandingPage.jsx'
import UploadScreen from './pages/UploadScreen.jsx'
import ProcessingState from './pages/ProcessingState.jsx'
import PartialResults from './pages/PartialResults.jsx'
import FullReveal from './pages/FullReveal.jsx'
import MobileHomepage from './pages/mobile/MobileHomepage.jsx'
import MobileMktLandingPage from './pages/mobile/MobileMktLandingPage.jsx'
import MobileUpload from './pages/mobile/MobileUpload.jsx'
import MobileProcessing from './pages/mobile/MobileProcessing.jsx'
import MobilePartialResults from './pages/mobile/MobilePartialResults.jsx'
import MobileFullReveal from './pages/mobile/MobileFullReveal.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/get-a-free-document-review" element={<MarketingLandingPage />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/processing" element={<ProcessingState />} />
        <Route path="/partial-results" element={<PartialResults />} />
        <Route path="/full-reveal" element={<FullReveal />} />
        <Route path="/mobile-v1" element={<MobileHomepage />} />
        <Route path="/mobile-v1/get-a-free-document-review" element={<MobileMktLandingPage />} />
        <Route path="/mobile-v1/upload" element={<MobileUpload />} />
        <Route path="/mobile-v1/processing" element={<MobileProcessing />} />
        <Route path="/mobile-v1/partial-results" element={<MobilePartialResults />} />
        <Route path="/mobile-v1/full-reveal" element={<MobileFullReveal />} />
      </Routes>
    </BrowserRouter>
  )
}
