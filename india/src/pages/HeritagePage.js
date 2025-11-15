import React, { useState, useRef } from 'react';
import '../css/HeritagePage.css';
import GlassmorphicCard from '../components/GlassmorphicCard';
import ScrollingEffect from '../components/ScrollingEffect';
import { indiaData } from '../data/data';
import { Helmet } from 'react-helmet-async';

function HeritagePage() {
  const heritageSites = indiaData.heritage.sites;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(heritageSites.length / itemsPerPage);
  const allSitesSectionRef = useRef(null);

  const paginate = (page) => {
    setCurrentPage(page);
    if (allSitesSectionRef.current) {
      allSitesSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const currentSites = heritageSites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="heritage-page">
      <Helmet>
        <title>Indian Heritage | 40 UNESCO World Heritage Sites</title>
        <meta
          name="description"
          content="Explore India's 40 UNESCO World Heritage Sites — from ancient temples to colonial forts — showcasing the rich cultural and natural legacy of India."
        />
      </Helmet>

      {/* Hero Header Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>INDIAN HERITAGE</h1>
          <h2>Echoes of Eternity in Stone, Art & Faith</h2>
          <p>Discover India's 40 UNESCO World Heritage Sites</p>
        </div>
      </section>

      {/* Introductory Text */}
      <section className="sites-intro">
        <ScrollingEffect>
          <div className="intro-content glassmorphic">
            <p>
              India’s heritage is a living testament to human creativity, spirituality, and resilience. 
              From the rock-cut caves of Ajanta to the celestial symmetry of the Taj Mahal, 
              every monument whispers stories of civilizations that flourished and shaped our world.
            </p>
            <p>
              With <strong>40 UNESCO World Heritage Sites</strong>, India stands among the top countries globally 
              preserving both <em>cultural</em> and <em>natural wonders</em>.
            </p>
          </div>
        </ScrollingEffect>
      </section>

      {/* Featured Sites Section */}
      <section className="sites-section">
        <h2>Iconic Heritage Sites of India</h2>
        <div className="sites-grid">
          {heritageSites.slice(0, 3).map((site) => (
            <ScrollingEffect key={site.id}>
              <GlassmorphicCard title={site.name} image={site.image} />
            </ScrollingEffect>
          ))}
        </div>
        <p className="featured-note">
          These timeless marvels represent the diversity of Indian art, architecture, and cultural evolution.
        </p>
      </section>

      {/* Cultural Divider */}
      <div className="heritage-divider">
        <h3>“A Journey Through Centuries”</h3>
        <div className="divider-line"></div>
      </div>

      {/* All Heritage Sites */}
      <section className="all-sites-section" ref={allSitesSectionRef}>
        <h2>UNESCO World Heritage Sites in India</h2>
        <p className="section-subtext">
          Explore all cultural and natural sites recognized for their outstanding universal value.
        </p>

        <div className="all-sites-grid">
          {currentSites.map((site) => (
            <ScrollingEffect key={site.id}>
              <GlassmorphicCard
                title={site.name}
                subtitle={`${site.location} | ${site.year}`}
                image={site.image}
                description={site.description}
                additionalInfo={site.highlight}
                facts={site.facts || []}
                compact={true}
              />
            </ScrollingEffect>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="page-button"
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-button ${currentPage === page ? 'active' : ''}`}
              onClick={() => paginate(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="page-button"
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>

      {/* Footer Heritage Quote */}
      <footer className="heritage-footer">
        <ScrollingEffect>
          <blockquote>
            “To walk among India’s heritage is to walk through the chapters of human civilization itself.”
          </blockquote>
          <p>— UNESCO India Cultural Mission</p>
        </ScrollingEffect>
      </footer>
    </div>
  );
}

export default HeritagePage;
