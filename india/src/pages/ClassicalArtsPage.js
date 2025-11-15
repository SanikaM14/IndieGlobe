import React from "react";
import "../css/ClassicalArtsPage.css";
import GlassmorphicCard from "../components/GlassmorphicCard";
import ScrollingEffect from "../components/ScrollingEffect";

const ClassicalArtsPage = () => {
  const classicalArtsByState = [
    {
      state: "Andhra Pradesh",
      dance: "Kuchipudi",
      music: "Carnatic Music",
      art: "Kalamkari Painting",
      description:
        "Known for the graceful Kuchipudi dance and strong Carnatic musical tradition. Kalamkari hand-painting uses natural dyes to narrate mythological stories and temple themes.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Kuchipudi",
        music: "https://en.wikipedia.org/wiki/Carnatic_music",
        art: "https://en.wikipedia.org/wiki/Kalamkari",
      },
    },
    {
      state: "Arunachal Pradesh",
      dance: "Tribal Dances (e.g., Ponung, Wancho dances)",
      music: "Folk Tribal Songs",
      art: "Traditional Weaving and Woodcarving",
      description:
        "A mosaic of tribal traditions — dances like Ponung express life-cycle stories while local music uses bamboo and string instruments. Rich textile weaving and carved wooden artifacts reflect clan identities.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Tribes_of_Arunachal_Pradesh",
        music: "https://en.wikipedia.org/wiki/Music_of_Arunachal_Pradesh",
        art: "https://en.wikipedia.org/wiki/Handloom_textiles_of_India",
      },
    },
    {
      state: "Assam",
      dance: "Sattriya",
      music: "Borgeet & Folk Songs",
      art: "Mask-making of Majuli",
      description:
        "Sattriya, introduced by Sankardeva, is a classical dance with devotional roots. Borgeet are lyrical devotional songs; Majuli’s mask-making and boat-building reflect Assam’s riverine culture.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Sattriya",
        music: "https://en.wikipedia.org/wiki/Borgeet",
        art: "https://en.wikipedia.org/wiki/Majuli",
      },
    },
    {
      state: "Bihar",
      dance: "Jat-Jatin, Bidesia (folk theatre dances)",
      music: "Maithili & Bhojpuri Folk Music",
      art: "Madhubani Painting",
      description:
        "Bihar blends folk theatre and devotional performance — Jat-Jatin and Bidesia are narrative forms. Madhubani (Mithila) painting is a centuries-old tradition with intricate geometric and natural motifs.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Bidesia",
        music: "https://en.wikipedia.org/wiki/Maithili_music",
        art: "https://en.wikipedia.org/wiki/Madhubani_painting",
      },
     
    },
    {
      state: "Chhattisgarh",
      dance: "Panthi, Raut Nacha",
      music: "Tribal Folk Music (Pakhawaj, Mandar)",
      art: "Dhokra Metalcraft & Tribal Paintings",
      description:
        "Chhattisgarh is rich in tribal performance: Panthi and Raut Nacha combine rhythm and ritual. Dhokra metalwork and vibrant tribal paintings are central to its craft identity.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Chhattisgarh#Culture",
        music: "https://en.wikipedia.org/wiki/Music_of_Chhattisgarh",
        art: "https://en.wikipedia.org/wiki/Dhokra",
      },
      
    },
    {
      state: "Goa",
      dance: "Folk Dances (Konkani: Fugdi, Dhalo)",
      music: "Konkani Folk, Goan Catholic Liturgical Music",
      art: "Azulejo Tiles & Colonial-era Crafts",
      description:
        "Goa’s cultural fusion of Konkani, Hindu and Portuguese influences appears in lively folk dances like Fugdi and Dhalo. Goan music ranges from Konkani folk to rich church liturgical traditions; decorative tiles and crafts show a colonial aesthetic.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Goa#Culture",
        music: "https://en.wikipedia.org/wiki/Konkani_music",
        art: "https://en.wikipedia.org/wiki/Goa#Architecture",
      },
     
    },
    {
      state: "Gujarat",
      dance: "Garba & Dandiya Raas",
      music: "Folk Music (Sugam Sangeet, Bhajans)",
      art: "Bandhani Textiles & Patola Weaving",
      description:
        "Gujarat’s energetic Garba and Dandiya are tied to Navratri festivities; folk and devotional music remain central. Bandhani tie-dye and Patola silk weaving are highly prized textile arts.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Garba",
        music: "https://en.wikipedia.org/wiki/Gujarati_music",
        art: "https://en.wikipedia.org/wiki/Bandhani",
      },
      
    },
    {
      state: "Haryana",
      dance: "Phag, Ghoomar (regional forms)",
      music: "Dayro and Haryanvi Folk Songs",
      art: "Phulkari-like Embroideries and Pottery",
      description:
        "Haryana’s rustic dances and songs celebrate agricultural cycles and festivals; strong local storytelling traditions persist in Dayro performances. Crafts include embroidered textiles and functional pottery.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Folk_dances_of_Haryana",
        music: "https://en.wikipedia.org/wiki/Haryanvi_music",
        art: "https://en.wikipedia.org/wiki/Embroidery_in_India",
      },
      
    },
    {
      state: "Himachal Pradesh",
      dance: "Nati (Kullu Nati)",
      music: "Folk Mountain Songs",
      art: "Woodcarving and Thangka-style Paintings",
      description:
        "Himachal’s Nati dance is a high-energy, community-driven form tied to seasonal fairs. Mountain folk songs accompany shepherding life; intricate woodcarving and monastery paintings are notable crafts.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Nati_(dance)",
        music: "https://en.wikipedia.org/wiki/Music_of_Himachal_Pradesh",
        art: "https://en.wikipedia.org/wiki/Art_of_Himachal_Pradesh",
      },
      
    },
    {
      state: "Jharkhand",
      dance: "Chhau (border regions), Jhumar",
      music: "Tribal Folk Music (Mandar, Nagara)",
      art: "Terracotta & Tribal Paintings",
      description:
        "Jharkhand’s tribal dances like Chhau (in bordering areas) and Jhumar are steeped in martial and ritual themes. Rich terracotta tradition and tribal painting reflect everyday life and myths.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Chhau",
        music: "https://en.wikipedia.org/wiki/Music_of_Jharkhand",
        art: "https://en.wikipedia.org/wiki/Terracotta_art",
      },
      
    },
    {
      state: "Karnataka",
      dance: "Bharatanatyam (South Karnataka), Yakshagana (dance-drama)",
      music: "Carnatic Music",
      art: "Mysore Painting & Ganjifa Cards",
      description:
        "Karnataka hosts both classical (Carnatic music, Bharatanatyam) and vibrant regional theatre like Yakshagana — a colourful dance-drama. Mysore painting and traditional crafts are celebrated for their refinement.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Yakshagana",
        music: "https://en.wikipedia.org/wiki/Carnatic_music",
        art: "https://en.wikipedia.org/wiki/Mysore_painting",
      },
      
    },
    {
      state: "Kerala",
      dance: "Kathakali, Mohiniyattam",
      music: "Sopana Sangeetham & Carnatic influences",
      art: "Temple Mural Painting and Crafts",
      description:
        "Kerala’s Kathakali is a dramatic dance-drama known for expressive makeup and storytelling; Mohiniyattam is a softer, lyrical dance. Temple murals and classical sopana music preserve devotional aesthetics.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Kathakali",
        music: "https://en.wikipedia.org/wiki/Sopana_Sangeetham",
        art: "https://en.wikipedia.org/wiki/Kerala_mural_painting",
      },
      
    },
    {
      state: "Madhya Pradesh",
      dance: "Gaur Dance, Matki Dance (tribal and regional forms)",
      music: "Folk and Classical (Gwalior Gharana heritage)",
      art: "Miniature Painting, Gond & Bagh Paintings",
      description:
        "Madhya Pradesh sits at the crossroads of classical and tribal traditions — Gwalior’s musical legacy is significant while Gond and Bagh paintings showcase powerful folk imagery and storytelling.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Folk_dances_of_Madhya_Pradesh",
        music: "https://en.wikipedia.org/wiki/Gwalior_Gharana",
        art: "https://en.wikipedia.org/wiki/Gond_painting",
      },
     
    },
    {
      state: "Maharashtra",
      dance: "Lavani, Tamasha (folk-theatre dances)",
      music: "Natya Sangeet & Bhavgeet",
      art: "Warli Painting & Paithani Weaving",
      description:
        "Maharashtra’s Lavani is a powerful expressive dance tied to folk theatre; Marathi Natya Sangeet has shaped stage music. Warli tribal painting and Paithani silk weaving are hallmark arts.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Lavani",
        music: "https://en.wikipedia.org/wiki/Natya_Sangeet",
        art: "https://en.wikipedia.org/wiki/Warli_painting",
      },
     
    },
    {
      state: "Manipur",
      dance: "Manipuri (Raas Leela)",
      music: "Manipuri Classical Music & Lai Haraoba Songs",
      art: "Textiles (Phanek) & Handloom Weaves",
      description:
        "Manipuri dance is known for lyrical movement and devotional Raas performances. Music and ritual songs underpin community festivals; handloom textiles reflect refined local aesthetics.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Manipuri_dance",
        music: "https://en.wikipedia.org/wiki/Music_of_Manipur",
        art: "https://en.wikipedia.org/wiki/Handloom_industry_in_Manipur",
      },
     
    },
    {
      state: "Meghalaya",
      dance: "Wangala and Khasi & Jaintia Folk Dances",
      music: "Tribal Folk Songs & Hornpipe Traditions",
      art: "Bamboo & Cane Crafts, Weaving",
      description:
        "Meghalaya’s dances mark harvest and community rites, often accompanied by percussive folk music. Distinctive bamboo, cane work and woven textiles are central to daily and ritual life.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Meghalaya#Culture",
        music: "https://en.wikipedia.org/wiki/Music_of_Meghalaya",
        art: "https://en.wikipedia.org/wiki/Cane_and_bamboo_craft",
      },
      
    },
    {
      state: "Mizoram",
      dance: "Cheraw (bamboo dance), Khuallam",
      music: "Mizo Folk Songs and Hymns",
      art: "Textile Weaving & Handicrafts",
      description:
        "Mizoram’s Cheraw (bamboo dance) is visually striking and community-centered. Folk songs and hymns permeate social life; finely woven textiles and bamboo crafts are widely practiced.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Cheraw",
        music: "https://en.wikipedia.org/wiki/Music_of_Mizoram",
        art: "https://en.wikipedia.org/wiki/Handloom_and_textile_industry",
      },
      
    },
    {
      state: "Nagaland",
      dance: "War Dances (Konyak, Ao, etc.) and Folk Performances",
      music: "Folk Songs, Horn and Percussion Traditions",
      art: "Naga Weaving, Woodcarving and Jewelry",
      description:
        "Nagaland’s diverse tribes preserve warrior dances, communal songs and festival performances. Intricate weaving, beadwork and carved wood are visible in traditional regalia.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Nagaland#Culture",
        music: "https://en.wikipedia.org/wiki/Music_of_Nagaland",
        art: "https://en.wikipedia.org/wiki/Naga_people#Culture",
      },
     
    },
    {
      state: "Odisha",
      dance: "Odissi",
      music: "Odissi Classical Music",
      art: "Pattachitra Painting & Silver Filigree",
      description:
        "Odissi is one of India’s oldest classical dances with flowing torso movements and sculpture-like poses. Pattachitra scrolls and intricate silver filigree from Cuttack convey devotional narratives.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Odissi",
        music: "https://en.wikipedia.org/wiki/Odissi_music",
        art: "https://en.wikipedia.org/wiki/Pattachitra",
      },
      
    },
    {
      state: "Punjab",
      dance: "Bhangra & Giddha",
      music: "Punjabi Folk & Sufi Music",
      art: "Phulkari Embroidery",
      description:
        "Bhangra celebrates harvest and life with explosive energy; Giddha showcases female folk expression. Punjab’s rich Sufi and folk music traditions coexist with vibrant Phulkari embroidery.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Bhangra_(dance)",
        music: "https://en.wikipedia.org/wiki/Punjabi_music",
        art: "https://en.wikipedia.org/wiki/Phulkari",
      },
     
    },
    {
      state: "Rajasthan",
      dance: "Ghoomar, Kalbeliya",
      music: "Manganiyar & Langas Folk Music",
      art: "Miniature, Phad Painting & Blue Pottery",
      description:
        "Rajasthan’s courtly and nomadic traditions produce dances like Ghoomar and Kalbeliya. Manganiyar ballads and Phad narrative paintings capture heroic and devotional themes; blue pottery is regionally iconic.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Ghoomar",
        music: "https://en.wikipedia.org/wiki/Manganiyar",
        art: "https://en.wikipedia.org/wiki/Phad_painting",
      },
     
    },
    {
      state: "Sikkim",
      dance: "Traditional Bhutia & Lepcha Dances (e.g., Cham)",
      music: "Monastic Chants & Folk Songs",
      art: "Thangka Paintings & Buddhist Craft",
      description:
        "Sikkim’s artistic life is shaped by Buddhist monastery culture — Cham dance and ritual performances are central. Thangka painting, prayer flags and woodcrafts reflect Himalayan spirituality.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Sikkim#Culture",
        music: "https://en.wikipedia.org/wiki/Music_of_Sikkim",
        art: "https://en.wikipedia.org/wiki/Thangka",
      },
      
    },
    {
      state: "Tamil Nadu",
      dance: "Bharatanatyam",
      music: "Carnatic Music",
      art: "Tanjore (Thanjavur) Painting",
      description:
        "Tamil Nadu is the historic cradle of Bharatanatyam and Carnatic music. Tanjore paintings use gold leaf and rich pigments to depict deities and temple iconography with a regal style.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Bharatanatyam",
        music: "https://en.wikipedia.org/wiki/Carnatic_music",
        art: "https://en.wikipedia.org/wiki/Thanjavur_painting",
      },
     
    },
    {
      state: "Telangana",
      dance: "Perini Sivatandavam (revived), Folk Dances",
      music: "Carnatic & Telangana Folk Music",
      art: "Kalamkari (Warangal style) & Cheriyal Scroll Painting",
      description:
        "Telangana combines classical forms and distinctive folk. Perini — an ancient warrior dance — has been revived; Cheriyal scrolls and regional Kalamkari narrate local myths with bold color.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Perini",
        music: "https://en.wikipedia.org/wiki/Music_of_Telangana",
        art: "https://en.wikipedia.org/wiki/Cheriyal_painting",
      },
     
    },
    {
      state: "Tripura",
      dance: "Hojagiri, Bamboo Dance (traditional forms)",
      music: "Tripuri Folk Songs",
      art: "Handloom Textiles and Bamboo Crafts",
      description:
        "Tripura exhibits rich tribal performing arts such as Hojagiri — often performed by young women — with rhythmic acrobatics. Handloom weaving and bamboo crafts form a strong local craft tradition.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Hojagiri",
        music: "https://en.wikipedia.org/wiki/Music_of_Tripura",
        art: "https://en.wikipedia.org/wiki/Handloom_industry_in_Tripura",
      },
    
    },
    {
      state: "Uttar Pradesh",
      dance: "Kathak",
      music: "Hindustani Classical (Gharanas like Lucknow)",
      art: "Chikankari Embroidery, Miniature Painting",
      description:
        "Uttar Pradesh is famed for Kathak’s expressive storytelling and for historic Hindustani musical gharanas like Lucknow and Varanasi. Lucknow’s Chikankari embroidery and regional miniature schools remain influential.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Kathak",
        music: "https://en.wikipedia.org/wiki/Hindustani_classical_music",
        art: "https://en.wikipedia.org/wiki/Chikan_(embroidery)",
      },
      
    },
    {
      state: "Uttarakhand",
      dance: "Hudki, Jhora & Langvir Nritya (folk forms)",
      music: "Gurjar & Kumaoni Folk Songs",
      art: "Wood Carving, Folk Painting & Handloom",
      description:
        "Uttarakhand’s mountain culture produces ritual and dance forms tied to pastoral life. Folk songs and devotional music accompany seasonal fairs; wood carving and handloom crafts are locally prominent.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Folk_dances_of_Uttarakhand",
        music: "https://en.wikipedia.org/wiki/Music_of_Uttarakhand",
        art: "https://en.wikipedia.org/wiki/Craft_of_Uttarakhand",
      },
     
    },
    {
      state: "West Bengal",
      dance: "Gaudiya Nritya (revival), Folk Dances (Chhau in border areas)",
      music: "Rabindra Sangeet, Baul, Classical & Folk",
      art: "Kalighat Paintings, Terracotta (Bishnupur)",
      description:
        "West Bengal’s artistic life spans Rabindra Sangeet and Baul spiritual songs to Chhau and folk dances near the borders. Kalighat scrolls and terracotta temple arts from Bishnupur are important visual traditions.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Gaudiya_nritya",
        music: "https://en.wikipedia.org/wiki/Rabindra_Sangeet",
        art: "https://en.wikipedia.org/wiki/Kalighat_paintings",
      },
      
    },

    // UNION TERRITORIES (8)
    {
      state: "Andaman & Nicobar Islands (UT)",
      dance: "Tribal & Island Folk Dances",
      music: "Island Folk Music and Sea Shanties",
      art: "Shell Crafts & Tribal Carving",
      description:
        "Islands blend indigenous Nicobarese and Andamanese traditions with maritime culture — dances and songs often celebrate the sea. Shell-work, cane and tribal carvings form local handicrafts.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands#Culture",
        music: "https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands#Culture",
        art: "https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands#Culture",
      },
     
    },
    {
      state: "Chandigarh (UT)",
      dance: "Punjabi Folk Dances (Bhangra/Giddha prevalent)",
      music: "Punjabi Folk & Contemporary Music Scenes",
      art: "Rock Garden Sculpture, Modern Public Art",
      description:
        "Chandigarh’s cultural life mirrors Punjab and Haryana — energetic folk dance and music thrive. The city is also famous for Nek Chand’s Rock Garden and modern public sculptures and crafts.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Chandigarh#Culture",
        music: "https://en.wikipedia.org/wiki/Chandigarh#Culture",
        art: "https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh",
      },
     
    },
    {
      state: "Dadra & Nagar Haveli and Daman & Diu (UT)",
      dance: "Tribal Dances & Garba-influenced Forms",
      music: "Konkani & Tribal Folk Music",
      art: "Tribal Crafts, Silverwork, Folk Paintings",
      description:
        "This western UT blends Gujarati, Konkani and tribal traditions — folk dances and tribal music are common at festivals. Local crafts include silverwork, small-scale weaving and distinctive folk art.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli_and_Daman_and_Diu#Culture",
        music: "https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli_and_Daman_and_Diu#Culture",
        art: "https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli_and_Daman_and_Diu#Culture",
      },
     
    },
    {
      state: "Delhi (NCT)",
      dance: "Classical & Folk Dance Performances (Kathak prominent)",
      music: "Hindustani Classical & Qawwali Scenes",
      art: "Miniature Revival, Street Art, Crafts",
      description:
        "As the national capital, Delhi hosts classical traditions like Kathak and Hindustani music alongside vibrant contemporary arts. Mughal miniatures, crafts and an active theatre scene shape its cultural map.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Delhi#Culture",
        music: "https://en.wikipedia.org/wiki/Delhi#Culture",
        art: "https://en.wikipedia.org/wiki/Delhi#Culture",
      },
     
    },
    {
      state: "Jammu & Kashmir (UT)",
      dance: "Rouf (Kashmiri dance), Folk Dances of Dogra Region",
      music: "Sufiana Kalam (Kashmir), Dogri Folk",
      art: "Kashmiri Papier-mâché, Pashmina Shawls, Woodcarving",
      description:
        "Jammu & Kashmir’s culture blends Kashmiri Sufi and Dogra traditions — Rouf is a graceful group dance while Sufiana Kalam is an intricate classical-style music. Fine Pashmina weaving and papier-mâché are renowned crafts.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Culture_of_Jammu_and_Kashmir",
        music: "https://en.wikipedia.org/wiki/Sufiana_Kalam",
        art: "https://en.wikipedia.org/wiki/Kashmir_traditional_crafts",
      },
      
    },
    {
      state: "Ladakh (UT)",
      dance: "Chham & Monastic Dances (Cham)",
      music: "Monastic Chants & Ladakhi Folk Songs",
      art: "Thangka Painting, Pashmina Weaving & Woodcraft",
      description:
        "Ladakh’s high-altitude culture centers on Tibetan Buddhist ritual dance (Cham) and monastic chants. Thangka painting and fine pashmina weaving are integral crafts reflecting Himalayan spirituality.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Ladakh#Culture",
        music: "https://en.wikipedia.org/wiki/Culture_of_Ladakh",
        art: "https://en.wikipedia.org/wiki/Thangka",
      },
     
    },
    {
      state: "Lakshadweep (UT)",
      dance: "Laccadive Folk Dances (e.g., Lava Dance)",
      music: "Sea-based Folk Music & Percussion",
      art: "Coconut Craft, Boat-building & Netting",
      description:
        "Lakshadweep’s maritime life shapes its dances and music, with percussive boat songs and community dances tied to lagoon life. Coconut crafts and traditional boat-building are vital local arts.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Lakshadweep#Culture",
        music: "https://en.wikipedia.org/wiki/Lakshadweep#Culture",
        art: "https://en.wikipedia.org/wiki/Lakshadweep#Culture",
      },
     
    },
    {
      state: "Puducherry (UT)",
      dance: "Bharatanatyam & Local Tamil Folk Forms",
      music: "Carnatic & French-influenced Local Music",
      art: "Colonial-Era Crafts, Terracotta & Folk Painting",
      description:
        "Puducherry blends Tamil classical heritage with French colonial influences — Bharatanatyam and Carnatic music thrive alongside eclectic local crafts and colonial-era visual culture.",
      wiki: {
        dance: "https://en.wikipedia.org/wiki/Puducherry#Culture",
        music: "https://en.wikipedia.org/wiki/Puducherry#Culture",
        art: "https://en.wikipedia.org/wiki/Puducherry#Culture",
      },
      
    },
  ];

  return (
    <div className="classical-arts-page">
      <ScrollingEffect />
      <header className="text-center mb-5">
        <h1 className="page-title">Classical Arts of India</h1>
        <p className="page-subtitle">
          Immerse yourself in India's timeless artistic heritage, where classical dance, soulful music, and exquisite visual arts 
          weave together the vibrant tapestry of our nation's cultural legacy.
        </p>
      </header>

      <section className="classical-section">
        <h2>Artistic Traditions Across India</h2>
        <div className="arts-grid">
          {classicalArtsByState.map((item, index) => (
            <GlassmorphicCard
              key={index}
              title={item.state}
              description={
                <>
                  <strong>Dance:</strong> {item.dance}{" "}
                  {item.wiki?.dance && (
                    <a href={item.wiki.dance} target="_blank" rel="noreferrer">
                      [Wiki]
                    </a>
                  )}{" "}
                  {item.youtube?.dance && (
                    <a href={item.youtube.dance} target="_blank" rel="noreferrer">
                      [YouTube]
                    </a>
                  )}
                  <br />
                  <strong>Music:</strong> {item.music}{" "}
                  {item.wiki?.music && (
                    <a href={item.wiki.music} target="_blank" rel="noreferrer">
                      [Wiki]
                    </a>
                  )}{" "}
                  {item.youtube?.music && (
                    <a href={item.youtube.music} target="_blank" rel="noreferrer">
                      [YouTube]
                    </a>
                  )}
                  <br />
                  <strong>Art:</strong> {item.art}{" "}
                  {item.wiki?.art && (
                    <a href={item.wiki.art} target="_blank" rel="noreferrer">
                      [Wiki]
                    </a>
                  )}{" "}
                  {item.youtube?.art && (
                    <a href={item.youtube.art} target="_blank" rel="noreferrer">
                      [YouTube]
                    </a>
                  )}
                  <br />
                  <em>{item.description}</em>
                </>
              }
            />
          ))}
        </div>
      </section>

      <section className="summary-section">
        <h3>India’s Artistic Legacy</h3>
        <p>
          From the rhythmic dances of Tamil Nadu to the tribal rhythms of the Northeast, India’s classical and folk arts form a living, evolving cultural landscape.
        </p>
      </section>
    </div>
  );
};

export default ClassicalArtsPage;
