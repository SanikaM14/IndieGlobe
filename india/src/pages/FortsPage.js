// src/pages/FortsPage.js
import React, { useState, useEffect } from 'react';
import IndiaFortMap from '../components/IndiaFortMap';
import '../css/FortsPage.css';
import GlassmorphicCard from '../components/GlassmorphicCard';
import PhotoGallery from '../components/PhotoGallery';
import ScrollingEffect from '../components/ScrollingEffect';
import { indiaData } from '../data/data';

// Import all fort images
import AmberFort from '../images/forts/AmberFort.jpg';
import Agra from '../images/forts/Agra.jpg';
import Bandhavgarh from '../images/forts/Bandhavgarh.jpg';
import Barabati from '../images/forts/Barabati.jpg';
import Basgo from '../images/forts/Basgo.jpg';
import Bekal from '../images/forts/Bekal.jpg';
import Belapur from '../images/forts/Belapur.jpg';
import Bhangarh from '../images/forts/Bhangarh.jpg';
import Bhujia from '../images/forts/Bhujia.jpg';
import Bidar from '../images/forts/Bidar.jpg';
import Chitradurga from '../images/forts/Chitradurga.jpg';
import Chittorgarh from '../images/forts/Chittorgarh.jpg';
import Diu from '../images/forts/Diu.jpg';
import Gagron from '../images/forts/Gagron.jpg';
import Gaur from '../images/forts/Gaur.jpg';
import Gingee from '../images/forts/Gingee.jpg';
import Gohad from '../images/forts/Gohad.jpg';
import Golconda from '../images/forts/Golconda.jpg';
import Gwalior from '../images/forts/Gwalior.jpg';
import Harishchandragad from '../images/forts/Harishchandragad.jpg';
import Jalpaiguri from '../images/forts/Jalpaiguri.jpg';
import Junagarh from '../images/forts/Junagarh.jpg';
import Kamru from '../images/forts/Kamru.jpg';
import Kangla from '../images/forts/Kangla.jpg';
import Kangra from '../images/forts/Kangra.jpg';
import Khandar from '../images/forts/Khandar.jpg';
import Kochi from '../images/forts/kochi.jpg';
import Kumbhalgarh from '../images/forts/Kumbhalgarh.jpg';
import Lohagad from '../images/forts/Lohagad.jpg';
import Lohagarh from '../images/forts/Lohagarh.jpg';
import Madikeri from '../images/forts/Madikeri.jpg';
import Mandu from '../images/forts/Mandu.jpg';
import Mehrangarh from '../images/forts/Mehrangarh.jpg';
import MurudJanjira from '../images/forts/Murud-Janjira.jpg';
import Neemrana from '../images/forts/Neemrana.jpg';
import Orchha from '../images/forts/Orchha.jpg';
import Palakkad from '../images/forts/Palakkad.jpg';
import Panhala from '../images/forts/Panhala.jpg';
import Pratapgad from '../images/forts/Pratapgad.jpg';
import Raigad from '../images/forts/Raigad.jpg';
import Ranthambore from '../images/forts/Ranthambore.jpg';
import RedFort from '../images/forts/Red Fort.jpg';
import Rohtasgarh from '../images/forts/Rohtasgarh.jpg';
import Roopnarayan from '../images/forts/Roopnarayan.jpg';
import Shivneri from '../images/forts/Shivneri.jpg';
import Sindhudurg from '../images/forts/Sindhudurg.jpg';
import StGeorgge from '../images/forts/St. Georgge.jpg';
import StAngelo from '../images/forts/St.Angelo.jpg';
import Taragarh from '../images/forts/Taragarh.jpg';
import Tughlaqabad from '../images/forts/Tughlaqabad.jpg';
import Udayagiri from '../images/forts/Udayagiri.jpg';
import Uparkot from '../images/forts/Uparkot.jpg';
import Jaisalmer from '../images/forts/Jaisalmer.jpg';
import VelloreFort from '../images/forts/Vellore Fort.jpg';
import AsirgarhFort from '../images/forts/Asirgarh Fort.jpg';
import FortWilliam from '../images/forts/Fort William.jpg';
import WayanadFort from '../images/forts/Wayanad.jpg';
import AchalgarhFort from '../images/forts/Achalgarh.jpg';
import AngudaFort from '../images/forts/Anguda.jpg';


