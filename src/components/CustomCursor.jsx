import { useEffect, useState, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(true);
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const magneticTarget = useRef(null);

  // Smooth cursor movement with requestAnimationFrame
  const updateCursorPosition = useCallback((e) => {
    const { clientX: x, clientY: y } = e;
    setMousePosition({ x, y });

    // Check for magnetic elements
    const magneticElement = e.target.closest('[data-magnetic="true"], .magnetic');
    if (magneticElement && cursorState === 'hover') {
      const rect = magneticElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      
      if (distance < 50) {
        const magnetStrength = 0.3;
        const magnetX = centerX + (x - centerX) * magnetStrength;
        const magnetY = centerY + (y - centerY) * magnetStrength;
        
        if (cursorRef.current) {
          cursorRef.current.style.left = magnetX + 'px';
          cursorRef.current.style.top = magnetY + 'px';
          cursorRef.current.classList.add('magnetic');
        }
        return;
      }
    }

    // Normal cursor movement
    if (cursorRef.current) {
      cursorRef.current.style.left = x + 'px';
      cursorRef.current.style.top = y + 'px';
      cursorRef.current.classList.remove('magnetic');
    }

    // Trail follows with slight delay
    if (trailRef.current) {
      requestAnimationFrame(() => {
        trailRef.current.style.left = x + 'px';
        trailRef.current.style.top = y + 'px';
      });
    }
  }, [cursorState]);

  // Handle different cursor states
  const handleMouseEnter = useCallback((e) => {
    const target = e.target;
    
    // Interactive elements
    if (target.matches('a, button, input, textarea, select, [role="button"], .cursor-hover, [data-cursor="hover"]')) {
      setCursorState('hover');
    }
    // Text elements
    else if (target.matches('p, h1, h2, h3, h4, h5, h6, span, div:not([role]):not(.no-text-cursor), li') && 
             !target.closest('button, a, [role="button"]')) {
      setCursorState('text');
    }
    // Loading elements
    else if (target.matches('.loading, [data-loading="true"], [data-cursor="loading"]')) {
      setCursorState('loading');
    }
    // Default state
    else {
      setCursorState('default');
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorState('default');
  }, []);

  const handleMouseDown = useCallback(() => {
    setCursorState('active');
    if (cursorRef.current) {
      cursorRef.current.classList.add('active');
    }
    if (trailRef.current) {
      trailRef.current.classList.add('active');
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setCursorState(prev => prev === 'active' ? 'default' : prev);
    if (cursorRef.current) {
      cursorRef.current.classList.remove('active');
    }
    if (trailRef.current) {
      trailRef.current.classList.remove('active');
    }
  }, []);

  const handleMouseEnterWindow = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeaveWindow = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterWindow, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [updateCursorPosition, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleMouseEnterWindow, handleMouseLeaveWindow]);

  // Don't render on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return null;
  }

  const getCursorClasses = () => {
    let classes = 'premium-cursor';
    if (cursorState !== 'default') classes += ` ${cursorState}`;
    if (!isVisible) classes += ' hidden';
    return classes;
  };

  const getTrailClasses = () => {
    let classes = 'premium-cursor-trail';
    if (cursorState !== 'default') classes += ` ${cursorState}`;
    if (!isVisible) classes += ' hidden';
    return classes;
  };

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={getCursorClasses()}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Cursor Trail */}
      <div
        ref={trailRef}
        className={getTrailClasses()}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}