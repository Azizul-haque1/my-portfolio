import { useEffect, useState, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  
  // Physics state
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const trail = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const requestRef = useRef(null);

  // Smooth cursor movement without React state re-renders
  const updateMousePosition = useCallback((e) => {
    const { clientX: x, clientY: y } = e;
    if (!isVisible) setIsVisible(true);

    // Check for magnetic elements
    let isMagnetic = false;
    const magneticElement = e.target.closest('[data-magnetic="true"], .magnetic');
    
    if (magneticElement && cursorState === 'hover') {
      const rect = magneticElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      
      if (distance < 50) {
        const magnetStrength = 0.3;
        mouse.current = {
          x: centerX + (x - centerX) * magnetStrength,
          y: centerY + (y - centerY) * magnetStrength
        };
        if (cursorRef.current) cursorRef.current.classList.add('magnetic');
        isMagnetic = true;
      }
    }

    if (!isMagnetic) {
      if (cursorRef.current) cursorRef.current.classList.remove('magnetic');
      mouse.current = { x, y };
    }
  }, [cursorState, isVisible]);

  // RequestAnimationFrame loop for butter-smooth interpolation
  const renderCursor = useCallback(() => {
    // Lerp factor (higher = faster snap, lower = smoother follow)
    const cursorSpeed = 0.3;
    const trailSpeed = 0.15;

    // Direct assignment for inner cursor (or very fast lerp)
    cursor.current.x += (mouse.current.x - cursor.current.x) * cursorSpeed;
    cursor.current.y += (mouse.current.y - cursor.current.y) * cursorSpeed;
    
    // Smooth lerp for trail
    trail.current.x += (mouse.current.x - trail.current.x) * trailSpeed;
    trail.current.y += (mouse.current.y - trail.current.y) * trailSpeed;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(calc(${cursor.current.x}px - 50%), calc(${cursor.current.y}px - 50%), 0)`;
    }
    
    if (trailRef.current) {
      trailRef.current.style.transform = `translate3d(calc(${trail.current.x}px - 50%), calc(${trail.current.y}px - 50%), 0)`;
    }

    requestRef.current = requestAnimationFrame(renderCursor);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(renderCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [renderCursor]);

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
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterWindow, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleMouseEnterWindow, handleMouseLeaveWindow]);

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
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Cursor Trail */}
      <div
        ref={trailRef}
        className={getTrailClasses()}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}