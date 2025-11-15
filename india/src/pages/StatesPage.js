import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/StatesPage.css';
import '../css/StateImageSlider.css';
import amberFortImage from '../images/forts/AmberFort.jpg';

// Detailed states data
const detailedStatesData = [
  {
    id: "andhrapradesh",
    name: "Andhra Pradesh",
    capital: "Amaravati",
    about: "Andhra Pradesh stretches along India's southeastern coast where fertile river deltas meet long sandy shorelines and plateaued interiors. The state's geography moves from the lush Godavari–Krishna delta to the dry, rocky eastern ghats and scenic hill stations such as Araku. Historically a cradle of Telugu culture and classical learning, Andhra preserves ancient temple complexes, Buddhist stupas and a strong tradition of classical dance (Kuchipudi).",
    tourismLink: "https://aptdc.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Andhra_Pradesh",
    img: "/images/states/andhra-pradesh.jpg",
    region: "south"
  },
  {
    id: "arunachalpradesh",
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    about: "Arunachal Pradesh — the 'Land of the Rising Sun' — occupies jagged Himalayan frontiers of India's far northeast, where high-altitude ridges, deep river valleys and pristine forests meet a mosaic of tribal cultures. Geography shifts sharply from low river plains to alpine meadows and snow-capped peaks that invite trekking, birding and remote cultural encounters.",
    tourismLink: "https://arunachaltourism.com/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Arunachal_Pradesh",
    img: "/images/states/arunachal-pradesh.jpg",
    region: "northeast"
  },
  {
    id: "assam",
    name: "Assam",
    capital: "Dispur",
    about: "Assam is the tea-scented heart of India's northeast, an alluvial landscape dominated by the great Brahmaputra River and its many tributaries. Vast floodplains, river islands and rolling tea estates shape both the economy and the visual identity, while wetlands and protected grasslands host iconic wildlife such as the one-horned rhinoceros in Kaziranga National Park.",
    tourismLink: "https://assamtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Assam",
    img: "/images/states/assam.jpg",
    region: "northeast"
  },
  {
    id: "bihar",
    name: "Bihar",
    capital: "Patna",
    about: "Bihar is a land of millennia — the fertile Gangetic plains that nurtured ancient universities, religions and empires. It is the cradle of Buddhist and Jain traditions, and Bodh Gaya's Mahabodhi Temple remains one of the world's most important pilgrimage destinations.",
    tourismLink: "https://www.bstdc.bihar.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Bihar",
    img: "/images/states/bihar.jpg",
    region: "east"
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    capital: "Raipur",
    about: "Chhattisgarh is an inland state woven with dense forests, broad plateaus and dramatic waterfalls. Often described as the tribal heartland of central India, it preserves vibrant indigenous cultures, colorful festivals and traditional handicrafts such as dokra metalwork and woven textiles.",
    tourismLink: "https://www.cgstate.gov.in/tourism/en/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Chhattisgarh",
    img: "/images/states/chhattisgarh.jpg",
    region: "central"
  },
  {
    id: "goa",
    name: "Goa",
    capital: "Panaji",
    about: "Goa is India's sunlit coastal gem where golden beaches, tropical greenery and Portuguese colonial legacies create a distinctive, laid-back travel vibe. Its rich history under Portuguese rule left baroque churches, pastel-coloured heritage quarters and a thriving fusion cuisine highlighted by seafood, kokum, vinegar-based curries and sweet bebinca desserts.",
    tourismLink: "https://www.goa-tourism.com/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Goa",
    img: "/images/states/goa.jpg",
    region: "west"
  },
  {
    id: "gujarat",
    name: "Gujarat",
    capital: "Gandhinagar",
    about: "Gujarat is a land of contrasts: arid saltflats, coastal wetlands, forested wildlife reserves and vibrant mercantile cities. The Rann of Kutch's white salt desert and seasonal marshes stage an otherworldly spectacle, while Gir National Park is the last refuge of the Asiatic lion.",
    tourismLink: "https://www.gujarattourism.com/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Gujarat",
    img: "/images/states/gujarat.jpg",
    region: "west"
  },
  {
    id: "haryana",
    name: "Haryana",
    capital: "Chandigarh",
    about: "Haryana's flat, fertile plains surround the national capital and blend deep agrarian roots with emerging industrial corridors. The state played a key role in India's Green Revolution and sustains abundant grain and dairy production.",
    tourismLink: "https://haryanatourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Haryana",
    img: "/images/states/haryana.jpg",
    region: "north"
  },
  {
    id: "himachalpradesh",
    name: "Himachal Pradesh",
    capital: "Shimla",
    about: "Himachal Pradesh is a Himalayan tapestry of pine-clad valleys, apple orchards and high-altitude plateaus. Classic hill stations like Shimla and Manali combine colonial-era charm, scenic leisure and adventure sports (paragliding, skiing and trekking).",
    tourismLink: "https://hptdc.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Himachal_Pradesh",
    img: "/images/states/himachal.jpg",
    region: "north"
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    capital: "Ranchi",
    about: "Jharkhand's terrain of forests, waterfalls and plateau outcrops supports rich tribal cultures and emerging urban centers. Waterfalls like Hundru and Dassam punctuate a green landscape that shelters wildlife parks and biodiversity pockets.",
    tourismLink: "https://jharkhandtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jharkhand",
    img: "/images/states/jharkhand.jpg",
    region: "east"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    capital: "Bengaluru",
    about: "Karnataka bridges ancient dynastic grandeur with modern dynamism: ornate Hoysala temples, the ruins of the Vijayanagara capital at Hampi, and Mysuru's palace culture showcase centuries of architectural achievement, while Bengaluru drives a contemporary tech economy.",
    tourismLink: "https://www.karnatakatourism.org/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Karnataka",
    img: "/images/states/karnataka.jpg",
    region: "south"
  },
  {
    id: "kerala",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    about: "Kerala's palm-lined backwaters, spice gardens and coastal culture have made it an enduring favorite for wellness, nature and cultural tourism. The state's geography moves from tropical coastlines to the Western Ghats' misty tea and spice plantations, each shaping local livelihoods and cuisine.",
    tourismLink: "https://www.keralatourism.org/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Kerala",
    img: "/images/states/kerala.jpg",
    region: "south"
  },
  {
    id: "madhyapradesh",
    name: "Madhya Pradesh",
    capital: "Bhopal",
    about: "Madhya Pradesh — India's geographic heart — is dense with archaeology, temple art and national parks. The medieval and prehistoric heritage at sites such as Khajuraho's sculpted temples and Sanchi's Buddhist stupas illustrate a layered past.",
    tourismLink: "https://www.mptourism.com/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Madhya_Pradesh",
    img: "/images/states/Madhya Pradesh.jpg",
    region: "central"
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    capital: "Mumbai",
    about: "Maharashtra is a vast state of contrasts where Mumbai's global commerce and Bollywood glamour coexist with serene hill stations, Ajanta–Ellora's rock-cut masterpieces and the Konkan's lush coastline.",
    tourismLink: "https://www.maharashtratourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Maharashtra",
    img: "/images/states/maharashtra.jpg",
    region: "west"
  },
  {
    id: "manipur",
    name: "Manipur",
    capital: "Imphal",
    about: "Manipur is a northeastern jewel of strong cultural identity, classical dance heritage and evocative natural scenery. Loktak Lake — the world's largest freshwater floating island system — is central to its landscape, while Imphal's palaces and war memorials recall layered histories.",
    tourismLink: "https://manipurtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Manipur",
    img: "/images/states/manipur.jpg",
    region: "northeast"
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    capital: "Shillong",
    about: "Meghalaya — the 'abode of clouds' — is famed for mist-draped hills, living root bridges and abundant rainfall that carves dramatic gorges and waterfalls. The Khasi and Garo peoples sustain matrilineal traditions, distinctive oral cultures and handicraft traditions such as bamboo weaving.",
    tourismLink: "https://megtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Meghalaya",
    img: "/images/states/meghalaya.jpg",
    region: "northeast"
  },
  {
    id: "mizoram",
    name: "Mizoram",
    capital: "Aizawl",
    about: "Mizoram's rolling, forested hills and bamboo groves are home to vibrant tribal communities whose music, dance and handlooms form a lively cultural core. The landscape — a patchwork of valleys, ridge-top villages and protected green expanses — supports trekking, birding and cultural immersion opportunities.",
    tourismLink: "https://mizoramtourism.org/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Mizoram",
    img: "/images/states/mizoram.jpg",
    region: "northeast"
  },
  {
    id: "nagaland",
    name: "Nagaland",
    capital: "Kohima",
    about: "Nagaland is renowned for its colorful tribal festivals, living cultural traditions and dramatic highlands. The Hornbill Festival — a major cultural showcase — brings together dances, crafts and music from across Naga tribes, providing a concentrated window into traditional life.",
    tourismLink: "https://tourism.nagaland.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Nagaland",
    img: "/images/states/nagaland.jpg",
    region: "northeast"
  },
  {
    id: "odisha",
    name: "Odisha",
    capital: "Bhubaneswar",
    about: "Odisha's rich cultural legacy includes the ancient Sun Temple at Konark, the Jagannath Temple in Puri, and the classical dance form Odissi. The state's diverse geography ranges from coastal plains to the Eastern Ghats.",
    tourismLink: "https://odishatourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Odisha",
    img: "/images/states/odisha.jpg",
    region: "east"
  },
  {
    id: "punjab",
    name: "Punjab",
    capital: "Chandigarh",
    about: "Punjab, the land of five rivers, is known for its vibrant culture, delicious cuisine, and historical significance. The Golden Temple in Amritsar is one of the most revered spiritual sites in the country.",
    tourismLink: "https://punjabtourism.punjab.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Punjab,_India",
    img: "/images/states/punjab.jpg",
    region: "north"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    capital: "Jaipur",
    about: "Rajasthan is a realm of majestic forts, opulent palaces, and vast deserts. Its royal heritage is evident in cities like Jaipur, Udaipur, Jodhpur, and Jaisalmer, which showcase Rajput architectural grandeur and rich craft traditions in textiles, jewelry and miniature painting.",
    tourismLink: "https://www.tourism.rajasthan.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Rajasthan",
    img: "/images/states/rajasthan.jpg",
    region: "north"
  },
  {
    id: "sikkim",
    name: "Sikkim",
    capital: "Gangtok",
    about: "Sikkim is a compact Himalayan state of soaring peaks, alpine meadows and Buddhist monasteries, dominated by the silhouette of Kanchenjunga. The state has emphasized organic agriculture and conservation, and its biodiverse highlands and rhododendron forests offer exceptional birding and trekking.",
    tourismLink: "https://sikkimtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Sikkim",
    img: "/images/states/sikkim.jpg",
    region: "northeast"
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    capital: "Chennai",
    about: "Tamil Nadu preserves a long, continuous classical tradition defined by towering Dravidian temples, intricate stone sculpture and a living performing arts scene (Bharatanatyam and Carnatic music). Temple towns such as Madurai and Thanjavur display monumental architecture and ritual life.",
    tourismLink: "https://www.tamilnadutourism.tn.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Tamil_Nadu",
    img: "/images/states/Tamil Nadu.jpg",
    region: "south"
  },
  {
    id: "telangana",
    name: "Telangana",
    capital: "Hyderabad",
    about: "Telangana centers on Hyderabad's layered urban heritage — iconic Charminar markets, Golconda Fort, and a renowned culinary tradition anchored by Hyderabadi biryani. Once part of the Deccan sultanates, the region preserves Qutb Shahi and Nizam-era monuments.",
    tourismLink: "https://www.telanganatourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Telangana",
    img: "/images/states/telangana.jpg",
    region: "south"
  },
  {
    id: "tripura",
    name: "Tripura",
    capital: "Agartala",
    about: "Tripura is an eastern state of verdant hills, royal palaces and tribal traditions strongly influenced by neighboring Bengal and indigenous cultures. The Ujjayanta Palace in Agartala and ancient temple ruins point to royal histories, while rural areas maintain weaving traditions, bamboo crafts and localized festivals.",
    tourismLink: "https://tripuratourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Tripura",
    img: "/images/states/tripura.jpg",
    region: "northeast"
  },
  {
    id: "uttarpradesh",
    name: "Uttar Pradesh",
    capital: "Lucknow",
    about: "Uttar Pradesh is India's densely layered cultural heart, home to ancient Vedic and medieval sites, Mughal masterpieces and living pilgrimage centers. From the Taj Mahal in Agra to the ghats of Varanasi, UP's cities concentrate religious, architectural and historical weight.",
    tourismLink: "https://www.uptourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Uttar_Pradesh",
    img: "/images/states/uttar-pradesh.jpg",
    region: "north"
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    capital: "Dehradun",
    about: "Uttarakhand — Devbhumi, the Land of the Gods — combines sacred Himalayan valleys with pilgrimage towns, alpine meadows and protected national parks. Rishikesh and Haridwar on the Ganges offer spiritual tourism, yoga retreats and river-focused festivals.",
    tourismLink: "https://uttarakhandtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Uttarakhand",
    img: "/images/states/uttarakhand.jpg",
    region: "north"
  },
  {
    id: "westbengal",
    name: "West Bengal",
    capital: "Kolkata",
    about: "West Bengal is a cultural crucible where colonial-era Kolkata's literary and artistic intensity meets Himalayan hill stations and the Sundarbans' mangrove wilderness. Kolkata's intellectual life — museums, theatres and Durga Puja festivities — is counterbalanced by Darjeeling's tea gardens.",
    tourismLink: "https://wbtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/West_Bengal",
    img: "/images/states/West Bengal.jpg",
    region: "east"
  },
  // Union Territories
  {
    id: "andamannicobar",
    name: "Andaman and Nicobar Islands",
    capital: "Port Blair",
    about: "The Andaman and Nicobar Islands are an oceanic archipelago of coral reefs, white-sand beaches and verdant rainforest, offering some of India's finest marine biodiversity and diving sites. Pristine beaches like Radhanagar and Havelock Island (Swaraj Dweep) lead to world-class snorkelling and reef exploration.",
    tourismLink: "https://www.andamantourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands",
    img: "/images/states/andaman-nicobar.jpg",
    region: "south"
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    capital: "Chandigarh",
    about: "Chandigarh is a celebrated example of mid-20th-century urban planning — Le Corbusier's masterplan shapes broad avenues, disciplined civic architecture and generous public greens. The Rock Garden's surreal sculptures, the tranquil Sukhna Lake and the Capitol Complex are key urban attractions.",
    tourismLink: "https://chandigarhtourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Chandigarh",
    img: "/images/states/chandigarh.jpg",
    region: "north"
  },
  {
    id: "dadranagarhaveli",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    capital: "Daman",
    about: "Dadra and Nagar Haveli and Daman and Diu combine small coastal enclaves and interior tribal landscapes, reflecting Portuguese colonial legacies, relaxed beaches and protected forest pockets. The territories are known for quiet coastal tourism, fishing villages, forts and colonial-era churches.",
    tourismLink: "https://dnh.gov.in/en/tourism/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
    img: "/images/states/dadra-nagar-haveli-daman-diu.jpg",
    region: "west"
  },
  {
    id: "delhi",
    name: "Delhi",
    capital: "New Delhi",
    about: "Delhi — the National Capital Territory — is an urban palimpsest where Mughal, colonial and contemporary layers overlap. Historic Old Delhi's bazaars, spices and monuments (Red Fort, Jama Masjid) sit alongside imperial-era boulevards, public museums and modern cultural districts.",
    tourismLink: "https://www.delhitourism.gov.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Delhi",
    img: "/images/states/Delhi.jpg",
    region: "north"
  },
  {
    id: "jammukashmir",
    name: "Jammu and Kashmir",
    capital: "Srinagar (Summer), Jammu (Winter)",
    about: "Jammu & Kashmir's landscapes are famed for spectacular Himalayan valleys, houseboats on Dal Lake, alpine meadows and pilgrimage sites like Vaishno Devi. Srinagar's Mughal gardens, Kashmiri handicrafts (shawls, papier-mâché) and saffron-flavoured cuisine define cultural life.",
    tourismLink: "https://www.jktourism.org/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Jammu_and_Kashmir_(union_territory)",
    img: "/images/states/jammu-kashmir.jpg",
    region: "north"
  },
  {
    id: "ladakh",
    name: "Ladakh",
    capital: "Leh",
    about: "Ladakh is a high-altitude desert of vast skies, turquoise lakes and remote Buddhist monasteries — a region where stark landscape meets deep spiritual culture. Pangong Tso and Tso Moriri's brilliant lakes, the Nubra Valley's sand dunes and Leh's historic gompas define an austere, breathtaking environment.",
    tourismLink: "https://ladakhtourism.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Ladakh",
    img: "/images/states/ladakh.jpg",
    region: "north"
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    capital: "Kavaratti",
    about: "Lakshadweep's coral atolls and small islands are a remote South-Indian ocean gem: turquoise lagoons, healthy reefs and quiet island life offer superb snorkeling and diving. The islands' small communities practise sustainable coconut-based livelihoods and modest tourism, creating a relaxed, low-impact visitor experience.",
    tourismLink: "https://lakshadweeptourism.com/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Lakshadweep",
    img: "/images/states/lakshadweep.jpg",
    region: "south"
  },
  {
    id: "puducherry",
    name: "Puducherry",
    capital: "Puducherry",
    about: "Puducherry (formerly Pondicherry) blends French colonial street grids, tree-lined boulevards and Tamil culture into a relaxed seaside territory. The French Quarter's pastel façades, cafés and promenades reflect a Franco-Indian hybrid identity; Auroville and spiritual centers attract those seeking contemplative retreat.",
    tourismLink: "https://www.puducherrytourism.in/",
    wikipediaLink: "https://en.wikipedia.org/wiki/Puducherry",
    img: "/images/states/puducherry.jpg",
    region: "south"
  }
];

