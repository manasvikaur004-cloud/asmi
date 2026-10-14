import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CustomerMarquee from '../components/CustomerMarquee';

export default function Home() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 2;
      sliderRef.current.scrollBy({
        left: direction === 'prev' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/landing page.png')" }}>
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <h1 className="hero-title">Precision Engineering.<br /><span>Trusted Manufacturing.</span></h1>
            <p className="hero-desc">Manufacturers of High Tensile Fasteners, Precision Components, Mirror Rods, Stainless Steel Fasteners and Specialised Fasteners for OEM. We deliver reliable engineering solutions built for strength, precision and long-term performance.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">Explore Products</Link>
              <Link to="/contact" className="btn btn-secondary">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Strip (Cards below Hero) */}
      <section className="capabilities-strip">
        <div className="container">
          <div className="cap-grid">
            <div className="cap-card">
              <div className="cap-icon-wrap"><i className="fa-solid fa-industry"></i></div>
              <h3 className="cap-title">OEM Manufacturing</h3>
              <p className="cap-desc">Custom production partner for leading industrial players.</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon-wrap"><i className="fa-solid fa-compass-drafting"></i></div>
              <h3 className="cap-title">Custom Engineering</h3>
              <p className="cap-desc">Made precisely to customer drawings & print dimensions.</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon-wrap"><i className="fa-solid fa-layer-group"></i></div>
              <h3 className="cap-title">High Volume</h3>
              <p className="cap-desc">Scalable infrastructure built for massive batch sizes.</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon-wrap"><i className="fa-solid fa-gauge-high"></i></div>
              <h3 className="cap-title">Precision Quality</h3>
              <p className="cap-desc">Stringent dimensional tolerance controls & checks.</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon-wrap"><i className="fa-solid fa-truck-fast"></i></div>
              <h3 className="cap-title">On-Time Delivery</h3>
              <p className="cap-desc">Reliable supply logistics and inventory planning.</p>
            </div>
            <div className="cap-card">
              <div className="cap-icon-wrap"><i className="fa-solid fa-headset"></i></div>
              <h3 className="cap-title">Technical Support</h3>
              <p className="cap-desc">Expert engineer collaboration from setup to dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-wrap">
            <h2 className="trust-title">Trusted Manufacturing Since 1995</h2>
            <div className="trust-items">
              <div className="trust-item"><i className="fa-solid fa-circle-check"></i> OEM Manufacturing Partner</div>
              <div className="trust-item"><i className="fa-solid fa-circle-check"></i> ISO Certified Manufacturing</div>
              <div className="trust-item"><i className="fa-solid fa-circle-check"></i> Precision Engineered Products</div>
              <div className="trust-item"><i className="fa-solid fa-circle-check"></i> Customer-Focused Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Marquee Section */}
      <CustomerMarquee />

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="split-section">
            <div className="split-img-wrap">
              <img src="/Factory Images/9.jpeg" alt="AVR Fasteners Manufacturing Facility" className="split-img" />
            </div>
            <div className="split-content">
              <span className="section-subtitle">Built on Engineering. Driven by Quality.</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Quality-Driven Fastening Solutions</h2>
              <p className="lead-text">For nearly three decades, we have been manufacturing precision fastening solutions and engineered products trusted by customers across automotive, construction, agriculture, railways and industrial engineering sectors.</p>
              <p>Every product leaving our facility represents our commitment to quality, consistency and customer satisfaction. We invest constantly in high-precision technology and testing laboratories to ensure compliance with the toughest standards.</p>
              <Link to="/about" className="btn btn-navy" style={{ marginTop: '10px' }}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-light)', borderBottom: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Our Products</span>
            <h2 className="section-title">Complete Engineering Solutions Under One Roof</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>Whether it's industrial fasteners, custom-engineered components or mirror rods, we provide solutions designed around performance and precision.</p>
          </div>

          <div className="products-slider-container">
            <div className="products-slider" ref={sliderRef}>
              {/* Category 1: High Tensile Bolts */}
              <div className="product-card">
                <div className="product-card-img-wrap">
                  <img src="/High Tensile Bolts/Hex Bolt.png?v=2" alt="High Tensile Bolts" className="product-card-img" />
                </div>
                <div className="product-card-info">
                  <h3 className="product-card-title">High Tensile Bolts</h3>
                  <p className="product-card-desc">High-strength hex, flange, socket head, and custom bolts for heavy load joints.</p>
                  <Link to="/products?category=bolts" className="product-card-link">Explore Bolts →</Link>
                </div>
              </div>

              {/* Category 2: High Tensile Nuts */}
              <div className="product-card">
                <div className="product-card-img-wrap">
                  <img src="/High Tensile Nuts/Hex Nut.png?v=2" alt="High Tensile Nuts" className="product-card-img" />
                </div>
                <div className="product-card-info">
                  <h3 className="product-card-title">High Tensile Nuts</h3>
                  <p className="product-card-desc">Hex, flange, lock, castle, and weld nuts manufactured to OEM grade specifications.</p>
                  <Link to="/products?category=nuts" className="product-card-link">Explore Nuts →</Link>
                </div>
              </div>

              {/* Category 3: Precision Screws */}
              <div className="product-card">
                <div className="product-card-img-wrap">
                  <img src="/Precision Screws/Hex screw.png?v=2" alt="Precision Screws" className="product-card-img" />
                </div>
                <div className="product-card-info">
                  <h3 className="product-card-title">Precision Screws</h3>
                  <p className="product-card-desc">Countersunk, pan head, socket, and specialized screws with uniform thread accuracy.</p>
                  <Link to="/products?category=screws" className="product-card-link">Explore Screws →</Link>
                </div>
              </div>

              {/* Category 4: Threaded Studs */}
              <div className="product-card">
                <div className="product-card-img-wrap">
                  <img src="/Threaded Studs/Double-End Stud.png?v=2" alt="Threaded Studs" className="product-card-img" />
                </div>
                <div className="product-card-info">
                  <h3 className="product-card-title">Threaded Studs</h3>
                  <p className="product-card-desc">Double-end, tap-end, and continuous threaded rods manufactured to tight tolerances.</p>
                  <Link to="/products?category=studs" className="product-card-link">Explore Studs →</Link>
                </div>
              </div>

              {/* Category 5: Precision Components */}
              <div className="product-card">
                <div className="product-card-img-wrap">
                  <img src="/Precision Components/component.png?v=2" alt="Precision Components" className="product-card-img" />
                </div>
                <div className="product-card-info">
                  <h3 className="product-card-title">Precision Components</h3>
                  <p className="product-card-desc">Custom-machined automotive pins, stepped collars, bushings, and turned engineering parts.</p>
                  <Link to="/products?category=components" className="product-card-link">Explore Components →</Link>
                </div>
              </div>

              {/* Category 6: Mirror Rods */}
              <div className="product-card">
                <div className="product-card-img-wrap">
                  <img src="/Two-Wheeler Mirror Rods/Two-Wheeler Mirror Rods.png?v=2" alt="Mirror Rods" className="product-card-img" />
                </div>
                <div className="product-card-info">
                  <h3 className="product-card-title">Mirror Rods</h3>
                  <p className="product-card-desc">Two-wheeler mirror stems and curved rod assemblies in chrome and matte finishes.</p>
                  <Link to="/products?category=rods" className="product-card-link">Explore Mirror Rods →</Link>
                </div>
              </div>
            </div>

            <div className="slider-controls">
              <button className="slider-btn prev" aria-label="Previous Slide" onClick={() => scrollSlider('prev')}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="slider-btn next" aria-label="Next Slide" onClick={() => scrollSlider('next')}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Core Strengths</span>
            <h2 className="section-title">Why Customers Choose Us</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>Consistent quality, dedicated technical teams, and on-time dispatches make us a trusted manufacturing ally.</p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><i className="fa-solid fa-award"></i></div>
              <h3 className="why-card-title">Stringent Quality Control</h3>
              <p className="why-desc">Every batch goes through optical sorters, hardness checks, tensile testing, and chemical composition analysis.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><i className="fa-solid fa-sliders"></i></div>
              <h3 className="why-card-title">End-to-End Capabilities</h3>
              <p className="why-desc">From cold forging and CNC machining to heat treatment and surface plating, all under one roof.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><i className="fa-solid fa-pen-ruler"></i></div>
              <h3 className="why-card-title">Custom Development</h3>
              <p className="why-desc">We develop custom tooling and prototypes rapidly from customer drawings and samples.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><i className="fa-solid fa-boxes-stacked"></i></div>
              <h3 className="why-card-title">Bulk Capacity</h3>
              <p className="why-desc">Multi-station heading machines capable of producing millions of high-tensile components monthly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Manufacturing Process</span>
            <h2 className="section-title">Precision Begins with Process</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>How raw wire rod is transformed into high-grade fastening components inside our facility.</p>
          </div>

          <div className="timeline-grid">
            <div className="timeline-card">
              <div className="timeline-number">01</div>
              <h3 className="timeline-title">Raw Material Selection</h3>
              <p className="timeline-desc">Procuring certified alloy and carbon steel coils with strict chemical traceability.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-number">02</div>
              <h3 className="timeline-title">Cold Heading & Forging</h3>
              <p className="timeline-desc">Cold-forming, hot forging, and heading processes shape the fastener blanks to exact sizes.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-number">03</div>
              <h3 className="timeline-title">Thread Rolling</h3>
              <p className="timeline-desc">Thread form rolling ensures unbroken grain structure and high fatigue resistance.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-number">04</div>
              <h3 className="timeline-title">Heat Treatment</h3>
              <p className="timeline-desc">Continuous mesh belt furnaces achieve uniform core hardness and target tensile grades.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-number">05</div>
              <h3 className="timeline-title">Surface Finishing</h3>
              <p className="timeline-desc">Plating, black oxide, phosphating, or chrome finishes tailored for corrosion protection.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-number">06</div>
              <h3 className="timeline-title">Testing & Dispatch</h3>
              <p className="timeline-desc">Batch sampling, dimensional verification, and secure packaging ready for immediate assembly line use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Industries We Serve</span>
            <h2 className="section-title">Fasteners for Demanding Applications</h2>
          </div>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon"><i className="fa-solid fa-car-side"></i></div>
              <h3 className="industry-title">Automotive</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><i className="fa-solid fa-tractor"></i></div>
              <h3 className="industry-title">Agriculture</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><i className="fa-solid fa-trowel-bricks"></i></div>
              <h3 className="industry-title">Construction</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><i className="fa-solid fa-train"></i></div>
              <h3 className="industry-title">Railways</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><i className="fa-solid fa-gear"></i></div>
              <h3 className="industry-title">Heavy Machinery</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon"><i className="fa-solid fa-solar-panel"></i></div>
              <h3 className="industry-title">Renewable Energy</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Standards Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light)', borderBottom: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Compliance</span>
            <h2 className="section-title">International Manufacturing Standards</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>We manufacture products complying with globally recognized engineering guidelines, accommodating custom tolerances.</p>
          </div>

          <div className="industries-grid five-col">
            <div className="standard-card" style={{ borderTopColor: 'var(--color-navy)' }}>
              <h3>DIN</h3>
              <p>German Standards</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-navy)' }}>
              <h3>ISO</h3>
              <p>International Standards</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-navy)' }}>
              <h3>IS</h3>
              <p>Indian Standards</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-navy)' }}>
              <h3>ASTM</h3>
              <p>American Standards</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-navy)' }}>
              <h3>JIS</h3>
              <p>Japanese Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="final-cta">
        <div className="container">
          <h2 className="final-cta-title">Looking for a Reliable Manufacturing Partner?</h2>
          <p className="final-cta-desc">Let's build engineering solutions designed for precision, performance and long-term reliability.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-navy)' }}>Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
