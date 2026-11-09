const krBtn = document.getElementById("krBtn");
const enBtn = document.getElementById("enBtn");

const krTexts = document.querySelectorAll(".lang-kr");
const enTexts = document.querySelectorAll(".lang-en");

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  if (lang === "kr") {
    krTexts.forEach(el => el.style.display = "inline");
    enTexts.forEach(el => el.style.display = "none");

    krBtn.classList.add("active");
    enBtn.classList.remove("active");
  } else {
    krTexts.forEach(el => el.style.display = "none");
    enTexts.forEach(el => el.style.display = "inline");

    enBtn.classList.add("active");
    krBtn.classList.remove("active");
  }
}

krBtn.addEventListener("click", () => setLanguage("kr"));
enBtn.addEventListener("click", () => setLanguage("en"));


const savedLang = localStorage.getItem("lang") || "kr";
setLanguage(savedLang);


const pages = {
  project1: `
    <h1 class="cursive">Repair Lab Poster</h1>
    <div class="line"></div>
    <div class="flex">
    <p>Year: <br> Medium: <br> Measurement:</p>
    <p>2026 <br> Adobe Suite, Generative AI <br> A2</p>
    </div>
    <div class="line"></div>
    <div class="margin">
    <p class="subheading">Project Description</p>
    <p>Designed promotional materials for Dr.G’s “Repair Lab” pop-up, created to promote the brand’s third-generation soothing cream.
    </p></div>
    <img src="image/Repair/poster_og.png" alt="Repair Lab Poster">
    <img src="image/Repair/repair_poster.png" alt="Repair Lab Poster Mockup">
    <div class="margin">
    <p class="subheading">Strategy</p>
    <p>Expanding on the pop-up’s existing Lab concept, used Midjourney and Nano Banana to create conceptual photoshoots inspired by laboratory tools and research equipments. Experimental and scientific visual elements were also incorporated into the poster’s framing, background typography, and graphics, creating a cohesive visual identity.
    </p></div>
    <img src="image/Repair/drgleaflet.png" alt="Leaflet">
    <img src="image/Repair/leaflet_all.png" alt="Leaflet Full">
  `,

  project2: `
    <h1 class="cursive">Titi Tea</h1>
    <div class="line"></div>
    <div class="flex">
    <p>Year: <br> Medium:</p>
    <p>2026 <br> Adobe Suite, Generative AI</p>
    </div>
    <div class="line"></div>
    <div class="margin">
    <p class="subheading">Project Description</p>
    <p>Branded a princess themed tea brand Titi tea, which reimagines traditional royalty and elegance for contemporary audiences. The ritual of drinking tea becomes a medium that bridges the consumer with the concept of "princess", letting anyone imagine their life as a princess and make their daily life more meaningful.
    </p></div>
    <img src="image/titi/poster1.png" alt="Poster">
    <img src="image/titi/poster2.png" alt="Poster">
    <div class="margin">
    <p class="subheading">Strategy</p>
    <p>For the project, I created two mascots ”Princess Titi“ and ”Princess Tina“. These mascots embody the identity of the brand, always performing elegant, refined, and confident behaviors. Their roles extend beyond mere visual appeal and represents consumers‘ ideal selves and aspirations. All 3D graphics were created using Nano Banana Pro.
    </p></div>
    <img src="image/titi/banner.png" alt="banner">
    <img src="image/titi/poster_mockup.png" alt="Poster Mockup">
    <img src="image/titi/menu.png" alt="menu">
    <img src="image/titi/guideline.png" alt="brand guideline">

  `,

  project3: `
    <h1 class="cursive">Going Dark Exhibition</h1>
    <div class="line"></div>
    <div class="flex">
    <p>Year: <br> Medium: <br> Measurement:</p>
    <p>2025 <br> Adobe Suite <br> 23 in x 33 in</p>
    </div>
    <div class="line"></div>
    <div class="margin">
    <p class="subheading">Project Description</p>
    <p>Redesigned poster for Guggenheim's exhibition "Going Dark", which presents veiled human figures to explore the concept of the <i>edge of visibility</i>. 
    </p></div>
    <img src="image/goingDark/poster.png" alt="Going Dark Poster">
    <img src="image/goingDark/poster-gallery.jpg" alt="Going Dark Poster">
    <div class="margin">
    <p class="subheading">Strategy</p>
    <p>I led viewers to experience the theme <i>edge of visibility</i> by layering a glass textured typography over the poster and distorting the content beneath.
    </p></div>
    <iframe width="472" height="840" src="https://www.youtube.com/embed/msd3ZD47x48"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen loading="lazy">
            </iframe>

  `,

  project4: `
    <h1 class="cursive">Broken Heart Aid Kit</h1>
    <div class="line"></div>
    <div class="flex">
    <p>Year: <br> Medium:</p>
    <p>2026 <br> Adobe Suite</p>
    </div>
    <div class="line"></div>
    <div class="margin">
    <p class="subheading">Project Description</p>
    <p>Redesigned Fromis 9’s 6th mini album <From our 20s>, as a first aid kit for broken hearts. Inspired by the recurring themes of heartbreak and recovery throughout the tracks, as well as the group’s own journey through agency changes and member reorganization, the concept reimagines the album as an emotional recovery kit, offering healing through music.
    </p></div>
    <img src="image/aidkit/kit-poster.png" alt="Poster for Kit">
    <div class="margin">
    <p class="subheading">Strategy</p>
    <p>The image treatment evokes a thermal camera and visualizes intense heat, translating the emotional turmoil of heratbreak. Stickers that are applied across the kit serve as the metaphor for the act of treating emotional injuries, just as bandages are applied to physical wounds.
    </p></div>
    <img src="image/aidkit/postermock.jpg" alt="Poster">
    <img src="image/aidkit/poster.jpg" alt="Poster">
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="600px" src="https://embed.figma.com/proto/QBr2LEp4Jmz7VRg9LoeJUA/Documentation?node-id=25-117&starting-point-node-id=25%3A117&embed-host=share" allowfullscreen></iframe>
    </div>
    

  `,

  project5: `
    <h1 class="cursive">Be Right Back Poster</h1>
    <div class="line"></div>
    <div class="flex">
    <p>Year: <br> Medium:</p>
    <p>2026 <br> Adobe Suite</p>
    </div>
    <div class="line"></div>
    <div class="margin">
    <p class="subheading">Project Description</p>
    <p>Designed a promotional poster that introduces Glow in the Dark Sneakers from Be Right Back retro series.
    </p></div>
    <img src="image/Offwhite/beright_og.png" alt="Poster">
    <div class="margin">
    <p class="subheading">Strategy</p>
    <p>To capture the brand’s distinctive streetwear aesthetic while emphasizing the collection’s retro theme, I used Midjourney to create imagery inspired by 1990s American street scenes. I also designed a title graphic evoking a retro neon sign, complementing the imagery and creating a cohesive visual direction that reinforces the collection’s concept.
    </p></div>
    <img src="image/Offwhite/berightback_poster.png" alt="Poster">
    </div>
    

  `,


};

function openPage(pageId) {
  const panel = document.getElementById("detailPanel");
  const content = document.getElementById("detailContent");

  content.innerHTML = pages[pageId] || "";
  panel.classList.add("active");

  // 항상 맨 위부터 표시
  panel.scrollTop = 0;
}

function closePage() {
  const panel = document.getElementById("detailPanel");
  panel.classList.remove("active");
}