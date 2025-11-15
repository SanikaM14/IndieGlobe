import React from 'react';
import '../css/ContributionsList.css';


const baseContributions = [
{ title: 'Mathematics — Zero & Decimal System', desc: 'Concept of zero and decimal place-value system.', link: 'https://www.bbc.com/news/world-asia-india-41062325' },
{ title: 'Astronomy — Aryabhata', desc: 'Calculated Earth’s rotation and approximation of pi.', link: 'https://ncert.nic.in' },
{ title: 'Medicine — Sushruta Samhita', desc: 'Described surgeries like cataract and plastic surgery.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330001/' },
{ title: 'Education — Nalanda University', desc: 'Ancient center of global learning.', link: 'https://www.nalandauniv.edu.in/' },
{ title: 'Metallurgy — Iron Pillar of Delhi', desc: 'Rust-resistant iron structure over 1600 years old.', link: 'https://www.scientificamerican.com/article/why-indias-iron-pillar-has-not-rusted-after-1600-years/' },
{ title: 'Textiles — Cotton & Indigo', desc: 'Pioneered cotton cultivation and indigo dye.', link: 'https://www.britannica.com/topic/history-of-the-cotton-industry-1986150' },
{ title: 'Mathematics — Wootz Steel', desc: 'High-quality crucible steel from India, precursor to Damascus steel.', link: 'https://www.indiatimes.com/technology/wootz-steel-ancient-indian-invention-338417.html' },
{ title: 'Games — Snakes & Ladders', desc: 'Originated as Mokshapath with moral lessons.', link: 'https://www.jagranjosh.com/general-knowledge/history-of-snakes-and-ladders-1491214981-1' },
{ title: 'Education — Takshashila University', desc: 'One of the world’s earliest universities, around 700 BCE.', link: 'https://www.britannica.com/place/Taxila' },
{ title: 'Medicine — Charaka Samhita', desc: 'Foundational text of Ayurveda by Charaka.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330003/' },
{ title: 'Astronomy — Surya Siddhanta', desc: 'Calculated the solar year with great accuracy.', link: 'https://www.britannica.com/science/Surya-Siddhanta' },
{ title: 'Mathematics — Sulba Sutras', desc: 'Contained early forms of Pythagoras’ theorem.', link: 'https://www.britannica.com/topic/Sulba-sutras' },
{ title: 'Surgery — Cataract Operation', desc: 'Sushruta described cataract surgery using special instruments.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330001/' },
{ title: 'Metallurgy — Zinc Distillation', desc: 'India pioneered zinc extraction by distillation in 12th century.', link: 'https://www.researchgate.net/publication/228459679' },
{ title: 'Technology — Seamless Metal Globes', desc: 'Mughal India produced seamless celestial globes (16th century).', link: 'https://en.wikipedia.org/wiki/Seamless_celestial_globe' },
{ title: 'Astronomy — Bhaskara II', desc: 'Defined concepts of calculus and planetary motion.', link: 'https://www.britannica.com/biography/Bhaskara-II' },
{ title: 'Agriculture — Sugar Refining', desc: 'India pioneered crystallisation of sugar (sarkara).', link: 'https://www.britannica.com/topic/sugar' },
{ title: 'Board Games — Ludo (Pachisi)', desc: 'Traditional Indian cross-and-circle board game.', link: 'https://www.britannica.com/topic/Pachisi' },
{ title: 'Yoga & Meditation', desc: 'Philosophy and practice for mental and physical well-being.', link: 'https://www.britannica.com/topic/Yoga-philosophy' },
{ title: 'Philosophy — Vedanta', desc: 'Profound contributions to metaphysics and logic.', link: 'https://plato.stanford.edu/entries/vedanta/' },
{ title: 'Language — Sanskrit Grammar (Panini)', desc: 'Panini systematized grammar; a precursor to modern linguistics.', link: 'https://www.britannica.com/biography/Panini' },
{ title: 'Water Management — Stepwells', desc: 'Ingenious stepwell structures for water storage.', link: 'https://www.archdaily.com/stepwells-of-india' },
{ title: 'Architecture — Rock-cut Temples', desc: 'Ajanta and Ellora show advanced engineering and art.', link: 'https://whc.unesco.org/en/list/242/' },
{ title: 'Medicine — Plastic Surgery', desc: 'Sushruta described nose reconstruction (rhinoplasty).', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330001/' },
{ title: 'Calendars — Hindu Panchang', desc: 'Sophisticated lunar-solar calendar system.', link: 'https://www.britannica.com/topic/Hindu-calendar' },
{ title: 'Astronomy — Lunar Eclipses', desc: 'Ancient Indians explained eclipses as shadow phenomena.', link: 'https://ncert.nic.in/textbook.php' },
{ title: 'Chess (Chaturanga)', desc: 'The origin of chess in India.', link: 'https://www.chess.com/article/view/the-history-of-chess' },
{ title: 'Space — Chandrayaan Missions', desc: 'Lunar exploration missions by ISRO.', link: 'https://www.isro.gov.in/' },
{ title: 'Mathematics — Fibonacci Sequence', desc: 'Introduced to the West via Indian mathematics (Pingala & Virahanka).', link: 'https://www.britannica.com/science/Fibonacci-sequence' },
{ title: 'Medicine — Ayurveda', desc: 'Holistic system of medicine covering diet, lifestyle, and therapy.', link: 'https://www.britannica.com/science/Ayurveda' },
{ title: 'Astronomy — Heliocentrism by Aryabhata', desc: 'Suggested Earth rotates on its axis, centuries before Copernicus.', link: 'https://ncert.nic.in' },
{ title: 'Architecture — Brihadeeswara Temple', desc: '1000-year-old Chola temple with advanced engineering.', link: 'https://whc.unesco.org/en/list/250/' },
{ title: 'Mathematics — Trigonometry (Jya, Koti-jya)', desc: 'Indian mathematicians developed sine and cosine functions.', link: 'https://www.britannica.com/topic/history-of-trigonometry-2002224' },
{ title: 'Agriculture — Cotton Cultivation', desc: 'Earliest evidence of cotton growing and weaving.', link: 'https://www.britannica.com/topic/history-of-the-cotton-industry-1986150' },
{ title: 'Games — Polo', desc: 'Equestrian sport with origins in ancient India.', link: 'https://www.britannica.com/sports/polo' },
{ title: 'Shipbuilding — Ancient Docks of Lothal', desc: 'Indus Valley Civilization had advanced dockyards.', link: 'https://www.harappa.com/indus/indus-lothal.html' },
{ title: 'Astronomy — Jantar Mantar', desc: '18th-century astronomical observatories by Jai Singh II.', link: 'https://whc.unesco.org/en/list/1338/' },
{ title: 'Food — Spices', desc: 'India pioneered global spice cultivation and trade.', link: 'https://www.britannica.com/topic/spice-trade' },
{ title: 'Mathematics — Negative Numbers', desc: 'Brahmagupta defined operations with negative numbers.', link: 'https://www.britannica.com/biography/Brahmagupta' },
{ title: 'Medicine — Rasashastra', desc: 'Alchemy branch in Ayurveda, precursor to chemistry.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330003/' },
{ title: 'Astronomy — Eclipse Prediction', desc: 'Aryabhata accurately predicted solar and lunar eclipses.', link: 'https://ncert.nic.in' },
{ title: 'Art — Miniature Paintings', desc: 'Mughal and Rajput miniatures influenced world art.', link: 'https://www.britannica.com/art/Indian-painting' },
{ title: 'Technology — Charkha (Spinning Wheel)', desc: 'Revolutionized textiles; symbol of India’s independence.', link: 'https://www.britannica.com/topic/spinning-wheel' },
{ title: 'Mathematics — Arithmetic Progressions', desc: 'Bhaskara II worked on sequences and series.', link: 'https://www.britannica.com/biography/Bhaskara-II' },
{ title: 'Astronomy — Planetary Motion', desc: 'Indian astronomers gave models of elliptical orbits.', link: 'https://www.britannica.com/topic/Indian-astronomy' },
{ title: 'Engineering — Stepwell Rani ki Vav', desc: 'Architectural wonder and UNESCO site.', link: 'https://whc.unesco.org/en/list/922/' },
{ title: 'Games — Kho-Kho', desc: 'Traditional Indian tag sport with deep cultural roots.', link: 'https://olympics.com/en/sports/kho-kho/' },
{ title: 'Literature — Panchatantra', desc: 'Ancient Indian fables that spread worldwide.', link: 'https://www.britannica.com/topic/Panchatantra' },
{ title: 'Mathematics — Binary Numbers (Pingala)', desc: 'Described binary numeral system in Chandahshastra (~200 BCE).', link: 'https://www.britannica.com/biography/Pingala' },
{ title: 'Astronomy — Lagadha’s Vedanga Jyotisha', desc: 'One of the earliest Indian treatises on astronomy (~1200 BCE).', link: 'https://www.britannica.com/topic/Vedanga-Jyotisa' },
{ title: 'Medicine — Yoga Therapy', desc: 'Integrated mind-body practices for healing and wellness.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3193654/' },
{ title: 'Mathematics — Concept of Infinity', desc: 'Brahmagupta introduced rules for handling infinity.', link: 'https://www.britannica.com/biography/Brahmagupta' },
{ title: 'Technology — Iron Cannon Casting', desc: 'India pioneered casting of large cannons in medieval times.', link: 'https://en.wikipedia.org/wiki/Jahangir_cannon' },
{ title: 'Astronomy — Kerala School of Mathematics', desc: 'Developed early calculus concepts centuries before Newton.', link: 'https://www.britannica.com/topic/Kerala-school-of-astronomy-and-mathematics' },
{ title: 'Games — Kabaddi', desc: 'Traditional Indian contact sport, now played worldwide.', link: 'https://olympics.com/en/sports/kabaddi/' },
{ title: 'Agriculture — Rice Cultivation', desc: 'Earliest evidence of rice growing traced to India.', link: 'https://www.britannica.com/plant/rice' },
{ title: 'Architecture — Sun Temple, Konark', desc: '13th-century marvel built as a chariot of the sun god.', link: 'https://whc.unesco.org/en/list/246/' },
{ title: 'Medicine — Veterinary Science (Shalihotra Samhita)', desc: 'Ancient text on animal healthcare and surgery.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3941985/' },
{ title: 'Mathematics — Algebra', desc: 'Indian mathematicians like Brahmagupta developed algebraic methods.', link: 'https://www.britannica.com/biography/Brahmagupta' },
{ title: 'Astronomy — Calculation of Sidereal Year', desc: 'Indian texts gave accurate length of sidereal year.', link: 'https://www.britannica.com/topic/Indian-astronomy' },
{ title: 'Textiles — Bandhani & Tie-Dye', desc: 'Traditional resist-dye techniques from India.', link: 'https://www.britannica.com/art/tie-dye' },
{ title: 'Literature — Mahabharata', desc: 'One of the world’s longest epics, with philosophical depth.', link: 'https://www.britannica.com/topic/Mahabharata' },
{ title: 'Literature — Ramayana', desc: 'Epic of Rama, with enduring cultural influence.', link: 'https://www.britannica.com/topic/Ramayana-Indian-epic' },
{ title: 'Astronomy — Aryabhata’s Pi Value', desc: 'Estimated π (pi) as 3.1416, remarkably close to modern value.', link: 'https://ncert.nic.in' },
{ title: 'Music — Classical Ragas', desc: 'Complex melodic frameworks unique to Indian tradition.', link: 'https://www.britannica.com/art/raga' },
{ title: 'Architecture — Rock-cut Kailasa Temple, Ellora', desc: 'Largest monolithic rock excavation in the world.', link: 'https://whc.unesco.org/en/list/243/' },
{ title: 'Medicine — Siddha System', desc: 'Ancient Tamil medicine tradition with unique practices.', link: 'https://www.britannica.com/science/Siddha-medicine' },
{ title: 'Mathematics — Quadratic Equations', desc: 'Brahmagupta provided solutions to quadratic equations.', link: 'https://www.britannica.com/biography/Brahmagupta' },
{ title: 'Mathematics — Arithmetic Operations with Zero', desc: 'Brahmagupta defined addition, subtraction, and division with zero.', link: 'https://www.britannica.com/biography/Brahmagupta' },
{ title: 'Astronomy — Gupta Era Observatories', desc: 'Structures for sky observation and planetary tracking.', link: 'https://www.britannica.com/topic/Indian-astronomy' },
{ title: 'Medicine — Shankha Prakshalana', desc: 'Ancient yogic intestinal cleansing technique.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3193654/' },
{ title: 'Agriculture — Indigo Dye', desc: 'India pioneered cultivation of indigo, vital for global trade.', link: 'https://www.britannica.com/plant/indigo-plant' },
{ title: 'Art — Bharatanatyam Dance', desc: 'One of the oldest classical dance forms in the world.', link: 'https://www.britannica.com/art/Bharata-Natyam' },
{ title: 'Mathematics — Pascal’s Triangle (Meru Prastara)', desc: 'Described by Pingala centuries before Pascal.', link: 'https://www.britannica.com/topic/Pascal-triangle' },
{ title: 'Astronomy — Concept of Time Cycles (Yugas)', desc: 'Indian cosmology described vast time cycles.', link: 'https://www.britannica.com/topic/Hinduism/Cosmology' },
{ title: 'Medicine — Cesarean Delivery References', desc: 'Ancient Indian texts mention early cesarean births.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330001/' },
{ title: 'Architecture — Lotus Temple Design Heritage', desc: 'Modern marvel inspired by India’s tradition of symbolism.', link: 'https://lotustemple.org/' },
{ title: 'Music — Tabla', desc: 'Percussion instrument developed in India in 18th century.', link: 'https://www.britannica.com/art/tabla' },
{ title: 'Literature — Arthashastra by Kautilya', desc: 'Ancient treatise on statecraft, economics, and politics.', link: 'https://www.britannica.com/topic/Arthashastra' },
{ title: 'Mathematics — Cube Roots and Higher Powers', desc: 'Bhaskara II worked on solving higher-order equations.', link: 'https://www.britannica.com/biography/Bhaskara-II' },
{ title: 'Games — Carrom', desc: 'Popular tabletop strike game with Indian origins.', link: 'https://www.carrom.org/' },
{ title: 'Architecture — Meenakshi Temple, Madurai', desc: 'Intricate Dravidian architecture masterpiece.', link: 'https://whc.unesco.org/en/tentativelists/5890/' },
{ title: 'Science — Rasayana (Alchemy)', desc: 'Ayurvedic alchemy tradition, precursor to chemistry.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330003/' },
{ title: 'Astronomy — Decimal Time Division', desc: 'Ancient Indians divided day into 60 ghatikas (24 minutes each).', link: 'https://www.britannica.com/topic/Indian-astronomy' },
{ title: 'Food — Curry & Masala Blends', desc: 'Indian culinary traditions influenced global cuisine.', link: 'https://www.britannica.com/topic/curry' },
{ title: 'Mathematics — Magic Squares', desc: 'Indian mathematicians studied properties of magic squares.', link: 'https://www.britannica.com/topic/magic-square' },
{ title: 'Games — Gilli Danda', desc: 'Traditional Indian stick-and-ball game, precursor to cricket.', link: 'https://www.britannica.com/sports/cricket' },
{ title: 'Philosophy — Jain Logic (Syadvada)', desc: 'Jain philosophers contributed to logic and epistemology.', link: 'https://www.britannica.com/topic/Jainism' },
{ title: 'Mathematics — Concept of Shunya (Zero)', desc: 'Indian mathematicians formalized zero as both numeral and concept.', link: 'https://www.bbc.com/news/world-asia-india-41062325' },
{ title: 'Astronomy — Aryabhata’s Eclipse Theory', desc: 'Explained eclipses as shadows, rejecting mythological causes.', link: 'https://ncert.nic.in' },
{ title: 'Medicine — Leprosy Treatment', desc: 'Kushtha Roga described in Ayurveda with herbal remedies.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3330003/' },
{ title: 'Engineering — Lothal Bead-Making Factory', desc: 'Indus Valley site shows earliest evidence of mass production.', link: 'https://www.harappa.com/indus/indus-lothal.html' },
{ title: 'Games — Playing Cards (Ganjifa)', desc: 'Mughal India popularized intricate handmade card games.', link: 'https://www.britannica.com/topic/Ganjifa' },
{ title: 'Philosophy — Buddhism', desc: 'Originated in India, influencing Asia and the world.', link: 'https://www.britannica.com/topic/Buddhism' },
{ title: 'Philosophy — Jainism', desc: 'Indian philosophy emphasizing non-violence and truth.', link: 'https://www.britannica.com/topic/Jainism' },
{ title: 'Music — Sitar', desc: 'Indian string instrument that influenced global music.', link: 'https://www.britannica.com/art/sitar' },
{ title: 'Astronomy — Varahamihira’s Contributions', desc: 'Wrote Panchasiddhantika, summarizing five astronomical systems.', link: 'https://www.britannica.com/biography/Varahamihira' },
{ title: 'Space — Gaganyaan Mission', desc: 'India’s upcoming human spaceflight program.', link: 'https://www.isro.gov.in/' },
{ title: 'Space — Mangalyaan', desc: 'Mars Orbiter Mission, successful on first attempt.', link: 'https://www.isro.gov.in/' },
{ title: 'Information Technology — Digital India', desc: 'UPI, Aadhaar, fintech leadership.', link: 'https://www.digitalindia.gov.in/' },
];


const contributions = Array.from({length:100}, (_,i)=>{
if(i<baseContributions.length) return baseContributions[i];
return {
title: `Contribution #${i+1}`,
desc: `Detailed description of contribution number ${i+1}, showcasing India’s impact in science, culture, technology, or society.`,
link: 'https://www.india.gov.in/'
};
});


function ContributionsList(){
return (
<div>
{contributions.map((c,i)=>(
<div className="card fade-in" key={i} style={{animationDelay:`${(i%10)*0.1}s`}}>
<h3 style={{margin:0}}>{c.title}</h3>
<div style={{marginTop:6,fontSize:14,color:'var(--muted)'}}>{c.desc}</div>
<div style={{marginTop:8}}><a href={c.link} target="_blank" rel="noopener noreferrer">Read more</a></div>
</div>
))}
</div>
);
}


export default function ContributionsPage(){
return (
<div className="container">
<ContributionsList />
</div>
);
}