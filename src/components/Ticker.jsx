import React from 'react';
import { TICKER } from '../data/content';

const TickerStrip = () => {
  const doubled = [...TICKER, ...TICKER];
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
