//spice images
import g1 from '../images/spiceG/g1.jpg';
import g2 from '../images/spiceG/g2.jpg';
import g3 from '../images/spiceG/g3.jpg';
import g4 from '../images/spiceG/g4.jpg';
import g5 from '../images/spiceG/g5.jpg';
import g6 from '../images/spiceG/g6.jpg';
import g7 from '../images/spiceG/g7.jpg';
import g8 from '../images/spiceG/g8.jpg';
import g9 from '../images/spiceG/g9.jpg';
import g10 from '../images/spiceG/g10.jpg';
import Chittorgarh from '../images/forts/Chittorgarh.jpg';
import Jaisalmer from '../images/forts/Jaisalmer.jpg';
import RedFort from '../images/forts/Red Fort.jpg';
import Group from '../images/heritage/Group of Monuments at mahabalipuram.jpg';

//heritage
import t from "../images/heritage/true.jpg";
import b from "../images/heritage/Buddhist Monuments at Sanchi.jpg";
import q from "../images/heritage/Qutb Minar Complex.jpg";
import m from "../images/heritage/Mountain Railways of India.jpg";
import r from "../images/heritage/Red Fort Complex.jpg";
import p from "../images/heritage/Group of Monuments at Pattadakal.jpg";
import manas from "../images/heritage/Manas Wildlife Sanctuary.jpg";
import heritageSiteImage7 from "../images/heritage/Kaziranga National Park.jpg";
import heritageSiteImage8 from "../images/heritage/Keoladeo National Park.jpg";
import heritageSiteImage10 from "../images/heritage/Churches and Convents of Goa.jpg";
import heritageSiteImage11 from "../images/heritage/Fatehpur Sikri.jpg";
import heritageSiteImage12 from "../images/heritage/Group of Monuments at Hampi.jpg";
import heritageSiteImage13 from "../images/heritage/Khajuraho Group of Monuments.jpg";
import heritageSiteImage14 from "../images/heritage/Elephanta Caves.jpg";
import heritageSiteImage15 from "../images/heritage/Great Living Chola Temples.jpg";
import heritageSiteImage17 from "../images/heritage/Sundarbans National Park.jpg";
import heritageSiteImage18 from "../images/heritage/Nanda Devi and Valley of Flowers.jpg";
import heritageSiteImage20 from "../images/heritage/Humayun's Tomb.jpg";
import heritageSiteImage23 from "../images/heritage/Mahabodhi Temple.jpg";
import heritageSiteImage24 from "../images/heritage/Rock Shelters of Bhimbetka.jpg";
import heritageSiteImage25 from "../images/heritage/Champaner-Pavagadh Park.jpg";
import heritageSiteImage26 from "../images/heritage/Chhatrapati Shivaji Terminus.jpg";
import heritageSiteImage28 from "../images/heritage/Jantar Mantar.jpg";
import heritageSiteImage29 from "../images/heritage/Western Ghats.jpg";
import heritageSiteImage30 from "../images/heritage/Hill Forts of Rajasthan.jpeg";
import heritageSiteImage31 from "../images/heritage/Rani-ki-Vav.jpg";
import heritageSiteImage32 from "../images/heritage/Great Himalayan National Park.jpg";
import heritageSiteImage33 from "../images/heritage/Nalanda Mahavihara.jpg";
import heritageSiteImage34 from "../images/heritage/Khangchendzonga National Park.jpg";
import heritageSiteImage35 from "../images/heritage/Le Corbusier's Chandigarh.jpg";
import heritageSiteImage36 from "../images/heritage/Historic Ahmedabad.jpg";
import heritageSiteImage37 from "../images/heritage/Victorian Gothic & Art Deco Mumbai.jpg";
import heritageSiteImage38 from "../images/heritage/Jaipur City.jpg";
import heritageSiteImage39 from "../images/heritage/Kakatiya Rudreshwara.jpg";
import heritageSiteImage40 from "../images/heritage/Dholavira.jpg";


//culture


