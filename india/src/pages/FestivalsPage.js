import React from "react";
import "../css/FestivalsPage.css";
import ScrollingEffect from "../components/ScrollingEffect";

import andhraImg from "../images/states1/andhra.jpg";
import arunachalImg from "../images/states1/arunachal.jpg";
import assamImg from "../images/states1/assam.jpg";
import biharImg from "../images/states1/bihar.jpg";
import chhattisgarhImg from "../images/states1/chhattisgarh.jpg";
import goaImg from "../images/states1/goa.jpg";
import gujaratImg from "../images/states1/gujarat.jpg";
import haryanaImg from "../images/states1/haryana.jpg";
import himachalImg from "../images/states1/himachal.jpg";
import jharkhandImg from "../images/states1/jharkhand.jpg";
import karnatakaImg from "../images/states1/karnataka.jpg";
import keralaImg from "../images/states1/kerala.jpg";
import madhyaPradeshImg from "../images/states1/madhya-pradesh.jpg";
import maharashtraImg from "../images/states1/maharashtra.jpg";
import manipurImg from "../images/states1/manipur.jpg";
import meghalayaImg from "../images/states1/meghalaya.jpg";
import mizoramImg from "../images/states1/mizoram.jpg";
import nagalandImg from "../images/states1/nagaland.jpg";
import odishaImg from "../images/states1/odisha.jpg";
import punjabImg from "../images/states1/punjab.jpg";
import rajasthanImg from "../images/states1/rajasthan.jpg";
import sikkimImg from "../images/states1/sikkim.jpg";
import tamilNaduImg from "../images/states1/tamil-nadu.jpg";
import telanganaImg from "../images/states1/telangana.jpg";
import tripuraImg from "../images/states1/tripura.jpg";
import uttarPradeshImg from "../images/states1/uttar-pradesh.jpg";
import uttarakhandImg from "../images/states1/uttarakhand.jpg";
import westBengalImg from "../images/states1/west-bengal.jpg";

