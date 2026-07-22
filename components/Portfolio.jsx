'use client';

import { useState } from 'react';
import { companies } from '@/data/portfolio';

export default function Portfolio() {
  const [hover, setHover] = useState(null);

  return (
    <section id="portfolio" style={{ maxWidth: 1240, margin: '0 auto', padding: '104px 40px 48px' }}>
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
              Portfolio
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
            The good stuff.
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#8a8073', maxWidth: '30ch' }}>
          Hover any company to see the story — the product never leaves the frame.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
        {companies.map((card, i) => {
          const on = hover === i;
          return (
            <a
              key={card.name}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                aspectRatio: '16/12',
                background: '#ece7dd',
                cursor: 'pointer',
              }}
            >
              <img
                src={card.img}
                alt={card.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(.2,.8,.2,1)',
                  transform: on ? 'scale(1.05)' : 'scale(1)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '0 0 auto 0',
                  height: '40%',
                  background: 'linear-gradient(to bottom, rgba(16,16,12,0.4), transparent)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 22,
                  right: 22,
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 12,
                  pointerEvents: 'none',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 9 }}>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Hanken Grotesque'",
                      fontWeight: 600,
                      fontSize: 21,
                      letterSpacing: 0,
                      color: '#fff',
                      textShadow: '0 2px 14px rgba(0,0,0,0.45)',
                    }}
                  >
                    {card.name}
                  </h3>
                  {card.acquired && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        color: '#1a1a16',
                        background: 'rgba(255,255,255,0.92)',
                        padding: '4px 9px',
                        borderRadius: 3,
                        textTransform: 'uppercase',
                      }}
                    >
                      {card.exitLabel || 'Acquired'}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    flex: '0 0 auto',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    color: '#fff',
                    background: 'rgba(255,255,255,0.14)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 9px',
                    borderRadius: 3,
                  }}
                >
                  {card.tag}
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(14,14,10,0.86) 0%, rgba(14,14,10,0.25) 48%, transparent 74%)',
                  opacity: on ? 1 : 0,
                  transition: 'opacity 0.55s ease',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 22,
                  right: 22,
                  bottom: 22,
                  opacity: on ? 1 : 0,
                  transform: on ? 'translateY(0)' : 'translateY(14px)',
                  transition: 'opacity 0.5s ease, transform 0.55s cubic-bezier(.2,.8,.2,1)',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#aec9b6',
                    marginBottom: 10,
                  }}
                >
                  {card.category}
                </div>
                <p
                  style={{
                    margin: '0 0 14px',
                    fontFamily: "'Spectral', serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: '#fff',
                    maxWidth: '34ch',
                  }}
                >
                  {card.blurb}
                </p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: '#fff',
                  }}
                >
                  View company <span style={{ fontSize: 15 }}>→</span>
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
