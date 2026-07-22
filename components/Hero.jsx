'use client';

import { useEffect, useState } from 'react';
import { companies, heroCompanyNames } from '@/data/portfolio';

const heroSet = heroCompanyNames.map((n) => companies.find((c) => c.name === n)).filter(Boolean);

export default function Hero() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((i) => i + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const cur = heroIdx % heroSet.length;
  const heroName = heroSet[cur].name;

  return (
    <>
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '88px 40px 36px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.38fr) minmax(280px,0.86fr)',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Left: copy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
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
                Consumer Venture
              </span>
            </div>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Spectral', serif",
                fontWeight: 500,
                fontSize: 'clamp(40px, 5vw, 78px)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
                maxWidth: '15ch',
                color: '#1a1a16',
                textWrap: 'balance',
              }}
            >
              We back the brands you can&apos;t stop{' '}
              <span
                style={{
                  color: '#1c5b3f',
                  textDecoration: 'underline',
                  textDecorationThickness: '1.5px',
                  textUnderlineOffset: '9px',
                  textDecorationColor: 'rgba(28,91,63,0.4)',
                }}
              >
                talking about.
              </span>
            </h1>
            <p style={{ margin: '34px 0 0', fontSize: 18, lineHeight: 1.6, color: '#6b6358', maxWidth: '48ch' }}>
              BFG Partners invests early in the next generation of consumer products — the bold, opinionated brands
              people actually love. We don&apos;t lead with logos. We lead with the things you&apos;d put on your
              counter.
            </p>
            <div style={{ display: 'flex', gap: 40, marginTop: 36 }}>
              <div>
                <div
                  style={{
                    fontFamily: "'Spectral', serif",
                    fontWeight: 500,
                    fontSize: 42,
                    letterSpacing: '-0.02em',
                    color: '#1a1a16',
                  }}
                >
                  40+
                </div>
                <div style={{ fontSize: 13, color: '#9a9182', fontWeight: 500, marginTop: 2 }}>Brands backed</div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Spectral', serif",
                    fontWeight: 500,
                    fontSize: 42,
                    letterSpacing: '-0.02em',
                    color: '#1a1a16',
                  }}
                >
                  $120M
                </div>
                <div style={{ fontSize: 13, color: '#9a9182', fontWeight: 500, marginTop: 2 }}>Deployed</div>
              </div>
            </div>
          </div>

          {/* Right: rotating portfolio photo */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#ece7dd',
              boxShadow: '0 34px 70px -26px rgba(26,26,22,0.34)',
            }}
          >
            {heroSet.map((h, i) => (
              <img
                key={h.name}
                src={h.img}
                alt={h.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: cur === i ? 1 : 0,
                  transform: cur === i ? 'scale(1.06)' : 'scale(1)',
                  transition: 'opacity 1.1s ease, transform 5s ease',
                }}
              />
            ))}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(14,14,10,0.74) 0%, rgba(14,14,10,0.06) 46%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 18,
                left: 18,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#fff',
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.28)',
                backdropFilter: 'blur(6px)',
                padding: '5px 10px',
                borderRadius: 3,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#7fb498',
                  display: 'inline-block',
                }}
              />
              Portfolio
            </div>
            <div style={{ position: 'absolute', left: 20, right: 20, bottom: 20, pointerEvents: 'none' }}>
              <div
                style={{
                  fontFamily: "'Spectral', serif",
                  fontWeight: 500,
                  fontSize: 24,
                  letterSpacing: '-0.005em',
                  color: '#fff',
                  textShadow: '0 2px 14px rgba(0,0,0,0.4)',
                }}
              >
                {heroName}
              </div>
              <div style={{ marginTop: 11, display: 'flex', gap: 6 }}>
                {heroSet.map((h, i) => (
                  <span
                    key={h.name}
                    style={{
                      height: 2,
                      flex: 1,
                      borderRadius: 2,
                      background: cur === i ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.28)',
                      transition: 'background 0.5s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
