import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: '01',
    title: 'Full Stack Products',
    desc: 'From database to deployment — I build complete products. Not just frontend, not just backend. The whole thing, end to end.',
    color: '#2997FF',
    side: 'React + Django + AWS',
  },
  {
    number: '02',
    title: 'Analytics Systems',
    desc: 'TrackJS proves it — I can build complex data pipelines, real-time dashboards, and tracking systems that handle production traffic.',
    color: '#30D158',
    side: 'Real-time · Self-hosted',
  },
  {
    number: '03',
    title: 'AI Powered Apps',
    desc: 'I do not just use AI — I build products with it. Health checkers, smart assistants, AI that actually solves real problems.',
    color: '#BF5AF2',
    side: 'LLMs · Python · APIs',
  },
  {
    number: '04',
    title: 'Cloud Infrastructure',
    desc: 'AWS is not just a buzzword for me. I deploy, scale, and manage real applications on cloud infrastructure.',
    color: '#FF9F0A',
    side: 'EC2 · S3 · Lambda · RDS',
  },
];

export default function WhatIBuild() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.filter(Boolean).forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 80%' },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: '#0a0a0a', padding: '120px 5%' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="whatibuild-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            marginBottom: '80px',
            alignItems: 'end',
          }}
        >
          <div>
            <p className="section-label">What I Build</p>
            <h2 className="section-title">
              Not a tutorial
              <br />
              developer.
            </h2>
          </div>
          <p className="section-body">
            I build real products that solve real problems. Here is what I
            actually do.
          </p>
        </div>

        <div
          className="whatibuild-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '48px 40px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = f.color + '44';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '80px',
                  color: f.color,
                  opacity: 0.08,
                  position: 'absolute',
                  top: '20px',
                  right: '32px',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {f.number}
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  fontSize: '11px',
                  fontWeight: '500',
                  color: f.color,
                  background: f.color + '15',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  letterSpacing: '0.06em',
                  marginBottom: '24px',
                }}
              >
                {f.side}
              </div>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '28px',
                  color: 'white',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: '#86868b',
                  lineHeight: 1.65,
                  fontWeight: '300',
                }}
              >
                {f.desc}
              </p>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: f.color,
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
                ref={(el) => {
                  if (el) {
                    el.parentElement.addEventListener(
                      'mouseenter',
                      () => (el.style.opacity = '1')
                    );
                    el.parentElement.addEventListener(
                      'mouseleave',
                      () => (el.style.opacity = '0')
                    );
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
