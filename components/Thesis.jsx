import { sectors } from '@/data/portfolio';

export default function Thesis() {
  return (
    <section id="thesis" style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 40px 36px' }}>
      <div
        style={{
          background: '#16412c',
          borderRadius: 18,
          padding: 'clamp(44px,5vw,78px)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -100,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
          <span style={{ width: 26, height: 1.5, background: '#7fb498', display: 'inline-block' }} />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#9dc4ac',
            }}
          >
            Our Thesis
          </span>
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Spectral', serif",
            fontWeight: 400,
            fontSize: 'clamp(28px,3.7vw,50px)',
            lineHeight: 1.16,
            letterSpacing: '-0.01em',
            maxWidth: '22ch',
            color: '#f4f0e7',
            textWrap: 'balance',
          }}
        >
          We invest in consumer brands with a point of view — and the operators obsessed enough to build them.
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
            gap: 34,
            marginTop: 58,
          }}
        >
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.22)', paddingTop: 20 }}>
            <div style={{ fontFamily: "'Spectral', serif", fontWeight: 500, fontSize: 20, marginBottom: 10, color: '#fff' }}>
              Brand-first
            </div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: '#b9cfc2' }}>
              We fund products people already reach for — taste and shelf presence aren&apos;t negotiable.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.22)', paddingTop: 20 }}>
            <div style={{ fontFamily: "'Spectral', serif", fontWeight: 500, fontSize: 20, marginBottom: 10, color: '#fff' }}>
              Category creators
            </div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: '#b9cfc2' }}>
              The brands we back don&apos;t fight for share of an aisle. They invent one.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.22)', paddingTop: 20 }}>
            <div style={{ fontFamily: "'Spectral', serif", fontWeight: 500, fontSize: 20, marginBottom: 10, color: '#fff' }}>
              Operator empathy
            </div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: '#b9cfc2' }}>
              Our partners have built and sold consumer brands themselves — we know the work behind the packaging,
              not just the pitch.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            paddingTop: 34,
            borderTop: '1px solid rgba(255,255,255,0.16)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '14px 30px',
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#9dc4ac',
            }}
          >
            Where we invest
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {sectors.map((sector) => (
              <span
                key={sector}
                style={{
                  fontFamily: "'Spectral', serif",
                  fontWeight: 500,
                  fontSize: 16,
                  letterSpacing: '-0.005em',
                  color: '#f4f0e7',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '9px 18px',
                  borderRadius: 100,
                }}
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