// Create image mapping
const fortImages = {
  "Wayanad Fort": WayanadFort,
  "Achalgarh Fort": AchalgarhFort,
  "Anguda Fort": AngudaFort,
  "Vellore Fort": VelloreFort,
  "Asirgarh Fort": AsirgarhFort,
  "Fort William": FortWilliam,
  "Amber Fort": AmberFort,
  "Agra": Agra,
  "Bandhavgarh": Bandhavgarh,
  "Barabati": Barabati,
  "Basgo": Basgo,
  "Bekal": Bekal,
  "Belapur": Belapur,
  "Bhangarh": Bhangarh,
  "Bhujia": Bhujia,
  "Bidar": Bidar,
  "Chitradurga": Chitradurga,
  "Chittorgarh": Chittorgarh,
  "Diu": Diu,
  "Gagron": Gagron,
  "Gaur": Gaur,
  "Gingee": Gingee,
  "Gohad": Gohad,
  "Golconda": Golconda,
  "Gwalior": Gwalior,
  "Harishchandragad": Harishchandragad,
  "Jaisalmer": Jaisalmer,
  "Jalpaiguri": Jalpaiguri,
  "Junagarh": Junagarh,
  "Kamru": Kamru,
  "Kangla": Kangla,
  "Kangra": Kangra,
  "Khandar": Khandar,
  "Kochi": Kochi,
  "Kumbhalgarh": Kumbhalgarh,
  "Lohagad": Lohagad,
  "Lohagarh": Lohagarh,
  "Madikeri": Madikeri,
  "Mandu": Mandu,
  "Mehrangarh": Mehrangarh,
  "Murud Janjira": MurudJanjira,
  "Neemrana": Neemrana,
  "Orchha": Orchha,
  "Palakkad": Palakkad,
  "Panhala": Panhala,
  "Pratapgad": Pratapgad,
  "Raigad": Raigad,
  "Ranthambore": Ranthambore,
  "Red Fort": RedFort,
  "Rohtasgarh": Rohtasgarh,
  "Roopnarayan": Roopnarayan,
  "Shivneri": Shivneri,
  "Sindhudurg": Sindhudurg,
  "St. Georgge": StGeorgge,
  "St. Angelo": StAngelo,
  "Taragarh": Taragarh,
  "Tughlaqabad": Tughlaqabad,
  "Udayagiri": Udayagiri,
  "Uparkot": Uparkot,
};

