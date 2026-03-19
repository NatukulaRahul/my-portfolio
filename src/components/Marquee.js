import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const items = [
  'React',
  'Django',
  'Python',
  'AWS Cloud',
  'JavaScript',
  'Full Stack',
  'CSS',
  'REST APIs',
  'PostgreSQL',
  'Node.js',
  'React',
  'Django',
  'Python',
  'AWS Cloud',
  'JavaScript',
  'Full Stack',
  'CSS',
  'REST APIs',
  'PostgreSQL',
  'Node.js',
];

export default function Marquee() {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    gsap.to(track1Ref.current, {
      xPercent: -50,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
    gsap.to(track2Ref.current, {
      xPercent: 50,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <div
      style={{
        background: '#0a0a0a',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        padding: '24px 0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Row 1 — left to right */}
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <div
          ref={track1Ref}
          style={{
            display: 'flex',
            gap: '48px',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '13px',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: i % 3 === 0 ? '#2997FF' : '#86868b',
              }}
            >
              {item}
              <span
                style={{
                  marginLeft: '48px',
                  color: 'rgba(255,255,255,0.1)',
                }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <div
          ref={track2Ref}
          style={{
            display: 'flex',
            gap: '48px',
            whiteSpace: 'nowrap',
            willChange: 'transform',
            transform: 'translateX(-50%)',
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '13px',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: i % 4 === 0 ? '#2997FF' : '#86868b',
              }}
            >
              {item}
              <span
                style={{
                  marginLeft: '48px',
                  color: 'rgba(255,255,255,0.1)',
                }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
