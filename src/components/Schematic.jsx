import React from 'react';

/**
 * A project card with no screenshot still has to show something, and a stock
 * placeholder image says nothing. This draws the system instead: the stages
 * data moves through, in order, the way you'd sketch it on a whiteboard.
 */
const Schematic = ({ steps = [], icon }) => (
  <div className="schematic" role="img" aria-label={steps.join(' then ')}>
    <div className="schematic-grid" aria-hidden="true" />
    <div className="schematic-flow">
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <span className="schematic-node">
            <span className="schematic-node-dot" />
            {step}
          </span>
          {i < steps.length - 1 && <span className="schematic-arrow" aria-hidden="true">→</span>}
        </React.Fragment>
      ))}
    </div>
    {icon && <span className="schematic-icon" aria-hidden="true">{icon}</span>}
  </div>
);

export default Schematic;
