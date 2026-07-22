'use client';

import { useEffect, useState } from 'react';
import { team } from '@/data/portfolio';

export default function Team() {
  const [thover, setThover] = useState(null);
  const [hash, setHash] = useState('');

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      setHash(h);
      if (/^#team\//.test(h)) {
        window.scrollTo(0, 0);
      } else if (h === '#team') {
        setTimeout(() => {
          const el = document.getElementById('team');
          if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - 12);
        }, 20);
      }
    };
    window.addEventListener('hashchange', onHash);
    setHash(window.location.hash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const slug = (hash.match(/^#team\/(.+)$/) || [])[1] || null;
  const active = team.find((p) => p.slug === slug) || null;

  return (
    <>
      <section id="team" style={{ maxWidth: 1240, margin: '0 auto', padding: '104px 40px 36px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 18,
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span style={{ width: 26, height: 1.5, background: '#1c5b3f', display: 'inline-block' }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8a8073',
                }}
              >
                The Team
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Spectral', serif",
                fontWeight: 500,
                fontSize: 'clamp(34px,4.4vw,56px)',
                letterSpacing: '-0.01em',
                lineHeight: 1.05,
                color: '#1a1a16',
              }}
            >
              Meet the team.
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#8a8073', maxWidth: '32ch' }}>
            We&apos;ve built and scaled consumer brands ourselves — so we know the work behind the packaging.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(236px, 1fr))', gap: 26 }}>
          {team.map((p) => {
            const on = thover === p.slug;
            return (
              <a
                key={p.slug}
                href={`#team/${p.slug}`}
                onMouseEnter={() => setThover(p.slug)}
                onMouseLeave={() => setThover(null)}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  position: 'relative',
                  borderRadius: 14,
                  overflow: 'hidden',
                  background: '#fbf9f3',
                  border: '1px solid rgba(26,26,22,0.08)',
                  transition: 'transform 0.5s cubic-bezier(.2,.8,.2,1), box-shadow 0.5s ease',
                  transform: on ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: on ? '0 20px 40px rgba(26,26,22,0.13)' : '0 1px 0 rgba(26,26,22,0.03)',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: '#ece7dd' }}>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url('${p.img}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: p.pos,
                      transition: 'transform 0.7s cubic-bezier(.2,.8,.2,1)',
                      transform: on ? 'scale(1.04)' : 'scale(1)',
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: '20px 22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "'Spectral', serif", fontWeight: 500, fontSize: 20, color: '#1a1a16' }}>
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#8a8073',
                        margin: '7px 0 0',
                      }}
                    >
                      {p.title}
                    </div>
                  </div>
                  <span
                    style={{
                      flex: '0 0 auto',
                      fontSize: 15,
                      color: '#1c5b3f',
                      transform: on ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.4s ease',
                    }}
                  >
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {active && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#f4f0e7', overflowY: 'auto' }}>
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 2,
              backdropFilter: 'blur(16px)',
              background: 'rgba(244,240,231,0.82)',
              borderBottom: '1px solid rgba(26,26,22,0.08)',
            }}
          >
            <div
              style={{
                maxWidth: 1080,
                margin: '0 auto',
                padding: '18px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <a
                href="#team"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1c5b3f',
                  textDecoration: 'none',
                }}
              >
                <span style={{ fontSize: 17, lineHeight: 1 }}>←</span> Back to team
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/assets/logo.png" alt="BFG" style={{ height: 26, width: 'auto', display: 'block' }} />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.26em',
                    color: '#8a8073',
                    textTransform: 'uppercase',
                  }}
                >
                  Partners
                </span>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 1080, margin: '0 auto', padding: '56px 40px 96px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(260px,0.82fr) minmax(0,1.18fr)',
                gap: 56,
                alignItems: 'start',
              }}
            >
              <div style={{ position: 'sticky', top: 104 }}>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    borderRadius: 18,
                    overflow: 'hidden',
                    background: '#ece7dd',
                    boxShadow: '0 30px 60px -28px rgba(26,26,22,0.34)',
                    backgroundImage: `url('${active.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: active.pos,
                  }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <span style={{ width: 26, height: 1.5, background: '#1c5b3f', display: 'inline-block' }} />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#8a8073',
                    }}
                  >
                    The Team
                  </span>
                </div>
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "'Spectral', serif",
                    fontWeight: 500,
                    fontSize: 'clamp(40px,5vw,62px)',
                    lineHeight: 1.02,
                    letterSpacing: '-0.015em',
                    color: '#1a1a16',
                  }}
                >
                  {active.name}
                </h1>
                <div
                  style={{
                    marginTop: 16,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#1c5b3f',
                  }}
                >
                  {active.title}
                </div>
                <div style={{ marginTop: 38, display: 'flex', flexDirection: 'column', gap: 22 }}>
                  {active.bios.map((para, i) => (
                    <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.68, color: '#4f4940', textWrap: 'pretty' }}>
                      {para}
                    </p>
                  ))}
                </div>
                <a
                  href="#team"
                  style={{
                    marginTop: 46,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: '#1c5b3f',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1 }}>←</span> Back to team
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
