import React from 'react';
import { Link } from 'react-router-dom';

export default function Infrastructure() {
  return (
    <>
      {/* Infrastructure Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/infrastructure banner.png')", minHeight: '36vh', paddingTop: '110px', paddingBottom: '45px' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(13, 27, 61, 0.96) 0%, rgba(13, 27, 61, 0.8) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content" style={{ maxWidth: '700px' }}>
            <span className="section-subtitle" style={{ color: 'var(--color-mauve)' }}>Advanced Facility</span>
            <h1 className="hero-title" style={{ fontSize: '42px', marginBottom: '12px' }}>Advanced Machinery.<br /><span>Rigorous Standards.</span></h1>
            <p className="hero-desc" style={{ fontSize: '16px', marginBottom: 0 }}>Our state-of-the-art cold forging setup, heat treatment furnaces, and certified testing laboratories ensure every component is manufactured to micro-tolerances.</p>
          </div>
        </div>
      </section>

      {/* Facility Overview Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="split-section" style={{ gap: '50px' }}>
            <div className="split-img-wrap">
              <img src="/Factory Images/18.jpeg" alt="Fastener Production Plant Floor" className="split-img" />
            </div>
            <div className="split-content">
              <span className="section-subtitle">Manufacturing Capacity</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>High-Volume Production Plant</h2>
              <p className="lead-text">Spanning over a 2,500 square yard footprint, our plant houses a highly integrated cold forging, heat treatment and thread-rolling ecosystem.</p>
              <p>Our production floor is optimized for lean manufacturing, operating multi-station headers, high-speed threaders, and precision CNC grinding lines. This setup allows us to output over 6,500 Metric Tons of high-tensile fasteners annually while keeping dimensional deviations close to zero. We have 4 lines of continuous shaker hearth furnaces for heat treatment.</p>
              <p>We work directly with certified steel mills to secure alloy rods (Grade 5.6, 8.8, 10.9, 12.9) and verify material trace codes from input to final crate dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inside Our Manufacturing Facility Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Inside Our Manufacturing Facility</span>
            <h2 className="section-title">Integrated Production Environment</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>Showcase our integrated manufacturing environment, production floor, machinery and operations through real factory photographs.</p>
          </div>

          <div className="facility-masonry">
            <div className="facility-masonry-item large">
              <img src="/Factory Images/18.jpeg" alt="Featured Production Plant Overview" />
            </div>
            <div className="facility-masonry-item wide">
              <img src="/Factory Images/4.jpeg" alt="Machinery in Action" />
            </div>
            <div className="facility-masonry-item">
              <img src="/Factory Images/10.jpeg" alt="Production Monitoring & Inspection" />
            </div>
            <div className="facility-masonry-item">
              <img src="/Factory Images/11.jpeg" alt="Completed Cold Forged Parts" />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Production Planning Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="split-section" style={{ gap: '50px' }}>
            <div className="split-img-wrap">
              <img src="/Factory Images/9.jpeg" alt="Engineering and Production Planning Coordination" className="split-img" />
            </div>
            <div className="split-content">
              <span className="section-subtitle">Production Control</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Engineering & Production Planning</h2>
              <p className="lead-text">Highly synchronized technical coordination and scheduling form the backbone of our high-volume output operations.</p>
              <p>Our engineering division coordinates directly with OEM technical teams to translate blueprint designs into exact machinery configurations. Every job routing document defines machine assignment, sequence of manufacture, raw material spec, tooling configurations, and quality checkpoints.</p>
              <p>Using advanced production scheduling, we minimize setup times for multi-station headers and CNC lines. Real-time production monitoring tracks cycle speeds and output rates, ensuring delivery timelines are met with strict metallurgical and dimensional accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Facilities Laboratory Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Zero Defect Promise</span>
            <h2 className="section-title">In-House Testing Facilities</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>Our testing lab certifies all batches before shipment. We provide detailed material test reports (MTR) and dimensional certificates.</p>
          </div>

          <div className="why-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div className="why-card" style={{ borderTopColor: 'var(--color-mauve)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-mauve)', marginBottom: '20px' }}><i className="fa-solid fa-cube"></i></div>
              <h3 className="why-title">Hardness Testing</h3>
              <p className="why-desc">Rockwell (HRC, HRB) and core hardness testers verify heat treatment depth, tempering quality, and surface strength.</p>
            </div>

            <div className="why-card" style={{ borderTopColor: 'var(--color-steel)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-steel)', marginBottom: '20px' }}><i className="fa-solid fa-arrows-up-down"></i></div>
              <h3 className="why-title">Tensile & Proof Load</h3>
              <p className="why-desc">Universal Testing Machines (UTM) evaluate ultimate breaking strength, proof load capacity, and material elongation.</p>
            </div>

            <div className="why-card" style={{ borderTopColor: 'var(--color-navy)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-navy)', marginBottom: '20px' }}><i className="fa-solid fa-binoculars"></i></div>
              <h3 className="why-title">Profile Projector</h3>
              <p className="why-desc">High-magnification optical projectors inspect thread flanks, pitch, root radius, and critical shoulder tolerances.</p>
            </div>

            <div className="why-card" style={{ borderTopColor: 'var(--color-navy)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-navy)', marginBottom: '20px' }}><i className="fa-solid fa-flask"></i></div>
              <h3 className="why-title">Chemical Spectrometer</h3>
              <p className="why-desc">Advanced optical emission spectrometers verify exact elemental composition, carbon content, and alloy percentages.</p>
            </div>

            <div className="why-card" style={{ borderTopColor: 'var(--color-mauve)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-mauve)', marginBottom: '20px' }}><i className="fa-solid fa-layer-group"></i></div>
              <h3 className="why-title">Coating Thickness</h3>
              <p className="why-desc">Magnetic gauge and digital thickness meters measure electro-plated zinc, phosphating, and passivation coating layers.</p>
            </div>

            <div className="why-card" style={{ borderTopColor: 'var(--color-steel)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-steel)', marginBottom: '20px' }}><i className="fa-solid fa-cloud-showers-heavy"></i></div>
              <h3 className="why-title">Salt Spray Chamber</h3>
              <p className="why-desc">Accelerated environmental testing verifies corrosion defense and red-rust resistance up to 500+ hours.</p>
            </div>

            <div className="why-card" style={{ borderTopColor: 'var(--color-mauve)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-mauve)', marginBottom: '20px' }}><i className="fa-solid fa-rotate-right"></i></div>
              <h3 className="why-title">Torque Testing</h3>
              <p className="why-desc">In-house calibrated torque wrenches verify required tightening torque limits and clamp-load performance as per standards.</p>
            </div>

            <div className="why-card" style={{ borderTopColor: 'var(--color-steel)', padding: '24px' }}>
              <div className="why-icon" style={{ color: 'var(--color-steel)', marginBottom: '20px' }}><i className="fa-solid fa-microscope"></i></div>
              <h3 className="why-title">Metallurgical Microscope</h3>
              <p className="why-desc">High-precision metallurgical microscopes analyze grain structure, decarburization layers, and internal microstructures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing in Action Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Operations</span>
            <h2 className="section-title">Manufacturing in Action</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>A glimpse into our daily manufacturing operations.</p>
          </div>

          <div className="action-gallery">
            <div className="action-gallery-item">
              <img src="/Factory Images/2.jpeg" alt="Daily Operations 1" />
            </div>
            <div className="action-gallery-item">
              <img src="/Factory Images/5.jpeg" alt="Daily Operations 2" />
            </div>
            <div className="action-gallery-item">
              <img src="/Factory Images/6.jpeg" alt="Daily Operations 3" />
            </div>
            <div className="action-gallery-item">
              <img src="/Factory Images/8.jpeg" alt="Daily Operations 4" />
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

      {/* OEM Quality Partnership Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="split-section" style={{ gap: '50px', alignItems: 'center' }}>
            <div className="split-content">
              <span className="section-subtitle">OEM Partner</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Automotive Quality Systems</h2>
              <p className="lead-text">We implement advanced automotive quality processes to maintain key supply agreements.</p>

              <div className="quality-table-wrap" style={{ marginTop: '30px', border: '1px solid var(--color-light)', borderRadius: 'var(--border-radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', backgroundColor: 'var(--color-white)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-light)' }}>
                      <td style={{ padding: '12px 18px', fontWeight: 700, color: 'var(--color-navy)', width: '240px', fontFamily: 'var(--font-heading)', fontSize: '14px', verticalAlign: 'middle' }}>
                        <i className="fa-solid fa-clipboard-check" style={{ color: 'var(--color-mauve)', marginRight: '8px', fontSize: '15px' }}></i> PPAP Documentation
                      </td>
                      <td style={{ padding: '12px 18px', color: 'var(--color-gunmetal)', fontSize: '14px', lineHeight: 1.5, verticalAlign: 'middle' }}>
                        Full level 3 PPAP support including FMEA, Control Plans, and ISIR reports.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-light)' }}>
                      <td style={{ padding: '12px 18px', fontWeight: 700, color: 'var(--color-navy)', width: '240px', fontFamily: 'var(--font-heading)', fontSize: '14px', verticalAlign: 'middle' }}>
                        <i className="fa-solid fa-chart-line" style={{ color: 'var(--color-mauve)', marginRight: '8px', fontSize: '15px' }}></i> Statistical Process
                      </td>
                      <td style={{ padding: '12px 18px', color: 'var(--color-gunmetal)', fontSize: '14px', lineHeight: 1.5, verticalAlign: 'middle' }}>
                        Active SPC monitoring of dimensions during long header runs.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-light)' }}>
                      <td style={{ padding: '12px 18px', fontWeight: 700, color: 'var(--color-navy)', width: '240px', fontFamily: 'var(--font-heading)', fontSize: '14px', verticalAlign: 'middle' }}>
                        <i className="fa-solid fa-list-check" style={{ color: 'var(--color-mauve)', marginRight: '8px', fontSize: '15px' }}></i> Traceable Material
                      </td>
                      <td style={{ padding: '12px 18px', color: 'var(--color-gunmetal)', fontSize: '14px', lineHeight: 1.5, verticalAlign: 'middle' }}>
                        End-to-end batch heat numbers trace from raw wire to shipping.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 18px', fontWeight: 700, color: 'var(--color-navy)', width: '240px', fontFamily: 'var(--font-heading)', fontSize: '14px', verticalAlign: 'middle' }}>
                        <i className="fa-solid fa-award" style={{ color: 'var(--color-mauve)', marginRight: '8px', fontSize: '15px' }}></i> Low PPM Targets
                      </td>
                      <td style={{ padding: '12px 18px', color: 'var(--color-gunmetal)', fontSize: '14px', lineHeight: 1.5, verticalAlign: 'middle' }}>
                        Commitment to continuous defect reduction below 50 PPM threshold.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="split-img-wrap">
              <img src="/Factory Images/19.jpeg" alt="Precision measurement in testing lab" className="split-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality at Every Stage Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-subtitle">Process Integrity</span>
            <h2 className="section-title">Quality at Every Stage</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-gunmetal)' }}>Our commitment to quality assurance is implemented throughout our manufacturing process.</p>
          </div>

          <div className="quality-stage-grid">
            <div className="quality-stage-card">
              <div className="quality-stage-img-wrap">
                <img src="/Factory Images/12.jpeg" alt="Precision CNC Operations" />
              </div>
              <div className="quality-stage-info">
                <h3 className="quality-stage-title">Precision CNC Operations</h3>
                <p className="quality-stage-desc">Utilizing high-precision CNC machinery to ensure exact dimensional tolerances for all fasteners.</p>
              </div>
            </div>

            <div className="quality-stage-card">
              <div className="quality-stage-img-wrap">
                <img src="/Factory Images/16.jpeg" alt="Machine Inspection" />
              </div>
              <div className="quality-stage-info">
                <h3 className="quality-stage-title">Machine Inspection</h3>
                <p className="quality-stage-desc">Conducting routine technical machine audits and tooling inspections to prevent defects at the source.</p>
              </div>
            </div>

            <div className="quality-stage-card">
              <div className="quality-stage-img-wrap">
                <img src="/Factory Images/17.jpeg" alt="Production Monitoring" />
              </div>
              <div className="quality-stage-info">
                <h3 className="quality-stage-title">Production Monitoring</h3>
                <p className="quality-stage-desc">Real-time process monitoring of cold formers and headers to maintain consistency and rate requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2 className="final-cta-title">Audit Our Infrastructure</h2>
          <p className="final-cta-desc">We welcome physical factory audits and quality system reviews from prospective OEM clients.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-navy)' }}>Schedule an Audit</Link>
        </div>
      </section>
    </>
  );
}
