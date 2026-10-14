import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [counts, setCounts] = useState({
    established: 0,
    plantSize: 0,
    capacity: 0,
    workforce: 0,
    approvals: 0,
    exports: 0
  });

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsAnimated) {
        setStatsAnimated(true);
        animateCounters();
      }
    }, { threshold: 0.2 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateCounters = () => {
    const targets = {
      established: 1995,
      plantSize: 4000,
      capacity: 6500,
      workforce: 150,
      approvals: 15,
      exports: 2
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        established: Math.floor(targets.established * progress),
        plantSize: Math.floor(targets.plantSize * progress),
        capacity: Math.floor(targets.capacity * progress),
        workforce: Math.floor(targets.workforce * progress),
        approvals: Math.floor(targets.approvals * progress),
        exports: Math.floor(targets.exports * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <>
      {/* About Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/about banner.png')", backgroundPosition: 'center top', minHeight: '36vh', paddingTop: '110px', paddingBottom: '45px' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(13, 27, 61, 0.96) 0%, rgba(13, 27, 61, 0.8) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content" style={{ maxWidth: '700px' }}>
            <span className="section-subtitle" style={{ color: 'var(--color-mauve)' }}>Our Story</span>
            <h1 className="hero-title" style={{ fontSize: '42px', marginBottom: '12px' }}>Built on Engineering.<br /><span>Driven by Quality.</span></h1>
            <p className="hero-desc" style={{ fontSize: '16px', marginBottom: 0 }}>For nearly three decades, we have been manufacturing precision fastening solutions and engineered products trusted by automotive, construction, and OEM sectors globally.</p>
          </div>
        </div>
      </section>

      {/* Story & Origin Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="split-section" style={{ gap: '50px' }}>
            <div className="split-content">
              <span className="section-subtitle">Since 1995</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Our Journey of Precision</h2>
              <p className="lead-text">AVR Fasteners was founded in 1995 with a simple goal: to manufacture high-strength fastening products that match absolute international standards.</p>
              <p>What started as a single localized workshop under Mr. Atul Sehgal's technical direction has now grown into a multi-hectare modern production ecosystem. With the joining of Mr. Vipul Sehgal, we adopted advanced CNC machining centers, automated thread rolling, and in-house heat treatment systems.</p>
              <p>Today, we serve as a Tier-1 supplier to major automotive OEMs and general engineering giants. Our focus on quality assurance, technical custom tooling, and supply chain reliability has made us a trusted domestic brand and growing global exporter.</p>
            </div>
            <div className="split-img-wrap">
              <img src="/assets/hero-bg.png" alt="AVR Fasteners Industrial Production Floor" className="split-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Leadership</span>
            <h2 className="section-title">Meet Our Founders</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>Driven by technical expertise and strategic business leadership to deliver top engineering values.</p>
          </div>

          <div className="founders-grid">
            <div className="founder-card">
              <img src="/founder 1.png" alt="Mr. Atul Sehgal" className="founder-portrait" />
              <div className="founder-info">
                <h3>Mr. Atul Sehgal</h3>
                <span className="founder-role">Co-Founder & Managing Director</span>
                <p className="founder-bio">Mr. Atul Sehgal established AVR Fasteners in 1995. With over 30 years of hands-on mechanical engineering and cold forging expertise, he heads the technical manufacturing, metallurgy, and plant tooling operations.</p>
              </div>
            </div>

            <div className="founder-card">
              <img src="/founder 2.png" alt="Mr. Vipul Sehgal" className="founder-portrait" />
              <div className="founder-info">
                <h3>Mr. Vipul Sehgal</h3>
                <span className="founder-role">Co-Founder & Executive Director</span>
                <p className="founder-bio">Mr. Vipul Sehgal heads corporate strategy, OEM accounts, business development, and marketing. He holds an MBA and has scaled the manufacturing capacity to meet modern automotive demands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Counter Section */}
      <section ref={statsRef} className="section-padding stats-section" style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', borderTop: '1px solid var(--color-light)', borderBottom: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">{counts.established}</span>
              <span className="stat-label">Established</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.plantSize} Yds</span>
              <span className="stat-label">Plant Size</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.capacity} MT+</span>
              <span className="stat-label">Annual Capacity</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.workforce}+</span>
              <span className="stat-label">Workforce</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.approvals}+</span>
              <span className="stat-label">OEM approvals</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.exports}+</span>
              <span className="stat-label">Export countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="why-grid three-col">
            {/* Card 1: Mission */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ borderTopColor: 'var(--color-mauve)' }}>
                  <div className="flip-card-front-content">
                    <div className="why-icon" style={{ color: 'var(--color-mauve)' }}><i className="fa-solid fa-bullseye"></i></div>
                    <h3 className="why-title">Our Mission</h3>
                    <p className="why-desc" style={{ fontSize: '14px', marginTop: '10px', lineHeight: 1.5 }}>To engineer high-grade, zero-defect fasteners that empower global industries...</p>
                  </div>
                </div>
                <div className="flip-card-back mauve-bg">
                  <h3 className="flip-back-title">Our Mission Focus</h3>
                  <ul className="flip-back-list">
                    <li><i className="fa-solid fa-check"></i> Zero-defect fasteners</li>
                    <li><i className="fa-solid fa-check"></i> High-volume scalability</li>
                    <li><i className="fa-solid fa-check"></i> Technical OEM engineering</li>
                    <li><i className="fa-solid fa-check"></i> Ethical global partnerships</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Vision */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ borderTopColor: 'var(--color-steel)' }}>
                  <div className="flip-card-front-content">
                    <div className="why-icon" style={{ color: 'var(--color-steel)' }}><i className="fa-solid fa-eye"></i></div>
                    <h3 className="why-title">Our Vision</h3>
                    <p className="why-desc" style={{ fontSize: '14px', marginTop: '10px', lineHeight: 1.5 }}>To become a global benchmark in precision fastening solutions and machinery...</p>
                  </div>
                </div>
                <div className="flip-card-back steel-bg">
                  <h3 className="flip-back-title">Our Vision Pillars</h3>
                  <ul className="flip-back-list">
                    <li><i className="fa-solid fa-check"></i> Continuous tech adaptation</li>
                    <li><i className="fa-solid fa-check"></i> High-precision CNC systems</li>
                    <li><i className="fa-solid fa-check"></i> OEM product integration</li>
                    <li><i className="fa-solid fa-check"></i> Worldwide market reach</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Values */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ borderTopColor: 'var(--color-navy)' }}>
                  <div className="flip-card-front-content">
                    <div className="why-icon" style={{ color: 'var(--color-navy)' }}><i className="fa-solid fa-heart"></i></div>
                    <h3 className="why-title">Core Values</h3>
                    <p className="why-desc" style={{ fontSize: '14px', marginTop: '10px', lineHeight: 1.5 }}>We believe in absolute integrity, technological adaptation, and safety...</p>
                  </div>
                </div>
                <div className="flip-card-back navy-bg">
                  <h3 className="flip-back-title">Our Values</h3>
                  <ul className="flip-back-list">
                    <li><i className="fa-solid fa-check"></i> Absolute business integrity</li>
                    <li><i className="fa-solid fa-check"></i> Metallurgical safety checks</li>
                    <li><i className="fa-solid fa-check"></i> On-time cargo commitments</li>
                    <li><i className="fa-solid fa-check"></i> Supporting plant team staff</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Our Strengths</span>
            <h2 className="section-title">The Foundation of Our Capability</h2>
          </div>

          <div className="why-grid two-col">
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--color-white)', padding: '22px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--color-mauve)', fontSize: '28px', background: 'var(--color-mauve-light)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}><i className="fa-solid fa-microscope"></i></div>
              <div>
                <h3 style={{ color: 'var(--color-navy)', fontSize: '18px', marginBottom: '10px' }}>In-House Testing Labs</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-gunmetal)', lineHeight: 1.6 }}>Equipped with high-precision hardness testers, chemical analyzer spectrometers, tensile machines, and profilometer projectors to certify dimensional values.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--color-white)', padding: '22px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--color-steel)', fontSize: '28px', background: 'var(--color-steel-light)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}><i className="fa-solid fa-wrench"></i></div>
              <div>
                <h3 style={{ color: 'var(--color-navy)', fontSize: '18px', marginBottom: '10px' }}>In-House Tool Room</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-gunmetal)', lineHeight: 1.6 }}>Our dedicated tooling and die-making division enables rapid customization, prototyping, and swift production setup changes according to customer specs.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--color-white)', padding: '22px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--color-navy)', fontSize: '28px', background: 'var(--color-navy-light)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}><i className="fa-solid fa-fire-burner"></i></div>
              <div>
                <h3 style={{ color: 'var(--color-navy)', fontSize: '18px', marginBottom: '10px' }}>Controlled Heat Treatment</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-gunmetal)', lineHeight: 1.6 }}>Atmosphere-controlled batch furnaces allow us to quench and temper our products to exact mechanical grades (8.8, 10.9, 12.9) without surface decarb.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'var(--color-white)', padding: '22px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--color-mauve)', fontSize: '28px', background: 'var(--color-mauve-light)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}><i className="fa-solid fa-boxes-packing"></i></div>
              <div>
                <h3 style={{ color: 'var(--color-navy)', fontSize: '18px', marginBottom: '10px' }}>ERP Managed Supply Chain</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-gunmetal)', lineHeight: 1.6 }}>Fully digitized inventory management system tracks material trace codes, production stages, batch inspections, and handles on-time freight logs.</p>
              </div>
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
              <p>German Standards (DIN 931, 933, 934, 912)</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-mauve)' }}>
              <h3>ISO</h3>
              <p>International Standards (ISO 4014, 4017, 4762)</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-steel)' }}>
              <h3>ASTM</h3>
              <p>American structural grades (A325, A490, F568)</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-navy)' }}>
              <h3>BS</h3>
              <p>British Standards compliance specifications</p>
            </div>
            <div className="standard-card" style={{ borderTopColor: 'var(--color-mauve)' }}>
              <h3>JIS</h3>
              <p>Japanese Industrial automotive specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2 className="final-cta-title">Connect with Our Engineering Experts</h2>
          <p className="final-cta-desc">Discuss your specific custom fastener designs, raw material grades, or custom machinery needs today.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-navy)' }}>Contact Us</Link>
        </div>
      </section>
    </>
  );
}
