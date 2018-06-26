const prev = document.querySelector('#previous');
const next = document.querySelector('#next');
const aboutTextArray = document.querySelectorAll('.about-text');

let current = 0;

// carousel previous button
prev.addEventListener('click', () => {
  if (current > 0) {
    current--;
  } else {
    current = aboutTextArray.length - 1;
  }
  showCorrectElement();
});

// carousel next button
next.addEventListener('click', () => {
  if (current === aboutTextArray.length - 1) {
    current = 0;
  } else {
    current++;
  }
  showCorrectElement();
});

// shows correct content in about Kenya section
function showCorrectElement() {
  aboutTextArray.forEach((e) => {
    if (e === aboutTextArray[current]) {
      e.classList.add('shown');
    } else {
      e.classList.remove('shown');
    }
  });
}

// places information
var places = [
  {
    name: 'Aberdare National Park',
    lat: -0.414328,
    lng: 36.666355,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Aberdare_Park_entrance.jpg/284px-Aberdare_Park_entrance.jpg',
    text: `The Aberdares are part of Kenya's central highlands, running roughly north south between Nairobi and Thomsons Falls with a range of almost 13,000 ft. The topography is diverse with deep ravines that give way to gentler valleys separated by steep hills and rocky outcrops. The park is an important water catchment area providing water to the Tana and Athi rivers and part of Central Rift and Northern drainage basins. The climate is wet and moist. The park is surrounded by a predominantly indigenous forest, whose management is under an MoU between KWS and the Forest Department.
    Animal life is most abundant in the forest zone. Large mammals are represented by elephants, buffalo, bongo and black rhino among others. Carnivores include lion and leopard, whereas primates are represented by baboon, black and white colobus and sykes monkeys. The park is rich in bird life with over 250 species recorded. The Jackson's Francolin is endemic.`
  },
  {
    name: 'Amboseli National Park',
    lat: -2.652155,
    lng: 37.260660,
    image: "http://www.amboselinationalpark.co.ke/images/slideshow/amboseli-national-park-banner3.jpg",
    text: `Amboseli National Park is located on the border with Tanzania, Kajiado District, South Kenya; Covers 392km2
    Amboseli lies immediately North West of Mt. Kilimanjaro, on the border with Tanzania. The Park covers 392 km2, and forms part of the much larger 3,000 Km2 Amboseli ecosystem. Large concentrations of wildlife occur here in the dry season, making Amboseli a popular tourist destination. It is surrounded by 6 communally owned group ranches.`
  },
  {
    name: 'Buffalo Springs National Reserve',
    lat: 0.525537,
    lng: 37.591440,
    image: "https://en.wikipedia.org/wiki/Buffalo_Springs_National_Reserve#/media/File:Grevy%27s_Zebra_Stallion.jpg",
    text: `Buffalo Springs Reserve covers 194 km2 on the southern bank of the Uaso Nyiro river. The reserve has unique landscapes of rounded and rugged hills and undulating plains. 

    Hot and Dry, the vegetation is mainly wooded and bushy grassland, riverine forest and swamps. With over 50 species of large mammals, the parks’ bird life is diverse with Buffalo Springs having a record of 365 species.`
  },
  {
    name: 'Central Island',
    lat: 3.496887,
    lng: 36.040435,
    image: "https://en.wikipedia.org/wiki/Lake_Turkana#/media/File:Lake_turkana.jpg",
    text: `The park is within Lake Turkana. Central Island is only 5 km2 Central Island has three scenic crater lakes i.e. Crocodile, Flamingo and Tilapia. The climate is hot and dry. Turtles are found in the lake waters. The island is an important breeding ground for crocodiles and water birds.`
  },
  {
    name: 'Chale Island',
    lat: -4.444773,
    lng: 39.534935,
    image: "https://r.dcs.redcdn.pl/scale/o2/TUI/hotels/MBA25010/S18/8125279.jpg?dstw=1157&dsth=621&srcw=1157&srch=621&srcx=1/2&srcy=1/2&srcmode=3&type=1&quality=80",
    text: `This small island, south of Galu Beach, is beautiful with a lovely natural sandy bay, dramatic rock formations and a great variety of indigenous trees.` 
  },
  {
    name: 'Chyulu Hills',
    lat: -2.427681,
    lng: 37.731299,
    image: "http://africageographic.com/wp-content/uploads/2016/06/Chyulu-hills-National-Park.jpg",
    text: `The Chyulu Hills are a beautiful rolling ridge of volcanic hills in the south of Kenya. On the eastern side of the range is the black Shaitani Lava flow, a ridge of lava rock formed whenthe Chyulus were formed. This lava flow is near the Chyulu gate of Tsavo West National Park. The hills consist of beautiful valleys and peaks with views in all directions, Mount Kilimanjaro can be visible. Rain on the hills gives rise to underground rivers. Wildlife encompasses giraffe, elephant, loin, monkeys, buffalo and crocodile in the springs at the bottom of the hills. 
    Climate is hot and dry.`
  },
  {
    name: 'Hell\'s Gate National Park',
    lat: -0.886621,
    lng: 36.306450,
    image: "https://en.wikipedia.org/wiki/Hell%27s_Gate_National_Park#/media/File:Hell%27s_Gate,_Kenya.jpg",
    text: `Hell's Gate National Park is particularly impressive with soaring red cliffs, isolated volcanic plugs, spreading grasslands dotted with game and a deep gorge where visitors can walk. Fischer's Tower is a challenging rock climb. This park is excellent for succulents, birds of prey and other bird species.There is a geothermal project at the far end of the parkHell's Gate National Park covers an area of 68.25 km2 is situated in the environs of Lake Naivasha about 90 km from Nairobi. The park is situated 14 km after the turnoff from the old Nairobi-Naivasha highway. The park is characterised by diverse topography and geological scenery. It is an important home of the lammergeyer The climate is warm and dry and the vegetation is Mainly grasslands and shrublands with the latter being dominated by Leleshwa and several species of acacia. The gorge and cliffs and breeding sites for several species of raptors and swifts. 103 species of birds have been recorded in the park.`
  },
  {
    name: 'Lake Bogoria',
    lat: 0.213154,
    lng: 36.132727,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flickr_-_Rainbirder_-_Born_of_Fire.jpg",
    text: `Lake Bogoria lies just south of Lake Baringo but contrasts sharply with Baringo's green and lush surroundings. This soda lake, with its shores of hot springs, boiling geysers and steam jets, stark evidence of the volcanic origins of the Rift Valley, lies hidden behind ridge after ridge of barren stony scrubland. Although primarily scenic, Bogoria is by no means devoid of wildlife. Birds are plentiful and, at times, when the waters of Lake Nakuru are low, thousands of flamingo make this their home. On the north-eastern shore the elusive Greater Kudu can be found. Lake Bogoria National Reserve is owned and managed by Baringo County Council with assistance from KWS. The reserve covers 114 km2 and is famous for spectacular hotsprings and geysers. To the east of the reserve is the scenic Siracho escarpment that descends steeply to the lake shore.`
  },
  {
    name: 'Lake Naivasha',
    lat: -0.768544,
    lng: 36.371657,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Quiet_dusk_over_Lake_Naivasha_%285232083375%29.jpg/220px-Quiet_dusk_over_Lake_Naivasha_%285232083375%29.jpg",
    text: `The highest and purest of the Great Rift Valley lakes, Lake Naivasha lies approximately 80 kms west of Nairobi on the floor of the Rift. The Lake shores are lined with fertile and flourishing horticultural farms and thousands of yellow barked acacias. Naivasha is home to more than 340 species of birds, has a resident population of hippo and small herds of plains game are found all around the shores. Bird and game viewing is by boat or on foot. The lakeshore was, for many years, the home of the late authoress Joy Adamson and it was here that she first raised Elsa, the lioness. Mount Longonot, an extinct volcano, lies just east of the Lake and Hell's Gate National Park south east, with its challenging rock climbs, where game abounds and birdlife includes the rarest of Kenya's vulture population, the Lammergeyer, which nests on the cliffs.`
  },
  {
    name: 'Lake Nakuru',
    lat: -0.366602,
    lng: 36.083387,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lake-Nakuru-Baboon-Hill-View.JPG/1200px-Lake-Nakuru-Baboon-Hill-View.JPG",
    text: `The park is located in Central Kenya, 140km north-west of Nairobi, in Nakuru District of the Rift Valley Province. It covers an area of 188 km2. Lake Nakuru is a very shallow strongly alkaline lake 62 km2 in extent. It is set in a picturesque landscape of surrounding woodland and grassland next to Nakuru town. The landscape includes areas of marsh and grasslands alternating with rocky cliffs and outcrops, stretches of acacia woodland and rocky hillsides covered with a Euphorbia forest on the eastern perimeter. Lake Nakuru was first gazetted as a bird sanctuary in 1960 and upgraded to National Park status in 1968. A northern extension was added to the park in 1974 and the lake was designated as a Ramsar site in 1990. The foundation of the parks food chains is the cyanophyte spirulina platensis which can support huge numbers of lesser flamingo.`
  }
];

