var Gallery = function (id, name, desc, url, lat, lng) {
  this.id = id,
  this.name = name,
  this.desc = desc,
  this.url = url,
  this.lat = lat,
  this.lng = lng
}

var galleries = [
  {id: 1, name:	"'57 Biscayne / 110 Cherry St #200", desc: "57 Biscayne is a collection of thirteen independent artist/businesses working on the second floor of the Scheuerman Building at First and Cherry. They comprise painters, tintype photographers, an illustrator specializing in maps and art books, a clothing designer, a videographer, a jeweler, and a boutique video game console manufacturer. Throwing together diverse disciplines in an interconnected space sometimes results in interesting collaborations. The artists open their work spaces to the public for events approximately twice a year, featuring curated gallery shows, guest artists, and entertainment. Some gallery shows remain up for general viewing for a month or two after the opening; check the website or join the mailing list for up-to-date information.", url:	"<a href='http://www.57biscayne.com/'>Website</a>",	lat: 47.602852, lng:	-122.334025},

  {id: 2, name:	"4Culture / 101 Prefontaine Pl S", desc: "As the cultural funding agency for King County, 4Culture works to make our region vibrant by supporting a diverse array of cultural endeavors in four main program areas: arts, heritage, historic preservation, and public art.", url:	"<a href='http://www.4culture.org/'>Website</a>", lat: 47.601377, lng:	-122.330004},

  {id: 3, name: "Artforte Gallery / 320 1st Ave S", desc:	"Specializing in residential and corporate placement, this must-see gallery features contemporary fine art, including paintings, sculpture and glass by artists from the Pacific Northwest and abroad. Monthly exhibits include: Teruko Wilde, Candice Eisenfeld, Robert Cook, Jian Zhao and more!",	url: "<a href='http://www.artforte.com/'>Website</a>", lat:	47.601377, lng:	-122.330004},

  {id: 4, name: "ArtXchange Gallery / 512 1st Ave S",	desc: "ArtXchange Gallery is a contemporary intercultural art gallery that inspires cultural exploration, the expansion of global community and the exchange of ideas through art. We exhibit art from around the world that reflects the diversity of influences shaping the Seattle community and contemporary global culture.", url: "<a href='http://artxchange.org/'>Website</a>", lat: 47.599686, lng:	-122.333218},

  {id: 5, name: "Arundel Books / 209 Occidental Ave S", desc: "", url: "<a href='http://www.arundelbookstores.com/'>Website</a>", lat: 47.600600, lng:	-122.333777},

  {id: 6, name: "AXIS Gallery / 308 1st Ave S",	desc: "Venue, gallery & photo studio. 6000 sq ft in the heart of Pioneer Square, inhabiting the former home of Elliott Bay Book Co, pre-fire home of Doc Maynard, Seattle’s first hospital & library. The 18-foot brick arches lead from 1st ave to Nord Alley.", url: "<a href='http://axispioneersquare.com/art-gallery/'>Website</a>", lat: 47.599890, lng: -122.334042},

  {id: 7, name: "Azuma Gallery / 530 1st Ave S", desc: "A leading representative of modern Japanese print artists, Azuma Gallery also showcases contemporary Japanese art - screens, paintings, ceramics and baskets. Bringing together Japanese and American artists working in both traditional and contemporary mediums, Azuma offers a unique mix of talents, mediums and styles rarely found in the U.S. For over 34 years, Azuma has been featuring a distinctive collection of Japanese art influenced by folk art, representational landscape/ genre themes, and abstract expressionism for broad and discriminating audiences. Custom framing also available.", url: "<a href='http://www.azumagallery.com/'>Website</a>", lat: 47.597437, lng:	-122.333878},

  {id: 8, name: "CORE Gallery / 117 Prefontaine Pl S", desc: "Non-profit gallery located in the Pioneer Square neighborhood of Seattle.", url: "<a href='http://www.coregallery.org/'>Website</a>", lat: 47.601152, lng: -122.329779},

  {id: 9, name: "Davidson Galleries / 313 Occidental Ave S", desc: "Davidson Galleries, located in Seattle’s historic Pioneer Square, maintains the largest inventory of fine, original prints in the Northwest. In addition to our holding of nearly 20,000 prints and works on paper ranging from the 15th to the 21st century, new exhibitions are mounted every month for the First Thursday Gallery Walk. We are a proud member of the Seattle Art Dealer’s Association (SADA) and a charter member of The International Fine Print Dealers Association, a professional organization dedicated to maintaining high ethical standards for dealing in fine prints.", url: "<a href='https://www.davidsongalleries.com/'>Website</a>", lat: 47.599647, lng: -122.333024},

  {id: 10, name: "Flatcolor Gallery / 77 S Main St", desc: "Flatcolor Gallery features local and national underground contemporary artists. From designers and illustrators, to street artists and tattoo artists, Flatcolor Gallery is dedicated to bringing a fresh perspective on art and creativity. In addition to original artwork, Flatcolor Gallery features a growing line of affordable fine art prints and products.", url: "<a href='http://flatcolor.com/'>Website</a>", lat: 47.599868, lng: -122.335295},

  {id: 11, name: "Flury & Company / 322 1st Ave S", desc: "In business at its present location in Seattle, Washington since 1981, Flury & Company Ltd. has established itself as one of the leading galleries in the world dealing in the purchase and sale of Edward S. Curtis photographic works.", url: "<a href='http://www.fluryco.com/'>Website</a>", lat: 47.599328, lng: -122.333960},

  {id: 12, name: "Foster/White Gallery / 220 3rd Ave S #100", desc: "Founded in 1968, Foster/White Gallery is a premier gallery on the West Coast and a prominent landmark in the Seattle arts center of Pioneer Square. We are pleased to host excellent contemporary painting, sculpture, and glass exhibitions while cultivating a sense of community in the arts for over forty years.", url: "<a href='http://www.fosterwhite.com/'>Website</a>", lat:	47.600329, lng: -122.329952},

  {id: 13, name: "Frederick Holmes & Company / 309 Occidental Ave S", desc: "The gallery represents emerging national and international contemporary artists, working in a variety of genres and materials. We also specialize in Historic Late 19th/20th Century Modern with original etchings and lithographs by iconic figures from Pierre Auguste Renoir to Joan Miro. In addition, the gallery represents the art-historic estates of seminal American Modernist painter, Walter Quirt (1902-1968) and legendary photographer, Sam Haskins (1926-2009).", url: "<a href='http://frederickholmesandcompany.com/'>Website</a>", lat:	47.599629, lng: -122.332887},

  {id: 14, name: "G. Gibson Gallery / 300 S Washington St", desc: "G. Gibson Gallery opened in the Pioneer Square neighborhood of Seattle in 1991. The gallery exhibits contemporary painting, drawing + sculpture, with an emphasis on mid-20th century + contemporary photography.", url: "<a href='http://www.ggibsongallery.com/'>Website</a>", lat: 47.601053, lng:	-122.330018},

  {id: 15, name: "Gallery 110 / 110 3rd Ave S", desc: "As a nonprofit organization, the gallery fosters artistic and professional connections between its associated artists and the arts community at large through creative dialogue, the presentation of challenging and enriching curated exhibitions, public opportunities and collaborative projects.", url: "<a href='http://www.gallery110.com/'>Website</a>", lat:	47.601246, lng: -122.330076},

  {id: 16, name: "Gallery IMA / 123 S Jackson St", desc: "IMA stands for International Modern Art, which is what we do. Come visit us and immerse yourself in contemporary art.", url: "<a href='http://galleryima.com/exhibitions.html'>Website</a>", lat:	47.599101, lng: -122.333175},

  {id: 17, name: "Glasshouse Studio / 311 Occidental Ave S", desc: "Glasshouse-Studio is dedicated to fostering the design, creation, and exploration of hand-blown glass. We are a specialized glassblowing studio located in the glass capital of the world, Seattle, Washington. If you are curious about the ancient art of glassblowing, we encourage you to visit our gallery. There, you’ll discover the works of talented artists, as well as witness live glassblowing demonstrations.", url: "<a href='http://www.glasshouse-studio.com/'>Website</a>", lat: 47.599573, lng: -122.333352},

  {id: 18, name: "Globe Gallery / 105 S Main St #100", desc: "The Globe Gallery was established in Seattle’s historic Pioneer Square in 2002 to exhibit the work of both emerging and established photographers.", url: "<a href='https://www.facebook.com/globegalleryseattle/'>Website</a>", lat:	47.599906, lng: -122.333877},

  {id: 19, name: "goCstudio / 321 3rd Ave S #201", desc: "", url: "<a href='http://www.gocstudio.com/'>Website</a>", lat:	47.599378, lng:	-122.330549},

  {id: 20, name: "Greg Kucera Gallery / 212 3rd Ave S", desc: "Contemporary art gallery in Seattle exhibiting artists for 32 years.", url: "<a href='http://www.gregkucera.com/upcoming.htm'>Website</a>", lat: 47.600425, lng:	-122.330066},

  {id: 21, name: "Gridiron Sales Center / 510 Occidental Ave S", desc: "", url: "<a href='http://gridironcondos.com/'>Website</a>", lat: 47.597885, lng:	-122.333109},

  {id: 22, name: "James Harris Gallery / 604 2nd Ave", desc: "The gallery focuses on contemporary painting, drawing, photography, sculpture, video and installation.", url:	"<a href='http://jamesharrisgallery.com/'>Website</a>", lat:	47.602610, lng: -122.332354},

  {id: 23, name: "Joanna Morgan Designs / 306 S Washington St #105", desc: "Joanna Morgan Designs is about modern, urban, contemporary jewelry for those who like a touch of individuality in their style. Handcrafted and Made in the USA.", url:	"<a href='http://www.joannamorgandesigns.com/'>Website</a>", lat:	47.600962, lng: -122.329812},

  {id: 24, name: "Linda Hodges Gallery / 316 1st Ave S", desc: "Founded in 1983, Linda Hodges Gallery is located in the historic Pioneer Square district of Seattle. The gallery principally represents prominent West Coast and nationally established artists, with an emphasis on painting, sculpture, and photography. Linda Hodges has over 30 years of experience advising corporate and private clients in the acquisition of fine art. Gallery Director Dale Cotton has a background in fine art, photography, and book publishing.", url: "<a href='http://www.lindahodgesgallery.com/'>Website</a>", lat:	47.599504, lng:	-122.333921},

  {id: 25, name: "Marian Ibrahim Gallery / 608 2nd Ave", desc: "", url: "<a href='http://marianeibrahim.com/'>Website</a>", lat: 47.602678, lng:	-122.332601},

  {id: 26, name: "Martyr Sauce / 122 S Washington St", desc: "Martyr Sauce is located in Pioneer Square 1/2 block east of 1st Ave on S. Washington Street, directly across from Occidental Park. Our hole-in-the-wall renegade stairway gallery space offers a uniquely skewed perspective.", url: "<a href='http://martyrsauce.com/Martyr_Sauce/Exhibits.html'>Website</a>", lat: 47.601021, lng:	-122.333310},

  {id: 27, name: "METHOD Gallery / 106 3rd Ave", desc: "", url: "<a href='http://www.methodgallery.com/'>Website</a>", lat:	47.601430, lng: -122.330261},

  {id: 28, name: "OK Gallery / 212 Alaskan Way S", desc: "A non-profit, community gallery, featuring local artists, from all skill levels open monthly for Pioneer Square’s First Thursday Art Walk.", url:	"<a href='https://www.facebook.com/The-Ok-Hotel-Gallery-825065434246137/timeline/?ref=br_tf'>Website</a>", lat: 47.600436, lng: -122.335449},

  {id: 29, name: "Pilchuck / 240 2nd Ave S, Ste 100", desc: "Pilchuck Glass School fosters and educates a worldwide community that explores the creative use of glass in art and design through courses, residencies and exhibitions.", url: "<a href='http://www.pilchuck.com/locations/seattlespace/aboutthespace.aspx'>Website</a>", lat: 47.600212, lng:	-122.331147},

  {id: 30, name: "Platform Gallery / 114 3rd Ave S", desc: "Since 2004, Platform Gallery has exhibited challenging contemporary art including sculpture, painting, works on paper, photography and installations by artists from around the world. The exhibition space in located on the East Edge of historic Pioneer Square in the Tashiro-Kaplan arts complex at 114 Third Avenue South. Platform also exhibits in various art fairs including those in Miami, Portland, London, and Los Angeles.", url: "<a href='http://www.platformgallery.com/'>Website</a>", lat: 47.601150, lng:	-122.330076},

  {id: 31, name: "Project 106 / 106 3rd Ave", desc: "", url: "<a href='https://www.facebook.com/Project-106-Artist-Studios-881655908526330/?fref=ts'>Website</a>", lat: 47.601437, lng: -122.330261},

  {id: 32, name: "Punch Gallery / 119 Prefontaine Pl S", desc: "PUNCH seeks to exhibit work that is honest, thoughtful, vocal, fearless, and fresh. Applauding individual expression, the gallery’s primary mission is to provide support and encouragement for artists to create and exhibit their work in an atmosphere free from the constraints of commercialism. Committed to excellence on every level, PUNCH promotes the visual arts as a necessary, valid, and worthwhile contribution to Seattle’s cultural growth.", url: "<a href='http://punchgallery.org/'>Website</a>", lat: 47.601135, lng: -122.329497},

  {id: 33, name: "Roq La Rue Gallery / 532 1st Ave S", desc: "Roq La Rue is an internationally known contemporary gallery located in Seattle’s historic Pioneer Square neighborhood. We began in 1998 as an integral part of the Pop Surrealism art movement and have over the years expanded our scope to embrace a wider selection of contemporary art. We continue our dedication to exceptionally crafted visual art showcasing fantastical imagery and visually dynamic narratives. The features offer monthly exhibitions of established mid-career artists and foster emerging artists, many of whom go on to great acclaim in the national and international arena. Please let us know if there is something special you are seeking.", url: "<a href='http://www.roqlarue.com/'>Website</a>", lat:	47.597382, lng:	-122.333769},

  {id: 34, name: "Seattle E-Bike / 570 1st Ave S", desc: "", url: "<a href='http://www.electricbikeseattle.com/'>Website</a>", lat:	47.596297, lng:	-122.333718},

  {id: 35, name: "Shift Gallery / 312 S Washington St", desc: "", url: "<a href='http://shiftgallery.org/'>Website</a>", lat: 47.600986, lng: -122.329601},

  {id: 36, name: "SOIL Gallery / 112 3rd Ave S", desc: "SOIL exists as an alternative venue for artists to exhibit, develop, and advance their work, and is committed to exhibiting and celebrating art of diverse media and content. The cooperative has been in existence for twenty years and has been consistent in showing a different exhibition each month that opens on every first Thursday. It has received substantial local as well as national press attention.", url:	"<a href='http://soilart.org/'>Website</a>", lat: 47.601130, lng: -122.330030},

  {id: 37, name: "Stay Happy Central / 207 1st Ave S", desc: "Wanna catch a dope show and meet local artists and homies? Stay Happy Collective meets monthly every First Thursday at the Central Saloon in Pioneer Square in conjunction with Arts Walk. Every month we bring local musicians and artists together to share their recent work.", url:	"<a href='http://www.stayhappycollective.com/'>Website</a>", lat: 47.600587, lng: -122.334575},

  {id: 38, name: "Stonington Gallery / 125 S Jackson St", desc: "Stonington Gallery exhibits unparalleled contemporary masterworks from the Pacific Northwest Coast and Alaska. With a special emphasis on spectacular carved sculpture—including masks, totem poles, and panels—we also highlight fine art glass, prints, jewelry, bronzes and paintings. Full framing services available.", url: "<a href='http://stoningtongallery.com/'>Website</a>", lat: 47.599077, lng:	-122.333103},

  {id: 39, name: "Studio 103 / 306 S Washington St", desc: "Studio 103 out of the Tashiro Kaplan (TK) Building in Seattle’s Pioneer Square area is a working artists’ studio and exhibit space. Artists Zeynep Banu Alev, Lorri Falterman, Joy Hagen, Leslie West, and Claudia Zimmerman share this space with rotating monthly exhibits of their works in encaustic, oil, photography, and printmaking techniques.", url: "<a href='https://www.facebook.com/Studio-103-at-Tashiro-Kaplan-185619328169142/'>Website</a>", lat:	47.600969, lng:	-122.329812},

  {id: 40, name: "Surface Theory / 536 1st Ave S", desc: "Specialized wood for national retail brands, restaurants, bars and design focused individuals. Born in the Great Northwest. We are also a great place to host events in the evenings!", url: "<a href='http://www.surfacetheory.com/home'>Website</a>", lat: 47.597266, lng:	-122.333974},

  {id: 41, name: "The Piranha Shop / 1022 1st Ave S", desc: "", url: "<a href='http://www.thepiranhashop.com/'>Website</a>", lat:	47.593476, lng: -122.333691},

  {id: 42, name: "TK Studios / 306 S Washington St", desc: "", url: "<a href='http://tklofts.com/tk-studios/'>Website</a>", lat: 47.600965, lng:	-122.329828},

  {id: 43, name: "TK2 Studios / 312 S Washington St", desc: "", url: "<a href='http://tklofts.com/tk-studios/'>Website</a>", lat: 47.600966, lng: -122.329627},

  {id: 44, name: "Treason Gallery / 319 3rd Ave S", desc: "", url: "<a href='http://treasongallery.com/'>Website</a>", lat: 47.599563, lng: -122.330453},

  {id: 45, name: "Your Secret Admirer / 112 S Washington St", desc: "", url: "<a href='https://yoursecretadmirerbox.com/'>Website</a>", lat: 47.601054, lng:	-122.333632},

  {id: 46, name: "Zeitgeist Coffee / 171 S Jackson St", desc: "", url: "<a href='http://zeitgeistcoffee.com/'>Website</a>", lat: 47.599091, lng:	-122.331993}

]
