export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(16px)',
        background: 'rgba(244,240,231,0.82)',
        borderBottom: '1px solid rgba(26,26,22,0.08)',
      }}
    >
      <nav
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '18px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/assets/logo.png" alt="BFG" style={{ height: 30, width: 'auto', display: 'block' }} />
          <span
            style={{
              fontFamily: "'Gilmer', 'Hanken Grotesque', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.26em',
              color: '#8a8073',
              textTransform: 'uppercase',
            }}
          >
            Partners
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <a href="#portfolio" style={{ fontSize: 14, fontWeight: 500, color: '#4f4940', textDecoration: 'none' }}>
            Portfolio
          </a>
          <a href="#thesis" style={{ fontSize: 14, fontWeight: 500, color: '#4f4940', textDecoration: 'none' }}>
            Thesis
          </a>
          <a href="#testimonials" style={{ fontSize: 14, fontWeight: 500, color: '#4f4940', textDecoration: 'none' }}>
            Stories
          </a>
          <a href="#news" style={{ fontSize: 14, fontWeight: 500, color: '#4f4940', textDecoration: 'none' }}>
            News
          </a>
          <a href="#team" style={{ fontSize: 14, fontWeight: 500, color: '#4f4940', textDecoration: 'none' }}>
            Team
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#1c5b3f',
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.03em',
              padding: '11px 20px',
              borderRadius: 4,
              textDecoration: 'none',
            }}
          >
            Pitch us <span style={{ fontSize: 14, opacity: 0.8 }}>→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
