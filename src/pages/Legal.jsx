import React from 'react';

export default function PrivacyPolicy() {
  return (
    <>
      {/* Policy Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/about banner.png')", backgroundPosition: 'center top', minHeight: '34vh', paddingTop: '110px', paddingBottom: '45px' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(13, 27, 61, 0.96) 0%, rgba(13, 27, 61, 0.82) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content" style={{ maxWidth: '780px' }}>
            <span className="section-subtitle" style={{ color: 'var(--color-mauve)' }}>Corporate Governance & Transparency</span>
            <h1 className="hero-title" style={{ fontSize: '40px', marginBottom: '12px' }}>Privacy Policy &<br /><span>Legal Disclaimer</span></h1>
            <p className="hero-desc" style={{ fontSize: '16px', marginBottom: 0 }}>Our commitment to transparent operations, data integrity, and defined operational boundaries.</p>
          </div>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        <div className="container">
          <div className="policy-wrapper">
            <div className="policy-meta">
              <div>
                <strong>Entity:</strong> AVR Fasteners PVT LTD (Derabassi, Punjab, India)
              </div>
              <div className="policy-badge">
                <i className="fa-solid fa-shield-halved"></i> Strictly Informational & Zero-Tracking Site
              </div>
            </div>

            {/* 1. Introduction & Scope */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-circle-info"></i> 1. Scope & Purpose of this Website</h2>
              <p>This website (<strong>avrfasteners.com</strong>) is operated by <strong>AVR Fasteners PVT LTD</strong> ("we", "us", or "our"), an Indian private limited manufacturing enterprise having its registered and operational manufacturing facilities at D-37 Industrial Focal Point, P.O Mubarikpur - 140201, Derabassi, Punjab, India.</p>
              <p>The sole purpose of this website is to provide corporate, infrastructural, and engineering reference information regarding our manufacturing capabilities in high-tensile fasteners, precision components, mirror rods, and cold-forming machinery. This policy outlines how information is handled when you browse this site and sets forth the legal boundaries governing use of this website.</p>
            </div>

            {/* 2. What We Collect (Zero Tracking) */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-cookie-bite"></i> 2. Cookies & Automated Tracking Technologies</h2>
              <p>We respect visitor privacy and maintain an uncompromising approach toward digital transparency:</p>

              <div className="policy-card-grid">
                <div className="policy-feature-card">
                  <h4><i className="fa-solid fa-ban"></i> No Tracking Cookies</h4>
                  <p>This website does not deploy advertising cookies, remarketing trackers, or persistent visitor identification cookies on your browser.</p>
                </div>
                <div className="policy-feature-card">
                  <h4><i className="fa-solid fa-chart-line"></i> No Telemetry Analytics</h4>
                  <p>We do not run invasive user analytics or behavioral profiling scripts (no Google Analytics, Facebook Pixel, or Hotjar).</p>
                </div>
                <div className="policy-feature-card">
                  <h4><i className="fa-solid fa-user-lock"></i> No Account Registrations</h4>
                  <p>There are no visitor accounts, passwords, or stored profile databases on our web servers. Browsing is completely open.</p>
                </div>
                <div className="policy-feature-card">
                  <h4><i className="fa-solid fa-database"></i> No Data Monetization</h4>
                  <p>We never sell, lease, commercialize, or share visitor browsing information with any advertising exchanges or third-party data brokers.</p>
                </div>
              </div>

              <p>Standard web server log files (such as IP address, browser type, and access timestamp) may be automatically recorded by our web hosting provider strictly for technical transmission diagnostics, DDoS mitigation, and server security. These technical logs are not cross-referenced with any personally identifiable identities.</p>
            </div>

            {/* 3. Voluntary Business Inquiries */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-envelope-open-text"></i> 3. Voluntary Information Submitted by You</h2>
              <p>When you contact us to request a quotation (RFQ), technical inquiry, or commercial consultation, you may voluntarily provide business contact details via:</p>
              <ul>
                <li><strong>Official Email:</strong> Direct correspondence sent to <code>info@avrfasteners.com</code>.</li>
                <li><strong>Telephone:</strong> Phone communication to our corporate desk at <code>+91 98726 64555</code>.</li>
                <li><strong>WhatsApp:</strong> User-initiated chat via our verified WhatsApp business channel.</li>
                <li><strong>Request a Quote Form:</strong> Information submitted via our dedicated Google Form link.</li>
              </ul>
              <p><strong>Use of Inquiry Information:</strong> Any corporate contact names, official email addresses, phone numbers, and engineering specifications or CAD drawings voluntarily shared with us are utilized strictly for evaluating manufacturing feasibility, preparing formal price quotations, coordinating logistics, and fulfilling bilateral B2B commercial agreements. We do not use this information for unsolicited consumer marketing.</p>
            </div>

            {/* 4. Third-Party Platform Scope & Limitation */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-arrow-up-right-from-square"></i> 4. Third-Party Links & External Boundary Disclaimer</h2>
              <p>To facilitate communication and business inquiries, our website contains external links directing users to third-party services and platforms:</p>
              <ul>
                <li><strong>Google Forms (docs.google.com):</strong> Used as our digital Request-a-Quote portal. Submissions made via Google Forms are processed on Google's cloud infrastructure and are governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-mauve)', textDecoration: 'underline' }}>Google's Privacy Policy and Terms of Service</a>.</li>
                <li><strong>WhatsApp (Meta Platforms):</strong> When you click our WhatsApp link, you are transferred to the WhatsApp messaging application subject to Meta's privacy protocols.</li>
                <li><strong>LinkedIn:</strong> Corporate social links redirect to LinkedIn and are subject to LinkedIn's member agreement.</li>
                <li><strong>Google Maps:</strong> Directions and location services operate under Google Maps Platform policies.</li>
              </ul>

              <div className="policy-notice-box">
                <p><strong><i className="fa-solid fa-triangle-exclamation" style={{ color: 'var(--color-mauve)', marginRight: '6px' }}></i> Boundary of Liability:</strong> AVR Fasteners PVT LTD does not own, control, or monitor the internal security or data retention practices of these third-party platforms. Once you click an external link and leave <code>avrfasteners.com</code>, all interactions, data submissions, and messaging take place entirely outside the scope and jurisdiction of this website policy. We encourage you to review the privacy notices of any external site you visit.</p>
              </div>
            </div>

            {/* 5. Engineering & Technical Disclaimer */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-wrench"></i> 5. Technical Specifications & Catalog Disclaimer</h2>
              <p>All product photographs, 3D renderings, dimensional tables, DIN / ISO / ASTM standard references, mechanical property ranges, and application descriptions displayed on this website are provided strictly for general engineering orientation and illustrative guidance.</p>
              <p>Because industrial fasteners and cold-forged components often require custom metallurgical grades, heat treatments, plating tolerances, and application-specific torque parameters, <strong>nothing on this website constitutes a binding technical guarantee or unilateral warranty</strong>. Exact dimensional tolerances, test certificates (e.g. EN 10204 Type 3.1 / PPAP Level 3), raw material test reports, and quality criteria are determined solely by approved customer 2D/3D manufacturing drawings and confirmed Purchase Orders.</p>
            </div>

            {/* 6. Commercial Quotations & Contracts */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-file-contract"></i> 6. Commercial Terms & Quotations</h2>
              <p>Information presented on this website does not constitute an irrevocable commercial offer or price tender. Unit prices, minimum order quantities (MOQ), raw material surcharge adjustments, packaging specifications, and delivery lead times are confirmed exclusively through formal, written Quotation Performa and formal Purchase Order (PO) acknowledgments issued directly by authorized personnel of AVR Fasteners PVT LTD.</p>
            </div>

            {/* 7. Intellectual Property */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-copyright"></i> 7. Intellectual Property & Trademark Notice</h2>
              <p>The "AVR Fasteners PVT LTD" corporate name, logo, website design, graphics, custom product iconography, and technical descriptive text are the intellectual property of AVR Fasteners PVT LTD. All client and customer logos displayed in our partner marquee are the registered trademarks of their respective owners and are displayed strictly for illustrative reference to indicate past or ongoing component manufacturing relationships.</p>
            </div>

            {/* 8. Governing Law & Contact */}
            <div className="policy-section">
              <h2><i className="fa-solid fa-gavel"></i> 8. Governing Law & Contact Information</h2>
              <p>This policy, the website, and all legal matters pertaining to browsing this site shall be governed by and construed in accordance with the laws of <strong>India</strong>, including the Digital Personal Data Protection Act (DPDP Act, 2023). Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in <strong>Punjab / Mohali, India</strong>.</p>

              <p>For any questions, clarifications, or privacy-related communications regarding this policy, please reach out to our corporate office:</p>

              <div className="footer-contact" style={{ backgroundColor: 'var(--color-light-bg)', padding: '20px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-light)', marginTop: '16px' }}>
                <div className="footer-contact-item" style={{ color: 'var(--color-navy)', marginBottom: '10px' }}>
                  <i className="fa-solid fa-building" style={{ color: 'var(--color-mauve)' }}></i>
                  <span><strong>AVR Fasteners PVT LTD</strong> (Corporate & Plant)</span>
                </div>
                <div className="footer-contact-item" style={{ color: 'var(--color-gunmetal)', marginBottom: '10px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-mauve)' }}></i>
                  <span>D-37 Industrial Focal Point, P.O Mubarikpur - 140201, Derabassi, Punjab, India</span>
                </div>
                <div className="footer-contact-item" style={{ color: 'var(--color-gunmetal)', marginBottom: '10px' }}>
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--color-mauve)' }}></i>
                  <span>Email: <a href="mailto:info@avrfasteners.com" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>info@avrfasteners.com</a></span>
                </div>
                <div className="footer-contact-item" style={{ color: 'var(--color-gunmetal)' }}>
                  <i className="fa-solid fa-phone" style={{ color: 'var(--color-mauve)' }}></i>
                  <span>Phone: <a href="tel:+919872664555" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>+91 98726 64555</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
