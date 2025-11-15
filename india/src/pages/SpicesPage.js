// SpicesPage.js
import React from 'react';
import '../css/SpicesPage.css';
import GlassmorphicCard from '../components/GlassmorphicCard';
import SpinningGallery from '../components/SpinningGallery';
import ScrollingEffect from '../components/ScrollingEffect';
import { indiaData } from '../data/data';

// Local spice images
import turmericImg from '../images/spices/turmeric.jpg';
import cardamomImg from '../images/spices/cardamom.jpg';
import cuminImg from '../images/spices/cumin.jpg';
import saffronImg from '../images/spices/saffron.jpg';
import corianderImg from '../images/spices/coriander.jpg';
import cloveImg from '../images/spices/clove.jpg';
import blackPepperImg from '../images/spices/blackPepper.jpg';
import cinnamonImg from '../images/spices/cinnamon.jpg';
import fennelImg from '../images/spices/fennel.jpg';
import fenugreekImg from '../images/spices/fenugreek.jpg';
import mustardSeedsImg from '../images/spices/mustardSeeds.jpg';
import asafoetidaImg from '../images/spices/asafoetida.jpg';
import caromSeedsImg from '../images/spices/caromSeeds.jpg';
import bayLeafImg from '../images/spices/bayLeaf.jpg';
import nutmegImg from '../images/spices/nutmeg.jpg';
import maceImg from '../images/spices/mace.jpg';
import dryGingerImg from '../images/spices/dryGinger.jpg';
import redChiliPowderImg from '../images/spices/redChiliPowder.jpg';
import greenChiliImg from '../images/spices/greenChili.jpg';
import tamarindImg from '../images/spices/tamarind.jpg';
import placeholderImg from '../images/spices/placeholder.jpg';

// Map spice names to images
const spiceImages = {
  turmeric: turmericImg,
  saffron: saffronImg,
  cardamom: cardamomImg,
  cumin: cuminImg,
  coriander: corianderImg,
  clove: cloveImg,
  blackPepper: blackPepperImg,
  cinnamon: cinnamonImg,
  fennel: fennelImg,
  fenugreek: fenugreekImg,
  mustardSeeds: mustardSeedsImg,
  asafoetida: asafoetidaImg,
  caromSeeds: caromSeedsImg,
  bayLeaf: bayLeafImg,
  nutmeg: nutmegImg,
  mace: maceImg,
  dryGinger: dryGingerImg,
  redChiliPowder: redChiliPowderImg,
  greenChili: greenChiliImg,
  tamarind: tamarindImg,
  placeholder: placeholderImg,
};

const getSpiceImage = (spice) => {
  if (spice.image && spice.image.startsWith('http')) return spice.image;
  if (spice.image && spiceImages[spice.image]) return spiceImages[spice.image];
  return spiceImages.placeholder;
};

