export const templates = [
  {
    id: 'simple-white',
    name: '심플 화이트',
    desc: '깔끔한 업무 보고용',
    icon: '📄',
    style: {
      background: '#ffffff',
      color: '#2d2d2d',
      titleColor: '#1a1a2e',
      subtitleColor: '#666',
      accentColor: '#4361ee',
      fontWeight: 600,
    },
    render: (slide) => `
      <div style="width:100%;height:100%;background:#fff;display:flex;flex-direction:column;justify-content:center;padding:60px 80px;font-family:'Noto Sans KR',sans-serif;">
        <div style="width:60px;height:4px;background:#4361ee;border-radius:2px;margin-bottom:24px;"></div>
        <h1 style="font-size:42px;font-weight:700;color:#1a1a2e;margin-bottom:16px;line-height:1.3;">${slide.title || '제목을 입력하세요'}</h1>
        <p style="font-size:20px;color:#666;line-height:1.8;white-space:pre-wrap;">${slide.content || '내용을 입력하세요'}</p>
      </div>`,
  },
  {
    id: 'gradient-blue',
    name: '그라데이션 블루',
    desc: '발표용',
    icon: '🔵',
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      titleColor: '#fff',
      subtitleColor: 'rgba(255,255,255,0.85)',
      accentColor: '#ffd166',
      fontWeight: 600,
    },
    render: (slide) => `
      <div style="width:100%;height:100%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;flex-direction:column;justify-content:center;padding:60px 80px;font-family:'Noto Sans KR',sans-serif;">
        <h1 style="font-size:44px;font-weight:700;color:#fff;margin-bottom:20px;line-height:1.3;text-shadow:0 2px 8px rgba(0,0,0,0.15);">${slide.title || '제목을 입력하세요'}</h1>
        <div style="width:80px;height:4px;background:#ffd166;border-radius:2px;margin-bottom:24px;"></div>
        <p style="font-size:20px;color:rgba(255,255,255,0.9);line-height:1.8;white-space:pre-wrap;">${slide.content || '내용을 입력하세요'}</p>
      </div>`,
  },
  {
    id: 'dark-modern',
    name: '다크 모던',
    desc: '세련된 느낌',
    icon: '🌙',
    style: {
      background: '#1a1a2e',
      color: '#e0e0e0',
      titleColor: '#fff',
      subtitleColor: '#a0a0b0',
      accentColor: '#e94560',
      fontWeight: 600,
    },
    render: (slide) => `
      <div style="width:100%;height:100%;background:#1a1a2e;display:flex;flex-direction:column;justify-content:center;padding:60px 80px;font-family:'Noto Sans KR',sans-serif;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-80px;right:-80px;width:300px;height:300px;background:radial-gradient(circle,rgba(233,69,96,0.15),transparent);border-radius:50%;"></div>
        <h1 style="font-size:44px;font-weight:700;color:#fff;margin-bottom:20px;line-height:1.3;">${slide.title || '제목을 입력하세요'}</h1>
        <div style="width:60px;height:4px;background:#e94560;border-radius:2px;margin-bottom:24px;"></div>
        <p style="font-size:20px;color:#a0a0b0;line-height:1.8;white-space:pre-wrap;">${slide.content || '내용을 입력하세요'}</p>
      </div>`,
  },
  {
    id: 'pastel',
    name: '파스텔',
    desc: '부드러운 브리핑용',
    icon: '🌸',
    style: {
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      color: '#5a3e36',
      titleColor: '#4a2c2a',
      subtitleColor: '#7a5a52',
      accentColor: '#e07a5f',
      fontWeight: 600,
    },
    render: (slide) => `
      <div style="width:100%;height:100%;background:linear-gradient(135deg,#ffecd2 0%,#fcb69f 100%);display:flex;flex-direction:column;justify-content:center;padding:60px 80px;font-family:'Noto Sans KR',sans-serif;">
        <div style="background:rgba(255,255,255,0.5);border-radius:24px;padding:48px;backdrop-filter:blur(10px);">
          <h1 style="font-size:42px;font-weight:700;color:#4a2c2a;margin-bottom:16px;line-height:1.3;">${slide.title || '제목을 입력하세요'}</h1>
          <div style="width:60px;height:4px;background:#e07a5f;border-radius:2px;margin-bottom:24px;"></div>
          <p style="font-size:20px;color:#7a5a52;line-height:1.8;white-space:pre-wrap;">${slide.content || '내용을 입력하세요'}</p>
        </div>
      </div>`,
  },
  {
    id: 'colorful',
    name: '컬러풀',
    desc: '활동 안내용',
    icon: '🎨',
    style: {
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      color: '#2d3436',
      titleColor: '#6c5ce7',
      subtitleColor: '#636e72',
      accentColor: '#fd79a8',
      fontWeight: 700,
    },
    render: (slide) => `
      <div style="width:100%;height:100%;background:linear-gradient(135deg,#a8edea 0%,#fed6e3 100%);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:60px 80px;font-family:'Noto Sans KR',sans-serif;text-align:center;">
        <div style="background:rgba(255,255,255,0.7);border-radius:32px;padding:48px 56px;box-shadow:0 8px 32px rgba(0,0,0,0.08);">
          <h1 style="font-size:44px;font-weight:700;color:#6c5ce7;margin-bottom:20px;line-height:1.3;">${slide.title || '제목을 입력하세요'}</h1>
          <div style="width:80px;height:4px;background:linear-gradient(90deg,#fd79a8,#6c5ce7);border-radius:2px;margin:0 auto 24px;"></div>
          <p style="font-size:20px;color:#636e72;line-height:1.8;white-space:pre-wrap;">${slide.content || '내용을 입력하세요'}</p>
        </div>
      </div>`,
  },
];