const locationName = document.querySelector('#loc-name');
const locationImage = document.querySelector('#loc-image');
const locationText = document.querySelector('#loc-text');

function updateLocation(place) {
  locationName.innerHTML = place.name;
  locationImage.src = place.image;
  locationText.innerHTML = place.text;
}

// when document is ready
document.addEventListener("DOMContentLoaded", () => {
  const mapOptions = {
    center: new google.maps.LatLng(0.439725, 37.872409),
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  class Place {
    constructor(location) {
      this.name = location.name;
      this.lat = location.lat;
      this.lng = location.lng;
      this.image = location.image;
      this.text = location.text;
      this.marker = new google.maps.Marker({
        position: {
          lat: this.lat,
          lng: this.lng
        },
        map: map,
        title: this.name,
        animation: google.maps.Animation.DROP
      });
      // make the marker active if user clicks on it
      this.marker.addListener('click', () => {
        this.active();
      });
    }

    // When marker is active
    active() {
      // set the animation for active marker
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
      // set it back to normal after 4 seconds
      setTimeout(() => {
        this.marker.setAnimation(null);
      }, 800);
      // update location info section
      updateLocation(this);
    };
  }

  // create Place object for every place in array
  places.forEach((location) => {
    new Place(location);
  });
});

// corporate section slider
$(document).ready(function(){
  $('.corporate-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});
