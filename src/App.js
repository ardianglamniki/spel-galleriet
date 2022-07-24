import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Pages
import Home from './pages/Home'

// Components
import Header from './components/Header'

function App() {

  return (
    <>
      <Router>
        <Header title='SpelGalleriet' />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;