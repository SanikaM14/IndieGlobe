import React, { useEffect } from 'react';
import '../css/CulturePage.css';
import { Link } from 'react-router-dom';
import ScrollingEffect from '../components/ScrollingEffect';
import { Helmet } from 'react-helmet-async';
import { initScrollAnimations } from '../utils/scrollAnimations';

// Import culture images (place in src/images/culture/)
import heroCollage from '../images/culture/hero-indiacollage.jpg';
import religionCollage from '../images/culture/religion-temples-mosque-gurdwara.jpg';
import artCollage from '../images/culture/art-taj-hampi-khajuraho.jpg';
import danceCollage from '../images/culture/dance-music-bharatanatyam-kathak.jpg';
import clothingCollage from '../images/culture/clothing-ethnic-saree-lehenga.jpg';
import cuisineCollage from '../images/culture/cuisine-thali-topdown.jpg';
import festivalsCollage from '../images/culture/festivals-holi-diwali.jpg';
import literatureCollage from '../images/culture/literature-manuscripts-modern-books.jpg';
import familyCollage from '../images/culture/family-multi-generation-dinner.jpg';
import mediaCollage from '../images/culture/cinema-cricket-yoga.jpg';
import heritageCollage from '../images/culture/culture1.jpg';
import modernCollage from '../images/culture/culture6.jpg';

// Reusable QuickLinks component
const QuickLinks = ({ title, links }) => (
  <div className="quick-links">
    <h4>{title}</h4>
    <ul>
      {links.map((l, i) => (
        <li key={i}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
      ))}
    </ul>
  </div>
);

