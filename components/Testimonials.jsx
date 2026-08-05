const quoteMark = {
  fontFamily: "'Spectral', serif",
  fontWeight: 500,
  color: '#1c5b3f',
  lineHeight: 0.5,
};

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ maxWidth: 1240, margin: '0 auto', padding: '104px 40px 36px' }}>
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
              Founder Testimonials
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
            What our founders say.
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#8a8073', maxWidth: '30ch' }}>
          Don&apos;t take our word for it — hear it from the founders we back.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30 }}>
        <div
          style={{
            background: '#1a1a16',
            borderRadius: 18,
            padding: 40,
            color: '#fff',
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Spectral', serif",
              fontWeight: 500,
              fontSize: 'clamp(44px,5vw,62px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            94%
          </div>
          <p style={{ margin: '14px 0 0', fontSize: 14.5, lineHeight: 1.6, color: '#b7b1a6' }}>
            of our founders would partner with BFG again — and most have, across multiple raises.
          </p>
        </div>
        <div
          style={{
            background: '#1a1a16',
            borderRadius: 18,
            padding: 40,
            color: '#fff',
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Spectral', serif",
              fontWeight: 500,
              fontSize: 'clamp(28px,3vw,38px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            4 out of 5 win rate
          </div>
          <p style={{ margin: '14px 0 0', fontSize: 14.5, lineHeight: 1.6, color: '#b7b1a6' }}>
            We are the preferred partner for early-stage founders.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 30,
          marginTop: 30,
        }}
      >
        <figure
          style={{
            margin: 0,
            background: '#fbf9f3',
            border: '1px solid rgba(26,26,22,0.09)',
            borderRadius: 18,
            padding: 'clamp(30px,2.6vw,40px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ ...quoteMark, fontSize: 48, height: 26 }}>&ldquo;</div>
          <blockquote
            style={{
              margin: '0 0 26px',
              fontFamily: "'Spectral', serif",
              fontWeight: 400,
              fontSize: 'clamp(17px,1.4vw,19px)',
              lineHeight: 1.55,
              letterSpacing: '-0.005em',
              color: '#26241e',
              textWrap: 'pretty',
            }}
          >
            Boulder Food Group was great to work with. We would not have been able to achieve our goals without
            them. We started Birch Benders right out of college, so had little to no CPG experience. BFG coached
            and mentored us along the way, and provided much more than just capital. We are all friends to this
            day, over a decade after their first investment into our business. We had a fantastic outcome with
            Birch Benders, thanks in no small part to the wonderful team at BFG.
          </blockquote>
          <figcaption
            style={{
              marginTop: 'auto',
              borderTop: '1px solid rgba(26,26,22,0.1)',
              paddingTop: 24,
            }}
          >
            <div style={{ fontFamily: "'Spectral', serif", fontWeight: 500, fontSize: 17, color: '#1a1a16' }}>
              Matthew P. LaCasse
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#8a8073',
                textTransform: 'uppercase',
                marginTop: 2,
              }}
            >
              Founder &amp; CEO, Birch Benders
            </div>
          </figcaption>
        </figure>

        <figure
          style={{
            margin: 0,
            background: '#fbf9f3',
            border: '1px solid rgba(26,26,22,0.09)',
            borderRadius: 18,
            padding: 'clamp(30px,2.6vw,40px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ ...quoteMark, fontSize: 48, height: 26 }}>&ldquo;</div>
          <blockquote
            style={{
              margin: '0 0 26px',
              fontFamily: "'Spectral', serif",
              fontWeight: 400,
              fontSize: 'clamp(17px,1.4vw,19px)',
              lineHeight: 1.55,
              letterSpacing: '-0.005em',
              color: '#26241e',
              textWrap: 'pretty',
            }}
          >
            When BFG first invested, OLIPOP was just starting out with under $100K in revenue. Scaling from there
            to a $500M+ business requires partners who truly believe in your vision. BFG backed us round after
            round while delivering high-impact introductions and strategic support along the way. Their belief in
            our mission and their continuous partnership have made them invaluable to the OLIPOP story.
          </blockquote>
          <figcaption
            style={{
              marginTop: 'auto',
              borderTop: '1px solid rgba(26,26,22,0.1)',
              paddingTop: 24,
            }}
          >
            <div style={{ fontFamily: "'Spectral', serif", fontWeight: 500, fontSize: 17, color: '#1a1a16' }}>
              Ben Goodwin
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#8a8073',
                textTransform: 'uppercase',
                marginTop: 2,
              }}
            >
              Founder &amp; CEO, OLIPOP
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