function FortsPage() {
  const fortsData = indiaData.forts;
  const galleryImages = indiaData.galleries.forts;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchActive, setSearchActive] = useState(false);
  const [filteredForts, setFilteredForts] = useState([]);
  const fortsPerPage = 20; // Number of forts per page
  
  // Forts data organized by state
  const fortsOfIndia = {
    "Rajasthan": [
      {
        name: "Amber Fort, Jaipur",
        fact: "A blend of Rajput and Mughal architecture; famous for its Sheesh Mahal (Mirror Palace)."
      },
      {
        name: "Mehrangarh Fort, Jodhpur",
        fact: "Towering 400 feet above the city, it still bears cannonball marks from historic battles."
      },
      {
        name: "Chittorgarh Fort, Chittorgarh",
        fact: "A UNESCO World Heritage Site and symbol of Rajput pride — site of three historic jauhar sacrifices."
      },
      {
        name: "Jaisalmer Fort, Jaisalmer",
        fact: "A 'living fort' of golden sandstone; people still reside within its ramparts."
      },
      {
        name: "Kumbhalgarh Fort, Rajsamand",
        fact: "Has the second-longest continuous wall in the world (36 km) after the Great Wall of China."
      },
      {
        name: "Gagron Fort, Jhalawar",
        fact: "A rare hill-and-water fort — surrounded by the Ahu and Kali Sindh rivers; UNESCO-listed."
      },
      {
        name: "Jaigarh Fort, Jaipur",
        fact: "Built in 18th century to guard Amber Fort; houses 'Jaivana', the world's largest wheeled cannon."
      },
      {
        name: "Bala Qila, Alwar",
        fact: "Hill-top fort with six gates and panoramic views of Alwar city."
      },
      {
        name: "Taragarh Fort, Bundi",
        fact: "Built in 1354 CE; one of India's oldest hill forts, known for tunnels and scenic vistas."
      },
      {
        name: "Jalore Fort, Jalore",
        fact: "Massive hill fort known as 'Sonalgarh' — one of the most defensible strongholds of Rajasthan."
      },
      {
        name: "Badnore Fort, Bhilwara",
        fact: "Stands on seven hills; a picturesque site listed by Rajasthan Tourism."
      },
      {
        name: "Bhatner Fort, Hanumangarh",
        fact: "Believed to be over 1,700 years old — one of the oldest forts in North India."
      },
      {
        name: "Anupgarh Fort, Sri Ganganagar",
        fact: "Built in the 17th century by Mughal governor Anup Singh — protected the northern frontier."
      },
      {
        name: "Garh Palace (Kota Fort), Kota",
        fact: "A blend of fortification and palace architecture on the banks of the Chambal River."
      },
      {
        name: "Gugor Fort, Baran",
        fact: "Ancient fort in Baran district — part of the Hadoti heritage circuit."
      },
      {
        name: "Hill Fort Kesroli, Alwar",
        fact: "14th-century fort, now a heritage hotel, offering views of the Aravalli Hills."
      },
      {
        name: "Bharatpur Fort (Lohagarh Fort), Bharatpur",
        fact: "Famous for its impenetrable defenses — withstood multiple British attacks in the 19th century."
      },
      {
        name: "Fatehpur Fort, Sikar",
        fact: "A small but artistic fort known for Shekhawati-style frescoes and havelis."
      },
      {
        name: "Nagaur Fort, Nagaur",
        fact: "One of the best-preserved Rajput–Mughal structures; hosts the Sufi Festival annually."
      },
      {
        name: "Junagarh Fort, Bikaner",
        fact: "An unassailable fort in Bikaner — unique for being built on flat land, not a hill."
      },
      {
        name: "Bhangarh Fort, Alwar",
        fact: "India's most haunted fort — local lore speaks of a sorcerer's curse that doomed the entire town. Entry is banned after sunset by the ASI."
      }
    ],
    "Maharashtra": [
      {
        name: "Raigad Fort, Raigad",
        fact: "Once the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj. His coronation took place here in 1674 CE."
      },
      {
        name: "Pratapgad Fort, Satara",
        fact: "Built by Shivaji Maharaj in 1656 CE; site of the legendary battle with Afzal Khan."
      },
      {
        name: "Sindhudurg Fort, Sindhudurg",
        fact: "A sea fort built by Shivaji Maharaj (1664–1667) on the Konkan coast. Known for its concealed main entrance and defensive walls."
      },
      {
        name: "Visapur Fort, Pune",
        fact: "Built between 1713–1720 CE. Neighboring Lohagad Fort, it offers panoramic views of Lonavala."
      },
      {
        name: "Chauler Fort, Nashik",
        fact: "A plateau fort with steep escarpments on all sides; offers stunning views of the Baglan range."
      },
      {
        name: "Chandragad Fort, Raigad",
        fact: "Served as a watchpoint over Varandha Ghat, crucial for controlling the ancient trade route."
      },
      {
        name: "Murud-Janjira Fort, Raigad (Coastal)",
        fact: "An island fort famous for never being conquered by enemies; built by the Siddis in the 15th century."
      },
      {
        name: "Rajgad Fort, Pune",
        fact: "Served as the first capital of the Maratha Empire. Its massive design reflects strategic brilliance."
      },
      {
        name: "Sinhagad Fort, Pune",
        fact: "Site of the famous Battle of Sinhagad (1670) where Tanaji Malusare fought valiantly."
      },
      {
        name: "Lohagad Fort, Lonavala",
        fact: "A hill fort near Lonavala with ancient Buddhist caves nearby; connected to Visapur by a ridge."
      },
      {
        name: "Torna Fort, Pune",
        fact: "The first fort captured by Shivaji Maharaj at age 16, marking the beginning of the Maratha Empire."
      },
      {
        name: "Shivneri Fort, Junnar",
        fact: "Birthplace of Chhatrapati Shivaji Maharaj — a revered heritage site with strong defensive walls."
      },
      {
        name: "Khanderi Fort, Mumbai Coast",
        fact: "A small sea fort built in the 17th century to guard Maratha naval routes against the Mughals and British."
      },
      {
        name: "Purandar Fort, Pune",
        fact: "Important in Maratha history — where Shivaji signed the 1665 Treaty of Purandar with Jai Singh I."
      },
      {
        name: "Tikona Fort, Maval",
        fact: "Triangular hill fort in the Sahyadris, known for its breathtaking views and steep climb."
      },
      {
        name: "Salher Fort, Nashik",
        fact: "Second-highest fort in Maharashtra; site of the massive 1672 Maratha–Mughal battle victory."
      },
      {
        name: "Alibag Fort (Kulaba Fort), Alibag",
        fact: "Coastal fort built by Shivaji Maharaj in 1652 to protect the region from pirates and invaders."
      },
      {
        name: "Harihar Fort, Nashik",
        fact: "Renowned for its near-vertical rock-cut steps — a favorite among trekkers and history lovers."
      },
      {
        name: "Bhagwantgad Fort, Sindhudurg",
        fact: "Located near Malvan on the banks of Kalaval creek; named after Bhagwant, the local deity."
      },
      {
        name: "Gorakhgad Fort, Thane",
        fact: "A small but strategic hill fort used to monitor trade routes through the Naneghat pass."
      }
    ],
    "Madhya Pradesh": [
      {
        name: "Gwalior Fort, Gwalior",
        fact: "Babur called it 'the pearl among fortresses of Hind'. It houses 6th-century temples and magnificent Jain rock sculptures."
      },
      {
        name: "Mandu Fort, Mandu",
        fact: "An architectural wonder with Afghan influence — known for the romantic legend of Baz Bahadur and Rani Roopmati."
      },
      {
        name: "Asirgarh Fort, Burhanpur",
        fact: "Called the 'Key to the Deccan', this fort was considered impregnable and was a strategic Mughal stronghold."
      }
    ],
    "Karnataka": [
      {
        name: "Chitradurga Fort, Chitradurga",
        fact: "Known as the 'Seven-Circles Fort' for its seven concentric walls; built over centuries with temples, reservoirs, and linked to the legend of Onake Obavva."
      },
      {
        name: "Bidar Fort, Bidar",
        fact: "Massive 15th-century fort built by the Bahmani Sultanate; houses the Rangin Mahal and Solah Khamba Mosque."
      },
      {
        name: "Gulbarga Fort, Kalaburagi",
        fact: "Expanded by the Bahmanis; includes the grand Jama Masjid and showcases Indo-Islamic architectural features of North Karnataka."
      },
      {
        name: "Raichur Fort, Raichur",
        fact: "Built under the Kakatiyas and later held by multiple dynasties; stands atop a hill in the fertile Raichur Doab."
      },
      {
        name: "Mirjan Fort, Uttara Kannada",
        fact: "16th-century coastal fort built by Queen Chennabhairadevi; refurbished in the 17th century and located near the Arabian Sea coast."
      },
      {
        name: "Kittur Fort, Belagavi district",
        fact: "Historic fort where Rani Chennamma of Kittur led early resistance against British rule in 1824."
      },
      {
        name: "Madhugiri Fort, Tumakuru",
        fact: "Built atop one of Asia's largest monolithic hills; known for its strategic vantage and challenging climb."
      },
      {
        name: "Manjarabad Fort, Hassan district",
        fact: "Star-shaped fort built by Tipu Sultan (1785–1792), inspired by European military architecture."
      },
      {
        name: "Devanahalli Fort, near Bengaluru",
        fact: "Fortified town associated with Tipu Sultan's birthplace; features classical South Indian defensive walls."
      },
      {
        name: "Nandi Hill Fort, Chikkaballapur district",
        fact: "Hilltop fort offering panoramic views near Bengaluru; held by the Ganga, Chola, and Tipu Sultan's armies."
      },
      {
        name: "Saundatti Fort, Belagavi district",
        fact: "Ancient fort built by the Ratta dynasty; commands views of the Malaprabha valley."
      },
      {
        name: "Kavaledurga Fort, Shivamogga district",
        fact: "Ruined but scenic hill fort built by the Keladi Nayakas, surrounded by dense forests."
      },
      {
        name: "Belgaum Fort, Belagavi",
        fact: "Massive fort blending Hindu and Islamic architectural styles, containing mosques and Jain temples."
      },
      {
        name: "Parasgad Fort, Gadag district",
        fact: "Historic hill fort overlooking Gajendragad; once part of the Maratha and local chieftain control."
      },
      {
        name: "Midigeshi Fort, Tumakuru district",
        fact: "Hill fort with scenic ruins and commanding views of surrounding plains."
      },
      {
        name: "Pavagada Fort, Tumakuru region",
        fact: "16th-century hill fort originally under the Vijayanagara Empire; later occupied by Hyder Ali."
      },
      {
        name: "Shorapur Fort, Yadgir district",
        fact: "North Karnataka fort that served as a stronghold under the Nayakas of Shorapur."
      },
      {
        name: "Ucchangi Fort, Davanagere district",
        fact: "Medieval hill fort amid lush forest; associated with the Chalukyan and Nayaka periods."
      },
      {
        name: "Bellary Fort, Ballari district",
        fact: "Two-level hill fort offering panoramic views of the Tungabhadra valley; built and modified by Hyder Ali."
      },
      {
        name: "Koppal Fort, Koppal district",
        fact: "Ancient hill fort linked to the Vijayanagara Empire; offers strategic views of the surrounding plains."
      }
    ],
    "Telangana": [
      {
        name: "Golconda Fort, Hyderabad",
        fact: "An acoustic marvel — a hand clap at the gate echoes at the highest point 300 feet away. Once home to the legendary Koh-i-Noor diamond."
      },
      {
        name: "Warangal Fort, Warangal",
        fact: "Built by the Kakatiya dynasty, the fort features stunning stone gateways known as 'Kakatiya Toranas'."
      }
    ],
    "Kerala": [
      {
        name: "Bekal Fort, Kasaragod",
        fact: "Crescent-shaped sea fort built on the Arabian coast. Offers sweeping ocean views and features in many films."
      },
      {
        name: "Palakkad Fort, Palakkad",
        fact: "Built by Hyder Ali in 1766 CE and later occupied by the British — known for its massive bastions and moat."
      },
      {
        name: "St. Angelo Fort, Kannur",
        fact: "Built by the Portuguese in 1505, later captured by the Dutch and British. Offers beautiful views of the Arabian Sea."
      }
    ],
    "Tamil Nadu": [
      {
        name: "Vellore Fort, Vellore",
        fact: "Built in the 16th century by Vijayanagar kings — known for its granite ramparts and the 1806 Vellore Sepoy Mutiny."
      },
      {
        name: "Gingee Fort, Villupuram",
        fact: "Nicknamed 'Troy of the East' for its tough defense. Once held by Marathas, Mughals, French, and British."
      },
      {
        name: "Dindigul Fort, Dindigul",
        fact: "Built by the Nayaks in the 17th century. Offers panoramic views and was used by Hyder Ali and Tipu Sultan."
      }
    ],
    "Uttar Pradesh": [
      {
        name: "Kalinjar Fort, Banda district",
        fact: "Ancient stronghold in the Vindhya Range; famed for rock-cut temples and inscriptions spanning the Chandela to Mughal eras."
      },
      {
        name: "Chunar Fort, Mirzapur",
        fact: "Massive fort on a rocky bank of the Ganges, built around 1029 CE; served under Sher Shah Suri, the Mughals, and the British."
      },
      {
        name: "Ramnagar Fort, Varanasi",
        fact: "18th-century sandstone fort built by Maharaja Balwant Singh; overlooks the Ganges opposite Varanasi ghats."
      },
      {
        name: "Shahi Qila, Jaunpur",
        fact: "14th-century fort built by Ibrahim Naib Barbak; later restored under the Mughals, showcasing Indo-Islamic motifs."
      },
      {
        name: "Jhansi Fort, Jhansi",
        fact: "Iconic fort associated with Rani Lakshmibai and the 1857 Revolt; originally built by Raja Bir Singh Deo Bundela."
      },
      {
        name: "Allahabad Fort, Prayagraj",
        fact: "Magnificent Mughal fort built by Emperor Akbar in 1583; stands at the confluence of Ganga, Yamuna, and the mythical Saraswati."
      },
      {
        name: "Sasni Fort, Hathras district",
        fact: "Smaller regional fortification in western UP, part of the old Awadh defensive network."
      },
      {
        name: "Agori Fort, Sonbhadra district",
        fact: "Hilltop fort built by the Chandela rulers; offers sweeping views of the Son river valley."
      },
      {
        name: "Baruasagar Fort, Jhansi district",
        fact: "Picturesque fort overlooking Baruasagar Lake; another Bundelkhand-era stronghold."
      },
      {
        name: "Mahoba Fort, Mahoba",
        fact: "Remnants of a grand Chandela-era fort complex, surrounded by rock-cut reservoirs and temples."
      },
      {
        name: "Agra Fort, Agra",
        fact: "A UNESCO World Heritage Site, this red sandstone fort was the seat of the Mughal Empire before Delhi. Houses Jahangir Palace and Diwan-i-Khas."
      }
    ],
    "Delhi": [
      {
        name: "Red Fort, Delhi",
        fact: "Commissioned by Shah Jahan in 1638 CE. A UNESCO World Heritage Site and the site of India's Independence Day flag hoisting."
      },
      {
        name: "Tughlaqabad Fort, Delhi",
        fact: "Built by Ghiyasuddin Tughlaq in the 14th century. Known for its colossal stone walls and ruins of ancient Delhi."
      }
    ],
    "Gujarat": [
      {
        name: "Junagadh Fort (Uparkot Fort), Junagadh",
        fact: "Believed to date back to 319 BCE — features Buddhist caves, stepwells, and cannons from various eras."
      },
      {
        name: "Pavagadh Fort, Champaner",
        fact: "Part of the Champaner-Pavagadh Archaeological Park, a UNESCO site combining Hindu and Islamic architecture."
      }
    ],
    "West Bengal": [
      {
        name: "Murshidabad Fort (Nizamat Fort), Murshidabad",
        fact: "Built by Nawab Murshid Quli Khan, it was the seat of Bengal's power before British rule."
      },
      {
        name: "Fort William, Kolkata",
        fact: "Built by the British in 1696 CE — still serves as the headquarters of the Eastern Command of the Indian Army."
      }
    ],
    "Goa": [
      {
        name: "Aguada Fort, North Goa",
        fact: "Portuguese fort built in 1612 to guard against Dutch and Maratha invasions. Houses a 17th-century lighthouse."
      },
      {
        name: "Chapora Fort, North Goa",
        fact: "Made famous by Bollywood film 'Dil Chahta Hai' — offers a stunning view of Vagator beach."
      },
      {
        name: "Reis Magos Fort, Bardez",
        fact: "Once a defense post and later a prison — restored today as a heritage center."
      }
    ],
    "Andhra Pradesh": [
      {
        name: "Gandikota Fort, Kadapa",
        fact: "Known as the 'Grand Canyon of India' for its spectacular gorge on the Pennar River."
      },
      {
        name: "Kondapalli Fort, Vijayawada",
        fact: "Built in the 14th century by the Reddy kings. Known for the famous Kondapalli wooden toys."
      }
    ],
    "Punjab": [
      {
        name: "Gobindgarh Fort, Amritsar",
        fact: "18th-century fort built by Maharaja Ranjit Singh. Houses a museum showcasing Sikh heritage."
      },
      {
        name: "Qila Mubarak, Patiala",
        fact: "A grand fort-palace complex built by Baba Ala Singh in the 18th century."
      }
    ],
    "Haryana": [
      {
        name: "Asigarh Fort, Hansi",
        fact: "Built by Prithviraj Chauhan — holds archaeological layers from ancient to Mughal periods."
      }
    ],
    "Himachal Pradesh": [
      {
        name: "Kangra Fort, Kangra",
        fact: "One of India's oldest forts — dates back to the Trigarta kingdom mentioned in the Mahabharata."
      },
      {
        name: "Sujanpur Fort, Hamirpur",
        fact: "Built by Raja Sansar Chand — known for exquisite wall paintings."
      }
    ],
    "Odisha": [
      {
        name: "Barabati Fort, Cuttack",
        fact: "13th-century fort built by the Ganga dynasty. Only the moat and gateway remain but it symbolizes Odisha's medieval glory."
      }
    ],
    "Assam": [
      {
        name: "Kareng Ghar (Garhgaon Fort), Sivasagar",
        fact: "Built by the Ahom kings — showcases distinctive Tai-Ahom architectural style."
      }
    ],
    "Union Territories": [
      {
        name: "Aguada Fort, Goa (UT of Goa, Daman & Diu)",
        fact: "Built by the Portuguese in 1612 CE as a defense and freshwater storage fort."
      },
      {
        name: "Fort St. George, Puducherry",
        fact: "Originally a French stronghold, later became a British administrative center."
      },
      {
        name: "Ross Island Fort, Andaman & Nicobar",
        fact: "British administrative capital before Port Blair — ruins now overtaken by roots and trees."
      }
    ],
    "Bihar": [
      {
        name: "Rohtasgarh Fort, Rohtas district",
        fact: "Massive hill fort above the River Sone; built by Sher Shah Suri; notable for its colossal gates and reservoirs."
      },
      {
        name: "Shergarh Fort, Kaimur Hills",
        fact: "Hill fort overlooking the Durgawati valley; offers panoramic views and ancient structures amid forested slopes."
      },
      {
        name: "Munger Fort, Munger",
        fact: "Historic riverside fort with medieval walls; used by the Mughals and later fortified by the British."
      },
      {
        name: "Darbhanga Fort, Darbhanga",
        fact: "Built by the Darbhanga royal family; features palatial Raj-era architecture within the fort complex."
      },
      {
        name: "Buxar Fort, Buxar",
        fact: "Located on the banks of the Ganges; site of the 1764 Battle of Buxar; remains of old ramparts visible."
      },
      {
        name: "Rajgir Fort, Nalanda district",
        fact: "Ancient hill fort linked to the Magadha kingdom; associated with Mauryan and Gupta era remains."
      },
      {
        name: "Pataliputra Fort, Patna",
        fact: "Modern site overlaying ancient Pataliputra; fortifications near the confluence of Ganga and Son rivers."
      },
      {
        name: "Hathiyagarh Fort, West Champaran",
        fact: "Obscure but locally significant fort near Valmikinagar; likely part of the late medieval defense chain."
      },
      {
        name: "Palamu Fort, near Aurangabad border",
        fact: "Dual fort complex of the Chero kings, featuring upper and lower forts surrounded by forests."
      },
      {
        name: "Jalalgarh Fort, Purnea",
        fact: "18th-century fort built by Saif Khan; designed in Islamic style with four imposing bastions."
      }
    ],
    "Jharkhand": [
      {
        name: "Palamu Fort, Latehar",
        fact: "Twin forts built by the Chero kings in the 17th century — known for their strategic forested setting inside Betla National Park."
      }
    ],
    "Chhattisgarh": [
      {
        name: "Ratanpur Fort, Bilaspur",
        fact: "An ancient fort dating back to the Kalchuri dynasty — features several temples including the Mahamaya Temple."
      },
      {
        name: "Kawardha Fort, Kabirdham",
        fact: "A royal fort-palace showcasing Chhattisgarh's Rajput-style architecture, now partly converted into a heritage hotel."
      }
    ],
    "Uttarakhand": [
      {
        name: "Pithoragarh Fort, Pithoragarh",
        fact: "Built in the 18th century by the Gorkhas — provides stunning Himalayan views and historical military importance."
      },
      {
        name: "Lohaghat Fort, Champawat",
        fact: "Constructed by the Chand rulers — an ancient hill fort that guarded the trade routes of Kumaon."
      }
    ],
    "Jammu and Kashmir": [
      {
        name: "Hari Parbat Fort, Srinagar",
        fact: "Overlooks Dal Lake; built under Emperor Akbar's reign in 1590 CE and later strengthened by Afghan and Sikh rulers."
      },
      {
        name: "Bhim Garh Fort, Reasi",
        fact: "Also known as Reasi Fort — perched on a hill beside the Chenab River and built by Rajput kings."
      }
    ],
    "Ladakh": [
      {
        name: "Leh Palace, Leh",
        fact: "A 17th-century royal fortress built by King Sengge Namgyal — resembles the Potala Palace in Lhasa."
      },
      {
        name: "Basgo Fort, Leh District",
        fact: "Ruins of a medieval fortress with ancient murals — once a political and cultural center of Ladakh."
      }
    ],
    "Sikkim": [
      {
        name: "Rabdentse Ruins, West Sikkim",
        fact: "The second capital of Sikkim (1670–1814 CE) — ruins overlook Kanchenjunga and mark the era of the Chogyal kings."
      }
    ],
    "Arunachal Pradesh": [
      {
        name: "Ita Fort, Itanagar",
        fact: "The fort that gave Itanagar its name — built in the 14th–15th century with massive stone walls ('Ita' means brick in Assamese)."
      }
    ],
    "Manipur": [
      {
        name: "Kangla Fort, Imphal",
        fact: "Ancient capital of the Meitei kings — houses royal relics, temples, and a museum inside its restored premises."
      }
    ],
    "Nagaland": [
      {
        name: "Dimapur Kachari Fort Ruins, Dimapur",
        fact: "Remnants of the Kachari kingdom with monoliths and ruins dating back to the 10th century CE."
      }
    ],
    "Mizoram": [
      {
        name: "Lianchhiari Lunglen Tlang Fort, Khawhura",
        fact: "Associated with a local legend of tragic love — one of Mizoram's few historical hill fortifications."
      }
    ],
    "Meghalaya": [
      {
        name: "Nartiang Monoliths (Jaintia Fort Area), West Jaintia Hills",
        fact: "Part of the Jaintia kingdom's defensive complex — features giant stone monoliths considered fort markers."
      }
    ],
    "Tripura": [
      {
        name: "Udaipur (Tripura) Fort, Udaipur",
        fact: "Ancient royal seat of the Manikya dynasty — includes palaces and temples within the fortified area."
      },
      {
        name: "Chandrapur Fort, Unakoti",
        fact: "Ruins from the 15th century — once a stronghold of regional Tripuri kings."
      }
    ],
    "Chandigarh": [
      {
        name: "Chandigarh Fort (Burj Kotiyan Site)",
        fact: "Ruins near the Sukhna Choe region — remnants of a Mughal-era outpost marking historical Punjab-Himachal borders."
      }
    ],
    "Dadra and Nagar Haveli and Daman and Diu": [
      {
        name: "Diu Fort, Diu",
        fact: "Portuguese-built in 1535 CE — surrounded by sea on three sides and known for its lighthouse and cannons."
      },
      {
        name: "St. Jerome Fort, Daman",
        fact: "Also called Nani Daman Fort — constructed in the 17th century overlooking the Daman Ganga River."
      }
    ],
    "Lakshadweep": [
      {
        name: "Andrott Fort, Andrott Island",
        fact: "Built during the early medieval period — served as a coastal defense post for Arab and later Portuguese traders."
      }
    ]
  };

  void useEffect;

  const updatedForts = fortsData.forts.map(fort => ({
  ...fort,
  image: fortImages[fort.image] || fort.name // Use fort.image for lookup
}));
  // Pagination calculations using updatedForts
  const totalPages = Math.ceil(updatedForts.length / fortsPerPage);
  const indexOfLastFort = currentPage * fortsPerPage;
  const indexOfFirstFort = indexOfLastFort - fortsPerPage;
  const currentForts = updatedForts.slice(indexOfFirstFort, indexOfLastFort);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return React.createElement(
    'div',
    { className: 'forts-page' },
    React.createElement(
      'section',
      { className: 'hero-section' },
      React.createElement(
        'div',
        { className: 'hero-content' },
        React.createElement('h1', null, 'INDIAN FORTS'),
        React.createElement('h2', null, 'Stone Sentinels of History'),
        React.createElement('p', null, 'Exploring the majestic fortresses that shaped India\'s history and culture')
      )
    ),
    
    React.createElement(
      'section',
      { className: 'forts-intro' },
      React.createElement(
        ScrollingEffect,
        null,
        React.createElement(
          'div',
          { className: 'intro-content glassmorphic' },
          React.createElement('p', null, 'India is home to over 1000 forts showcasing military architecture from various dynasties including Rajputs, Mughals, Marathas, and Sultanates.')
        )
      )
    ),
    
    React.createElement(
      'section',
      { className: 'forts-map' },
      React.createElement(
        'div',
        { className: 'map-container glassmorphic' },
        React.createElement('h2', null, 'Fort Distribution Across India'),
        React.createElement(IndiaFortMap)
      )
    ),
    
    // Paginated forts section
    React.createElement(
      'section',
      { className: 'major-forts' },
      React.createElement('h2', null, 'All Indian Forts'),
      React.createElement(
        'div',
        { className: 'forts-grid' },
        currentForts.map(fort => 
          React.createElement(
            ScrollingEffect,
            { key: fort.id },
            React.createElement(
              GlassmorphicCard,
              {
                title: fort.name,
                subtitle: `${fort.location} | ${fort.year}`,
                image: fort.image,
                description: fort.description,
                facts: fort.facts
              }
            )
          )
        )
      ),
      
      // Pagination controls
      React.createElement(
        'div',
        { className: 'pagination' },
        React.createElement(
          'button',
          {
            className: 'page-button',
            onClick: () => paginate(currentPage > 1 ? currentPage - 1 : 1),
            disabled: currentPage === 1
          },
          'Previous'
        ),
        
        Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          React.createElement(
            'button',
            {
              key: page,
              className: `page-button ${currentPage === page ? 'active' : ''}`,
              onClick: () => paginate(page)
            },
            page
          )
        )),
        
        React.createElement(
          'button',
          {
            className: 'page-button',
            onClick: () => paginate(currentPage < totalPages ? currentPage + 1 : totalPages),
            disabled: currentPage === totalPages
          },
          'Next'
        )
      )
    ),
    
    React.createElement(
      PhotoGallery,
      {
        title: "Architectural Details",
        subtitle: "Exploring the grandeur of Indian fortifications",
        images: galleryImages
      }
    ),
    
    React.createElement(
      'section',
      { className: 'architecture-section' },
      React.createElement('h2', null, 'Architectural Styles'),
      React.createElement(
        'div',
        { className: 'styles-grid' },
        [
          { style: 'Rajput Forts', features: 'Hilltop locations, intricate carvings' },
          { style: 'Mughal Forts', features: 'Red sandstone, Persian influences' },
          { style: 'Deccan Sultanate', features: 'Composite walls, bastions' },
          { style: 'Maratha Forts', features: 'Hill forts, water harvesting systems' }
        ].map((item, index) => 
          React.createElement(
            ScrollingEffect,
            { key: index },
            React.createElement(
              'div',
              { className: 'style-card glassmorphic' },
              React.createElement('h3', null, item.style),
              React.createElement('p', null, item.features)
            )
          )
        )
      )
    ),
    

    /* Fort Facts & Legends */
    React.createElement(
      'section',
      { 
        className: 'forts-legends-section',
        style: { 
          padding: '4rem 0',
          backgroundColor: '#f9f4f5',
          position: 'relative',
          zIndex: 1
        } 
      },
      React.createElement(
        'div',
        { 
          className: 'container',
          style: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
          }
        },
        React.createElement('h2', { 
          style: {
            textAlign: 'center',
            color: '#8A1538',
            fontSize: '2.5rem',
            marginBottom: '1rem'
          }
        }, 'Fort Facts & Legends'),
        React.createElement('p', { 
          className: 'legends-intro',
          style: {
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            color: '#333',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }
        }, 'Explore the rich history and fascinating stories behind India\'s most iconic forts. Each fort has a unique tale to tell, from architectural marvels to legendary battles. Use the search below to find forts by name or state.'),
        
        // Search and filter controls
        React.createElement('div', {
          style: {
            maxWidth: '600px',
            margin: '0 auto 2rem',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }
        },
          React.createElement('input', {
            type: 'text',
            placeholder: 'Search forts...',
            style: {
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #ddd',
              flex: '1',
              minWidth: '250px',
              fontSize: '1rem'
            },
            onChange: (e) => {
              const searchTerm = e.target.value.toLowerCase();
              const filteredForts = [];
              
              Object.entries(fortsOfIndia).forEach(([state, forts]) => {
                const stateForts = forts.filter(fort => 
                  fort.name.toLowerCase().includes(searchTerm) ||
                  state.toLowerCase().includes(searchTerm) ||
                  fort.fact.toLowerCase().includes(searchTerm)
                );
                if (stateForts.length > 0) {
                  filteredForts.push(...stateForts.map(f => ({
                    ...f,
                    state: state
                  })));
                }
              });
              
              setFilteredForts(searchTerm ? filteredForts : []);
              setSearchActive(!!searchTerm);
            }
          }),
          React.createElement('select', {
            style: {
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              cursor: 'pointer',
              minWidth: '200px'
            },
            defaultValue: '',
            onChange: (e) => {
              const state = e.target.value;
              if (!state) {
                setFilteredForts([]);
                setSearchActive(false);
                return;
              }
              const stateForts = fortsOfIndia[state] || [];
              setFilteredForts(stateForts.map(f => ({
                ...f,
                state: state
              })));
              setSearchActive(true);
            }
          },
            [
              React.createElement('option', { key: '', value: '' }, 'Filter by state'),
              ...Object.keys(fortsOfIndia).sort().map(state => 
                React.createElement('option', { key: state, value: state }, state)
              )
            ]
          )
        ),
        
        // Search state message or forts grid
        !searchActive ? React.createElement(
          'div', 
          { 
            key: 'welcome-message',
            style: {
              textAlign: 'center',
              padding: '3rem 1rem',
              gridColumn: '1 / -1',
              color: '#666',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }
          },
          React.createElement('div', {
            style: {
              maxWidth: '800px',
              margin: '0 auto 2rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }
          },
            React.createElement('h3', {
              style: {
                color: '#8A1538',
                margin: '0 0 1rem',
                fontSize: '1.5rem',
                textAlign: 'center'
              }
            }, 'Discover India\'s Magnificent Forts'),
            React.createElement('p', {style: {margin: '0.5rem 0', textAlign: 'center'}}, 'Use the search bar to find forts by name or description.'),
            React.createElement('p', {style: {margin: '0.5rem 0', textAlign: 'center'}}, 'Or select a state from the dropdown to view forts from that region.'),
            React.createElement('div', {
              style: {
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: '#f8f0f4',
                borderRadius: '8px',
                borderLeft: '4px solid #8A1538',
                textAlign: 'center'
              }
            },
              React.createElement('p', {style: {margin: '0', fontWeight: '500'}}, 'Tip: Try searching for "Rajasthan" or "Maharashtra" to see forts from these historic regions.')
            )
          )
        ) : React.createElement(
          'div',
          { 
            className: 'forts-grid',
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              padding: '0 5%',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto',
              justifyItems: 'center'
            }
          },
          filteredForts.length > 0 ? (
            filteredForts.map((fort, i) => {
              // Get the image from the imported images or use a default image
              let imagePath = fortImages[fort.name];
              
              // If no image found, try to construct the path from the fort name
              if (!imagePath) {
                const imageName = `${fort.name.split(',')[0].replace(/ /g, '')}.jpg`;
                try {
                  // Try to require the image directly
                  imagePath = require(`../images/forts/${imageName}`).default;
                } catch (e) {
                  // If that fails, use the AngudaFort as fallback
                  imagePath = AngudaFort;
                }
              }
              
              console.log('Rendering fort:', fort.name, 'with image:', imagePath);
              
              return React.createElement(
                'div',
                { 
                  key: `${fort.state}-${i}`,
                  className: 'legend-card',
                  style: {
                    background: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(138, 21, 56, 0.1)',
                    width: '100%',
                    maxWidth: '350px'
                  }
                },
                React.createElement('img', {
                  src: imagePath,
                  alt: fort.name,
                  style: {
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderBottom: '1px solid #eee'
                  },
                  onError: (e) => {
                    e.target.style.display = 'none'; // Hide image if not found
                  }
                }),
                React.createElement('div', { 
                  style: { 
                    padding: '1.5rem' 
                  } 
                },
                  React.createElement('div', {
                    style: {
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem'
                    }
                  },
                    React.createElement('h3', { 
                      style: {
                        color: '#8A1538',
                        margin: '0',
                        fontSize: '1.2rem',
                        lineHeight: '1.4'
                      }
                    }, fort.name),
                    React.createElement('span', {
                      style: {
                        backgroundColor: '#f0e6eb',
                        color: '#8A1538',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        marginLeft: '0.5rem'
                      }
                    }, fort.state)
                  ),
                  React.createElement('p', { 
                    style: {
                      color: '#444',
                      margin: '0.75rem 0 0',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }
                  }, fort.fact)
                )
              );
            })
          ) : (
            React.createElement('div', {
              style: {
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '2rem',
                color: '#666',
                fontSize: '1.1rem'
              }
            },
              'No forts found matching your search. Try different keywords or select a state.'
            )
          )
        )
      )
    )
  );
}

export default FortsPage;