function SpicesPage() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 9; // 3x3 grid
  
  const spices = indiaData.spices.spices.map((spice) => ({
    ...spice,
    wiki: `https://en.wikipedia.org/wiki/${spice.name.replace(/\s+/g, '_')}`,
  }));

  const totalPages = Math.ceil(spices.length / itemsPerPage);
  const currentSpices = spices.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const galleryImages = indiaData.galleries.spices;

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const culinaryTraditions = [
    {
      region: 'North India',
      spices: 'Cumin, Coriander, Garam Masala, Cloves',
      dishes: [
        { name: 'Tandoori Chicken', link: 'https://en.wikipedia.org/wiki/Tandoori_chicken' },
        { name: 'Butter Chicken', link: 'https://en.wikipedia.org/wiki/Butter_chicken' },
        { name: 'Rajma Chawal', link: 'https://en.wikipedia.org/wiki/Rajma' },
      ],
      color: 'rgba(138, 21, 56, 0.8)',
    },
    {
      region: 'South India',
      spices: 'Mustard Seeds, Curry Leaves, Tamarind, Black Pepper',
      dishes: [
        { name: 'Dosa', link: 'https://en.wikipedia.org/wiki/Dosa_(food)' },
        { name: 'Sambar', link: 'https://en.wikipedia.org/wiki/Sambar_(dish)' },
        { name: 'Chettinad Chicken', link: 'https://en.wikipedia.org/wiki/Chettinad_cuisine' },
      ],
      color: 'rgba(138, 21, 56, 0.8)',
    },
    {
      region: 'East India',
      spices: 'Panch Phoron, Mustard Oil, Poppy Seeds, Bay Leaf',
      dishes: [
        { name: 'Machher Jhol', link: 'https://en.wikipedia.org/wiki/Machher_Jhol' },
        { name: 'Chingri Malai Curry', link: 'https://en.wikipedia.org/wiki/Chingri_malai_curry' },
        { name: 'Pitha', link: 'https://en.wikipedia.org/wiki/Pitha' },
      ],
      color: 'rgba(138, 21, 56, 0.8)',
    },
    {
      region: 'West India',
      spices: 'Kokum, Goda Masala, Sesame, Dried Coconut',
      dishes: [
        { name: 'Vada Pav', link: 'https://en.wikipedia.org/wiki/Vada_pav' },
        { name: 'Goan Fish Curry', link: 'https://en.wikipedia.org/wiki/Goan_cuisine' },
        { name: 'Modak', link: 'https://en.wikipedia.org/wiki/Modak' },
      ],
      color: 'rgba(138, 21, 56, 0.8)',
    },
  ];

  const indianCuisines = [
    { name: 'North Indian Cuisine', link: 'https://en.wikipedia.org/wiki/North_Indian_cuisine' },
    { name: 'South Indian Cuisine', link: 'https://en.wikipedia.org/wiki/South_Indian_cuisine' },
    { name: 'Gujarati Cuisine', link: 'https://en.wikipedia.org/wiki/Gujarati_cuisine' },
    { name: 'Rajasthani Cuisine', link: 'https://en.wikipedia.org/wiki/Rajasthani_cuisine' },
    { name: 'Bengali Cuisine', link: 'https://en.wikipedia.org/wiki/Bengali_cuisine' },
    { name: 'Goan Cuisine', link: 'https://en.wikipedia.org/wiki/Goan_cuisine' },
    { name: 'Kashmiri Cuisine', link: 'https://en.wikipedia.org/wiki/Kashmiri_cuisine' },
    { name: 'Punjabi Cuisine', link: 'https://en.wikipedia.org/wiki/Punjabi_cuisine' },
    { name: 'Hyderabadi Cuisine', link: 'https://en.wikipedia.org/wiki/Hyderabadi_cuisine' },
    { name: 'Mughlai Cuisine', link: 'https://en.wikipedia.org/wiki/Mughlai_cuisine' },
    { name: 'Assamese Cuisine', link: 'https://en.wikipedia.org/wiki/Assamese_cuisine' },
    { name: 'Chettinad Cuisine', link: 'https://en.wikipedia.org/wiki/Chettinad_cuisine' },
    { name: 'Odia Cuisine', link: 'https://en.wikipedia.org/wiki/Odia_cuisine' },
    { name: 'Kerala Cuisine', link: 'https://en.wikipedia.org/wiki/Cuisine_of_Kerala' },
    { name: 'Tamil Cuisine', link: 'https://en.wikipedia.org/wiki/Tamil_cuisine' },
    { name: 'Andhra Cuisine', link: 'https://en.wikipedia.org/wiki/Andhra_cuisine' },
    { name: 'Telangana Cuisine', link: 'https://en.wikipedia.org/wiki/Telangana_cuisine' },
    { name: 'Marathi Cuisine', link: 'https://en.wikipedia.org/wiki/Maharashtrian_cuisine' },
    { name: 'Bihari Cuisine', link: 'https://en.wikipedia.org/wiki/Bihari_cuisine' },
    { name: 'Manipuri Cuisine', link: 'https://en.wikipedia.org/wiki/Manipuri_cuisine' },
    { name: 'Meghalayan Cuisine', link: 'https://en.wikipedia.org/wiki/Meghalayan_cuisine' },
    { name: 'Mizo Cuisine', link: 'https://en.wikipedia.org/wiki/Mizo_cuisine' },
    { name: 'Naga Cuisine', link: 'https://en.wikipedia.org/wiki/Naga_cuisine' },
    { name: 'Tripuri Cuisine', link: 'https://en.wikipedia.org/wiki/Tripuri_cuisine' },
    { name: 'Sikkimese Cuisine', link: 'https://en.wikipedia.org/wiki/Sikkimese_cuisine' },
    { name: 'Arunachali Cuisine', link: 'https://en.wikipedia.org/wiki/Arunachal_Pradesh#Cuisine' },
    { name: 'Jharkhandi Cuisine', link: 'https://en.wikipedia.org/wiki/Jharkhand#Cuisine' },
    { name: 'Chhattisgarhi Cuisine', link: 'https://en.wikipedia.org/wiki/Chhattisgarh#Cuisine' },
    { name: 'Uttarakhand Cuisine', link: 'https://en.wikipedia.org/wiki/Uttarakhand#Cuisine' },
    { name: 'Himachali Cuisine', link: 'https://en.wikipedia.org/wiki/Himachal_Pradesh#Cuisine' },
    { name: 'Dogri Cuisine (Jammu)', link: 'https://en.wikipedia.org/wiki/Dogri_cuisine' },
    { name: 'Ladakhi Cuisine', link: 'https://en.wikipedia.org/wiki/Ladakhi_cuisine' },
    { name: 'Nicobarese Cuisine', link: 'https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands#Cuisine' },
    { name: 'Lakshadweep Cuisine', link: 'https://en.wikipedia.org/wiki/Lakshadweep#Cuisine' },
    { name: 'Delhi Cuisine', link: 'https://en.wikipedia.org/wiki/Cuisine_of_Delhi' },
    { name: 'Pondicherry (Puducherry) Cuisine', link: 'https://en.wikipedia.org/wiki/Cuisine_of_Puducherry' },
    { name: 'Sindhi Cuisine', link: 'https://en.wikipedia.org/wiki/Sindhi_cuisine' },
  ];

  return (
    <div className="spices-page">
      {/* Header */}
      <section className="page-header parallax">
        <div className="header-content">
          <h1>{indiaData.spices.title}</h1>
          <p>{indiaData.spices.description}</p>
          <i className={`${indiaData.spices.icon} fa-3x`}></i>
        </div>
      </section>

      {/* Introduction */}
      <section className="spices-intro">
        <ScrollingEffect>
          <div className="intro-content glassmorphic">
            <p>
              India produces nearly <strong>75% of the world's spices</strong> and is home to
              hundreds of varieties used for flavor, fragrance, and medicine. From the lush hills
              of Kerala to the arid fields of Rajasthan, each spice holds cultural and historical
              significance that shaped the world’s culinary heritage.
            </p>
            <p className="fun-fact">
              🌶️ <strong>Fun Fact:</strong> Spices were once as valuable as gold and drove the
              ancient maritime trade routes that connected India with Europe, Africa, and East Asia.
            </p>
          </div>
        </ScrollingEffect>
      </section>

      {/* Essential Spices */}
      <section className="major-spices">
        <h2>Essential Indian Spices</h2>
        
        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 0}
            className="pagination-button"
          >
            &larr; Previous
          </button>
          <span className="page-indicator">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage >= totalPages - 1}
            className="pagination-button"
          >
            Next &rarr;
          </button>
        </div>

        <div className="spices-grid">
          {currentSpices.map((spice) => (
            <ScrollingEffect key={spice.id}>
              <GlassmorphicCard
                title={
                  <a href={spice.wiki} target="_blank" rel="noopener noreferrer">
                    {spice.name}
                  </a>
                }
                subtitle={spice.origin}
                image={getSpiceImage(spice)}
                content={
                  <>
                    <p className="spice-description">{spice.description}</p>
                    <div className="spice-details">
                      <h4>Common Uses:</h4>
                      <ul>{spice.uses.map((use, i) => <li key={i}>{use}</li>)}</ul>
                      <h4>Signature Dishes:</h4>
                      <ul>
                        {spice.dishes.slice(0, 3).map((dish, i) => (
                          <li key={i}>
                            <a
                              href={`https://en.wikipedia.org/wiki/${dish.replace(/\s+/g, '_')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {dish}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                }
                badgeText={spice.origin}
              />
            </ScrollingEffect>
          ))}
        </div>
      </section>

      {/* Spinning Gallery */}
      <SpinningGallery
        title="From Farm to Kitchen"
        subtitle="The vibrant journey of Indian spices"
        images={galleryImages.slice(0, 4)}
      />

      {/* Indian Cuisines Section */}
      <section className="cuisine-section">
        <h2>Indian Cuisines — A Nation of Flavors</h2>
        <p className="cuisine-intro glassmorphic">
          Indian cuisine isn’t a single tradition — it’s a symphony of thousands. Each region tells
          its story through the ingredients and spices that flavor its dishes. Explore authentic
          cuisines below:
        </p>
        <div className="cuisine-grid">
          {indianCuisines.map((cuisine, index) => {
            let info = "";

            switch (cuisine.name) {
              case "North Indian Cuisine":
                info = "Known for rich gravies, wheat-based breads, and bold flavors with butter, ghee, and garam masala.";
                break;
              case "South Indian Cuisine":
                info = "Characterized by rice, lentils, coconut, and tangy tamarind-based curries with mustard seeds and curry leaves.";
                break;
              case "Gujarati Cuisine":
                info = "Famous for its sweet-savory balance, vegetarian thalis, and snacks like dhokla and thepla.";
                break;
              case "Rajasthani Cuisine":
                info = "Developed in arid lands — features spicy curries, gram flour dishes, and ghee-rich breads like bajra roti.";
                break;
              case "Bengali Cuisine":
                info = "Centred around fish, rice, mustard oil, and subtle use of spices for delicate flavors.";
                break;
              case "Goan Cuisine":
                info = "A blend of Indian and Portuguese styles — known for seafood, coconut, vinegar, and spicy curries.";
                break;
              case "Kashmiri Cuisine":
                info = "Influenced by Persian and Central Asian traditions, featuring rich gravies, saffron, and dry fruits.";
                break;
              case "Punjabi Cuisine":
                info = "Robust and hearty meals with tandoori cooking, butter, paneer, and spiced lentils.";
                break;
              case "Hyderabadi Cuisine":
                info = "Famed for aromatic biryanis, nuts, and spices blending Mughlai and South Indian styles.";
                break;
              case "Mughlai Cuisine":
                info = "A royal cuisine of the Mughals — creamy gravies, nuts, saffron, and kebabs dominate the palate.";
                break;
              case "Kerala Cuisine":
                info = "Uses coconut oil, curry leaves, and seafood, blending Hindu, Christian, and Muslim culinary influences.";
                break;
              case "Tamil Cuisine":
                info = "Staple rice-based dishes like idli, dosa, and sambar highlight tamarind, mustard, and chili flavors.";
                break;
              case "Andhra Cuisine":
                info = "Among India's spiciest — features red chilies, tamarind, and rice-based meals with pickles and lentils.";
                break;
              case "Marathi Cuisine":
                info = "Balances spice and sweetness — includes pav bhaji, puran poli, and goda masala-based curries.";
                break;
              case "Bihari Cuisine":
                info = "Rustic and earthy with mustard oil, sattu, and smoked spices in dishes like litti chokha.";
                break;
              case "Manipuri Cuisine":
                info = "Focuses on fresh herbs, fermented fish, and vegetables — light yet flavorful meals.";
                break;
              case "Sikkimese Cuisine":
                info = "Influenced by Nepalese and Tibetan traditions — features momos, thukpa, and fermented ingredients.";
                break;
              case "Assamese Cuisine":
                info = "Known for simple, non-spicy dishes with fish, rice, and the unique flavor of fermented bamboo shoots.";
                break;
              case "Odia Cuisine":
                info = "Subtle and less oily, featuring seafood, rice, lentils, and temple-inspired vegetarian meals.";
                break;
              case "Chettinad Cuisine":
                info = "A fiery Tamil cuisine with freshly ground masalas, pepper, and complex spice layers.";
                break;
              default:
                info = "Showcases diverse regional flavors shaped by local produce, geography, and history.";
            }

            return (
              <ScrollingEffect key={index}>
                <div className="cuisine-card glassmorphic">
                  <h3>
                    <a href={cuisine.link} target="_blank" rel="noopener noreferrer">
                      {cuisine.name}
                    </a>
                  </h3>
                  <p>{info}</p>
                </div>
              </ScrollingEffect>
            );
          })}
        </div>
      </section>

      {/* Regional Culinary Traditions */}
      <section className="culinary-section">
        <h2>Regional Culinary Traditions</h2>
        <div className="traditions-grid">
          {culinaryTraditions.map((tradition, index) => (
            <ScrollingEffect key={index}>
              <div
                className="tradition-card glassmorphic"
                style={{ borderColor: tradition.color }}
              >
                <h3>{tradition.region}</h3>
                <p><strong>Signature Spices:</strong> {tradition.spices}</p>
                <p><strong>Famous Dishes:</strong></p>
                <ul>
                  {tradition.dishes.map((dish, i) => (
                    <li key={i}>
                      <a
                        href={dish.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {dish.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollingEffect>
          ))}
        </div>
      </section>

      {/* Science of Flavor */}
      <section className="science-section">
        <h2>The Science of Flavor</h2>
        <ScrollingEffect>
          <div className="science-content glassmorphic">
            <p>
              Indian cooking is based on contrasting flavor molecules — rather than similar ones —
              creating the deep complexity found in dishes like <em>Vindaloo</em> and <em>Biryani</em>.
            </p>
            <p>
              Learn more on{' '}
              <a
                href="https://en.wikipedia.org/wiki/Flavor_pairing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flavor Pairing Theory
              </a>.
            </p>
          </div>
        </ScrollingEffect>
      </section>

      {/* Health Benefits */}
      <section className="health-section">
        <h2>Health Benefits of Spices</h2>
        <div className="health-grid">
          {spices.slice(0, 4).map((spice) => (
            <ScrollingEffect key={spice.id}>
              <div className="health-card glassmorphic">
                <h3>
                  <a href={spice.wiki} target="_blank" rel="noopener noreferrer">
                    {spice.name}
                  </a>
                </h3>
                <ul>{spice.health.map((benefit, i) => <li key={i}>{benefit}</li>)}</ul>
                <div className="spice-health-footer">
                  <span className="health-icon">🌿</span>
                  <span className="health-tag">Ayurvedic Insight</span>
                </div>
              </div>
            </ScrollingEffect>
          ))}
        </div>
      </section>

      {/* Global Influence */}
      <section className="global-influence">
        <h2>Global Influence of Indian Spices</h2>
        <ScrollingEffect>
          <div className="global-content glassmorphic">
            <p>
              Indian spices shaped global trade — sparking the Age of Exploration. European traders
              sought routes to India, forever changing world history.
            </p>
            <p>
              Discover more on{' '}
              <a
                href="https://en.wikipedia.org/wiki/Spice_trade"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Spice Trade
              </a>.
            </p>
          </div>
        </ScrollingEffect>
      </section>
    </div>
  );
}

export default SpicesPage;
