import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onEnter = (e) => {
      const el = e.target;
      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a') || el.closest('button') || el.dataset.cursor === 'pointer') {
        setHovering(true);
      }
    };

    const onLeave = () => setHovering(false);

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? 'rgba(212,175,55,0.9)' : 'rgba(212,175,55,0.5)'}`,
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          background: clicked ? 'rgba(212,175,55,0.12)' : hovering ? 'rgba(212,175,55,0.06)' : 'transparent',
          width: hovering ? 52 : clicked ? 32 : 40,
          height: hovering ? 52 : clicked ? 32 : 40,
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, background 0.2s',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--gold)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          boxShadow: '0 0 10px rgba(212,175,55,0.8)',
          transition: 'transform 0s',
        }}
      />
    </>
  );
};

export default CustomCursor;
