/* =====================================================================
   CONTENT FILE — this is the ONLY file you need to edit.
   ---------------------------------------------------------------------
   Everything you read on the website (text, photos, albums, video)
   comes from this file. The layout and design are handled elsewhere.

   A few simple rules:
   • Text goes between quotes:  "like this"
   • If your text contains a double quote ("), write it as \"
     (apostrophes like we're are fine).
   • Every item in a list ends with a comma.
   • Paragraphs are written as a list:  ["First paragraph.", "Second one."]
   • Photo paths are relative to the main folder, e.g.
       "assets/images/hero/our-photo.jpg"
   • File names are case-sensitive on GitHub Pages:
       "Beach.JPG" is NOT the same as "beach.jpg".

   Everything marked "PLACEHOLDER" is waiting for your own words/photos.
   ===================================================================== */

window.SITE_CONTENT = {

  /* -------------------------------------------------------------------
     GENERAL
     ------------------------------------------------------------------- */
  // Your names, shown in the top menu and the browser tab.
  names: "James & Nielisson",

  // Short description used by search engines and link previews.
  description: "Our story, our life together and our hopes for the future.",

  /* -------------------------------------------------------------------
     MENU — the labels of the links in the top bar
     ------------------------------------------------------------------- */
  menu: {
    home: "Home",
    story: "Our Story",
    meet: "Meet Us",
    journey: "Our Journey",
    albums: "Photo Albums",
    feed: "Our Feed",
    contact: "Contact",
  },

  /* -------------------------------------------------------------------
     SECTION 1 — WELCOME
     ------------------------------------------------------------------- */
  hero: {
    eyebrow: "Hello, and welcome",
    title: "We're James & Nielisson",
    intro: [
      "We're a Brazilian-Australian couple who live in Darwin, in the north of Australia. Nielisson is a game designer and 2D/3D artist, and James is a university professor.",
      "Thank you for stopping by. We made this little website so you can get to know us a bit better through our own words, our photos and videos.",
    ],
    buttonText: "Explore our story",
    image: {
      src: "assets/images/hero/sunset-together.jpg",
      alt: "The two of us smiling together at sunset", // Describe the photo for people who can't see it.
    },
  },

  /* -------------------------------------------------------------------
     SECTION 2 — INTRODUCTION VIDEO
     -------------------------------------------------------------------
     Option A — your own video file (recommended):
       1. Copy your video into  assets/videos/  (MP4 format works everywhere)
       2. Set   type: "file"   and   src: "assets/videos/introduction.mp4"

     Option B — a YouTube or Vimeo video:
       Set  type: "youtube"  (or "vimeo") and paste the normal video link in src,
       e.g. src: "https://www.youtube.com/watch?v=XXXXXXXXXXX"

     While src is empty (""), a friendly "coming soon" card is shown instead.
     ------------------------------------------------------------------- */
  video: {
    heading: "A Little Introduction",
    intro: "We recorded this short video so you can see and hear us — it's the next best thing to meeting in person.",
    type: "file",                                  // "file", "youtube" or "vimeo"
    src: "assets/videos/OurIntro.mp4",
    poster: "assets/videos/poster.jpg",            // Image shown before the video plays (optional, file videos only)
    caption: "", // Optional text shown under the video, e.g. "Filmed at home, spring 2026."
    comingSoonText: "Our introduction video is coming soon.",
  },

  /* -------------------------------------------------------------------
     SECTION 3 — OUR STORY
     Each "chapter" is one photo + a short text. Photos alternate left/right
     automatically. Add, remove or reorder chapters freely.
     ------------------------------------------------------------------- */
  story: {
    heading: "Our Story",
    intro: "A few chapters about who we are and the life we've built together.",
    chapters: [
      {
        title: "Who we are",
        text: [
          "We're Nielisson (left) and James (right), a couple from Darwin, Australia, who love travelling, discovering new places, and making memories around the world. Now, we’re dreaming of our next big adventure: building a family together ❤️.",
          "Becoming parents has long been one of our greatest dreams, and we are so ready to welcome a child into the loving family and home we have been building together. We are deeply grateful to be on this journey, and for this opportunity to build a genuine connection with a surrogate based on trust, respect, kindness, and open communication.",
        ],
        image: { src: "assets/images/story/who-we-are-christmas.jpg", alt: "A smiling selfie of the two of us in front of our Christmas tree" },
      },
      {
        title: "How we met",
        text: [
          "We met in Paris in 2018, while both living and working there: Nielisson was studying Game Design and James was finishing his PhD in Linguistics. We have been together ever since, got engaged at the start of 2025 in our favourite park, Parc des Buttes-Chaumont, and are looking forward to getting married next year.",
          "Although we now call Australia home, Paris will always hold a special place in our hearts. We both speak French, along with a few other languages, and one of the things we’re most excited about as future parents is sharing those languages, cultures, and connections with our child from an early age.",
        ],
        image: { src: "assets/images/story/how-we-met-paris.jpg", alt: "A collage of our early days in Paris: selfies, the Eiffel Tower at night and a heart-shaped potato", fit: "whole" },
      },
      {
        title: "Our life together",
        text: [
          "Our relationship is built on trust and support for each other. We feel very fortunate to have been able to create a loving home together in Darwin, complete with a tropical garden and a veggie patch. It’s our dream to raise our future child here, surrounded by nature and a strong sense of community.",
          "Together, we love to spend time in nature, go running and hiking, play board games with friends, and travel to new places.",
        ],
        image: { src: "assets/images/story/our-life-paris.jpg", alt: "The two of us walking hand in hand through a crowded Paris street" },
      },
      {
        title: "What matters to us",
        text: [
          "We were drawn to Canada because of its altruistic and respectful approach to surrogacy. Those values now guide us as we hope to connect with a surrogate and build a genuine relationship and friendship, based on honesty and open communication.",
          "At the same time, we understand that every surrogate will have different expectations and preferences regarding how much communication and interaction they would like, and we are committed to respecting whatever feels right to them.",
        ],
        image: { src: "assets/images/story/what-matters-christmas-dinner.jpg", alt: "Christmas dinner with family, everyone wearing paper crowns", fit: "whole" },
      },
    ],
  },

  /* -------------------------------------------------------------------
     SECTION 3b — MEET US
     One card per person. "details" is a list of { label, text } pairs:
     add, remove or reorder them freely. "quote" is optional.
     "image" is optional too; without one, the first letter of the name
     is shown in a circle.
     ------------------------------------------------------------------- */
  meet: {
    heading: "Meet Us",
    intro: "A little more about each of us.",
    people: [
      {
        name: "James",
        age: "38 years old",
        role: "University Professor",
        // image: { src: "assets/images/meet/james.jpg", alt: "James" },
        details: [
          { label: "Communicates in", text: "English, French, and Portuguese" },
          { label: "Occupation", text: "I'm a University Professor, where I teach linguistics and work with Indigenous communities to support the documentation and revitalisation of their languages." },
          { label: "Sexual orientation", text: "Gay" },
          { label: "Fun facts about me", text: "I love the holiday period around Christmas, spending time in quaint and cosy locations, exploring local markets, with a cup of mulled wine, soaking up the festive atmosphere!" },
          { label: "Interests and hobbies", text: "In my spare time I enjoy playing and listening to music (particularly playing in community orchestras, wind ensembles and chamber music groups)." },
        ],
      },
      {
        name: "Nielisson",
        age: "39 years old",
        role: "Game Designer & 2D/3D Artist",
        // image: { src: "assets/images/meet/nielisson.jpg", alt: "Nielisson" },
        details: [
          { label: "Communicates in", text: "English, Portuguese, and French" },
          { label: "Occupation", text: "I'm a Game Designer and 2D/3D Artist." },
          { label: "Sexual orientation", text: "Gay" },
          { label: "Fun facts about me", text: "I have a bag full of souvenirs and little tokens from my travels. I tend to collect and keep random things that remind me of vacations and experiences abroad: tickets, notes, even rocks… basically anything with a story attached to it." },
          { label: "Interests and hobbies", text: "I love creating, whether that means painting with watercolors or building robotics projects. One of my favorite things is designing educational games that make learning more engaging. I’m also a language learner and enjoy discovering new ways of seeing the world." },
        ],
        quote: {
          label: "What friends say",
          text: "Nielisson is intelligent, kind, curious, and easy to connect with. He’s curious in the sense that he takes a genuine interest in what people have to say and enjoys getting to know others. He’s very friendly and makes connections quickly. He also has a lighthearted, easygoing personality that helps people feel comfortable when meeting him for the first time. He enjoys sharing advice and helping others whenever he can.",
          by: "Vitoria, a friend",
        },
      },
    ],
  },

  /* -------------------------------------------------------------------
     SECTION 3c — OUR SURROGACY JOURNEY
     "facts" are the small cards at the top ({ label, value, note? }).
     "notes" are short text blocks under them.
     "lookingFor" is the "What we're looking for" part.
     ------------------------------------------------------------------- */
  journey: {
    heading: "Our Surrogacy Journey",
    intro: "The practical details of our journey, and what we hope for in a surrogate.",
    facts: [
      { label: "Journey country", value: "Canada" },
      { label: "Relationship status", value: "Life partners", note: "Together since 2018, engaged in 2025" },
      { label: "Embryos", value: "Ready to transfer", note: "Six PGT-A tested euploid embryos" },
      { label: "Clinic", value: "Tripod Fertility", note: "Toronto" },
      { label: "Agency", value: "Not using an agency" },
      { label: "Lawyer", value: "Michelle Flowerday" },
    ],
    notes: [
      {
        title: "Our embryos",
        text: ["Our journey began over a year ago with Tripod Fertility in Toronto. Thanks to our wonderful known egg donor, we now have six PGT-A tested euploid embryos, ready to transfer."],
      },
      {
        title: "Financial preparedness",
        text: ["We understand and are prepared for the costs associated with this journey. We have been planning this journey for a long time, and are grateful to be in a financially secure position."],
      },
    ],
    lookingFor: {
      heading: "What we're looking for",
      intro: "Our hopes for the surrogate we will share this journey with.",
      items: [
        {
          title: "Who we hope to meet",
          text: [
            "We hope to connect with someone who is in good health, and with whom we can form a friendship and strong connection.",
            "We hope to meet someone who is kind, caring, and values open communication and mutual respect throughout the journey.",
          ],
        },
        {
          title: "The relationship we hope to build",
          text: ["We would love to match with someone who is comfortable building a genuine connection with our family and staying in touch over time, if that feels right for everyone involved."],
        },
        {
          title: "Views on termination",
          text: ["We understand that difficult decisions can sometimes arise during a surrogacy journey. We would consider termination if the surrogate's health or life were at risk, or in cases of severe fetal abnormalities (where we would be guided by medical advice). We respect that everyone has their own beliefs and would like to discuss your views to ensure we're aligned from the start."],
        },
      ],
    },
  },

  /* -------------------------------------------------------------------
     SECTION 4 — PHOTO ALBUMS
     -------------------------------------------------------------------
     Each album has:
       title        — the album name
       description  — one short sentence
       folder       — the folder holding the album's photos (ends with "/")
       cover        — (optional) file name of the cover photo;
                      if left out, the first photo is used
       photos       — the list of photos. Each photo is either just a
                      file name:  "beach.jpg",
                      or a file name with a caption / description:
                      { file: "beach.jpg", caption: "Our first trip", alt: "Us on a sandy beach" },

     ▶ EXAMPLE — adding a new album called "Our Garden":
       1. Create the folder  assets/images/albums/garden/
       2. Copy your photos into it, e.g. roses.jpg and picnic.jpg
       3. Add this block to the list below (don't forget the comma):

          {
            title: "Our Garden",
            description: "Where we spend most summer evenings.",
            folder: "assets/images/albums/garden/",
            photos: [
              { file: "roses.jpg", caption: "The first roses of the year" },
              "picnic.jpg",
            ],
          },
     ------------------------------------------------------------------- */
  albums: {
    heading: "Photo Albums",
    intro: "Little windows into our world. Choose an album to look through the photos.",
    viewText: "View album", // Text on each album card
    list: [
      {
        title: "Our Life Together",
        description: "The two of us, through the years.",
        folder: "assets/images/albums/life-together/",
        photos: [
          { file: "sunset-together.jpg", caption: "Golden hour, just the two of us.", alt: "The two of us at sunset" },
          { file: "above-the-bay.jpg", caption: "High above the bay, with the beaches stretched out below.", alt: "A selfie of us high above a bay and beaches" },
          { file: "beach-sunset.jpg", caption: "All smiles on the beach as the sun goes down.", alt: "Smiling together on the beach at sunset" },
          { file: "heart-arch.jpg", caption: "We found a heart-shaped arch in the water and had to sit in it.", alt: "Sitting together in a heart-shaped arch in the water" },
          { file: "clifftop-selfie.jpg", caption: "On top of the coastal cliffs.", alt: "A selfie of us on top of coastal cliffs" },
          { file: "fairy-light-heart.jpg", caption: "Inside a heart made of fairy lights.", alt: "Standing inside a heart made of fairy lights" },
          { file: "snowy-sunset.jpg", caption: "A snowy sunset together.", alt: "The two of us in the snow at sunset" },
          { file: "by-the-lake.jpg", caption: "A quiet moment by the lake.", alt: "The two of us by a lake" },
          { file: "trail-selfie.jpg", caption: "Checking the trail signs before the next walk.", alt: "A selfie of us next to wooden trail signs" },
          { file: "boat-day.jpg", caption: "A sunny day out on the boat.", alt: "A sunny selfie of us on a boat" },
        ],
      },
      {
        title: "Family & Friends",
        description: "The people who make our life full.",
        folder: "assets/images/albums/family-friends/",
        photos: [
          { file: "family-selfie.jpg", caption: "A family selfie with one of our favourite little people.", alt: "A family selfie with a little one" },
          { file: "picnic-with-baby.jpg", caption: "Baby cuddles at a picnic in the park.", alt: "Holding a baby at a picnic in the park" },
          { file: "garden-lunch.jpg", caption: "A long lunch in the garden with family.", alt: "Lunch in the garden with family" },
          { file: "beach-with-friend.jpg", caption: "A beach day with a good friend.", alt: "At the beach with a friend" },
          { file: "city-lookout.jpg", caption: "Taking in the city view with family.", alt: "With family at a city lookout" },
          { file: "dinner-out.jpg", caption: "Dinner out with family.", alt: "Dinner out with family" },
          { file: "family-meal.jpg", caption: "Around the table with the kids.", alt: "A family meal with the kids" },
          { file: "evening-walk.jpg", caption: "An evening stroll with the kids.", alt: "An evening walk with the kids" },
        ],
      },
      {
        title: "Travel & Adventures",
        description: "Places we've explored together.",
        folder: "assets/images/albums/travel/",
        photos: [
          { file: "top-of-the-world.jpg", caption: "On top of the world, high above the city.", alt: "Arms raised on a mountain top above the city" },
          { file: "mountain-view.jpg", caption: "Taking a break in front of the mountain peak.", alt: "The two of us on rocks in front of a mountain peak" },
          { file: "coastal-walk.jpg", caption: "Wind in our hair on a coastal walk.", alt: "A selfie of us on a coastal walk" },
          { file: "ocean-edge.jpg", caption: "Arms wide at the edge of the ocean.", alt: "Arms wide by the ocean" },
          { file: "ice-cave.jpg", caption: "Helmets on, exploring an ice cave.", alt: "The two of us in helmets inside an ice cave" },
          { file: "bamboo-bridge.jpg", caption: "Carefully crossing a bamboo bridge.", alt: "Crossing a bamboo bridge" },
          { file: "giant-fruit.jpg", caption: "Showing off a giant fruit sculpture.", alt: "Holding up a giant fruit sculpture" },
          { file: "flower-window.jpg", caption: "Peeking out of a window framed by flowers.", alt: "Peeking out of a window framed by flowers" },
          { file: "museum-visit.jpg", caption: "Wandering through a museum exhibition.", alt: "At a museum exhibition" },
        ],
      },
      {
        title: "Out in Nature",
        description: "Forests, mountains, snow and water. Our happy places.",
        folder: "assets/images/albums/nature/",
        photos: [
          { file: "above-the-clouds.jpg", caption: "Hiking above a sea of clouds.", alt: "A selfie of us on a hike above a sea of clouds" },
          { file: "giant-tree.jpg", caption: "Feeling tiny at the foot of a giant tree.", alt: "Standing at the foot of a giant tree" },
          { file: "forest-vines.jpg", caption: "Among the vines deep in the forest.", alt: "Among the vines in a forest" },
          { file: "rainforest-path.jpg", caption: "Following a rainforest path.", alt: "Walking a rainforest path" },
          { file: "rock-cave.jpg", caption: "Climbing out of a little rock cave.", alt: "Climbing out of a small rock cave" },
          { file: "jungle-ruins.jpg", caption: "An old stone tower hidden in the jungle.", alt: "An old stone tower in the jungle" },
          { file: "wild-sculpture.jpg", caption: "Making friends with a wooden sculpture in the park.", alt: "Sitting next to a wooden sculpture in a park" },
          { file: "canoe-paddle.jpg", caption: "Paddling our blue canoe across the lake.", alt: "Paddling a blue canoe on a lake" },
          { file: "snowy-park.jpg", caption: "A crisp walk through a snowy park.", alt: "A walk in a snowy park" },
          { file: "snowy-lookout.jpg", caption: "A snowy lookout among the trees.", alt: "At a snowy lookout among the trees" },
          { file: "wetlands-dusk.jpg", caption: "The wetlands at dusk.", alt: "Wetlands at dusk" },
          { file: "giant-fruit-together.jpg", caption: "Teamwork with a giant fruit sculpture.", alt: "The two of us holding up a giant fruit sculpture" },
        ],
      },
      {
        title: "Our Animal Friends",
        description: "Pets we love and the wildlife we've met along the way.",
        folder: "assets/images/albums/animals/",
        photos: [
          { file: "car-full-of-dogs.jpg", caption: "A car full of very happy dogs.", alt: "A car full of happy dogs" },
          { file: "dog-cuddle.jpg", caption: "Cuddles with a scruffy little dog.", alt: "Cuddling a scruffy little dog" },
          { file: "cat-on-lap.jpg", caption: "A white cat claiming a lap.", alt: "A white cat curled up on a lap" },
          { file: "cat-in-the-garden.jpg", caption: "Out on the grass with a cat.", alt: "Holding a cat on the grass" },
          { file: "curious-kangaroo.jpg", caption: "A curious kangaroo coming in for a closer look.", alt: "A curious kangaroo up close" },
          { file: "kangaroo-meeting.jpg", caption: "Thumbs up for meeting the kangaroos.", alt: "Giving a thumbs up next to kangaroos" },
          { file: "quokka-friend.jpg", caption: "Sitting with a friendly quokka.", alt: "Sitting with a quokka" },
          { file: "quokka-by-the-sea.jpg", caption: "Saying hello to a quokka by the sea.", alt: "Saying hello to a quokka by the sea" },
          { file: "monkey-in-the-trees.jpg", caption: "A small monkey watching us from the trees.", alt: "A small monkey in the trees" },
          { file: "curlews.jpg", caption: "A family of curlews visiting the garden.", alt: "A family of curlews in the garden" },
          { file: "iguana.jpg", caption: "An iguana sunbathing on a wall.", alt: "An iguana sunbathing on a wall" },
          { file: "tortoises.jpg", caption: "Two tortoises taking it slow.", alt: "Two tortoises" },
          { file: "crocodile.jpg", caption: "A crocodile resting on a rock (from a safe distance!).", alt: "A crocodile resting on a rock" },
        ],
      },
      {
        title: "Everyday Moments",
        description: "Ordinary days at home that we treasure.",
        folder: "assets/images/albums/everyday-moments/",
        photos: [
          { file: "porch-with-pets.jpg", caption: "Relaxing on the porch with our cat and dog.", alt: "Relaxing on the porch with a cat and a dog" },
          { file: "cat-and-dog-time.jpg", caption: "Cat and dog time at home.", alt: "Cat and dog time at home" },
          { file: "dogs-at-home.jpg", caption: "Lazy days at home with the dogs.", alt: "At home with the dogs" },
          { file: "reading-corner.jpg", caption: "Curled up with a book on the beanbag.", alt: "Reading on a cosy beanbag" },
          { file: "beach-clean-up.jpg", caption: "Volunteering together at a beach clean-up.", alt: "The two of us volunteering at a beach clean-up" },
        ],
      },
    ],
  },

  /* -------------------------------------------------------------------
     SECTION 5b — OUR FEED
     -------------------------------------------------------------------
     Little Instagram-style posts about our everyday life. The Home page
     shows the most recent few; "feed.html" shows them all.

     Each post has:
       image  — the photo (any folder works; new photos can go in
                assets/images/feed/)
       video  — (instead of, or as well as, image) an .mp4 video, e.g.
                "assets/videos/our-trip.mp4". If you also give an image,
                it is shown as the cover until play is pressed;
                without one, the video's first frame is used.
                Keep videos under ~25 MB so they load quickly.
       alt    — a short description of the photo or video
       date   — written as "YYYY-MM-DD", e.g. "2026-10-19".
                Posts are sorted newest first automatically, so the
                order in this list doesn't matter.
       text   — the post itself (one sentence or a few)
       place  — (optional) where it was taken, e.g. "Lake Annecy"

     ▶ EXAMPLE — adding a new post (put it anywhere in the list):
          {
            image: "assets/images/feed/sunday-pancakes.jpg",
            alt: "A stack of pancakes with berries",
            date: "2026-10-26",
            place: "Home",
            text: "Sunday pancakes are a non-negotiable in this house.",
          },

     ▶ EXAMPLE — a video post:
          {
            video: "assets/videos/our-trip.mp4",
            alt: "Short video of our trip to the mountains",
            date: "2026-11-02",
            text: "A few minutes of our favourite trip.",
          },
     ------------------------------------------------------------------- */
  feed: {
    heading: "Our Feed",
    intro: "Little snapshots from our everyday life: what we've been up to lately.",
    previewCount: 6,                    // How many posts the Home page shows (6 fits neatly)
    buttonText: "Explore our feed",
    showLatestOnHome: true,             // Show the newest post as a small card in the welcome section (true / false)
    latestLabel: "Latest from our feed",
    avatar: "assets/images/hero/sunset-together.jpg", // The round photo at the top of the Feed page
    page: {
      title: "Our Feed",
      intro: "Everyday moments, small adventures and the things that make us smile. Tap any photo to see the whole post.",
    },
    // PLACEHOLDER — the dates and texts below are examples. Replace them with your own.
    posts: [
      {
        video: "assets/videos/Our_Vacation_2023-2024_Brazil.mp4",
        alt: "Video of our vacation in Brazil, 2023–2024",
        date: "2026-10-24",
        place: "Brazil",
        text: "Our vacation in Brazil, 2023–2024.", // PLACEHOLDER — write your own words
      },
      {
        image: "assets/images/albums/everyday-moments/reading-corner.jpg",
        alt: "Reading on a cosy beanbag",
        date: "2026-10-19",
        text: "Slow Sunday. Tea, a good book and absolutely no plans.",
      },
      {
        image: "assets/images/albums/nature/canoe-paddle.jpg",
        alt: "Paddling a blue canoe on a lake",
        date: "2026-10-12",
        text: "Out on the water first thing this morning. So peaceful we barely talked.",
      },
      {
        image: "assets/images/albums/everyday-moments/porch-with-pets.jpg",
        alt: "Relaxing on the porch with a cat and a dog",
        date: "2026-10-05",
        text: "Porch time with our two shadows. They always find us.",
      },
      {
        image: "assets/images/albums/family-friends/garden-lunch.jpg",
        alt: "Lunch in the garden with family",
        date: "2026-09-27",
        text: "Long lunch in the garden with family. Nobody wanted to leave the table.",
      },
      {
        image: "assets/images/albums/everyday-moments/beach-clean-up.jpg",
        alt: "The two of us volunteering at a beach clean-up",
        date: "2026-09-20",
        text: "Spent the morning at a beach clean-up. Tired, sandy and very happy.",
      },
      {
        image: "assets/images/albums/travel/coastal-walk.jpg",
        alt: "A selfie of us on a coastal walk",
        date: "2026-09-13",
        text: "A windy coastal walk to clear our heads after a busy week.",
      },
      {
        image: "assets/images/albums/everyday-moments/dogs-at-home.jpg",
        alt: "At home with the dogs",
        date: "2026-09-06",
        text: "Movie night, dog-approved.",
      },
      {
        image: "assets/images/albums/family-friends/family-meal.jpg",
        alt: "A family meal with the kids",
        date: "2026-08-30",
        text: "Family dinner with the little ones. Loud, messy and our favourite kind of evening.",
      },
      {
        image: "assets/images/albums/animals/cat-on-lap.jpg",
        alt: "A white cat curled up on a lap",
        date: "2026-08-23",
        text: "When the cat picks your lap, you don't move. Those are the rules.",
      },
      {
        image: "assets/images/albums/life-together/by-the-lake.jpg",
        alt: "The two of us by a lake",
        date: "2026-08-16",
        text: "An evening by the lake. One of our favourite spots to just sit and talk.",
      },
      {
        image: "assets/images/albums/animals/curlews.jpg",
        alt: "A family of curlews in the garden",
        date: "2026-08-09",
        text: "Our garden visitors are back, and they brought the whole family.",
      },
      {
        image: "assets/images/albums/life-together/trail-selfie.jpg",
        alt: "A selfie of us next to wooden trail signs",
        date: "2026-08-02",
        text: "Picked a trail we'd never done before. No regrets (except maybe the hills).",
      },
    ],
  },

  /* -------------------------------------------------------------------
     SECTION 6 — CLOSING MESSAGE
     ------------------------------------------------------------------- */
  closing: {
    heading: "Thank you for getting to know us",
    text: [
      // PLACEHOLDER
      "We're so grateful you took the time to read our story and look through our photos. It means a great deal to us.",
    ],
    signature: "With warmth, James & Nielisson",
    images: [ // 0 to 3 photos — leave the list empty [] for none
      { src: "assets/images/closing/closing-1.jpg", alt: "Smiling together on the beach at sunset" },
      { src: "assets/images/closing/closing-2.jpg", alt: "A Christmas selfie by the tree" },
      { src: "assets/images/closing/closing-3.jpg", alt: "The two of us inside a heart of fairy lights" },
    ],
    buttonText: "Back to the top",
  },

  /* -------------------------------------------------------------------
     SECTION 7 — CONTACT (the box at the very end of the page)
     Leave email, phone or links empty ("" / []) to hide them.
     Links example:  links: [{ label: "Our profile", url: "https://..." }],
     ------------------------------------------------------------------- */
  contact: {
    heading: "Get in Touch",
    text: [
      "We would love to hear from you. Whether you have a question, would like to know more about us, or simply want to say hello, please reach out: there's no pressure, and we'll get back to you as soon as we can.",
    ],
    email: "nielisson_silva@hotmail.com",                     // PLACEHOLDER — e.g. "james.and.nielisson@example.com"
    emailText: "Send us an email",
    phone: "",                     // Optional, e.g. "+61 400 000 000"
    links: [],
  },

  /* -------------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------------- */
  footer: "Made with love by James & Nielisson",
};
