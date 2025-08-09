import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PreviewForm from './components/PreviewForm.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<PreviewForm />} />
    </Routes>
  )
}

export default App
