import { useState, useRef, useCallback, useEffect } from 'react'
import { templates } from './templates'
import './App.css'

const createSlide = () => ({ id: Date.now(), title: '', content: '' })

export default function App() {
  const [slides, setSlides] = useState([createSlide()])
  const [activeIdx, setActiveIdx] = useState(0)
  const [templateId, setTemplateId] = useState('simple-white')
  const [mobileTab, setMobileTab] = useState('preview') // 'edit' | 'preview'
  const [isMobile, setIsMobile] = useState(false)
  const previewRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const template = templates.find(t => t.id === templateId)
  const active = slides[activeIdx] || slides[0]

  const updateSlide = useCallback((field, value) => {
    setSlides(prev => prev.map((s, i) => i === activeIdx ? { ...s, [field]: value } : s))
  }, [activeIdx])

  const addSlide = () => {
    const newSlide = createSlide()
    setSlides(prev => [...prev, newSlide])
    setActiveIdx(slides.length)
  }

  const deleteSlide = (idx) => {
    if (slides.length <= 1) return
    setSlides(prev => prev.filter((_, i) => i !== idx))
    setActiveIdx(prev => prev >= idx ? Math.max(0, prev - 1) : prev)
  }

  const exportHTML = () => {
    const allSlides = slides.map(s => `
      <div style="width:960px;height:540px;margin:40px auto;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12);">
        ${template.render(s)}
      </div>`).join('')
    const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>슬라이드</title><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet"><style>body{background:#f0f2f5;padding:40px 0;}</style></head><body>${allSlides}</body></html>`
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'slides.html'; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="logo">📊</span>
          <h1 className="header-title">슬라이드 메이커</h1>
        </div>
        <button className="btn-export" onClick={exportHTML}>
          💾 HTML 다운로드
        </button>
      </header>

      {/* Mobile Tab Bar */}
      {isMobile && (
        <div className="mobile-tabs">
          <button className={`mobile-tab ${mobileTab === 'edit' ? 'active' : ''}`} onClick={() => setMobileTab('edit')}>✏️ 편집</button>
          <button className={`mobile-tab ${mobileTab === 'preview' ? 'active' : ''}`} onClick={() => setMobileTab('preview')}>👁️ 미리보기</button>
        </div>
      )}

      <div className="main">
        {/* Left Panel */}
        <aside className={`sidebar ${isMobile && mobileTab !== 'edit' ? 'hidden-mobile' : ''}`}>
          {/* Template Selector */}
          <section className="panel-section">
            <h3 className="section-title">템플릿</h3>
            <div className="template-grid">
              {templates.map(t => (
                <button
                  key={t.id}
                  className={`template-btn ${templateId === t.id ? 'active' : ''}`}
                  onClick={() => setTemplateId(t.id)}
                  title={t.desc}
                >
                  <span className="template-icon">{t.icon}</span>
                  <span className="template-name">{t.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Slide List */}
          <section className="panel-section">
            <div className="section-header">
              <h3 className="section-title">슬라이드</h3>
              <button className="btn-add" onClick={addSlide}>+ 추가</button>
            </div>
            <div className="slide-list">
              {slides.map((s, i) => (
                <div
                  key={s.id}
                  className={`slide-item ${activeIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <span className="slide-num">{i + 1}</span>
                  <span className="slide-preview-title">{s.title || '(제목 없음)'}</span>
                  {slides.length > 1 && (
                    <button className="btn-delete" onClick={(e) => { e.stopPropagation(); deleteSlide(i) }}>✕</button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Editor */}
          <section className="panel-section editor-section">
            <h3 className="section-title">내용 편집</h3>
            <label className="input-label">제목</label>
            <input
              className="input-field"
              type="text"
              placeholder="슬라이드 제목"
              value={active.title}
              onChange={e => updateSlide('title', e.target.value)}
            />
            <label className="input-label">내용</label>
            <textarea
              className="input-textarea"
              placeholder="슬라이드 내용을 입력하세요..."
              value={active.content}
              onChange={e => updateSlide('content', e.target.value)}
              rows={6}
            />
          </section>
        </aside>

        {/* Canvas */}
        <main className={`canvas-area ${isMobile && mobileTab !== 'preview' ? 'hidden-mobile' : ''}`}>
          <div className="canvas-wrapper">
            <div
              ref={previewRef}
              className="slide-canvas"
              dangerouslySetInnerHTML={{ __html: template.render(active) }}
            />
          </div>
          <div className="canvas-footer">
            슬라이드 {activeIdx + 1} / {slides.length} — {template.name}
          </div>
        </main>
      </div>
    </div>
  )
}
