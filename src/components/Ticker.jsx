import React from 'react';

const ITEMS = [
  'Full-Stack Engineering',
  'AI Systems',
  'Docker & Self-Hosting',
  'Next.js 15',
  'FastAPI',
  'LLM Integration',
  'Agentic Workflows',
  'n8n Automation',
  'PostgreSQL',
  'Quantitative Finance',
  'Geospatial Data',
  'REST APIs',
  'React',
  'Python',
  'Node.js',
];

const TickerStrip = () => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-strip">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerStrip;
