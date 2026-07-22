export default function Footer() {
  return (
    <footer id="contact" style={{ maxWidth: 1240, margin: '0 auto', padding: '88px 40px 64px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 30,
          borderTop: '1px solid rgba(26,26,22,0.12)',
          paddingTop: 52,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <img src="/assets/logo.png" alt="BFG" style={{ height: 32, width: 'auto', display: 'block' }} />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.26em',
                color: '#8a8073',
                textTransform: 'uppercase',
              }}
            >
              Partners
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "'Spectral', serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: '#6b6358',
              maxWidth: '34ch',
            }}
          >
            Backing the next generation of consumer brands people can&apos;t stop talking about.
          </p>
        </div>
        <a
          href="mailto:dealteam@bfgpartners.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            background: '#1c5b3f',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.03em',
            padding: '14px 26px',
            borderRadius: 4,
            textDecoration: 'none',
          }}
        >
          Pitch us at dealteam@bfgpartners.com <span style={{ fontSize: 15, opacity: 0.8 }}>→</span>
        </a>
      </div>
      <div style={{ marginTop: 44, fontSize: 12, letterSpacing: '0.04em', color: '#9a9182' }}>
        BFG Partners · Website refresh concept · 2026
      </div>
    </footer>
  );
}
