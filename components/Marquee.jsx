import { companies } from '@/data/portfolio';

const marqueeItems = companies.concat(companies);

export default function Marquee() {
  return (
    <section
      style={{
        marginTop: 34,
        padding: '6px 0 10px',
        overflow: 'hidden',
        WebkitMaskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
      }}
    >
      <div style={{ display: 'flex', gap: 20, width: 'max-content', animation: 'bfg-marquee 120s linear infinite' }}>
        {marqueeItems.map((m, i) => (
          <div
            key={`${m.name}-${i}`}
            style={{
              position: 'relative',
              flex: '0 0 auto',
              width: 300,
              height: 206,
              borderRadius: 14,
              overflow: 'hidden',
              background: '#ece7dd',
            }}
          >
            <img
              src={m.img}
              alt={m.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '0 0 auto 0',
                height: '50%',
                background: 'linear-gradient(to bottom, rgba(16,16,12,0.45), transparent)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: 14,
                left: 16,
                fontFamily: "'Hanken Grotesque'",
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '0.01em',
                color: '#fff',
                textShadow: '0 1px 10px rgba(0,0,0,0.45)',
              }}
            >
              {m.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
