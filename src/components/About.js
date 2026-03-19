import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
    gsap.fromTo(
      rightRef.current,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  const stats = [
    { num: '2+', label: 'Years building' },
    { num: '10+', label: 'Projects shipped' },
    { num: '6', label: 'Technologies' },
    { num: '∞', label: 'Problems solved' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ background: '#0a0a0a', padding: '120px 5%' }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div ref={leftRef}>
          <p className="section-label">About</p>
          <h2 className="section-title">
            I build
            <br />
            the full picture.
          </h2>
          <p className="section-body">
            From pixel-perfect frontends to robust cloud backends — I design,
            build, and ship products that solve real problems. I care deeply
            about clean code, great UX, and systems that scale.
          </p>
          <p className="section-body" style={{ marginTop: '20px' }}>
            Currently building analytics and AI-powered tools that help real
            businesses grow. Always thinking about the next problem worth
            solving.
          </p>
        </div>

        {/* Right — Stats */}
        <div
          ref={rightRef}
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: '#111',
                padding: '36px 28px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = '#1a1a1a')
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = '#111')}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '48px',
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.num.replace('+', '')}
                <span style={{ color: '#2997FF' }}>
                  {stat.num.includes('+') ? '+' : ''}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: '#86868b' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
