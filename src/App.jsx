import { useState } from 'react'
import Stopwatch from './components/Stopwatch'
import Calculator from './components/Calculator'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('stopwatch')

  return (
    <div className="app">
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <header className="app-header">
        <h1>
          <span className="title-icon">🧰</span>
          Toolbox
        </h1>
        <p className="subtitle">Stopwatch & Calculator</p>
      </header>

      <nav className="tab-nav" role="tablist" aria-label="Tool selection">
        <button
          role="tab"
          aria-selected={activeTab === 'stopwatch'}
          className={`tab ${activeTab === 'stopwatch' ? 'active' : ''}`}
          onClick={() => setActiveTab('stopwatch')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
            <path d="M5 3L2 6" />
            <path d="M22 6l-3-3" />
            <path d="M12 2v2" />
          </svg>
          Stopwatch
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'calculator'}
          className={`tab ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="8" y2="10.01" />
            <line x1="12" y1="10" x2="12" y2="10.01" />
            <line x1="16" y1="10" x2="16" y2="10.01" />
            <line x1="8" y1="14" x2="8" y2="14.01" />
            <line x1="12" y1="14" x2="12" y2="14.01" />
            <line x1="16" y1="14" x2="16" y2="14.01" />
            <line x1="8" y1="18" x2="8" y2="18.01" />
            <line x1="12" y1="18" x2="16" y2="18" />
          </svg>
          Calculator
        </button>
      </nav>

      <main className="tab-content" role="tabpanel" key={activeTab}>
        {activeTab === 'stopwatch' ? <Stopwatch /> : <Calculator />}
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
