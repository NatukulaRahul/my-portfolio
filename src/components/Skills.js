import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    icon: '⚛',
    name: 'React',
    desc: 'Building interactive UIs with hooks, context, and modern patterns.',
  },
  {
    icon: '🟨',
    name: 'JavaScript',
    desc: 'Deep JS fundamentals — async, closures, DOM, ES2024+.',
  },
  {
    icon: '🎨',
    name: 'CSS',
    desc: 'Animations, layouts, responsive design, pixel-perfect UI.',
  },
  {
    icon: '🐍',
    name: 'Python',
    desc: 'Scripting, data processing, AI integration, automation.',
  },
  {
    icon: '🦄',
    name: 'Django',
    desc: 'REST APIs, ORM, authentication, scalable web backends.',
  },
  {
    icon: '☁',
    name: 'AWS Cloud',
    desc: 'EC2, S3, Lambda, RDS — deploying and scaling production apps.',
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ background: '#000', padding: '120px 5%' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="skills-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            marginBottom: '72px',
            alignItems: 'end',
          }}
        >
          <div>
            <p className="section-label">Skills</p>
            <h2 className="section-title">
              The full
              <br />
              stack.
            </h2>
          </div>
          <p className="section-body">
            Every layer of the product — from UI interactions to cloud
            infrastructure. I own the whole thing.
          </p>
        </div>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                background: '#0a0a0a',
                padding: '36px 32px',
                transition: 'background 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#111';
                e.currentTarget.querySelector('.skill-line').style.transform =
                  'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0a0a0a';
                e.currentTarget.querySelector('.skill-line').style.transform =
                  'scaleX(0)';
              }}
            >
              <div
                className="skill-line"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#2997FF',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                }}
              />
              <span
                style={{
                  fontSize: '28px',
                  marginBottom: '16px',
                  display: 'block',
                }}
              >
                {skill.icon}
              </span>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'white',
                  marginBottom: '8px',
                }}
              >
                {skill.name}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#86868b',
                  lineHeight: '1.5',
                }}
              >
                {skill.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
