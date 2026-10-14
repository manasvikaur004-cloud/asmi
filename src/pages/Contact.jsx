import React, { useState } from 'react';

export default function Contact() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <>
      {/* Contact Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/assets/about-bg.png')", minHeight: '34vh', paddingTop: '110px', paddingBottom: '40px' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(13, 27, 61, 0.95) 0%, rgba(13, 27, 61, 0.85) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content" style={{ maxWidth: '700px' }}>
            <span className="section-subtitle" style={{ color: 'var(--color-mauve)' }}>Get in Touch</span>
            <h1 className="hero-title" style={{ fontSize: '40px', marginBottom: '12px' }}>Request a Quote &<br /><span>Partner with AVR</span></h1>
            <p className="hero-desc" style={{ fontSize: '15px', marginBottom: 0 }}>Connect with our sales division or engineering team to request pricing, dispatch timelines, or custom component prototype designs.</p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="section-padding" id="quote" style={{ backgroundColor: 'var(--color-light-bg)', borderBottom: '1px solid var(--color-light)' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: '50px' }}>
            <span className="section-subtitle">Directory</span>
            <h2 className="section-title">Contact Information</h2>
            <p style={{ color: 'var(--color-gunmetal)', maxWidth: '600px', margin: '0 auto' }}>Reach out to our team via phone, email, WhatsApp, or request a quote using our online Google Form.</p>
          </div>

          <div className="contact-layout-grid">
            {/* Left Column: Location Card */}
            <div className="contact-info-card office-card">
              <div className="contact-card-head">
                <div className="contact-card-icon"><i className="fa-solid fa-location-dot"></i></div>
                <h3 className="contact-card-title">Factory & Corporate Office</h3>
              </div>
              <div className="contact-card-body">
                <p className="contact-address">
                  D-37 Industrial Focal Point,<br />
                  P.O Mubarikpur - 140201,<br />
                  Derabassi, Punjab, India
                </p>

                <div className="office-hours">
                  <span className="hours-label"><i className="fa-regular fa-clock"></i> Working Hours:</span>
                  <span className="hours-value">Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>

                <a href="https://maps.google.com/?q=D-37+Industrial+Focal+Point+Mubarikpur+Derabassi+Punjab" target="_blank" rel="noopener noreferrer" className="btn btn-outline maps-btn">
                  <i className="fa-solid fa-map-location-dot"></i> Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Phone & Email Card */}
            <div className="contact-info-card contact-details-card">
              <div className="contact-card-head">
                <div className="contact-card-icon"><i className="fa-solid fa-address-book"></i></div>
                <h3 className="contact-card-title">Phone & Email Directories</h3>
              </div>
              <div className="contact-card-body">
                <div className="directory-section">
                  <h4 className="directory-section-title"><i className="fa-solid fa-phone"></i> Telephone Numbers</h4>
                  <div className="directory-list">
                    <div className="directory-item">
                      <span className="directory-label">General Support:</span>
                      <div className="directory-val-wrap">
                        <a href="tel:+919872664555" className="directory-val">+91 98726 64555</a>
                        <button className="copy-btn" onClick={() => copyToClipboard('+91 98726 64555', 'phone')} title="Copy to Clipboard">
                          <i className={`fa-regular ${copiedPhone ? 'fa-check' : 'fa-copy'}`}></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <a href="https://wa.me/message/VQTBBHE3HH6NP1" target="_blank" rel="noopener noreferrer" className="whatsapp-btn-large">
                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                </div>

                <div className="directory-divider"></div>

                <div className="directory-section">
                  <h4 className="directory-section-title"><i className="fa-solid fa-envelope"></i> Email Inboxes</h4>
                  <div className="directory-list">
                    <div className="directory-item">
                      <span className="directory-label">General Info:</span>
                      <div className="directory-val-wrap">
                        <a href="mailto:info@avrfasteners.com" className="directory-val">info@avrfasteners.com</a>
                        <button className="copy-btn" onClick={() => copyToClipboard('info@avrfasteners.com', 'email')} title="Copy to Clipboard">
                          <i className={`fa-regular ${copiedEmail ? 'fa-check' : 'fa-copy'}`}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Request a Quote CTA Card */}
          <div className="full-width-quote-card">
            <div className="quote-card-left">
              <h3 className="quote-card-title"><i className="fa-solid fa-file-invoice"></i> Request a Manufacturing Quote</h3>
              <p className="quote-card-desc">Submit your custom drawings, raw materials, dimensions, and specifications via our Google Form.</p>
            </div>
            <div className="quote-card-right">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYjcSOZi0qhhuP2LIYlwvyKNuWGvuBBT70ysqWN_phtUYXCQ/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary quote-submit-btn">
                Request for a Quote <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
