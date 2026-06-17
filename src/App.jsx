import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter basename="/students">
            <Routes>
                <Route path="*" element={<div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>MedLink — coming soon</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App