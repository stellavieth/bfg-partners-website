const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function DollarIcon() {
  return (
    <svg {...iconProps}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg {...iconProps}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const criteria = [
  {
    icon: <DollarIcon />,
    title: '~$1M+ trailing 12-month net revenue',
    subtitle: 'Or a clear line of sight to it',
  },
  {
    icon: <BriefcaseIcon />,
    title: 'Food & beverage, personal care, beauty, dietary supplements',
    subtitle: 'Better-for-you across the categories we know best',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Early-stage and high-growth',
    subtitle: 'Proven traction, ready to scale',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Better for you and the planet',
    subtitle: 'Mission built into the product, not bolted on',
  },
];

export default function DealCriteria() {
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 40px 36px' }}>
      <div
        className="deal-criteria-grid"
        style={{
          background: '#16412c',
          borderRadius: 18,
          padding: 'clamp(44px,5vw,78px)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1fr)',
          gap: 56,
          alignItems: 'center',
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

        <div style={{ position: 'relative' }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Spectral', serif",
              fontWeight: 500,
              fontSize: 'clamp(32px,4vw,50px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: '#f4f0e7',
              textWrap: 'balance',
            }}
          >
            Building something <em style={{ fontStyle: 'italic', color: '#7fb498' }}>better?</em>
          </h2>
          <h3
            style={{
              margin: '4px 0 0',
              fontFamily: "'Spectral', serif",
              fontWeight: 500,
              fontSize: 'clamp(24px,2.8vw,34px)',
              lineHeight: 1.15,
              color: '#f4f0e7',
            }}
          >
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>
              Pitch us
            </a>
          </h3>
          <p style={{ margin: '26px 0 0', fontSize: 15.5, lineHeight: 1.65, color: '#b9cfc2', maxWidth: '40ch' }}>
            We partner early with consumer brands reinventing the categories people care about. If this sounds
            like you, we want to hear from you.
          </p>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 30 }}>
          {criteria.map((c) => (
            <div key={c.title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div
                style={{
                  flex: '0 0 auto',
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.22)',
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9dc4ac',
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#f4f0e7', lineHeight: 1.35 }}>{c.title}</div>
                <div style={{ marginTop: 6, fontSize: 14, color: '#9dafa3' }}>{c.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
