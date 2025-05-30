import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const MatrixRain = ({ color, opacity }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    
    // Matrix characters
    const chars = "01アァカ2サタナ2ハ3マ3ヤ4ャラ3ワガ5ザ4ダ3バパ5イィキシ6チニヒミ5リヰ874ギジヂ75ビ7ピウゥク9スツヌ0フム7ユュル8グ8ズブヅ99プエェ-ケセテ0ネ0ヘメレヱ1ゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      // Black background with opacity
      ctx.fillStyle = `rgba(10, 10, 10, ${opacity/3})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set font and color
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;
      
      // Draw characters
      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        
        // Reset drop at random intervals
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 33);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, opacity]);

  return (
    <canvas 
      ref={canvasRef}
      className="matrix-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

MatrixRain.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number
};

MatrixRain.defaultProps = {
  color: '#d4af37',
  opacity: 0.15
};

export default MatrixRain;