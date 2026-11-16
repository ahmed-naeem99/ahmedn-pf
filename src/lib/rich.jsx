import React from 'react';

/**
 * Minimal inline formatting for strings in src/data/content.js.
 *
 *   **bold**  -> <strong>
 *   `code`    -> <code>
 *
 * Content stays plain data, so it can be read, diffed, and reused without
 * dragging JSX through the data file.
 */
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`)/g;

export function rich(text) {
  if (typeof text !== 'string') return text;
  // One wrapper element on purpose: these strings land inside flex list items,
  // where a bare array would make every bold span its own flex column.
  return <span className="rich">{parts(text)}</span>;
}

function parts(text) {
  return text.split(TOKEN).filter(Boolean).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="inline-code">{part.slice(1, -1)}</code>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default rich;
