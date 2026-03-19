import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Navbar animation
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    // Scroll background effect
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.background =
          window.scrollY > 40 ? 'rgba(0,0,0,0.92)' : 'rgba(0,0,0,0.72)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 5%',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0,0,0,0.72)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
          transition: 'background 0.3s ease',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '18px',
            color: 'white',
          }}
        >
          R<span style={{ color: '#2997FF' }}>.</span>Natukula
        </div>

        {/* Desktop Links */}
        <ul
          className="nav-desktop"
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            alignItems: 'center',
          }}
        >
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  color: '#86868b',
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#86868b')}
              >
                {item}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              style={{
                background: '#2997FF',
                color: 'white',
                padding: '7px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Hamburger (Mobile) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: menuOpen ? 'transparent' : 'white',
              transition: 'all 0.3s',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              transition: 'all 0.3s',
              transform: menuOpen
                ? 'rotate(45deg) translate(5px, -5px)'
                : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              transition: 'all 0.3s',
              transform: menuOpen
                ? 'rotate(-45deg) translate(5px, 5px)'
                : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '52px',
            left: 0,
            right: 0,
            background: 'rgba(0,0,0,0.97)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            padding: '24px 5%',
            borderBottom: '0.5px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {links.map((item) => (
            <a
              key={item}
              href={'#' + item.toLowerCase()}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '20px',
                fontFamily: "'DM Serif Display', serif",
                padding: '14px 0',
                borderBottom: '0.5px solid rgba(255,255,255,0.06)',
              }}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#2997FF',
              color: 'white',
              padding: '14px 24px',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: '500',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '16px',
            }}
          >
            Lets Talk
          </a>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
