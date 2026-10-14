import React from 'react';

export default function CustomerMarquee() {
  const row1Logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const row2Logos = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // Repeat 4 times for seamless 4K screen coverage
  const repeatedRow1 = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos];
  const repeatedRow2 = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section className="customer-logos-section">
      <div className="container">
        <div className="logos-header">
          <span className="logos-subtext">Trusted by Leading OEMs & Tier-1 Industrial Clients</span>
        </div>
      </div>
      <div className="marquee-container">
        {/* Row 1: Scrolling Left (Logos 1 to 10) */}
        <div className="marquee-row marquee-left">
          <div className="marquee-track">
            {repeatedRow1.map((logoNum, idx) => (
              <div className="logo-card" key={`r1-${logoNum}-${idx}`}>
                <img
                  src={`/customer logo/${logoNum}.png`}
                  alt={`Client Partner Logo ${logoNum}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right (Logos 11 to 20) */}
        <div className="marquee-row marquee-right">
          <div className="marquee-track">
            {repeatedRow2.map((logoNum, idx) => (
              <div className="logo-card" key={`r2-${logoNum}-${idx}`}>
                <img
                  src={`/customer logo/${logoNum}.png`}
                  alt={`Client Partner Logo ${logoNum}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
