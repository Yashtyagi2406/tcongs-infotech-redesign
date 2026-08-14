import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * ScrollReveal — wraps any section/element and animates it in
 * when it enters the viewport.
 *
 * Props:
 *  - direction: 'up' | 'down' | 'left' | 'right' (default: 'up')
 *  - delay: CSS delay string e.g. '0ms', '150ms' (default: '0ms')
 *  - duration: CSS duration string (default: '700ms')
 *  - distance: translate amount in px (default: 40)
 *  - className: extra classes passed to the wrapper div
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = '0ms',
  duration = '700ms',
  distance = 40,
  className = '',
  threshold,
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : translateMap[direction],
    transition: `opacity ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay},
                 transform ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
