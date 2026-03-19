import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      innerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ background: '#000', padding: '120px 5%', textAlign: 'center' }}
    >
      <div ref={innerRef} style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p className="section-label" style={{ textAlign: 'center' }}>
          Contact
        </p>

        <h2 className="section-title">Lets build something great.</h2>

        <p
          className="section-body"
          style={{ margin: '0 auto', textAlign: 'center' }}
        >
          Have a project in mind or just want to talk? Always open to
          interesting conversations.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="mailto:natukularahul14@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              borderRadius: '30px',
              border: '1px solid #2997FF',
              background: '#2997FF',
              color: 'white',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.25s',
            }}
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/rahulnatukula18/"
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'transparent',
              color: 'white',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 0.25s',
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/NatukulaRahul"
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'transparent',
              color: 'white',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 0.25s',
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      <div
        style={{
          paddingTop: '32px',
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          color: '#86868b',
          maxWidth: '1200px',
          margin: '80px auto 0',
        }}
      >
        <span>2026 Rahul Natukula</span>
        {/* <span>Built with React · Deployed on AWS</span> */}
      </div>
    </section>
  );
}