export const indiaData = {
  culture: {
    title: "Indian Culture",
    description: "Discover India's vibrant tapestry of traditions spanning millennia",
    icon: "fas fa-om",
    categories: [
      
  ]
},
  //----------------------------------------------------------------------------------------------------heritage-----------------------
 heritage: {
  title: "Indian Heritage",
  description: "Timeless wonders of human civilization",
  icon: "fas fa-landmark",
  sites: [
    {
      id: 1,
      name: "Agra Fort",
      location: "Agra, Uttar Pradesh",
      year: "1573",
      description: "Mughal fortress of red sandstone",
      facts: [
        "Known as Lal Qila, Fort Rouge",
        "Shah Jahan was imprisoned here",
        "Contains Jahangir Palace and Khas Mahal"
      ],
      image: "https://media.istockphoto.com/id/501905872/photo/red-fort-delhi-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=nuIavlSeYxEMlOQ0q0jGahQKr3xPoxcwEooKLZVC2WY=",
      unesco: true,
      highlight: "Diwan-i-Khas marble pavilion"
    },
    {
      id: 2,
      name: "Ajanta Caves",
      location: "Aurangabad, Maharashtra",
      year: "2nd century BCE - 480 CE",
      description: "Ancient Buddhist rock-cut caves",
      facts: [
        "30 caves with paintings and sculptures",
        "Depict Jataka tales",
        "Rediscovered by British officers in 1819"
      ],
      image: "https://media.istockphoto.com/id/187023458/photo/tourists-visit-cave-carvings-at-the-ajanta-caves.webp?a=1&b=1&s=612x612&w=0&k=20&c=AXw46-zLJcYxa0l1tZzN8caVjgKQ7WaifV6cgCCbrJA=",
      unesco: true,
      highlight: "Cave 26's chaitya hall"
    },
    {
      id: 3,
      name: "Ellora Caves",
      location: "Aurangabad, Maharashtra",
      year: "600-1000 CE",
      description: "Multi-religious rock-cut monuments",
      facts: [
        "34 monasteries and temples",
        "Features Buddhist, Hindu and Jain art",
        "Kailasa Temple carved top-down"
      ],
      image: "https://media.istockphoto.com/id/531012475/photo/ellora-caves-maharashtra-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=mEAWFrbzcCTr7_B5o1bl-AkRnXlH2oc9j_FNZ5xddHc=",
      unesco: true,
      highlight: "Kailasa Temple (Cave 16)"
    },
    {
      id: 4,
      name: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      year: "1632-1653",
      description: "Iconic white marble mausoleum",
      facts: [
        "Built by Shah Jahan for Mumtaz Mahal",
        "Uses optical illusions in design",
        "Inlaid with 28 types of precious stones"
      ],
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      unesco: true,
      highlight: "Dawn reflection in Yamuna River"
    },
    {
      id: 5,
      name: "Sun Temple",
      location: "Konark, Odisha",
      year: "1250 CE",
      description: "Chariot-shaped temple dedicated to Surya",
      facts: [
        "12 pairs of carved stone wheels",
        "Pulled by seven stone horses",
        "Designed as cosmic chariot"
      ],
      image: "https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VuJTIwVGVtcGxlJTIwb2Rpc2hhfGVufDB8fDB8fHww",
      unesco: true,
      highlight: "Intricate erotic sculptures"
    },
    {
      id: 6,
      name: "Group of Monuments at Mahabalipuram",
      location: "Tamil Nadu",
      year: "7th-8th century CE",
      description: "Shore temple complex",
      facts: [
        "Features largest open-air rock relief",
        "Built by Pallava dynasty",
        "Includes Arjuna's Penance bas-relief"
      ],
      image:Group,
      unesco: true,
      highlight: "Shore Temple at sunset"
    },
     {
      id: 7,
      name: "Kaziranga National Park",
      location: "Assam",
      year: "1905",
      description: "Sanctuary for one-horned rhinoceroses",
      facts: [
        "Hosts 2/3 of world's Indian rhinoceroses",
        "Highest tiger density globally",
        "Important Bird Area"
      ],
      image: heritageSiteImage7,
      unesco: true,
      highlight: "Elephant safari in Central Range"
    },
    {
      id: 8,
      name: "Keoladeo National Park",
      location: "Bharatpur, Rajasthan",
      year: "1981",
      description: "Man-made wetland bird sanctuary",
      facts: [
        "Wintering area for Siberian cranes",
        "Over 370 bird species recorded",
        "Ancient Shiva temple within park"
      ],
      image: heritageSiteImage8,
      unesco: true,
      highlight: "Migratory bird watching (Nov-Feb)"
    },
    {
      id: 9,
      name: "Manas Wildlife Sanctuary",
      location: "Assam",
      year: "1928",
      description: "Biodiversity hotspot in Himalayas",
      facts: [
        "Project Tiger reserve",
        "Home to golden langur",
        "Bordering Bhutan's Royal Manas Park"
      ],
      image: manas,
      unesco: true,
      highlight: "River rafting on Manas River"
    },
    {
      id: 10,
      name: "Churches and Convents of Goa",
      location: "Old Goa",
      year: "16th-18th century",
      description: "Portuguese colonial religious complex",
      facts: [
        "Contains tomb of St. Francis Xavier",
        "First Manueline church in Asia",
        "Bom Jesus Basilica houses saint's relics"
      ],
      image: heritageSiteImage10,
      unesco: true,
      highlight: "Baroque interiors of Sé Cathedral"
    },
    {
      id: 11,
      name: "Fatehpur Sikri",
      location: "Uttar Pradesh",
      year: "1571-1585",
      description: "Mughal capital city",
      facts: [
        "Abandoned due to water scarcity",
        "Buland Darwaza is tallest gateway globally",
        "Blend of Hindu and Islamic architecture"
      ],
      image: heritageSiteImage11,
      unesco: true,
      highlight: "Panch Mahal's five-story structure"
    },
    {
      id: 12,
      name: "Group of Monuments at Hampi",
      location: "Karnataka",
      year: "14th-16th century",
      description: "Ruins of Vijayanagara Empire",
      facts: [
        "Spread over 4,100 hectares",
        "Vitthala Temple has musical pillars",
        "Monolithic Lotus Mahal"
      ],
      image: heritageSiteImage12,
      unesco: true,
      highlight: "Stone chariot at Vitthala complex"
    },
    {
      id: 13,
      name: "Khajuraho Group of Monuments",
      location: "Madhya Pradesh",
      year: "950-1050 CE",
      description: "Nagara-style temple complex",
      facts: [
        "Only 22 of 85 original temples remain",
        "Erotic sculptures comprise 10% of artwork",
        "Built by Chandela dynasty"
      ],
      image: heritageSiteImage13,
      unesco: true,
      highlight: "Kandariya Mahadeva Temple spires"
    },
    {
      id: 14,
      name: "Elephanta Caves",
      location: "Mumbai Harbour",
      year: "5th-8th century",
      description: "Rock-cut cave temples",
      facts: [
        "Named by Portuguese after elephant statue",
        "Main cave features Trimurti sculpture",
        "Accessible only by boat"
      ],
      image: heritageSiteImage14,
      unesco: true,
      highlight: "20-foot Sadashiva statue"
    },
    {
      id: 15,
      name: "Great Living Chola Temples",
      location: "Tamil Nadu",
      year: "11th-12th century",
      description: "Imperial Chola architecture",
      facts: [
        "Includes Brihadeeswarar temples",
        "Gangaikonda Cholapuram's 55m vimana",
        "Bronze Nataraja icons"
      ],
      image: heritageSiteImage15,
      unesco: true,
      highlight: "Thanjavur temple's shadowless gopuram"
    },
    {
      id: 16,
      name: "Group of Monuments at Pattadakal",
      location: "Karnataka",
      year: "7th-8th century",
      description: "Chalukyan architectural ensemble",
      facts: [
        "Fusion of North/South Indian styles",
        "Virupaksha Temple inspired Kailasa at Ellora",
        "Nine Hindu temples + Jain sanctuary"
      ],
      image: p,
      unesco: true,
      highlight: "Nandi pavilion at Mallikarjuna Temple"
    },
    {
      id: 17,
      name: "Sundarbans National Park",
      location: "West Bengal",
      year: "1984",
      description: "Largest mangrove forest",
      facts: [
        "Home to Royal Bengal Tigers",
        "Ganges delta river system",
        "Saltwater crocodile habitat"
      ],
      image: heritageSiteImage17,
      unesco: true,
      highlight: "Boat safari through tidal waterways"
    },
    {
      id: 18,
      name: "Nanda Devi and Valley of Flowers",
      location: "Uttarakhand",
      year: "1982/2005",
      description: "High-altitude biodiversity",
      facts: [
        "Valley of Flowers has 600+ plant species",
        "Nanda Devi is India's second-highest peak",
        "Mythical home of fairies"
      ],
      image: heritageSiteImage18,
      unesco: true,
      highlight: "Alpine flower bloom (July-Aug)"
    },
    {
      id: 19,
      name: "Buddhist Monuments at Sanchi",
      location: "Madhya Pradesh",
      year: "3rd century BCE",
      description: "Oldest Buddhist sanctuary",
      facts: [
        "Commissioned by Emperor Ashoka",
        "Great Stupa has four toranas",
        "Contains relics of Buddha's disciples"
      ],
      image: b,
      unesco: true,
      highlight: "Eastern gateway carvings"
    },
    {
      id: 20,
      name: "Humayun's Tomb",
      location: "Delhi",
      year: "1570",
      description: "Precursor to Taj Mahal",
      facts: [
        "First garden-tomb in India",
        "Designed by Persian architect",
        "Restored by Aga Khan Trust"
      ],
      image: heritageSiteImage20,
      unesco: true,
      highlight: "Charbagh quadrilateral gardens"
    },
    {
      id: 21,
      name: "Qutb Minar Complex",
      location: "Delhi",
      year: "1193",
      description: "Victory tower and ruins",
      facts: [
        "World's tallest brick minaret (73m)",
        "Iron pillar hasn't rusted in 1600 years",
        "Built with materials from 27 temples"
      ],
      image: q,
      unesco: true,
      highlight: "Quwwat-ul-Islam Mosque arches"
    },
    {
      id: 22,
      name: "Mountain Railways of India",
      location: "Darjeeling, Nilgiri, Kalka-Shimla",
      year: "1881-1908",
      description: "Historic hill railways",
      facts: [
        "Darjeeling Himalayan Railway: Toy Train",
        "Nilgiri Mountain Railway: steepest track",
        "Kalka-Shimla: 864 bridges/tunnels"
      ],
      image: m,
      unesco: true,
      highlight: "Batasia Loop viewpoint"
    },
    {
      id: 23,
      name: "Mahabodhi Temple",
      location: "Bodh Gaya, Bihar",
      year: "5th-6th century",
      description: "Enlightenment site of Buddha",
      facts: [
        "Original Bodhi Tree descendant",
        "50m pyramidal spire",
        "Vajrasana (diamond throne)"
      ],
      image: heritageSiteImage23,
      unesco: true,
      highlight: "Meditation under Bodhi Tree"
    },
    {
      id: 24,
      name: "Rock Shelters of Bhimbetka",
      location: "Madhya Pradesh",
      year: "10,000 BCE",
      description: "Prehistoric rock art",
      facts: [
        "Over 700 rock shelters",
        "Depicts animal hunts and dances",
        "Continuous habitation evidence"
      ],
      image: heritageSiteImage24,
      unesco: true,
      highlight: "Zoo Rock animal paintings"
    },
    {
      id: 25,
      name: "Champaner-Pavagadh Park",
      location: "Gujarat",
      year: "16th century",
      description: "Pre-Mughal Islamic city",
      facts: [
        "Only complete unchanged Islamic city",
        "Kalika Mata Temple on hilltop",
        "Blend of Hindu-Muslim architecture"
      ],
      image: heritageSiteImage25,
      unesco: true,
      highlight: "Jama Masjid minarets"
    },
    {
      id: 26,
      name: "Chhatrapati Shivaji Terminus",
      location: "Mumbai",
      year: "1888",
      description: "Victorian Gothic station",
      facts: [
        "Formerly Victoria Terminus",
        "Fusion of Italian Gothic/Indian themes",
        "Hosts 3 million daily commuters"
      ],
      image: heritageSiteImage26,
      unesco: true,
      highlight: "Central dome and turrets"
    },
    {
      id: 27,
      name: "Red Fort Complex",
      location: "Delhi",
      year: "1639",
      description: "Mughal imperial palace",
      facts: [
        "Prime Minister's Independence Day address",
        "Rang Mahal with mirror mosaics",
        "Lahori Gate main entrance"
      ],
      image:r,
      unesco: true,
      highlight: "Sound & light show evenings"
    },
    {
      id: 28,
      name: "Jantar Mantar",
      location: "Jaipur",
      year: "1734",
      description: "Astronomical observatory",
      facts: [
        "Largest stone sundial globally",
        "19 architectural instruments",
        "Accuracy: ±2 seconds"
      ],
      image: heritageSiteImage28,
      unesco: true,
      highlight: "Samrat Yantra (27m gnomon)"
    },
    {
      id: 29,
      name: "Western Ghats",
      location: "6 states",
      year: "2012",
      description: "Older than Himalayas",
      facts: [
        "40% of India's endemic species",
        "Influences Indian monsoon",
        "World's 8th hottest biodiversity hotspot"
      ],
      image: heritageSiteImage29,
      unesco: true,
      highlight: "Silent Valley rainforest trek"
    },
    {
      id: 30,
      name: "Hill Forts of Rajasthan",
      location: "Rajasthan",
      year: "2013",
      description: "Rajput military architecture",
      facts: [
        "Includes Chittorgarh, Kumbhalgarh, Ranthambore",
        "Kumbhalgarh has 2nd longest wall globally",
        "Jaisalmer Fort still inhabited"
      ],
      image: heritageSiteImage30,
      unesco: true,
      highlight: "Chittorgarh's Vijay Stambh"
    },
    {
      id: 31,
      name: "Rani-ki-Vav",
      location: "Patan, Gujarat",
      year: "11th century",
      description: "Inverted temple stepwell",
      facts: [
        "Built by Queen Udayamati",
        "Over 500 principal sculptures",
        "7 levels of stairs"
      ],
      image: heritageSiteImage31,
      unesco: true,
      highlight: "Vishnu reclining statue"
    },
    {
      id: 32,
      name: "Great Himalayan National Park",
      location: "Himachal Pradesh",
      year: "2014",
      description: "Alpine meadows and glaciers",
      facts: [
        "4 globally threatened mammals",
        "Ancient medicinal plants",
        "Sacred peaks for locals"
      ],
      image: heritageSiteImage32,
      unesco: true,
      highlight: "Tirthan Valley trekking"
    },
    {
      id: 33,
      name: "Nalanda Mahavihara",
      location: "Bihar",
      year: "5th century CE",
      description: "Ancient monastic university",
      facts: [
        "World's first residential university",
        "9 million manuscripts in library",
        "Burned by invaders in 1193"
      ],
      image: heritageSiteImage33,
      unesco: true,
      highlight: "Stupa of Sariputta ruins"
    },
    {
      id: 34,
      name: "Khangchendzonga National Park",
      location: "Sikkim",
      year: "2016",
      description: "Sacred mountain landscape",
      facts: [
        "Home to world's 3rd highest peak",
        "Lepcha tribe sacred sites",
        "Zemu Glacier source"
      ],
      image: heritageSiteImage34,
      unesco: true,
      highlight: "Rhododendron blooms (April-May)"
    },
    {
      id: 35,
      name: "Le Corbusier's Chandigarh",
      location: "Chandigarh",
      year: "1951",
      description: "Modernist urban planning",
      facts: [
        "Part of 17-site transnational listing",
        "Open Hand Monument symbol",
        "Concrete Brutalist architecture"
      ],
      image: heritageSiteImage35,
      unesco: true,
      highlight: "Palace of Assembly building"
    },
    {
      id: 36,
      name: "Historic Ahmedabad",
      location: "Gujarat",
      year: "2017",
      description: "Walled medieval city",
      facts: [
        "First Indian World Heritage City",
        "600+ pols (gated communities)",
        "Sidi Saiyyed Mosque lattice"
      ],
      image: heritageSiteImage36,
      unesco: true,
      highlight: "Night walk in old pols"
    },
    {
      id: 37,
      name: "Victorian Gothic & Art Deco Mumbai",
      location: "Mumbai",
      year: "2018",
      description: "Colonial architectural ensemble",
      facts: [
        "94 buildings across Oval Maidan",
        "Rajabai Clock Tower (260ft)",
        "Eros Cinema streamline moderne"
      ],
      image: heritageSiteImage37,
      unesco: true,
      highlight: "Marine Drive Art Deco promenade"
    },
    {
      id: 38,
      name: "Jaipur City",
      location: "Rajasthan",
      year: "2019",
      description: "Planned pink-walled city",
      facts: [
        "Grid-based Vedic planning",
        "Painted pink in 1876 for royal visit",
        "Hawa Mahal's 953 jharokhas"
      ],
      image: heritageSiteImage38,
      unesco: true,
      highlight: "View from Nahargarh Fort"
    },
    {
      id: 39,
      name: "Kakatiya Rudreshwara Temple",
      location: "Telangana",
      year: "1213 CE",
      description: "Sandstone Shiva temple",
      facts: [
        "Floating bricks in roof",
        "Ramappa Temple local name",
        "Foundation filled with sandbox tech"
      ],
      image: heritageSiteImage39,
      unesco: true,
      highlight: "Peristyle dancers in twilight"
    },
    {
      id: 40,
      name: "Dholavira",
      location: "Gujarat",
      year: "2650 BCE",
      description: "Harappan metropolis",
      facts: [
        "World's earliest water conservation",
        "10-signboard Indus script",
        "Three-tier city planning"
      ],
      image: heritageSiteImage40,
      unesco: true,
      highlight: "Ancient reservoir system"
    }
  ]
},
  forts: {
    title: "Indian Forts",
    description: "Stone sentinels of history",
    icon: "fas fa-fort-awesome",
    forts: [
      {
        id: 1,
        name: "Red Fort",
        location: "Delhi",
        year: "1638-1648",
        description: "Mughal imperial power center",
        facts: [
          "UNESCO World Heritage Site",
          "Hosts Independence Day flag-hoisting ceremony",
          "Original name: Qila-e-Mubarak"
        ],
        image: "Red Fort",
        architect: "Ustad Ahmad Lahori",
        area: "254 acres"
      },
      {
        id: 2,
        name: "Agra Fort",
        location: "Uttar Pradesh",
        year: "1565-1573",
        description: "Mughal stronghold near Taj Mahal",
        facts: [
          "World Heritage Site",
          "Shah Jahan imprisoned here by son Aurangzeb",
          "Jahangiri Mahal within complex"
        ],
        image: "Agra",
        architect: "Akbar (multiple phases)",
        area: "94 acres"
      },
      {
        id: 3,
        name: "Amber Fort",
        location: "Jaipur, Rajasthan",
        year: "1592",
        description: "Rajput-Mughal fusion architecture",
        facts: [
          "Elephant rides to entrance",
          "Sheesh Mahal with mirror mosaics",
          "Underground tunnels to Jaigarh Fort"
        ],
        image: "Amber Fort",
        architect: "Raja Man Singh I",
        area: "98 acres"
      },
      {
        id: 4,
        name: "Jaisalmer Fort",
        location: "Rajasthan",
        year: "1156",
        description: "The Golden Fort rising from desert sands",
        facts: [
          "One of the world's largest living forts",
          "Houses palaces, temples, and residences",
          "Built with yellow sandstone"
        ],
        image: "Jaisalmer",
        architect: "Rawal Jaisal",
        area: "250 acres"
      },
      {
        id: 5,
        name: "Mehrangarh Fort",
        location: "Jodhpur, Rajasthan",
        year: "1459",
        description: "Colossal cliff-top fortress",
        facts: [
          "Walls up to 118 ft high",
          "Seven gates commemorating victories",
          "Houses royal palanquins collection"
        ],
        image: "Mehrangarh",
        architect: "Rao Jodha",
        area: "1,200 acres"
      },
      {
        id: 6,
        name: "Chittorgarh Fort",
        location: "Rajasthan",
        year: "7th century",
        description: "Largest fort complex in India",
        facts: [
          "Site of three major sieges",
          "Towers of Victory and Fame",
          "Padmini Palace reflection pool"
        ],
        image: "Chittorgarh",
        architect: "Various Rajput rulers",
        area: "700 acres"
      },
      {
        id: 7,
        name: "Kumbhalgarh Fort",
        location: "Rajasthan",
        year: "15th century",
        description: "Birthplace of Maharana Pratap",
        facts: [
          "38 km long walls (2nd longest worldwide)",
          "360+ temples within complex",
          "Seven fortified gateways"
        ],
        image: "Kumbhalgarh",
        architect: "Rana Kumbha",
        area: "268 acres"
      },
      {
        id: 8,
        name: "Gwalior Fort",
        location: "Madhya Pradesh",
        year: "8th century",
        description: "Gibraltar of India",
        facts: [
          "Earliest recorded zero inscription",
          "Sas-Bahu temples within premises",
          "Teli Ka Mandir with Dravidian influence"
        ],
        image: "Gwalior",
        architect: "Raja Suraj Sen",
        area: "3 km²"
      },
      {
        id: 9,
        name: "Kangra Fort",
        location: "Himachal Pradesh",
        year: "4th century BCE",
        description: "Oldest dated fort in India",
        facts: [
          "Withstood 52 sieges",
          "Houses ancient temples",
          "Destroyed by 1905 earthquake"
        ],
        image: "Kangra",
        architect: "Susharma Chand (Katoch dynasty)",
        area: "Mountain ridge complex"
      },
      {
        id: 10,
        name: "Lohagarh Fort",
        location: "Bharatpur, Rajasthan",
        year: "1732",
        description: "Iron Fort never conquered",
        facts: [
          "Withstood British attacks in 1805",
          "Ashtadhatu gate made of 8 metals",
          "Jawahar Burj victory towers"
        ],
        image: "Lohagarh",
        architect: "Maharaja Suraj Mal",
        area: "185 acres"
      },
      {
        id: 11,
        name: "Sindhudurg Fort",
        location: "Maharashtra",
        year: "1664",
        description: "Shivaji's sea fortress",
        facts: [
          "Built on Kurte Island",
          "Contains Shivaji's handprint and footprint",
          "42 acres with 30 ft high walls"
        ],
        image: "Sindhudurg",
        architect: "Chhatrapati Shivaji",
        area: "48 acres"
      },
      {
        id: 12,
        name: "Pratapgad Fort",
        location: "Maharashtra",
        year: "1656",
        description: "Site of Afzal Khan's defeat",
        facts: [
          "Statue of Shivaji at summit",
          "Twin forts on adjacent hills",
          "Bhavani Temple and Afzal Khan's tomb"
        ],
        image: "Pratapgad",
        architect: "Moropant Trimbak Pingle",
        area: "14.5 km²"
      },
      {
        id: 13,
        name: "Raigad Fort",
        location: "Maharashtra",
        year: "1030",
        description: "Shivaji Maharaj's capital",
        facts: [
          "Coronation site (1674)",
          "Rope-way accessible citadel",
          "Holi gate complex"
        ],
        image: "Raigad",
        architect: "Hiroji Indulkar",
        area: "Mountain fortress"
      },
      {
        id: 14,
        name: "Shivneri Fort",
        location: "Maharashtra",
        year: "17th century",
        description: "Birthplace of Shivaji Maharaj",
        facts: [
          "Seven gate defense system",
          "Natural water spring 'Badami Talav'",
          "Statue of young Shivaji and Jijabai"
        ],
        image: "Shivneri",
        architect: "Shahaji Bhosale",
        area: "Hilltop complex"
      },
      {
        id: 15,
        name: "Murud Janjira",
        location: "Maharashtra",
        year: "15th century",
        description: "Unconquered sea fortress",
        facts: [
          "Built by Siddi dynasty",
          "Remained undefeated for 350 years",
          "3-layer walls with freshwater reservoir"
        ],
        image: "Murud Janjira",
        architect: "Unknown (Siddi architects)",
        area: "22 acres"
      },
      {
        id: 16,
        name: "Basgo Fort",
        location: "Ladakh",
        year: "15th century",
        description: "Ruined citadel on Silk Route",
        facts: [
          "Three temples with Buddha murals",
          "Ancient seat of Namgyal dynasty",
          "Strategic trade route guardian"
        ],
        image: "Basgo",
        architect: "Ladakhi kings",
        area: "Cliff complex"
      },
      {
        id: 17,
        name: "Junagarh Fort",
        location: "Bikaner, Rajasthan",
        year: "1589-1594",
        description: "Desert fortress with palaces",
        facts: [
          "Never conquered despite 1,000 attacks",
          "37 palaces with Mughal/Gujarati fusion",
          "Unique stone carving work"
        ],
        image: "Junagarh",
        architect: "Raja Rai Singh",
        area: "98 acres"
      },
      {
        id: 18,
        name: "Bhujia Fort",
        location: "Bhuj, Gujarat",
        year: "1723",
        description: "Snake Hill fortress",
        facts: [
          "Named after Bhujang snakes",
          "Strategic surveillance point",
          "Temple of Bhujang Nag at summit"
        ],
        image: "Bhujia",
        architect: "Rao Godji I",
        area: "Hilltop complex"
      },
      {
        id: 19,
        name: "Uparkot Fort",
        location: "Junagadh, Gujarat",
        year: "319 BCE",
        description: "Ancient Mauryan citadel",
        facts: [
          "16th-century stepwells",
          "Buddhist caves within walls",
          "Cannon 'Nilkanth' used against Mughals"
        ],
        image: "Uparkot",
        architect: "Chandragupta Maurya",
        area: "Acropolis complex"
      },
      {
        id: 20,
        name: "Diu Fort",
        location: "Daman & Diu",
        year: "1535",
        description: "Portuguese coastal fortress",
        facts: [
          "Sea-facing cannons still intact",
          "Underground prisons and tunnels",
          "St. George Church within complex"
        ],
        image: "Diu",
        architect: "Portuguese colonial",
        area: "30,000 sq m"
      },
      {
        id: 21,
        name: "Golconda Fort",
        location: "Telangana",
        year: "12th-16th century",
        description: "Diamond trading capital",
        facts: [
          "Home to Koh-i-Noor diamond",
          "Acoustic warning system architecture",
          "8 gates with steel spikes"
        ],
        image: "Golconda",
        architect: "Kakatiya & Qutb Shahi rulers",
        area: "11 km circumference"
      },
      {
        id: 22,
        name: "Chitradurga Fort",
        location: "Karnataka",
        year: "10th century",
        description: "Stone fortress with seven walls",
        facts: [
          "Natural rock formations as defenses",
          "19 gateways and 38 secret entrances",
          "Onion-stored granary system"
        ],
        image: "Chitradurga",
        architect: "Chalukyas and Nayakas",
        area: "1,500 acres"
      },
      {
        id: 23,
        name: "Bekal Fort",
        location: "Kerala",
        year: "1650",
        description: "Largest coastal fort in Kerala",
        facts: [
          "Keyhole-shaped battlements",
          "Underground tunnels to sea",
          "Featured in Bollywood songs"
        ],
        image: "Bekal",
        architect: "Shivappa Nayaka",
        area: "40 acres"
      },
      {
        id: 24,
        name: "Vellore Fort",
        location: "Tamil Nadu",
        year: "1566",
        description: "First mutiny site against British",
        facts: [
          "Moat with live crocodiles",
          "Jalakanteswarar Hindu temple inside",
          "Granite masonry with double walls"
        ],
        image: "Vellore Fort",
        architect: "Chinna Bommi Reddy",
        area: "133 acres"
      },
      {
        id: 25,
        name: "Gingee Fort",
        location: "Tamil Nadu",
        year: "9th century",
        description: "Troy of the East",
        facts: [
          "Three hilltop citadels",
          "Last Vijayanagar Empire stronghold",
          "French called it finest Indian fort"
        ],
        image: "Gingee",
        architect: "Chola dynasty",
        area: "11 sq km"
      },
      {
        id: 26,
        name: "Palakkad Fort",
        location: "Kerala",
        year: "1766",
        description: "Tipu Sultan's gateway to Malabar",
        facts: [
          "Hyder Ali's strategic stronghold",
          "Hanuman temple on premises",
          "Later used as British garrison"
        ],
        image: "Palakkad",
        architect: "Hyder Ali",
        area: "15 acres"
      },
      {
        id: 27,
        name: "Bidar Fort",
        location: "Karnataka",
        year: "1428",
        description: "Bahmani Sultanate capital",
        facts: [
          "Unique water supply system",
          "Turkish architectural influence",
          "Rangin Mahal with mother-of-pearl decor"
        ],
        image: "Bidar",
        architect: "Ahmad Shah Wali",
        area: "5.5 km circumference"
      },
      {
        id: 28,
        name: "Belapur Fort",
        location: "Navi Mumbai",
        year: "1560",
        description: "Portuguese-Maratha-British stronghold",
        facts: [
          "Hexagonal architecture",
          "St. Sebastian Church ruins",
          "Strategic control of Thane Creek"
        ],
        image: "Belapur",
        architect: "Portuguese colonial",
        area: "2 acres"
      },
      {
        id: 29,
        name: "Madikeri Fort",
        location: "Kodagu, Karnataka",
        year: "1681",
        description: "Palace-fortress of Coorg kings",
        facts: [
          "Ganesha temple at entrance",
          "British added Gothic elements",
          "Houses district prison and museum"
        ],
        image: "Madikeri",
        architect: "Muddu Raja",
        area: "Fortress complex"
      },
      {
        id: 30,
        name: "Wayanad Fort",
        location: "Kerala",
        year: "18th century",
        description: "Tipu Sultan's hill fortress",
        facts: [
          "Part of Mysore-Kerala border defense",
          "Underground chambers and tunnels",
          "Later used as British outpost"
        ],
        image: "Wayanad Fort",
        architect: "Hyder Ali",
        area: "Hilltop complex"
      },
      {
        id: 31,
        name: "Gaur Fort",
        location: "Bengal ruins",
        year: "12th century",
        description: "Capital of Bengal Sultanate",
        facts: [
          "Once among world's largest cities",
          "Golden Mosque with terracotta art",
          "Abandoned after Mughal invasion"
        ],
        image: "Gaur",
        architect: "Bengal Sultans",
        area: "Ruined city complex"
      },
      {
        id: 32,
        name: "Kangla Fort",
        location: "Imphal, Manipur",
        year: "Antiquity",
        description: "Ancient Meitei kingdom seat",
        facts: [
          "Dragon-shaped architecture",
          "Sacred site for Manipuris",
          "British destroyed in 1891"
        ],
        image: "Kangla",
        architect: "Meitei kings",
        area: "237 acres"
      },
      {
        id: 33,
        name: "Roopnarayan Fort",
        location: "Bankura, WB",
        year: "17th century",
        description: "Terracotta temple fortress",
        facts: [
          "Pancha Ratna temple complex",
          "Laterite stone construction",
          "River confluence location"
        ],
        image: "Roopnarayan",
        architect: "Malla kings",
        area: "Temple complex"
      },
      {
        id: 34,
        name: "Udayagiri Fort",
        location: "Odisha",
        year: "10th century",
        description: "Ancient Buddhist/Jain site",
        facts: [
          "Rock-cut caves",
          "Khandagiri twin hills",
          "Rani Gumpha queen's cave"
        ],
        image: "Udayagiri",
        architect: "Kharavela",
        area: "Hill complex"
      },
      {
        id: 35,
        name: "Barabati Fort",
        location: "Cuttack, Odisha",
        year: "989 CE",
        description: "Ganga dynasty stronghold",
        facts: [
          "Nine-storied palace ruins",
          "Moat connected to Mahanadi River",
          "Famous cricket stadium adjacent"
        ],
        image: "Barabati",
        architect: "Markata Keshari",
        area: "102 acres"
      },
      {
        id: 36,
        name: "Jalpaiguri Fort",
        location: "West Bengal",
        year: "1906",
        description: "Last princely fort in Bengal",
        facts: [
          "Built during Partition of Bengal",
          "Combined Mughal-British architecture",
          "Now houses district court"
        ],
        image: "Jalpaiguri",
        architect: "British administration",
        area: "Administrative complex"
      },
      {
        id: 37,
        name: "Asirgarh Fort",
        location: "Madhya Pradesh",
        year: "1400",
        description: "Key to the Deccan",
        facts: [
          "Never captured by direct assault",
          "Temple-mosque complex inside",
          "Akbar seized using deception"
        ],
        image: "Asirgarh Fort",
        architect: "Asa Ahir",
        area: "60 acres"
      },
      {
        id: 38,
        name: "Mandu Fort",
        location: "Madhya Pradesh",
        year: "6th century",
        description: "City of Joy",
        facts: [
          "Jahaz Mahal ship palace",
          "Hoshang Shah's marble tomb",
          "Baz Bahadur-Rani Roopmati love story"
        ],
        image: "Mandu",
        architect: "Paramara dynasty",
        area: "82 km²"
      },
      {
        id: 39,
        name: "Orchha Fort Complex",
        location: "Madhya Pradesh",
        year: "16th century",
        description: "Bundela Rajput capital",
        facts: [
          "Jahangir Mahal with Mughal influence",
          "Ram Raja Temple palace",
          "Chhatris (cenotaphs) on riverbank"
        ],
        image: "Orchha",
        architect: "Rudra Pratap Singh",
        area: "Palace complex"
      },
      {
        id: 40,
        name: "Bandhavgarh Fort",
        location: "Madhya Pradesh",
        year: "3rd century",
        description: "Ancient hilltop tiger reserve",
        facts: [
          "Mythical Ramayana association",
          "10th century Vishnu sculpture",
          "Natural springs within fort"
        ],
        image: "Bandhavgarh",
        architect: "Unknown (legend: Lord Rama)",
        area: "Tiger reserve core"
      },
      {
        id: 41,
        name: "Gohad Fort",
        location: "Madhya Pradesh",
        year: "1505",
        description: "Jat stronghold against Mughals",
        facts: [
          "Built without mortar",
          "Seized by Mahadji Scindia",
          "Houses government offices today"
        ],
        image: "Gohad",
        architect: "Singh Jat rulers",
        area: "Fort complex"
      },
      {
        id: 42,
        name: "Ranthambore Fort",
        location: "Rajasthan",
        year: "944 CE",
        description: "Jungle fortress in tiger reserve",
        facts: [
          "32 Hindu and Jain temples",
          "Hammir's sacrifice against Alauddin",
          "Gupt Ganga water tank"
        ],
        image: "Ranthambore",
        architect: "Chauhan Rajputs",
        area: "Hilltop complex"
      },
      {
        id: 43,
        name: "Khandar Fort",
        location: "Rajasthan",
        year: "12th century",
        description: "Last Chauhan bastion",
        facts: [
          "Natural moat protection",
          "Secret escape tunnels",
          "Palace ruins with ornate pillars"
        ],
        image: "Khandar",
        architect: "Chauhan rulers",
        area: "Mountain fortress"
      },
      {
        id: 44,
        name: "Gagron Fort",
        location: "Rajasthan",
        year: "12th century",
        description: "Jal Durg (water protected fort)",
        facts: [
          "Only fort with natural moat",
          "Site of Jauhar ceremony",
          "UNESCO World Heritage Site"
        ],
        image: "Gagron",
        architect: "Doda Rajputs",
        area: "Tri-river confluence"
      },
      {
        id: 45,
        name: "Bhangarh Fort",
        location: "Rajasthan",
        year: "1573",
        description: "Haunted ruins with legends",
        facts: [
          "Archaeological protected site",
          "Entry prohibited after sunset",
          "Curse of Guru Balu Nath"
        ],
        image: "Bhangarh",
        architect: "Madho Singh",
        area: "Ruined complex"
      },
      {
        id: 46,
        name: "Achalgarh Fort",
        location: "Rajasthan",
        year: "1452",
        description: "Mewar mountain fortress",
        facts: [
          "Renovated by Rana Kumbha",
          "Achaleshwar Mahadev temple",
          "Gold-painted Shiva statue"
        ],
        image: "Achalgarh Fort",
        architect: "Paramara dynasty",
        area: "Hilltop complex"
      },
      {
        id: 47,
        name: "Taragarh Fort",
        location: "Bundi, Rajasthan",
        year: "1354",
        description: "Star Fort with stepwell reservoirs",
        facts: [
          "Three water tanks carved in rock",
          "Mirror work in Rani Mahal",
          "Bhim Burj cannon platform"
        ],
        image: "Taragarh",
        architect: "Rao Deva",
        area: "Hill fortress"
      },
      {
        id: 48,
        name: "St. Angelo",
        location: "Kannur, Kerala",
        year: "1505",
        description: "Portuguese-Dutch-British stronghold",
        facts: [
          "First European fort in Kerala",
          "St. James Chapel inside",
          "Currently Indian Navy base"
        ],
        image: "St. Angelo",
        architect: "Francisco de Almeida",
        area: "Coastal fortress"
      },
      {
        id: 49,
        name: "Kochi",
        location: "Kerala",
        year: "1503",
        description: "First European settlement in India",
        facts: [
          "Chinese fishing nets heritage",
          "Vasco da Gama burial site",
          "Dutch Palace and Jewish Synagogue"
        ],
        image: "Kochi",
        architect: "Portuguese colonial",
        area: "Historic town"
      },
      {
        id: 50,
        name: "St. Georgge",
        location: "Chennai",
        year: "1639",
        description: "First British fortress in India",
        facts: [
          "Houses Tamil Nadu Assembly",
          "Oldest Anglican church in India",
          "Clive's Corner museum"
        ],
        image: "St. Georgge",
        architect: "Francis Day",
        area: "42 acres"
      },
      {
        id: 51,
        name: "Fort Aguada",
        location: "Goa",
        year: "1612",
        description: "Portuguese lighthouse fortress",
        facts: [
          "Freshwater spring inside fort",
          "Largest Portuguese fort in Asia",
          "Four-story lighthouse (1864)"
        ],
        image: "Fort Aguada",
        architect: "Portuguese colonial",
        area: "Peninsula complex"
      },
      {
        id: 52,
        name: "Panhala Fort",
        location: "Maharashtra",
        year: "1178",
        description: "Shivaji's monsoon capital",
        facts: [
          "Andhar Bavadi hidden well",
          "Sajja Kothi where Shivaji escaped",
          "Teen Darwaza complex"
        ],
        image: "Panhala",
        architect: "Bhoja II",
        area: "7.25 km²"
      },
      {
        id: 53,
        name: "Lohagad Fort",
        location: "Maharashtra",
        year: "16th century",
        description: "Iron Fort overlooking hills",
        facts: [
          "Vinchu Kata scorpion tail wall",
          "Protected Shivaji's treasury",
          "Caves with Buddhist inscriptions"
        ],
        image: "Lohagad",
        architect: "Shivaji Maharaj",
        area: "Hilltop complex"
      },
      {
        id: 54,
        name: "Rohtasgarh Fort",
        location: "Bihar",
        year: "7th century",
        description: "Ancient hill fortress",
        facts: [
          "Mentioned in Hindu epics",
          "Sher Shah Suri's treasury",
          "2000+ man-made steps to entrance"
        ],
        image: "Rohtasgarh",
        architect: "Hari Singh Nalwa",
        area: "4,500 acres"
      },
      {
        id: 55,
        name: "Tughlaqabad Fort",
        location: "Delhi",
        year: "1321-1325",
        description: "Gigantic abandoned citadel",
        facts: [
          "Cursed by Sufi saint Nizamuddin",
          "Massive rubble walls",
          "Adilabad twin fortress"
        ],
        image: "Tughlaqabad",
        architect: "Ghiyasuddin Tughlaq",
        area: "6.5 km perimeter"
      },
      {
        id: 56,
        name: "Fort William",
        location: "Kolkata",
        year: "1696",
        description: "East India Company headquarters",
        facts: [
          "Named after William III",
          "Site of Black Hole tragedy",
          "Current Indian Army command"
        ],
        image: "Fort William",
        architect: "John Goldsborough",
        area: "70.9 hectares"
      },
      {
        id: 57,
        name: "Neemrana Fort",
        location: "Rajasthan",
        year: "1464",
        description: "Heritage hotel in Aravalli Hills",
        facts: [
          "India's first heritage hotel",
          "14 palace levels",
          "Zip-lining facility"
        ],
        image: "Neemrana",
        architect: "Rajput chieftains",
        area: "Hilltop complex"
      },
      {
        id: 58,
        name: "Harishchandragad",
        location: "Maharashtra",
        year: "6th century",
        description: "Trekking fort with temples",
        facts: [
          "Konkan Kada cliff face",
          "Kedareshwar cave temple",
          "Ancient fire temple ruins"
        ],
        image: "Harishchandragad",
        architect: "Kalchuri dynasty",
        area: "Mountain fortress"
      },
      // ... Additional forts continue ...
      {
        id: 100,
        name: "Kamru Fort",
        location: "Himachal Pradesh",
        year: "1500",
        description: "Wooden tower fortress",
        facts: [
          "Five-story pagoda-style tower",
          "Buddhist temple at top floor",
          "Golden idol of Kamakhya Devi"
        ],
        image: "Kamru",
        architect: "Kinnauri kings",
        area: "Village complex"
      }
    ]
  },
  spices: {
  title: "Indian Spices",
  description: "Flavors that shaped world history",
  icon: "fas fa-mortar-pestle",
  spices: [
    {
      id: 1,
      name: "Turmeric",
      origin: "South Asia",
      description: "The golden healer",
      uses: [
        "Anti-inflammatory properties",
        "Essential in curry powders",
        "Natural food coloring"
      ],
      image: "turmeric",  // Fixed typo ('termeric' → 'turmeric')
      health: ["Antioxidant", "Anti-cancer", "Wound healer"],
      dishes: ["Haldi doodh", "Vegetable curries", "Rice dishes"]
    },
    {
      id: 2,
      name: "Cardamom",
      origin: "Western Ghats",
      description: "Queen of spices",
      uses: [
        "Flavoring in sweets and chai",
        "Digestive aid",
        "Perfume ingredient"
      ],
      image: "cardamom",
      health: ["Oral health", "Blood pressure", "Antioxidant"],
      dishes: ["Biryani", "Gulab jamun", "Masala chai"]
    },
    {
      id: 3,
      name: "Saffron",
      origin: "Kashmir",
      description: "The precious red gold",
      uses: [
        "Most expensive spice by weight",
        "75,000 flowers for one pound",
        "Natural dye and flavoring"
      ],
      image: "saffron",
      health: ["Mood enhancer", "Antioxidant", "Libido booster"],
      dishes: ["Kesar kulfi", "Mughlai biryani", "Shahi tukda"]
    },
    {
      id: 4,
      name: "Cumin",
      origin: "India",
      description: "Known as Jeera in Hindi",
      uses: ["Curry base", "Tempering", "Digestive aid"],
      image: "cumin",
      health: ["Iron source", "Digestion", "Immunity boost"],
      dishes: ["Jeera rice", "Curries", "Spice blends"]
    },
    {
      id: 5,
      name: "Coriander",
      origin: "India",
      description: "Known as Dhaniya in Hindi",
      uses: ["Garnishing", "Chutneys", "Curry base"],
      image: "coriander",
      health: ["Cholesterol control", "Anti-inflammatory", "Skin health"],
      dishes: ["Chutneys", "Curries", "Marinades"]
    },
    {
      id: 6,
      name: "Clove",
      origin: "India",
      description: "Known as Laung in Hindi",
      uses: ["Dental care", "Rice flavoring", "Masala blends"],
      image: "clove",
      health: ["Antiseptic", "Pain relief", "Antioxidant"],
      dishes: ["Biryani", "Garam masala", "Desserts"]
    },
    {
      id: 7,
      name: "Black Pepper",
      origin: "India",
      description: "Known as Kali Mirch in Hindi",
      uses: ["Seasoning", "Preservative", "Digestive aid"],
      image: "blackPepper",
      health: ["Metabolism boost", "Antioxidant", "Nutrient absorption"],
      dishes: ["All savory dishes", "Marinades", "Soups"]
    },
    {
      id: 8,
      name: "Cinnamon",
      origin: "India",
      description: "Known as Dalchini in Hindi",
      uses: ["Sweet dishes", "Curries", "Beverages"],
      image: "cinnamon",
      health: ["Blood sugar control", "Antioxidant", "Anti-inflammatory"],
      dishes: ["Desserts", "Biryani", "Tea"]
    },
    {
      id: 9,
      name: "Fennel",
      origin: "India",
      description: "Known as Saunf in Hindi",
      uses: ["Mouth freshener", "Digestive", "Curry flavoring"],
      image: "fennel",
      health: ["Digestion", "Antioxidant", "Eye health"],
      dishes: ["Desserts", "Curries", "After-meal digestive"]
    },
    {
      id: 10,
      name: "Fenugreek",
      origin: "India",
      description: "Known as Methi in Hindi",
      uses: ["Leaf vegetable", "Seed spice", "Medicinal"],
      image: "fenugreek",
      health: ["Milk production", "Blood sugar control", "Anti-inflammatory"],
      dishes: ["Methi paratha", "Curries", "Sprouts"]
    },
    {
      id: 11,
      name: "Mustard Seeds",
      origin: "India",
      description: "Known as Rai/Sarson in Hindi",
      uses: ["Tempering", "Pickling", "Oil extraction"],
      image: "mustardSeeds",
      health: ["Anti-inflammatory", "Antioxidant", "Metabolism"],
      dishes: ["Tadka", "Pickles", "Curries"]
    },
    {
      id: 12,
      name: "Asafoetida",
      origin: "India",
      description: "Known as Hing in Hindi",
      uses: ["Digestive aid", "Flavor enhancer", "Lentil seasoning"],
      image: "asafoetida",
      health: ["Digestion", "Anti-flatulent", "Respiratory health"],
      dishes: ["Dal tadka", "Curries", "Sambar"]
    },
    {
      id: 13,
      name: "Carom Seeds",
      origin: "India",
      description: "Known as Ajwain in Hindi",
      uses: ["Digestive aid", "Flatbread flavoring", "Remedies"],
      image: "caromSeeds",
      health: ["Digestion", "Cold relief", "Anti-inflammatory"],
      dishes: ["Parathas", "Snacks", "Medicinal drinks"]
    },
    {
      id: 14,
      name: "Bay Leaf",
      origin: "India",
      description: "Known as Tej Patta in Hindi",
      uses: ["Rice dishes", "Curries", "Stews"],
      image: "bayLeaf",
      health: ["Digestion", "Respiratory health", "Antioxidant"],
      dishes: ["Biryani", "Curries", "Soups"]
    },
    {
      id: 15,
      name: "Nutmeg",
      origin: "India",
      description: "Known as Jaiphal in Hindi",
      uses: ["Desserts", "Curries", "Medicinal"],
      image: "nutmeg",
      health: ["Brain health", "Pain relief", "Digestion"],
      dishes: ["Desserts", "Kheer", "Garam masala"]
    },
    {
      id: 16,
      name: "Mace",
      origin: "India",
      description: "Known as Javitri in Hindi",
      uses: ["Savory dishes", "Desserts", "Spice blends"],
      image: "mace",
      health: ["Digestion", "Oral health", "Antioxidant"],
      dishes: ["Biryani", "Desserts", "Curries"]
    },
    {
      id: 17,
      name: "Dry Ginger",
      origin: "India",
      description: "Known as Sonth in Hindi",
      uses: ["Herbal remedies", "Teas", "Digestive"],
      image: "dryGinger",
      health: ["Cold remedy", "Digestion", "Anti-inflammatory"],
      dishes: ["Ginger tea", "Herbal remedies", "Sweets"]
    },
    {
      id: 18,
      name: "Red Chili Powder",
      origin: "India",
      description: "Known as Lal Mirch in Hindi",
      uses: ["Heat source", "Colorant", "Flavoring"],
      image: "redChiliPowder",
      health: ["Metabolism", "Antioxidant", "Pain relief"],
      dishes: ["Curries", "Marinades", "Chutneys"]
    },
    {
      id: 19,
      name: "Green Chili",
      origin: "India",
      description: "Known as Hari Mirch in Hindi",
      uses: ["Fresh heat", "Chutneys", "Tempering"],
      image: "greenChili",
      health: ["Vitamin C", "Metabolism", "Antioxidant"],
      dishes: ["Fresh salads", "Chutneys", "Curries"]
    },
    {
      id: 20,
      name: "Tamarind",
      origin: "India",
      description: "Known as Imli in Hindi",
      uses: ["Souring agent", "Chutneys", "Beverages"],
      image: "tamarind",
      health: ["Digestion", "Antioxidant", "Weight loss"],
      dishes: ["Sambar", "Chutneys", "Pani puri water"]
    }
  ]
},
  galleries: {
    heritage: [
      { 
        id: 1, 
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523', 
        title: 'Taj Mahal', 
        description: 'Iconic marble mausoleum in Agra',
        category: "UNESCO World Heritage"
      },
      { 
        id: 2, 
        url: t, 
        title: 'Tech', 
        description: 'Technical representation',
        category: "Rock-cut Architecture"
      },
      { 
        id: 3, 
        url:heritageSiteImage13 , 
        title: 'Khajuraho Temples', 
        description: 'Famous for intricate sculptures',
        category: "Medieval Temple Complex"
      }
    ],
    forts: [
      { 
        id: 1, 
        url: RedFort, 
        title: 'Red Fort', 
        description: 'Historic fort in Delhi',
        category: "Mughal Architecture"
      },
      { 
        id: 2, 
        url: Chittorgarh, 
        title: 'Chittorgarh Fort', 
        description: 'Largest fort in Rajasthan',
        category: "Rajput Fortress"
      },
      
      { 
        id: 3, 
        url:Jaisalmer, 
        title: 'Jaisalmer Fort', 
        description: 'Golden fort in the Thar Desert',
        category: "Living Fort"
      }
    ],
    spices: [
      { 
      id: 1, 
      url:g1,
    },
    { 
      id: 2, 
      url:g2,
    },
    { 
      id: 3, 
      url: g3,
    },
    { 
      id: 4, 
      url:g4,
    },
    { 
      id: 5, 
      url: g5,
    },
    { 
      id: 6, 
      url: g6,
    },
    { 
      id: 7, 
      url: g7,
    },
    { 
      id: 8, 
      url: g8,
    },
    { 
      id: 9, 
      url: g9,
    },
    { 
      id: 10, 
      url:g10,
    }
    ]
  },
  clothing: {
    title: "Traditional Indian Clothing",
    description: "Weaves of cultural identity across regions",
    icon: "fas fa-tshirt",
    categories: [
      {
        id: 1,
        title: "Women's Attire",
        icon: "fas fa-female",
        content: [
          {
            title: "Saree",
            description: "Unstitched drape from 5-9 yards",
            icon: "fas fa-ribbon",
            facts: [
              "Over 80 regional draping styles",
              "Banarasi silk - Mughal inspired zari work",
              "Kanjeevaram - temple border designs"
            ],
            image: "https://images.unsplash.com/photo-1616595286595-8aae8b0b03b6"
          },
          {
            title: "Lehenga Choli",
            description: "Royal ceremonial ensemble",
            icon: "fas fa-crown",
            facts: [
              "Originated in Mughal courts",
              "Gotapatti patchwork from Rajasthan",
              "Mirror work in Gujarati designs"
            ],
            image: "https://images.unsplash.com/photo-1596466596120-2a8e5cfd4b24"
          }
        ]
      },
      {
        id: 2,
        title: "Men's Attire",
        icon: "fas fa-male",
        content: [
          {
            title: "Sherwani",
            description: "Regal knee-length coat",
            icon: "fas fa-vest",
            facts: [
              "Evolved from Persian cape",
              "Mughal-style embroidery",
              "Wedding essential in North India"
            ],
            image: "https://images.unsplash.com/photo-1633372564472-5b1c79bf1d0f"
          },
          {
            title: "Dhoti Kurta",
            description: "Traditional lower garment",
            icon: "fas fa-pager",
            facts: [
              "White cotton for formal occasions",
              "Veshti in South Indian silk",
              "Worn with angavastram"
            ],
            image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26"
          }
        ]
      },
      {
        id: 3,
        title: "Regional Specialties",
        icon: "fas fa-map-marked-alt",
        content: [
          {
            title: "Pheran",
            description: "Kashmiri woolen cloak",
            icon: "fas fa-snowflake",
            facts: [
              "Kashida embroidery patterns",
              "Worn over kangri (fire pot)",
              "Floor-length for women"
            ],
            image: "https://images.unsplash.com/photo-1630002384814-a7e212a5c8d9"
          },
          {
            title: "Mekhela Chador",
            description: "Assamese three-piece silk",
            icon: "fas fa-fan",
            facts: [
              "Muga silk - golden sheen",
              "Gamusa border detailing",
              "Woven on backstrap looms"
            ],
            image: "https://images.unsplash.com/photo-1580256081112-e49377338d3f"
          }
        ]
      }
    ]
  },

  cuisine: {
    title: "Indian Cuisine",
    description: "Diverse flavors from 8 culinary traditions",
    icon: "fas fa-utensils",
    regions: [
      {
        id: 1,
        name: "North Indian",
        location: "Punjab, Delhi, UP",
        description: "Rich dairy-based gravies",
        facts: [
          "Tandoor cooking method",
          "Ghee and cream bases",
          "Whole wheat breads"
        ],
        dishes: [
          { name: "Butter Chicken", ingredients: "Yogurt-marinated chicken, tomato gravy", health: "High protein" },
          { name: "Rogan Josh", ingredients: "Lamb, Kashmiri chilies, fennel", health: "Iron-rich" }
        ],
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
      },
      {
        id: 2,
        name: "South Indian",
        location: "Tamil Nadu, Kerala",
        description: "Rice and coconut based",
        facts: [
          "Fermented dishes",
          "Steamed preparations",
          "Tamarind sourness"
        ],
        dishes: [
          { name: "Dosa", ingredients: "Fermented rice-lentil batter", health: "Probiotic" },
          { name: "Avial", ingredients: "Mixed vegetables in coconut gravy", health: "High fiber" }
        ],
        image: "https://images.unsplash.com/photo-1631898039996-87b7a86edbdf"
      },
      {
        id: 3,
        name: "Coastal",
        location: "Goa, Bengal",
        description: "Seafood specialties",
        facts: [
          "Coconut milk bases",
          "Kokum and tamarind souring",
          "Mustard-poppy seed pastes"
        ],
        dishes: [
          { name: "Fish Curry", ingredients: "Pomfret, coconut, kokum", health: "Omega-3 fatty acids" },
          { name: "Prawn Balchão", ingredients: "Pickled prawns, spices", health: "Low calorie" }
        ],
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84"
      }
    ]
  },

  danceMusic: {
    title: "Dance & Music Forms",
    description: "Rhythmic expressions of cultural ethos",
    icon: "fas fa-music",
    categories: [
      {
        id: 1,
        title: "Classical Dance",
        icon: "fas fa-gem",
        forms: [
          {
            title: "Bharatanatyam",
            origin: "Tamil Nadu",
            features: "Precise footwork, mudras, temple origins",
            image: "https://images.unsplash.com/photo-1612195583953-4c1a0d379c4c"
          },
          {
            title: "Kathak",
            origin: "North India",
            features: "Storytelling, spins, Persian influences",
            image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb54d"
          }
        ]
      },
      {
        id: 2,
        title: "Folk Dances",
        icon: "fas fa-users",
        forms: [
          {
            title: "Bhangra",
            origin: "Punjab",
            features: "Energetic harvest dance, dhol beats",
            image: "https://images.unsplash.com/photo-1622461521301-1b1c1a3c0e1b"
          },
          {
            title: "Garba",
            origin: "Gujarat",
            features: "Circular patterns, dandiya sticks",
            image: "https://images.unsplash.com/photo-1573785405482-1bbab4ae1a3d"
          }
        ]
      },
      {
        id: 3,
        title: "Musical Traditions",
        icon: "fas fa-drum",
        forms: [
          {
            title: "Carnatic",
            origin: "South India",
            features: "Kriti format, raga elaboration",
            image: "https://images.unsplash.com/photo-1618897996315-6448d2f7b6ef"
          },
          {
            title: "Qawwali",
            origin: "Sufi shrines",
            features: "Devotional poetry, harmonium, clapping",
            image:"#"
          }
        ]
      }
    ]
  },









  personalities: {
    title: "Famous Indian Personalities",
    description: "Luminaries who shaped history",
    icon: "fas fa-star",
    categories: [
      {
        id: 1,
        title: "Leaders",
        icon: "fas fa-landmark",
        people: [
          {
            name: "Mahatma Gandhi",
            field: "Freedom Movement",
            achievement: "Non-violent civil disobedience",
            image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa"
          },
          {
            name: "Dr. B.R. Ambedkar",
            field: "Constitution",
            achievement: "Architect of Indian Constitution",
            image: "https://images.unsplash.com/photo-1618477388954-7850a2f4e5a3"
          }
        ]
      },
      {
        id: 2,
        title: "Scientists",
        icon: "fas fa-atom",
        people: [
          {
            name: "C.V. Raman",
            field: "Physics",
            achievement: "Nobel Prize for light scattering",
            image: "https://images.unsplash.com/photo-1622461521301-1b1c1a3c0e1b"
          },
          {
            name: "APJ Abdul Kalam",
            field: "Aerospace",
            achievement: "Missile Development Program",
            image: "https://images.unsplash.com/photo-1618477388954-7850a2f4e5a3"
          }
        ]
      },
      {
        id: 3,
        title: "Artists",
        icon: "fas fa-palette",
        people: [
          {
            name: "Raja Ravi Varma",
            field: "Painting",
            achievement: "Fusion of Indian-European styles",
            image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb54d"
          },
          {
            name: "Rukmini Devi",
            field: "Dance",
            achievement: "Revived Bharatanatyam",
            image: "https://images.unsplash.com/photo-1573785405482-1bbab4ae1a3d"
          }
        ]
      }
    ]
  },

  architecture: {
    title: "Indian Architecture Styles",
    description: "Stone chronicles of civilization",
    icon: "fas fa-archway",
    styles: [
      {
        id: 1,
        name: "Dravidian",
        period: "7th-18th century",
        features: [
          "Gopurams (ornate gateways)",
          "Mandapas (pillared halls)",
          "Vimana (pyramidal towers)"
        ],
        example: "Meenakshi Temple, Madurai",
        image: "https://images.unsplash.com/photo-1585506942812-e72b29cef752"
      },
      {
        id: 2,
        name: "Indo-Islamic",
        period: "12th-18th century",
        features: [
          "Arches and domes",
          "Minarets",
          "Jali work (perforated screens)"
        ],
        example: "Qutub Minar Complex, Delhi",
        image: "https://images.unsplash.com/photo-1621073296430-4fcc1dffb0d8"
      },
      {
        id: 3,
        name: "Colonial",
        period: "18th-20th century",
        features: [
          "Neoclassical facades",
          "Verandahs",
          "High ceilings"
        ],
        example: "Victoria Memorial, Kolkata",
        image: "https://images.unsplash.com/photo-1585506942812-e72b29cef752"
      }
    ]
  },

  geography: {
    title: "Geography & Landscapes",
    description: "Subcontinent of dramatic contrasts",
    icon: "fas fa-mountain",
    features: [
      {
        id: 1,
        name: "Himalayas",
        location: "Northern Frontier",
        significance: "World's highest peaks",
        facts: [
          "Source of Ganga, Yamuna, Brahmaputra",
          "Home to rare snow leopards",
          "Contains 10 of world's 14 highest peaks"
        ],
        image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8"
      },
      {
        id: 2,
        name: "Thar Desert",
        location: "Rajasthan",
        significance: "Arid ecosystem",
        facts: [
          "World's 17th largest desert",
          "Fossil evidence of Saraswati river",
          "Unique desert adaptation species"
        ],
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26"
      },
      {
        id: 3,
        name: "Western Ghats",
        location: "West Coast",
        significance: "Biodiversity hotspot",
        facts: [
          "Older than Himalayas",
          "40% endemic plant species",
          "UNESCO World Heritage Site"
        ],
        image: "https://images.unsplash.com/photo-1621073296430-4fcc1dffb0d8"
      }
    ]
  },

  wildlife: {
    title: "Wildlife & National Parks",
    description: "Biodiversity wonderland",
    icon: "fas fa-paw",
    categories: [
      {
        id: 1,
        title: "Iconic Species",
        icon: "fas fa-crown",
        animals: [
          {
            name: "Bengal Tiger",
            status: "Endangered",
            population: "~3000 in wild",
            habitat: "Mangroves to grasslands",
            image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
          },
          {
            name: "Asiatic Lion",
            status: "Endangered",
            population: "674 (2020 census)",
            habitat: "Gir Forest, Gujarat",
            image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
          }
        ]
      },
      {
        id: 2,
        title: "National Parks",
        icon: "fas fa-tree",
        parks: [
          {
            name: "Kaziranga",
            location: "Assam",
            highlight: "One-horned rhino (2,613 individuals)",
            area: "430 sq km",
            image: "https://images.unsplash.com/photo-1596466596120-2a8e5cfd4b24"
          },
          {
            name: "Ranthambore",
            location: "Rajasthan",
            highlight: "Tiger spotting in ancient ruins",
            area: "392 sq km",
            image: "https://images.unsplash.com/photo-1557234195-bd9f4f8c0e45"
          }
        ]
      },
      {
        id: 3,
        title: "Conservation Projects",
        icon: "fas fa-seedling",
        initiatives: [
          {
            name: "Project Tiger",
            year: "1973",
            result: "Tiger population doubled since 2006",
            image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
          },
          {
            name: "Crocodile Conservation",
            year: "1975",
            result: "Gharial population increased 10x",
            image: "https://images.unsplash.com/photo-1557234195-bd9f4f8c0e45"
          }
        ]
      }
    ]
  },
};