// State image slider component
const StateImageSlider = ({ states }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && states.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % states.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, states.length]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? states.length - 1 : prevIndex - 1
    );
  }, [states.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % states.length);
  }, [states.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (states.length === 0) return null;

  return (
    <div 
      className="state-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-container">
        <div className="slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="slide"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={states[currentIndex].img}
                alt={states[currentIndex].name}
                className="slide-image"
                loading="lazy"
              />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h2 className="slide-title">
                    {states[currentIndex].name}
                  </h2>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="slider-controls">
          <button
            className="control-btn"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            className="control-btn"
            onClick={goToNext}
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="slider-dots">
          {states.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [expandedState, setExpandedState] = useState(null);
  const [filteredStates, setFilteredStates] = useState(detailedStatesData);

  // Filter states based on search term and filter
  useEffect(() => {
    let result = [...detailedStatesData];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(
        state =>
          state.name.toLowerCase().includes(term) ||
          state.capital.toLowerCase().includes(term) ||
          state.about.toLowerCase().includes(term) ||
          state.region.toLowerCase() === term
      );
    }
    
    // Apply region filter if not 'all'
    if (filter !== 'all') {
      result = result.filter(state => state.region === filter);
    }
    
    setFilteredStates(result);
  }, [searchTerm, filter]);

  const toggleExpand = (id) => {
    setExpandedState(expandedState === id ? null : id);
  };

  // Get region display name
  const getRegionName = (region) => {
    const regions = {
      'north': 'North India',
      'south': 'South India',
      'east': 'East India',
      'west': 'West India',
      'northeast': 'Northeast India',
      'central': 'Central India'
    };
    return regions[region] || region;
  };

  // Prepare states data for the slider
  const sliderStates = filteredStates.map(state => ({
    name: state.name,
    img: state.img.startsWith('http') ? state.img : (process.env.PUBLIC_URL + state.img),
    description: state.about
  }));

  return (
    <div className="page-wrapper">
      <section 
        className="page-header"
        style={{
          backgroundImage: `url(${amberFortImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Explore Indian States & Union Territories</h1>
          <p>Discover the rich diversity of India's {filteredStates.length} states and union territories</p>
        </div>
      </section>
      
      {/* State Image Slider */}
      <div className="container" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <StateImageSlider states={sliderStates} />
      </div>
      
      <div className="states-page">
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 2rem',
          padding: '1.5rem',
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            color: '#8A1538',
            margin: '0 0 1rem',
            fontSize: '1.5rem',
            textAlign: 'center'
          }}>Explore India's States & Union Territories</h3>
          <p style={{margin: '0.5rem 0', textAlign: 'center'}}>Use the search bar to find states by name, capital, or region.</p>
          <p style={{margin: '0.5rem 0', textAlign: 'center'}}>Or select a region from the dropdown to view states from that area.</p>
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#f8f0f4',
            borderRadius: '8px',
            borderLeft: '4px solid #8A1538',
            textAlign: 'center'
          }}>
            <p style={{margin: '0', fontWeight: '500'}}>Tip: Try searching for "Rajasthan" or "Kerala" to see popular destinations.</p>
          </div>
        </div>
        
        <div className="search-filter-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name, capital, or region..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              aria-label="Search states and union territories"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
          
          <div className="filter-group">
            <label htmlFor="region-filter" className="filter-label">Filter by Region:</label>
            <select 
              id="region-filter"
              className="filter-dropdown"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter by region"
            >
              <option value="all">All Regions</option>
              <option value="north">North India</option>
              <option value="south">South India</option>
              <option value="east">East India</option>
              <option value="west">West India</option>
              <option value="northeast">Northeast India</option>
              <option value="central">Central India</option>
            </select>
          </div>
        </div>

      {filteredStates.length > 0 ? (
        <div className="states-grid">
          {filteredStates.map((state) => (
            <div key={state.id} className="state-card">
              <div className="state-image">
                <div className="state-image-container">
                  <img 
                    src={state.img.startsWith('http') ? state.img : (process.env.PUBLIC_URL + state.img)} 
                    alt={`${state.name} landscape`} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = process.env.PUBLIC_URL + '/images/placeholder-state.jpg';
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="region-badge" data-region={state.region}>{getRegionName(state.region)}</div>
              </div>
              <div className="state-content">
                <div className="state-header">
                  <h3>{state.name}</h3>
                  <p className="capital"><i className="fas fa-city"></i> {state.capital}</p>
                </div>
                
                <div className={`state-description ${expandedState === state.id ? 'expanded' : ''}`}>
                  {expandedState === state.id ? (
                    <p>{state.about}</p>
                  ) : (
                    <p>{state.about.substring(0, 150)}...</p>
                  )}
                  <button 
                    className="read-more"
                    onClick={() => toggleExpand(state.id)}
                    aria-expanded={expandedState === state.id}
                    aria-controls={`state-${state.id}-description`}
                  >
                    {expandedState === state.id ? 'Read Less' : 'Read More'}
                    <i className={`fas fa-chevron-${expandedState === state.id ? 'up' : 'down'}`}></i>
                  </button>
                </div>
                
                <div className="state-links">
                  {state.tourismLink && (
                    <a 
                      href={state.tourismLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="tourism-link"
                      aria-label={`Visit ${state.name} tourism website`}
                    >
                      <i className="fas fa-umbrella-beach"></i> Tourism
                    </a>
                  )}
                  {state.wikipediaLink && (
                    <a 
                      href={state.wikipediaLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="wikipedia-link"
                      aria-label={`Read more about ${state.name} on Wikipedia`}
                    >
                      <i className="fab fa-wikipedia-w"></i> Wikipedia
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <i className="fas fa-search-location"></i>
          <h3>No states or union territories found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button 
            className="reset-filters"
            onClick={() => {
              setSearchTerm('');
              setFilter('all');
            }}
          >
            <i className="fas fa-redo"></i> Reset Filters
          </button>
        </div>
      )}
      
      <footer className="page-footer">
        <p>Data sourced from official state tourism websites and Wikipedia</p>
      </footer>
      </div>
    </div>
  );
};

export default StatesPage;