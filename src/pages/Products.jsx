import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { productCatalog, categoryFolders } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(
    categoryParam && productCatalog[categoryParam] ? categoryParam : 'bolts'
  );

  useEffect(() => {
    if (categoryParam && productCatalog[categoryParam]) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setSearchParams({ category: key });
  };

  const categories = [
    { key: 'bolts', label: 'High Tensile Bolts' },
    { key: 'nuts', label: 'High Tensile Nuts' },
    { key: 'screws', label: 'Precision Screws' },
    { key: 'studs', label: 'Threaded Studs' },
    { key: 'components', label: 'Precision Components' },
    { key: 'rods', label: 'Two-Wheeler Mirror Rods' },
  ];

  const currentProducts = productCatalog[activeCategory] || [];

  return (
    <>
      {/* Products Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/product banner.png')", minHeight: '34vh', paddingTop: '110px', paddingBottom: '40px' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(13, 27, 61, 0.95) 0%, rgba(13, 27, 61, 0.85) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content" style={{ maxWidth: '700px' }}>
            <span className="section-subtitle" style={{ color: 'var(--color-mauve)' }}>Product Catalog</span>
            <h1 className="hero-title" style={{ fontSize: '40px', marginBottom: '12px' }}>Engineered Fastening<br /><span>& Machinery Solutions</span></h1>
            <p className="hero-desc" style={{ fontSize: '15px', marginBottom: 0 }}>Browse our comprehensive selection of high tensile bolts, custom machined components, heavy nuts, mirror rods, and cold forging specialized equipment.</p>
          </div>
        </div>
      </section>

      {/* Interactive Product Section (Spoke Layout) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">Interactive Product Catalog</h2>
            <p style={{ color: 'var(--color-gunmetal)', maxWidth: '600px', margin: '0 auto' }}>Select a product category on the left to filter our range on the right. All items are manufactured under tight ISO quality control guidelines.</p>
          </div>

          <div className="product-spoke-layout">
            {/* Sidebar Categories */}
            <aside className="spoke-sidebar">
              <h3 className="spoke-sidebar-title">Categories</h3>
              <ul className="spoke-menu">
                {categories.map((cat) => (
                  <li key={cat.key}>
                    <button
                      className={`spoke-item-btn ${activeCategory === cat.key ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(cat.key)}
                    >
                      <span>{cat.label}</span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Display Grid */}
            <div className="product-display-area">
              <div className="product-catalog-grid">
                {currentProducts.map((item, idx) => (
                  <div className="catalog-item-card" key={`${item.name}-${idx}`}>
                    <div className="catalog-item-img-wrap">
                      <img className="catalog-item-img" src={`/${categoryFolders[activeCategory] || 'assets/products'}/${item.img}?v=2`} alt={item.name} />
                    </div>
                    <h3 className="catalog-item-name">{item.name}</h3>
                    <p className="catalog-item-spec">{item.spec}</p>
                  </div>
                ))}
              </div>

              {/* Extra Spec Panel for Mirror Rods */}
              {activeCategory === 'rods' && (
                <div style={{ marginTop: '30px' }}>
                  <div className="split-section" style={{ gap: '40px', backgroundColor: 'var(--color-white)', padding: '30px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-light)', boxShadow: 'var(--shadow-sm)', gridTemplateColumns: '1.2fr 1fr', marginTop: '30px' }}>
                    <div className="split-content" style={{ textAlign: 'left' }}>
                      <span className="section-subtitle" style={{ fontSize: '11px' }}>OEM Specifications</span>
                      <h3 style={{ color: 'var(--color-navy)', fontSize: '20px', marginBottom: '12px' }}>Two-Wheeler Mirror Rods Technical Data</h3>
                      <p style={{ fontSize: '14px', color: 'var(--color-gunmetal)', marginBottom: '16px', lineHeight: 1.5 }}>
                        AVR Fasteners PVT LTD is a leading developer of customized mirror rods, producing high-volume bent and threaded rods for two-wheeler OEMs. We manufacture these rods using automated CNC bending equipment, maintaining tight bend-radius limits and clean thread profiles.
                      </p>
                      <div className="spec-table-wrap" style={{ marginTop: '10px' }}>
                        <table className="spec-table">
                          <thead>
                            <tr>
                              <th style={{ padding: '10px 14px', fontSize: '13px' }}>Parameter</th>
                              <th style={{ padding: '10px 14px', fontSize: '13px' }}>Specifications</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Diameter Range</td>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>6mm to 16mm (Standard: 8mm, 10mm, 12mm)</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Length Range</td>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>60mm to 400mm (As per customer design)</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Threading Options</td>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Standard right-hand (RH) and left-hand (LH) threads</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Material Grades</td>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Medium Carbon Steel, Alloy Steel, Stainless Steel</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Surface Finish</td>
                              <td style={{ padding: '10px 14px', fontSize: '13px' }}>Premium Chrome Plating, Black Powder Coating, Zinc Plating</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="split-img-wrap" style={{ aspectRatio: '1/1', borderRadius: 'var(--border-radius-md)', boxShadow: 'none', border: '1px solid var(--color-light)', backgroundColor: 'var(--color-light-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                      <img src="/Two-Wheeler Mirror Rods/Two-Wheeler Mirror Rods.png?v=2" alt="Two-Wheeler Mirror Rod Specs" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                  </div>
                </div>
              )}
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
          <h2 className="final-cta-title">Need a Custom Fastening Component?</h2>
          <p className="final-cta-desc">Send us your technical drawings or specification sheets for a detailed manufacturing quote.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-navy)' }}>Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
