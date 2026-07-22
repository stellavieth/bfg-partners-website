import { press } from '@/data/portfolio';

export default function Newsworthy() {
  return (
    <section id="news" style={{ maxWidth: 1240, margin: '0 auto', padding: '104px 40px 36px' }}>
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
              Newsworthy
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
            In the press.
          </h2>
        </div>
      </div>

      <div className="press-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30 }}>
        {press.map((n) => (
          <a
            key={n.headline}
            href={n.url}
            target="_blank"
            rel="noopener"
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#fbf9f3',
              border: '1px solid rgba(26,26,22,0.09)',
              borderRadius: 16,
              overflow: 'hidden',
              textDecoration: 'none',
              height: '100%',
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#ece7dd' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${n.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '24px 24px 22px' }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#8a8073',
                }}
              >
                {n.source}
              </span>
              <div
                style={{
                  marginTop: 14,
                  fontFamily: "'Spectral', serif",
                  fontWeight: 500,
                  fontSize: 19,
                  lineHeight: 1.28,
                  letterSpacing: '-0.005em',
                  color: '#1a1a16',
                  textWrap: 'pretty',
                }}
              >
                {n.headline}
              </div>
              <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.6, color: '#8a8073' }}>{n.blurb}</p>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: 12, color: '#9a9182' }}>{n.date}</span>
                <span style={{ fontSize: 15, color: '#1c5b3f' }}>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
