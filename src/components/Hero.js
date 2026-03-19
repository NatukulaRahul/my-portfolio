import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const eyebrowRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const titleRef = useRef(null);
  const actionsRef = useRef(null);
  const scrollRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      eyebrowRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        firstNameRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo(
        lastNameRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
        '-=0.8'
      )
      .fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        actionsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.2'
      );

    // Apple scroll effect — whole content fades and scales out
    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.92,
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '40% top',
        scrub: 1,
      },
    });

    // Glow parallax on scroll
    gsap.to(glowRef.current, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Glow breathing
    gsap.to(glowRef.current, {
      scale: 1.15,
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Mouse parallax on glow
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(glowRef.current, {
        x,
        y,
        duration: 2,
        ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 5%',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(41,151,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(41,151,255,0.04) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)',
        }}
      />

      {/* Glow */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          background:
            'radial-gradient(circle, rgba(41,151,255,0.1) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          pointerEvents: 'none',
        }}
      />

      {/* All content fades out on scroll */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{
            fontSize: '13px',
            fontWeight: '500',
            color: '#2997FF',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          Available for work · Hyderabad, IN
        </p>

        {/* First Name */}
        <div style={{ overflow: 'hidden' }}>
          <h1
            ref={firstNameRef}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(64px, 12vw, 150px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: 'white',
              display: 'block',
            }}
          >
            Rahul
          </h1>
        </div>

        {/* Last Name */}
        <div style={{ overflow: 'hidden' }}>
          <h1
            ref={lastNameRef}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(64px, 12vw, 150px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              display: 'block',
              marginBottom: '48px',
            }}
          >
            Natukula
          </h1>
        </div>

        {/* Title */}
        <p
          ref={titleRef}
          style={{
            fontSize: 'clamp(16px, 2.2vw, 24px)',
            fontWeight: '300',
            color: '#86868b',
            marginBottom: '52px',
            letterSpacing: '-0.01em',
          }}
        >
          Full Stack Developer —{' '}
          <em
            style={{
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: "'DM Serif Display', serif",
            }}
          >
            building things that matter
          </em>
        </p>

        {/* Actions */}
        <div ref={actionsRef} style={{ display: 'flex', gap: '16px' }}>
          <a
            href="#projects"
            style={{
              background: '#2997FF',
              color: 'white',
              padding: '16px 36px',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'transform 0.2s, opacity 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.04)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              background: 'transparent',
              color: 'white',
              padding: '15px 36px',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: '400',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#86868b',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, #86868b, transparent)',
            animation: 'scrollPulse 2s ease infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