const CulturePage = () => {
  // Initialize scroll animations when component mounts
  useEffect(() => {
    initScrollAnimations();
    
    // Cleanup function to remove any event listeners if needed
    return () => {
      // Any cleanup if needed
    };
  }, []);

  // structured data (WebPage) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Culture of India — The Soul of Diversity",
    "description":
      "Complete guide to Indian culture: religion, art, dance, music, clothing, cuisine, festivals, languages, family, cinema, sport, heritage and modern India.",
    "url": window.location.href
  };

  // Quick link sources for each section (authoritative & helpful)
  const links = {
    introduction: [
      { label: 'Incredible India (Official Tourism)', href: 'https://www.incredibleindia.org' },
      { label: 'Ministry of Culture, Government of India', href: 'https://www.indiaculture.nic.in' },
      { label: 'UNESCO India — List of World Heritage Sites', href: 'https://whc.unesco.org/en/statesparties/in' }
    ],
    religion: [
      { label: 'Kumbh Mela — Official (past & present summaries)', href: 'https://www.kumbhmela.org' },
      { label: 'Golden Temple (Harmandir Sahib)', href: 'https://www.sgpc.net' }
    ],
    art: [
      { label: 'Archaeological Survey of India', href: 'https://asi.nic.in' },
      { label: 'National Gallery of Modern Art (NGMA)', href: 'https://ngmaindia.gov.in' }
    ],
    danceMusic: [
      { label: 'Sangeet Natak Akademi', href: 'https://sangeetnatak.gov.in' },
      { label: 'All India Radio — Music Programs (archive)', href: 'https://allindiaradio.gov.in' }
    ],
    clothing: [
      { label: 'Handloom & Handicrafts — Ministry of Textiles', href: 'https://handloom.nic.in' },
      { label: 'Khadi & Village Industries Commission', href: 'https://kvic.gov.in' }
    ],
    cuisine: [
      { label: 'Indian Food on IncredibleIndia.org', href: 'https://www.incredibleindia.org/content/incredible-india-v2/en/experience/food.html' },
      { label: 'National Institute of Nutrition — Food & Diet Research', href: 'https://www.nin.res.in' }
    ],
    festivals: [
      { label: 'Festival calendar — India.gov.in', href: 'https://www.india.gov.in/topics/culture/festivals' },
      { label: 'Navratri & Garba resources', href: 'https://www.navratri.org' }
    ],
    languages: [
      { label: 'Eighth Schedule — List of official languages (Government)', href: 'https://legislative.gov.in' },
      { label: 'Sahitya Akademi — Indian literature resource', href: 'https://sahitya-akademi.gov.in' }
    ],
    family: [
      { label: 'National Family Health Survey (NFHS)', href: 'http://rchiips.org/nfhs/' },
      { label: 'Atithi Devo Bhava (Hospitality programs)', href: 'https://www.mygov.in' }
    ],
    media: [
      { label: 'Film Federation of India', href: 'https://www.filmfed.org' },
      { label: 'Board of Control for Cricket in India (BCCI)', href: 'https://www.bcci.tv' }
    ],
    heritage: [
      { label: 'UNESCO — India World Heritage List', href: 'https://whc.unesco.org/en/statesparties/in' },
      { label: 'ASI — Protected Monuments in India', href: 'https://asi.nic.in/protected-monuments' }
    ],
    modern: [
      { label: 'Startup India — Government initiative', href: 'https://www.startupindia.gov.in' },
      { label: 'Design Council of India', href: 'https://www.dciindia.org' }
    ]
  };


  return (
    <div className="culture-page">
      <Helmet>
        <title>Culture of India — The Soul of Diversity</title>
        <meta
          name="description"
          content="Complete and detailed guide to Indian culture: history, religion, art, dance, music, clothing, cuisine, festivals, languages, family life, cinema, sports, UNESCO heritage and the modern blend of tradition and technology."
        />
        <meta name="keywords" content="India culture, Indian festivals, Indian cuisine, Indian art, Indian languages, UNESCO India" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700&display=swap" rel="stylesheet" />
      </Helmet>

      <section className="hero-section">
        <div className="hero-content">
          <h1>INDIAN CULTURE</h1>
          <h2>The Soul of Diversity</h2>
          <p>Discover India's Rich Cultural Heritage</p>
          <div className="hero-buttons">
            <a href="#introduction" className="btn">Explore Culture</a>
            <a href="#festivals" className="btn btn-outline">Festivals & Events</a>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center mb-4">Quick Facts</h3>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="p-3 bg-light rounded">
                  <h4>Age</h4>
                  <p className="mb-0">&gt; 5,000 years of continuous cultural traditions and recorded history.</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3 bg-light rounded">
                  <h4>Official Languages</h4>
                  <p className="mb-0">22 recognised languages in the Eighth Schedule; thousands of dialects across states.</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3 bg-light rounded">
                  <h4>UNESCO Sites</h4>
                  <p className="mb-0">40+ monuments, parks, cave complexes and cultural landscapes recognized for outstanding universal value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm sticky-top mb-5" style={{ top: '0', zIndex: '1020' }}>
        <div className="container">
          <div className="nav nav-pills py-2 justify-content-center flex-nowrap overflow-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
            {['introduction', 'religion', 'dance-music', 'clothing', 'cuisine', 'festivals', 'languages', 'family', 'media', 'heritage', 'modern'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="nav-link mx-1 text-nowrap"
                style={{
                  color: 'var(--text-dark)',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-light)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--text-dark)';
                }}
              >
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="culture-container container">
        {/* 1. Introduction */}
        <ScrollingEffect>
          <section id="introduction" className="culture-section fade-up">
            <div className="section-left">
              <h2>1. Introduction — The Essence of Indian Culture</h2>
              <p className="lead">
                Indian culture is the cumulative product of millennia of human activity on the subcontinent. It includes philosophical systems (Vedanta, Buddhism, Jain doctrine), sophisticated urban and rural arts, diverse musical grammars,
                narrative traditions (oral and written), food cultures adapted to climates and crops, and social institutions such as joint-family structures and community rituals. This introductory section summarises the frameworks that hold these many strands together.
              </p>

              <h3>Key pillars that define the cultural landscape</h3>
              <ol>
                <li><strong>Ritual & ceremony:</strong> rites of passage (birth, initiation, marriage, death), daily worship and seasonal rituals that structure individual and public life.</li>
                <li><strong>Textual heritage:</strong> sacred and secular literature — Vedas, epics, Puranas, Sangam poetry, Bhakti literature, Sufi poetry, and modern prose and criticism.</li>
                <li><strong>Local identity:</strong> language, cuisine, dress and folklore form strong regional identities while pan-Indian ideas circulate through pilgrimage, trade and print media.</li>
                <li><strong>Continuity with change:</strong> ancient crafts and practices persist while absorbing colonial, industrial and global influences.</li>
              </ol>

              <p>
                A visitor or learner should understand culture not as a static artifact but as living practice — visible in festival streets, in how a meal is shared, in classroom debates, and in regional celebrations of history.
              </p>

              <QuickLinks title="Explore more" links={links.introduction} />
            </div>

            <div className="section-right">
              <img src={heroCollage} alt="Hero collage showing Taj Mahal, dancers and Holi colors" />
            </div>
          </section>
        </ScrollingEffect>

{/* 2. Religion & Spirituality */}
        <ScrollingEffect>
          <section id="religion" className="culture-section fade-up">
            <div className="section-left">
              <h2>2. Religion & Spirituality — Belief Systems & Public Life</h2>

              <p>
                Religion in India is plural and public. Philosophies about the self, cosmology and ethics evolved into institutions — monasteries, temples, mosques, gurdwaras and churches — each shaping architecture, calendars and community life.
                Pilgrimage remains a formative experience (e.g., Varanasi, Puri, Amritsar, Bodh Gaya) and large religious gatherings (Kumbh Mela) are expressions of mass-scale devotional practice, social exchange, and cultural continuity.
              </p>

              <h3>Major traditions and their cultural manifestations</h3>
              <p>
                <strong>Hinduism:</strong> Diverse practices linked by ideas of dharma (ethical duty), samsara (cycle of life), karma (consequence), and moksha (liberation). Temple architecture, iconography and daily puja rituals provide local structure. Festivals like Diwali and Navratri combine regional customs and pan-Indian narratives.
              </p>

              <p>
                <strong>Islam:</strong> Brought to the subcontinent through trade and empires, Islam in India fused local traditions (Sufism) and produced distinct cultural forms — Urdu poetry, Indo-Islamic architecture, and syncretic musical traditions like qawwali.
              </p>

              <p>
                <strong>Sikhism, Buddhism & Jainism:</strong> Each began as reform or new philosophical stance; they emphasize community (langar in Sikhism), meditative practice (Buddhism) and non-violence (Jainism). Monastic sites, pilgrimage circuits, and civic institutions reflect their social imprint.
              </p>

              <h3>Religion in public life</h3>
              <p>
                Religious festivals punctuate civic life — markets, schools and workplaces adapt to festival rhythms. Sacred music, ritual food offerings, and temple theatre are as important as doctrinal beliefs in shaping everyday cultural behavior.
              </p>

              <QuickLinks title="Authoritative resources" links={links.religion} />
            </div>

            <div className="section-right card">
              <img src={religionCollage} alt="Panoramic view of temples, mosque and gurdwara" />
              <div className="card-body">
                <p className="meta">Religious architecture and pilgrimage sites are central nodes of cultural memory — make sure to include clear alt-text and location metadata for each monument image used on the site.</p>
              </div>
            </div>
          </section>
        </ScrollingEffect>

        {/* 3. Art & Architecture */}
        <ScrollingEffect>
          <section id="art" className="culture-section fade-up">
            <div className="section-left">
              <h2>3. Art & Architecture — Visual Languages of a Subcontinent</h2>
              <p className="lead">
                From cave paintings to contemporary galleries, India's visual arts record social life, royal power, religious devotion and trade connections. Architectural forms encode technical knowledge and cosmological ideas; miniature painting and temple sculpture transmit narratives across generations.
              </p>

              <h3>Major architectural vocabularies</h3>
              <ul>
                <li><strong>Indus & early historic:</strong> urban planning and craft traditions; evidence in archaeological sites.</li>
                <li><strong>Dravidian:</strong> characterized by pyramid-shaped temple towers (gopurams), complex stone carving and pillared halls.</li>
                <li><strong>Northern (Nagara) and Indo-Islamic:</strong> shikharas, domes, arches, and the synthesis visible in Mughal monuments such as the Taj Mahal.</li>
                <li><strong>Colonial & modern:</strong> Victorian civic buildings, Art Deco in Mumbai, and post-independence modernist projects blending local motifs with global forms.</li>
              </ul>

              <h3>Painting, sculpture & crafts</h3>
              <p>
                Traditional painting schools (Madhubani, Tanjore, Pattachitra, Pahari miniatures) use local materials and patronage systems. Sculpture ranges from Chola bronzes to rock-cut temple carvings; crafts include weaving, block-printing and metalwork tied to local economies.
              </p>

              <QuickLinks title="Explore art institutions" links={links.art} />
            </div>

            <div className="section-right">
              <img 
                src={artCollage} 
                alt="Indian art and architecture collage showing Taj Mahal, Hampi ruins, and Khajuraho temples" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--shadow)'
                }}
              />
            </div>
          </section>
        </ScrollingEffect>

        {/* 4. Dance & Music */}
        <ScrollingEffect>
          <section id="dance-music" className="culture-section fade-up">
            <div className="section-left">
              <h2>4. Dance & Music — Rhythm, Raga & Movement</h2>

              <p>
                Music and dance in India operate on codified systems — raga (melodic framework) and tala (rhythmic cycles) — alongside robust oral folk traditions. Performance is a mode of both religious expression and secular entertainment.
              </p>

              <h3>Classical music systems</h3>
              <p>
                <strong>Hindustani (North):</strong> improvisational, with long alaap sections and gharana traditions. Instruments: sitar, sarod, tabla.
              </p>
              <p>
                <strong>Carnatic (South):</strong> composition-centered, featuring kritis and structured improvisation. Instruments: veena, mridangam, violin.
              </p>

              <h3>Classical dance forms and their cultural roles</h3>
              <p>
                Each classical dance codifies story-telling through mudras (hand gestures), facial expressions and choreography: Bharatanatyam’s temple roots, Kathak’s courtly history, Odissi’s sculptural lines, Kathakali’s theatrical makeup.
              </p>

              <h3>Folk forms & popular music</h3>
              <p>
                Folk genres reflect local ecologies — harvest songs, boat songs, and community dances. Popular film music and playback singing have shaped national tastes and created pan-Indian pop-culture icons.
              </p>

              <QuickLinks title="Music & performance archives" links={links.danceMusic} />
            </div>

            <div className="section-right card">
              <img src={danceCollage} alt="Classical Indian dancers with musical instruments" />
              <div className="card-body">
                <p className="meta">Consider adding short, licensed audio clips (5–10s) for each major raga or folk beat. Always include captions, attribution and a short explanatory paragraph for accessibility.</p>
              </div>
            </div>
          </section>
        </ScrollingEffect>

        {/* 5. Clothing & Fashion */}
        <ScrollingEffect>
          <section id="clothing" className="culture-section fade-up">
            <div className="section-left">
              <h2>5. Clothing & Fashion — Textiles, Craft and Identity</h2>

              <p>
                Garments and textiles function as social signifiers: caste, community, region and occasion are often visible in what people wear. India’s handloom sector supports millions of artisans and preserves skills such as ikat, banarasi weaving, and kantha embroidery.
              </p>

              <h3>Iconic garments and the stories they tell</h3>
              <ul>
                <li><strong>Saree:</strong> a single unstitched garment draped differently across regions; weaving traditions (Kanjeevaram, Banarasi) are locally identified and festival staples.</li>
                <li><strong>Kurta & Sherwani:</strong> everyday and formal men’s wear with variations for northern plains and coastal regions.</li>
                <li><strong>Regional pieces:</strong> phulkari (Punjab), paithani (Maharashtra), chikankari (Lucknow), each carrying historical trade and patronage links.</li>
              </ul>

              <QuickLinks title="Textiles & craft bodies" links={links.clothing} />
            </div>

            <div className="section-right card">
              <img src={clothingCollage} alt="Models wearing traditional Indian garments from various states" />
            </div>
          </section>
        </ScrollingEffect>

        {/* 6. Cuisine */}
        <ScrollingEffect>
          <section id="cuisine" className="culture-section fade-up">
            <div className="section-left">
              <h2>6. Indian Cuisine — Regional Palates & Culinary Techniques</h2>

              <p>
                Indian food is shaped by climate, crop cycles, trade networks and religious restrictions. Spices are used not only for flavor but for preservation and health: the Ayurvedic tradition links food to body constitution (doshas).
              </p>

              <h3>Regional palettes explained</h3>
              <p>
                <strong>North:</strong> wheat-based breads, dairy-rich gravies, tandoor cooking and slow-simmered sauces. <br/>
                <strong>South:</strong> rice and coconut as core ingredients; fermentation (idli, dosa) is a major technique. <br/>
                <strong>East:</strong> rice and fish, mustard oil and subtle spice blends. <br/>
                <strong>West:</strong> vegetarian thalis, coastal fish cuisines and Gujarati sweet-savoury contrasts.
              </p>

              <h3>Eating habits & etiquette</h3>
              <p>
                Meals can be communal; eating with the right hand is customary in many communities; sharing food with guests expresses hospitality. Street-food cultures create micro-entrepreneurial ecosystems in cities.
              </p>

              <QuickLinks title="Food & nutrition resources" links={links.cuisine} />
            </div>

            <div className="section-right gallery">
              <img src={cuisineCollage} alt="Top-down Indian thali with colorful curries and accompaniments" />
            </div>
          </section>
        </ScrollingEffect>

        {/* 7. Festivals */}
        <ScrollingEffect>
          <section id="festivals" className="culture-section fade-up">
            <div className="section-left">
              <h2>7. Festivals — Calendars of Celebration</h2>

              <p>
                Festivals are civic pauses — rituals that reorder social life, create temporary economies, and transmit narratives. They range from harvest celebrations and new-year rites to remembrance days and performance festivals.
              </p>

              <h3>Pan-Indian festivals</h3>
              <p>
                <strong>Diwali:</strong> New-year and lights festival signifying renewal; private home pujas and public fireworks. <br/>
                <strong>Holi:</strong> Spring festival of colors with roots in folk and devotional traditions; it symbolises social renewal and caste boundary transgressions in some historic contexts.
              </p>

              <h3>Regional & community festivals</h3>
              <p>
                Regional calendars (lunar-solar) determine timing; Onam in Kerala, Pongal in Tamil Nadu, Baisakhi in Punjab and Durga Puja in Bengal reflect harvest cycles and local mythic histories.
              </p>

              <QuickLinks title="Festival calendars & guides" links={links.festivals} />
            </div>

            <div className="section-right festival-cards">
              <img src={festivalsCollage} alt="Holi and Diwali celebrations collage" />
            </div>
          </section>
        </ScrollingEffect>

        {/* 8. Languages & Literature */}
        <ScrollingEffect>
          <section id="languages" className="culture-section fade-up">
            <div className="section-left">
              <h2>8. Languages & Literature — Tongues That Shape Thought</h2>

              <p>
                India’s linguistic landscape is a living archive: Sanskrit and Tamil preserve ancient poetries; medieval devotional literature (Bhakti, Sufi) democratized spiritual expression; modern regional languages anchor political and literary movements.
              </p>

              <h3>Script, orality & print</h3>
              <p>
                Oral traditions and manuscript cultures preceded print; the colonial printing press, followed by nationalist journalism and modern publishing, created pan-regional readerships and canonical authors in many languages.
              </p>

              <QuickLinks title="Literary bodies & language lists" links={links.languages} />
            </div>

            <div className="section-right card">
              <img src={literatureCollage} alt="Ancient palm-leaf manuscripts beside modern Indian novels" />
            </div>
          </section>
        </ScrollingEffect>

        {/* 9. Family, Values & Lifestyle */}
        <ScrollingEffect>
          <section id="family" className="culture-section fade-up">
            <div className="section-left">
              <h2>9. Family, Values & Lifestyle — Social Fabric & Everyday Ethics</h2>

              <p>
                Family remains a primary organizing unit for social security, childcare and eldercare. Values such as respect for elders, hospitality and community reciprocity shape behavior. Yet urbanization, migration and changing economics are producing new family forms and gender roles.
              </p>

              <h3>Marriage, kinship and social mobility</h3>
              <p>
                Marriage practices range from arranged alliances guided by caste and kin networks to love marriages; kinship ties often mediate economic opportunity and social support.
              </p>

              <QuickLinks title="Social research & surveys" links={links.family} />
            </div>

            <div className="section-right card">
              <img src={familyCollage} alt="Three-generation family sharing meal" />
            </div>
          </section>
        </ScrollingEffect>

        {/* 10. Cinema, Theatre & Sports */}
        <ScrollingEffect>
          <section id="media" className="culture-section fade-up">
            <div className="section-left">
              <h2>10. Cinema, Theatre & Sports — Mass Culture & Play</h2>

              <p>
                India’s cinema industries produce films in multiple languages and shape public imagination. Theatre traditions — from Sanskrit drama to regional folk theatre — remain important. Sport, especially cricket, creates shared national moments across class and region.
              </p>

              <h3>Film as cultural production</h3>
              <p>
                Film music, star systems and distribution networks formed a mass-audience culture; regional industries (Telugu, Tamil, Malayalam, Bengali) maintain distinct aesthetics and production systems.
              </p>

              <QuickLinks title="Media & sport associations" links={links.media} />
            </div>

            <div className="section-right gallery">
              <img src={mediaCollage} alt="Film reel morphing into cricket stadium lights and yoga silhouettes" />
            </div>
          </section>
        </ScrollingEffect>

        {/* 11. Heritage & UNESCO Sites */}
        <ScrollingEffect>
          <section id="heritage" className="culture-section fade-up">
            <div className="section-left">
              <h2>11. Heritage & UNESCO Sites — Memory in Stone and Landscape</h2>

              <p>
                Heritage sites conserve architecture, art and ecological landscapes that have outstanding universal values. Conservation is contested — balancing tourism, local livelihoods and preservation requires inclusive management.
              </p>

              <h3>Examples and why they matter</h3>
              <p>
                Sites like the Taj Mahal, Ajanta & Ellora, Hampi and the Sundarbans signify different cultural logics: monumental memory, rock-cut religious art, imperial urbanism and natural biodiversity respectively.
              </p>

              <QuickLinks title="Heritage authorities" links={links.heritage} />
            </div>

            <div className="section-right card">
              <img src={heritageCollage} alt="Aerial collage of Indian UNESCO heritage sites" />
            </div>
          </section>
        </ScrollingEffect>

        {/* 12. Modern India */}
        <ScrollingEffect>
          <section id="modern" className="culture-section fade-up">
            <div className="section-left">
              <h2>12. Modern India — Tradition Meets Technology</h2>

              <p>
                Contemporary India synthesises ancient traditions with rapid technological change. Startups sit beside centuries-old temples; fusion cuisine coexists with street food; designers and artists reinterpret traditional motifs for global audiences.
              </p>

              <h3>Urban change, youth culture & global flows</h3>
              <p>
                Cities are sites of cultural experimentation; youth create subcultures online and offline. Diaspora networks amplify Indian culture globally while remittances and ideas flow back, shaping consumption and production at home.
              </p>

              <QuickLinks title="Contemporary culture & innovation" links={links.modern} />
            </div>

            <div className="section-right card">
              <img src={modernCollage} alt="Modern India imagery: meditation with digital skyline" />
            </div>
          </section>
        </ScrollingEffect>

        {/* CTA Section */}
        <ScrollingEffect>
          <section className="culture-cta fade-up">
            <div className="cta-inner">
              <h2>Experience the Magic of India</h2>
              <p>Discover region pages, in-depth guides, travel tips, recipes and curated reading lists for every section above.</p>
              <div className="cta-buttons">
                <Link to="/heritage" className="btn">Explore Heritage</Link>
                <Link to="/spices" className="btn outline">Taste the Cuisine</Link>
              </div>
              <p className="muted small">Footer tagline: “India — Where every color tells a story, every sound sings a song, and every heart beats with unity.”</p>
            </div>
          </section>
        </ScrollingEffect>
      </main>
    </div>
  );
};

export default CulturePage;