const FestivalsPage = () => {
  const stateFestivals = [
    {
      state: "Andhra Pradesh",
      image: andhraImg,
      intro:
        "Andhra Pradesh’s festivals combine spiritual devotion, agrarian prosperity, and vivid folk culture that reflect the Telugu people’s joy and deep-rooted traditions.",
      festivals: [
        { name: "Ugadi", time: "March-April", desc: "Telugu New Year celebrated with special dishes like 'Ugadi Pachadi' symbolizing life's flavors." },
        { name: "Sankranti", time: "January", desc: "Harvest festival of kites, bonfires, and decorated bulls marking the end of winter." },
        { name: "Tirupati Brahmotsavam", time: "September", desc: "Nine-day temple festival at Tirumala featuring colorful chariots and rituals for Lord Venkateswara." },
        { name: "Rama Navami", time: "April", desc: "Devotees celebrate Lord Rama’s birth with readings from the Ramayana and temple feasts." },
        { name: "Bathukamma", time: "September-October", desc: "Floral festival where women create flower stacks and dance in devotion to Goddess Gauri." },
      ],
    },
    {
      state: "Arunachal Pradesh",
      image: arunachalImg,
      intro:
        "Arunachal Pradesh, with its many tribes, celebrates life through rituals tied to nature, harvest, and Buddhist spiritual practices.",
      festivals: [
        { name: "Losar", time: "February", desc: "Tibetan New Year marked by folk dances, rituals, and offering to spirits for peace." },
        { name: "Solung", time: "September", desc: "Harvest festival of the Adi tribe praying for prosperity and a bountiful yield." },
        { name: "Mopin", time: "April", desc: "Celebrated by the Galo tribe with rice beer, white powder smearing, and folk music." },
        { name: "Nyokum", time: "February", desc: "Nyishi tribe’s ritual to strengthen harmony between humans, nature, and deities." },
        { name: "Dree", time: "July", desc: "Apatanis perform traditional dances and offer sacrifices to ensure good harvest." },
      ],
    },
    {
      state: "Assam",
      image: assamImg,
      intro:
        "Assam’s cultural rhythm beats with Bihu songs, temple rituals, and nature-centered celebrations reflecting its rich tribal and Vaishnavite heritage.",
      festivals: [
        { name: "Bohag Bihu", time: "April", desc: "Spring New Year festival of joy, songs, and traditional feasts marking sowing season." },
        { name: "Ambubachi Mela", time: "June", desc: "Spiritual fair at Kamakhya Temple celebrating fertility and womanhood." },
        { name: "Majuli Raas", time: "November", desc: "Majuli island comes alive with Krishna Raas performances and dance dramas." },
        { name: "Baishagu", time: "April", desc: "Bodo tribe’s festival with vibrant dance, drums, and worship of cows and ancestors." },
        { name: "Ali-Aye-Ligang", time: "February", desc: "Mishing tribe’s sowing festival with songs of love, labor, and fertility." },
      ],
    },
    {
      state: "Bihar",
      image: biharImg,
      intro:
        "Bihar’s festivals express deep devotion to the Sun God, rivers, and ancient Hindu traditions that date back to the Vedic era.",
      festivals: [
        { name: "Chhath Puja", time: "October-November", desc: "Four-day worship of the Sun God with holy dips and fasting." },
        { name: "Sama-Chakeva", time: "November", desc: "Festival celebrating brother-sister love through clay idol rituals." },
        { name: "Sonepur Mela", time: "November-December", desc: "Historic cattle fair blending trade, culture, and carnival vibes." },
        { name: "Ram Navami", time: "April", desc: "Devotional celebrations honoring Lord Rama with fasting and prayers." },
        { name: "Makar Sankranti", time: "January", desc: "Harvest joy marked by kite flying and sesame sweets." },
      ],
    },
    {
      state: "Chhattisgarh",
      image: chhattisgarhImg,
      intro:
        "The tribal heartland of Chhattisgarh celebrates festivals filled with folk songs, dance, and respect for nature’s cycles.",
      festivals: [
        { name: "Bastar Dussehra", time: "September-October", desc: "Longest Dussehra in India lasting 75 days with tribal rituals." },
        { name: "Madai Festival", time: "December-March", desc: "Processions and fairs honoring local deities in different villages." },
        { name: "Teeja", time: "August", desc: "Women pray for their husbands' wellbeing with folk songs and fasting." },
        { name: "Hareli", time: "July", desc: "Agricultural festival where tools and cows are worshipped." },
        { name: "Pola", time: "August", desc: "Farmers decorate and honor their bulls for agricultural strength." },
      ],
    },
    {
      state: "Goa",
      image: goaImg,
      intro:
        "Goa’s festivals are a fusion of Konkani culture, Catholic faith, and coastal exuberance, filled with color and music.",
      festivals: [
        { name: "Goa Carnival", time: "February", desc: "Grand street parade of floats, samba, and laughter before Lent." },
        { name: "Shigmo", time: "March", desc: "Spring festival with folk dances and colors marking victory of good over evil." },
        { name: "Sao Joao", time: "June", desc: "People jump into wells celebrating St. John the Baptist with joy." },
        { name: "Feast of St. Francis Xavier", time: "December", desc: "Pilgrimage at Old Goa honoring the saint’s remains." },
        { name: "Ganesh Chaturthi", time: "August", desc: "Homes welcome Ganapati with songs, pujas, and Konkani food feasts." },
      ],
    },
    {
      state: "Gujarat",
      image: gujaratImg,
      intro:
        "Gujarat vibrates with devotion and dance — from Navratri’s garba nights to colorful kite festivals celebrating life and wind.",
      festivals: [
        { name: "Navratri", time: "October", desc: "Nine nights of garba and dandiya honoring Goddess Durga." },
        { name: "Uttarayan", time: "January", desc: "Sky filled with kites marking the harvest and sun’s northward journey." },
        { name: "Rath Yatra", time: "June-July", desc: "Grand chariot procession of Lord Jagannath in Ahmedabad." },
        { name: "Janmashtami", time: "August", desc: "Celebration of Lord Krishna’s birth with fasting and dance." },
        { name: "Makar Sankranti", time: "January", desc: "Feasts of sesame sweets and cheerful kite flying across cities." },
      ],
    },
    {
      state: "Haryana",
      image: haryanaImg,
      intro:
        "Haryana’s festivals revolve around agrarian cycles, valor, and the vibrant Haryanvi folk culture of dance and fairs.",
      festivals: [
        { name: "Baisakhi", time: "April", desc: "Harvest celebration with fairs, bhangra, and folk music." },
        { name: "Teej", time: "August", desc: "Women celebrate marital bliss with swings and mehendi." },
        { name: "Lohri", time: "January", desc: "Bonfires and folk songs mark the end of winter." },
        { name: "Holi", time: "March", desc: "Villages burst with colors and dhol beats celebrating love and unity." },
        { name: "Guga Naumi", time: "August-September", desc: "Worship of serpent god Guga symbolizing rain and protection." },
      ],
    },
    {
      state: "Himachal Pradesh",
      image: himachalImg,
      intro:
        "Himachal’s mountain festivals are steeped in myth and music, uniting villages in devotion and dance amid scenic valleys.",
      festivals: [
        { name: "Kullu Dussehra", time: "October", desc: "Unique week-long Dussehra where local deities join Lord Raghunath’s procession." },
        { name: "Losar", time: "February", desc: "Tibetan New Year with traditional Cham dances in monasteries." },
        { name: "Minjar Fair", time: "July-August", desc: "Chamba’s fair marking harvest with silk tassels and folk shows." },
        { name: "Phulaich", time: "September", desc: "‘Festival of Flowers’ celebrated by Kinnaur tribes with wine and songs." },
        { name: "Halda", time: "January", desc: "Lahaul’s New Year welcoming prosperity with bonfires and dance." },
      ],
    },
    {
      state: "Jharkhand",
      image: jharkhandImg,
      intro:
        "Jharkhand’s tribal festivals are rooted in gratitude to nature, celebrating soil, spirits, and the rhythm of rural life.",
      festivals: [
        { name: "Sarhul", time: "April", desc: "Spring festival worshipping Sal trees and village deities for fertility." },
        { name: "Karam", time: "September", desc: "Youth worship Karam tree symbolizing prosperity and friendship." },
        { name: "Tusu Parab", time: "January", desc: "Harvest festival with folk songs and decorated idols." },
        { name: "Sohrai", time: "November", desc: "Cattle and cow worship with mud wall art and community feasts." },
        { name: "Binda Mela", time: "March", desc: "Tribal fair of dance, trade, and local crafts." },
      ],
    },
    {
      state: "Karnataka",
      image: karnatakaImg,
      intro:
        "Karnataka’s festivals blend temple devotion, royal heritage, and folk theater that define its cultural grandeur.",
      festivals: [
        { name: "Mysore Dasara", time: "October", desc: "Ten-day royal celebration with processions, elephants, and illumination." },
        { name: "Ugadi", time: "March-April", desc: "Kannada New Year with neem-jaggery dish symbolizing life’s balance." },
        { name: "Hampi Utsav", time: "November", desc: "Cultural festival amidst ancient ruins featuring music and dance." },
        { name: "Karaga", time: "April", desc: "Oldest temple procession in Bengaluru honoring Goddess Draupadi." },
        { name: "Kambala", time: "November-March", desc: "Buffalo race in paddy fields symbolizing rural vigor." },
      ],
    },
    {
      state: "Kerala",
      image: keralaImg,
      intro:
        "Kerala’s festivals unite nature and devotion, from temple elephants to Onam’s floral carpets and coastal traditions.",
      festivals: [
        { name: "Onam", time: "August-September", desc: "Harvest festival welcoming King Mahabali with floral designs and feasts." },
        { name: "Vishu", time: "April", desc: "Malayali New Year symbolizing prosperity with golden displays and fireworks." },
        { name: "Thrissur Pooram", time: "April-May", desc: "Spectacular temple procession with decorated elephants and percussion." },
        { name: "Attukal Pongala", time: "February-March", desc: "Women cook offerings in honor of Goddess Attukal Amma." },
        { name: "Theyyam", time: "December-April", desc: "Colorful ritual dance where performers embody deities." },
      ],
    },
    {
      state: "Madhya Pradesh",
      image: madhyaPradeshImg,
      intro:
        "Madhya Pradesh celebrates its heartland culture with tribal dances, temple fairs, and historic grandeur.",
      festivals: [
        { name: "Lokrang Festival", time: "January", desc: "Cultural fair in Bhopal showcasing tribal art and folk performances." },
        { name: "Khajuraho Dance Festival", time: "February", desc: "Dance forms performed amidst the backdrop of ancient temples." },
        { name: "Tansen Sangeet Samaroh", time: "December", desc: "Classical music tribute to the maestro Tansen at Gwalior." },
        { name: "Malwa Utsav", time: "May", desc: "Colorful folk celebration of music and crafts in Indore and Ujjain." },
        { name: "Bhagoria", time: "March", desc: "Adivasi fair where youth meet and celebrate love and harvest." },
      ],
    },
    {
      state: "Maharashtra",
      image: maharashtraImg,
      intro:
        "Maharashtra’s festivals are grand and diverse, blending devotion, power, and community together.",
      festivals: [
        { name: "Ganesh Chaturthi", time: "August-September", desc: "Massive celebrations of Lord Ganesha with idols and immersion processions." },
        { name: "Gudi Padwa", time: "March-April", desc: "Maharashtrian New Year marked with sweet dishes and traditional flags." },
        { name: "Ellora Ajanta Festival", time: "March", desc: "Cultural events held near heritage caves showcasing art and music." },
        { name: "Nag Panchami", time: "August", desc: "Snake worship rituals expressing reverence for nature." },
        { name: "Diwali", time: "October-November", desc: "Homes lit with diyas and sweets celebrating victory of light." },
      ],
    },
    {
      state: "Manipur",
      image: manipurImg,
      intro:
        "Manipur’s festivals reflect its martial dance forms, Vaishnavite devotion, and colorful tribal spirit.",
      festivals: [
        { name: "Yaoshang", time: "March", desc: "Manipuri version of Holi with sports, songs, and community joy." },
        { name: "Lai Haraoba", time: "May-June", desc: "Festival reenacting creation myths through dance and music." },
        { name: "Kang", time: "July", desc: "Rath Yatra of Lord Jagannath celebrated with Manipuri rituals." },
        { name: "Ningol Chakouba", time: "November", desc: "Sisters visit parental homes for feasts and gifts." },
        { name: "Cheiraoba", time: "April", desc: "New Year festival marked with house cleaning and mount climbing." },
      ],
    },
    {
      state: "Meghalaya",
      image: meghalayaImg,
      intro:
        "Meghalaya’s matrilineal tribes celebrate fertility, harvest, and nature with song and dance.",
      festivals: [
        { name: "Wangala", time: "November", desc: "Garo tribe’s harvest dance honoring Sun God Saljong." },
        { name: "Shad Suk Mynsiem", time: "April", desc: "Khasi thanksgiving festival with traditional dance and drums." },
        { name: "Behdienkhlam", time: "July", desc: "Jaintia festival to drive away plague and evil spirits." },
        { name: "Nongkrem Dance", time: "November", desc: "Ritual dance to appease the goddess for peace and fertility." },
        { name: "Strawberry Festival", time: "February", desc: "Celebrates local produce with music and tourism." },
      ],
    },
    {
      state: "Mizoram",
      image: mizoramImg,
      intro:
        "Mizoram’s festivals echo its agrarian roots and strong community bonds through music and dance.",
      festivals: [
        { name: "Chapchar Kut", time: "March", desc: "Spring festival with bamboo dance and feasting." },
        { name: "Pawl Kut", time: "December", desc: "Harvest thanksgiving with folk games and songs." },
        { name: "Mim Kut", time: "September", desc: "Tribute to ancestors with food offerings and rice beer." },
        { name: "Christmas", time: "December", desc: "Christian celebrations with carols and community feasts." },
        { name: "New Year", time: "January", desc: "Festive gathering with dance and fireworks." },
      ],
    },
    {
      state: "Nagaland",
      image: nagalandImg,
      intro:
        "Nagaland’s tribal festivals bring together its 16 tribes in music, warfare dance, and unity under nature’s blessing.",
      festivals: [
        { name: "Hornbill Festival", time: "December", desc: "Showcase of all Naga tribes’ culture, dance, and cuisine." },
        { name: "Moatsu", time: "May", desc: "Ao tribe’s festival marking the end of sowing season." },
        { name: "Sekrenyi", time: "February", desc: "Angami tribe’s purification and rejuvenation rituals." },
        { name: "Tokhu Emong", time: "November", desc: "Lotha tribe’s thanksgiving with community feasting." },
        { name: "Aoling", time: "April", desc: "Konyak tribe’s spring festival welcoming new year." },
      ],
    },
    {
      state: "Odisha",
      image: odishaImg,
      intro:
        "Odisha’s festivals combine temple grandeur, folk theater, and ocean-side devotion rooted in ancient rituals.",
      festivals: [
        { name: "Rath Yatra", time: "June-July", desc: "Lord Jagannath’s chariot procession in Puri draws millions." },
        { name: "Durga Puja", time: "October", desc: "Worship of Goddess Durga with elaborate pandals and lights." },
        { name: "Pana Sankranti", time: "April", desc: "Odia New Year celebrated with sweet drinks and rituals." },
        { name: "Raja Parba", time: "June", desc: "Festival celebrating womanhood and Earth’s fertility." },
        { name: "Kalinga Mahotsav", time: "January", desc: "Dance festival celebrating peace and Buddhism." },
      ],
    },
    {
      state: "Punjab",
      image: punjabImg,
      intro:
        "Punjab’s spirit comes alive in dance, devotion, and the warmth of its agrarian and Sikh traditions.",
      festivals: [
        { name: "Baisakhi", time: "April", desc: "Harvest and Sikh New Year celebrated with joy and langar." },
        { name: "Lohri", time: "January", desc: "Bonfire festival marking the end of winter." },
        { name: "Hola Mohalla", time: "March", desc: "Sikh warrior festival of mock battles and kirtans at Anandpur Sahib." },
        { name: "Diwali", time: "October-November", desc: "Golden Temple lit with diyas symbolizing victory of good." },
        { name: "Gurpurab", time: "November", desc: "Birth of Guru Nanak celebrated with hymns and processions." },
      ],
    },
    {
      state: "Rajasthan",
      image: rajasthanImg,
      intro:
        "Rajasthan’s deserts bloom with color and folk life through fairs, royal processions, and devotion.",
      festivals: [
        { name: "Pushkar Fair", time: "November", desc: "Camel fair and cultural extravaganza in Pushkar." },
        { name: "Gangaur", time: "March-April", desc: "Women worship Gauri for marital bliss with decorated idols." },
        { name: "Desert Festival", time: "February", desc: "Jaisalmer comes alive with camel races and folk music." },
        { name: "Teej", time: "August", desc: "Monsoon festival of swings and mehendi." },
        { name: "Mewar Festival", time: "March", desc: "Udaipur celebrates spring with boat processions and folk shows." },
      ],
    },
    {
      state: "Sikkim",
      image: sikkimImg,
      intro:
        "Sikkim’s Buddhist traditions and scenic grandeur inspire spiritual festivals of peace, prayer, and snow-clad joy.",
      festivals: [
        { name: "Losar", time: "February", desc: "Tibetan New Year celebrated with Cham dances and prayers." },
        { name: "Saga Dawa", time: "May-June", desc: "Marks Buddha’s birth, enlightenment, and nirvana." },
        { name: "Pang Lhabsol", time: "August", desc: "Festival honoring Mount Kanchenjunga’s protection." },
        { name: "Drupka Teshi", time: "July", desc: "Celebrates Buddha’s first sermon." },
        { name: "Bumchu", time: "February-March", desc: "Holy water ceremony predicting Sikkim’s future." },
      ],
    },
    {
      state: "Tamil Nadu",
      image: tamilNaduImg,
      intro:
        "Tamil Nadu’s festivals are steeped in temple rituals, classical arts, and timeless devotion.",
      festivals: [
        { name: "Pongal", time: "January", desc: "Harvest festival thanking Sun God with rice dishes and kolams." },
        { name: "Thaipusam", time: "January-February", desc: "Devotees pierce their bodies in devotion to Lord Murugan." },
        { name: "Natyanjali", time: "February", desc: "Dance festival at Chidambaram temple honoring Lord Nataraja." },
        { name: "Karthigai Deepam", time: "December", desc: "Hilltop lights mark the divine flame of Lord Shiva." },
        { name: "Mahamagam", time: "February-March", desc: "Once-in-12-year holy dip in Kumbakonam’s sacred tank." },
      ],
    },
    {
      state: "Telangana",
      image: telanganaImg,
      intro:
        "Telangana’s festivals blend agrarian joy with regional pride, celebrating both goddess and grain.",
      festivals: [
        { name: "Bathukamma", time: "September-October", desc: "Women stack flowers and sing to Goddess Gauri for prosperity." },
        { name: "Bonalu", time: "July", desc: "Offering festival for Goddess Mahakali with drums and processions." },
        { name: "Sankranti", time: "January", desc: "Harvest festival of kites, sweets, and bull races." },
        { name: "Ugadi", time: "March-April", desc: "New Year marked by mango leaf decorations and rituals." },
        { name: "Peerla Panduga", time: "November", desc: "Muslim-Hindu harmony festival honoring saints." },
      ],
    },
    {
      state: "Tripura",
      image: tripuraImg,
      intro:
        "Tripura’s tribal essence shines through its vibrant dances, temple rituals, and harvest festivals.",
      festivals: [
        { name: "Kharchi Puja", time: "July", desc: "Worship of 14 deities with animal sacrifices and fairs." },
        { name: "Garia Puja", time: "April", desc: "Tribal spring festival for prosperity and livestock welfare." },
        { name: "Durga Puja", time: "October", desc: "Massive pandals and cultural performances across the state." },
        { name: "Ker Puja", time: "July-August", desc: "Rituals seeking peace and protection from calamities." },
        { name: "Diwali", time: "October-November", desc: "Temples lit with lamps symbolizing victory of light." },
      ],
    },
    {
      state: "Uttar Pradesh",
      image: uttarPradeshImg,
      intro:
        "Uttar Pradesh’s ancient cities and temples celebrate mythology, faith, and art in timeless grandeur.",
      festivals: [
        { name: "Kumbh Mela", time: "January-February", desc: "World’s largest spiritual gathering on riverbanks." },
        { name: "Diwali", time: "October-November", desc: "Ayodhya glows with millions of diyas marking Rama’s return." },
        { name: "Holi", time: "March", desc: "Mathura-Vrindavan’s riot of colors celebrating divine love." },
        { name: "Ram Navami", time: "April", desc: "Rituals in Ayodhya mark the birth of Lord Rama." },
        { name: "Taj Mahotsav", time: "February", desc: "Art, craft, and culture fair near the Taj Mahal." },
      ],
    },
    {
      state: "Uttarakhand",
      image: uttarakhandImg,
      intro:
        "Uttarakhand’s mountain festivals echo the rhythm of its rivers and devotion to Himalayan deities.",
      festivals: [
        { name: "Kumbh Mela (Haridwar)", time: "Every 12 years", desc: "Spiritual bathing festival attracting millions of pilgrims." },
        { name: "Harela", time: "July", desc: "Green festival symbolizing prosperity and environment." },
        { name: "Nanda Devi Raj Jat", time: "Every 12 years", desc: "Sacred pilgrimage through high Himalayas." },
        { name: "Makar Sankranti", time: "January", desc: "Celebrated with kite flying and bathing in holy rivers." },
        { name: "Phool Dei", time: "March", desc: "Spring festival where children offer flowers to homes." },
      ],
    },
    {
      state: "West Bengal",
      image: westBengalImg,
      intro:
        "West Bengal’s cultural spirit thrives in its grand artistic festivals, poetic devotion, and musical traditions.",
      festivals: [
        { name: "Durga Puja", time: "October", desc: "Ten-day celebration of Goddess Durga with artistry, music, and lights." },
        { name: "Poila Boishakh", time: "April", desc: "Bengali New Year with fairs and traditional feasts." },
        { name: "Rath Yatra", time: "June-July", desc: "Chariot festival of Lord Jagannath in Kolkata and Mahesh." },
        { name: "Kali Puja", time: "October-November", desc: "Night-long worship of Goddess Kali with fireworks." },
        { name: "Poush Mela", time: "December", desc: "Santiniketan’s folk fair of Baul songs and rural crafts." },
      ],
    },
  ];

  return (
    <div className="festivals-page">
      <ScrollingEffect />
      <div className="container">
        <h1 className="festivals-title">Festivals of India</h1>
        <p className="festivals-intro">
          Every Indian state celebrates life through its own rhythm — devotion, harvest, color, and joy. 
          Explore the grand mosaic of India's festivals from the Himalayas to the coasts.
        </p>

        <div className="festivals-grid">
          {stateFestivals.map((stateData, index) => (
            <div className="festival-card" key={index}>
              <div className="festival-image-container">
                <img
                  src={stateData.image}
                  alt={stateData.state}
                  className="festival-image"
                />
              </div>
              <div className="festival-content">
                <h2>{stateData.state}</h2>
                <p className="festival-intro">{stateData.intro}</p>
                <ul className="festival-list">
                  {stateData.festivals.map((fest, i) => (
                    <li key={i}>
                      <strong>{fest.name}</strong>
                      <em>({fest.time}) — {fest.desc}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalsPage;
