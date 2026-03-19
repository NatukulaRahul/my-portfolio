import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      featuredRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: featuredRef.current, start: 'top 80%' },
      }
    );
    gsap.fromTo(
      card1Ref.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: card1Ref.current, start: 'top 85%' },
      }
    );
    gsap.fromTo(
      card2Ref.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.15,
        scrollTrigger: { trigger: card2Ref.current, start: 'top 85%' },
      }
    );
  }, []);

  const trackFeatures = [
    'Visitor intelligence — device, location, new vs returning, journey timeline',
    'Page analytics — load speed, scroll depth, time on page',
    'Behaviour tracking — hover interest, form analytics, traffic source',
    'Ecommerce suite — funnel, revenue, conversion rate, AOV',
    'Live dashboard — real-time active visitors & current page',
    'Team access with per-site permissions & client read-only mode',
  ];

  const statusStyle = (type) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '11px',
    fontWeight: '500',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '5px 12px',
    borderRadius: '20px',
    marginBottom: '20px',
    background:
      type === 'live' ? 'rgba(52,199,89,0.12)' : 'rgba(255,159,10,0.12)',
    color: type === 'live' ? '#34C759' : '#FF9F0A',
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ background: '#0a0a0a', padding: '120px 5%' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="projects-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '64px',
          }}
        >
          <div>
            <p className="section-label">Projects</p>
            <h2 className="section-title">
              Real work.
              <br />
              Real impact.
            </h2>
          </div>
          <p className="section-body" style={{ maxWidth: '340px' }}>
            Not tutorial projects. These are products built to solve actual
            problems.
          </p>
        </div>

        {/* Featured TrackJS */}
        <div
          ref={featuredRef}
          className="project-featured"
          style={{
            background: '#111',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '48px',
            marginBottom: '24px',
            transition: 'transform 0.3s, border-color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          <div>
            <span style={statusStyle('live')}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#34C759',
                  display: 'inline-block',
                }}
              />
              Live
            </span>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '32px',
                color: 'white',
                marginBottom: '16px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              TrackJS — Universal
              <br />
              Website Analytics
            </h3>
            <p
              style={{
                fontSize: '15px',
                color: '#86868b',
                lineHeight: 1.65,
                marginBottom: '24px',
                fontWeight: '300',
              }}
            >
              Add 2 lines of code to any website and get full analytics
              automatically. No setup, no configuration. Self-hosted so your
              data stays yours.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'React',
                'Django',
                'Python',
                'JavaScript',
                'AWS',
                'Real-time',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#2997FF',
                    background: 'rgba(41,151,255,0.1)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: '12px' }}>
            {trackFeatures.map((f, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom:
                    i < trackFeatures.length - 1
                      ? '0.5px solid rgba(255,255,255,0.08)'
                      : 'none',
                  fontSize: '13px',
                  color: '#86868b',
                  lineHeight: 1.5,
                }}
              >
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#2997FF',
                    marginTop: '6px',
                    flexShrink: 0,
                  }}
                />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2 cards */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          <div
            ref={card1Ref}
            style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '40px',
              transition: 'transform 0.3s, border-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            <span style={statusStyle('live')}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#34C759',
                  display: 'inline-block',
                }}
              />
              Live
            </span>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '26px',
                color: 'white',
                marginBottom: '14px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              AI Health Symptom Checker
            </h3>
            <p
              style={{
                fontSize: '15px',
                color: '#86868b',
                lineHeight: 1.65,
                marginBottom: '24px',
                fontWeight: '300',
              }}
            >
              Tell the AI your symptoms. It asks smart follow-up questions,
              identifies possible conditions, gives precautions for minor
              issues, and knows when to say "see a doctor."
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['React', 'Django', 'AI / LLM', 'Python'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#2997FF',
                    background: 'rgba(41,151,255,0.1)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={card2Ref}
            style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '40px',
              transition: 'transform 0.3s, border-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            <span style={statusStyle('building')}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#FF9F0A',
                  display: 'inline-block',
                  animation: 'pulse 1.5s ease infinite',
                }}
              />
              In Progress
            </span>
            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '26px',
                color: 'white',
                marginBottom: '14px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Job Portal
            </h3>
            <p
              style={{
                fontSize: '15px',
                color: '#86868b',
                lineHeight: 1.65,
                marginBottom: '24px',
                fontWeight: '300',
              }}
            >
              A full-featured job platform connecting candidates and employers.
              Smart matching, application tracking, and recruiter dashboards —
              being built right now.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['React', 'Django', 'AWS', 'PostgreSQL'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#2997FF',
                    background: 'rgba(41,151,255,0.1)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}</style>
      </div>
    </section>
  );
}
