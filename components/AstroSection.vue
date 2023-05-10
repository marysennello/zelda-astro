<template>
  <div>
    <!-- section for selecting signs -->
    <section>
      <!-- grid - 3 cols, 1 for each sign. contains dropdown menu and results sections -->
      <div class="grid lg:grid-cols-3 md:gap-2 md:justify-between mt-3">
        
         <!-- sun sign -->
        <div class="custom-select text-center" >
          <h3>Sun Sign</h3>

          <!-- select sun sign -->
          <select v-model="selectedSun" class="text-xl">
            <option selected value=""> Select Sign </option>
            <option v-for="sign in signs" class="text-center" :value="sign">{{sign.name}}</option>
          </select>

          <!-- sun results, IF SIGN HAS BEEN SELECTED -->
          <div class="results grid grid-cols-1 justify-items-center " v-if="selectedSun">
            <!-- populate with monster img -->
            <img :src="'https://botw-compendium.herokuapp.com/api/v2/entry/'+ selectedSun.sunImg +'/image'" :alt="selectedSun.sunMonster" id="sunResultImg" class="object-cover">
            <!-- to populate with monster name based on choice of dropdown option -->
            <!-- paragraphs to populate with monster and sign info based on choice of dropdown option -->
            <div class="monster"> 
              <h3 id="sunResultMonster">{{selectedSun.sunMonster}}</h3>
              <p id="sunResultZelda" class="text-left p-4 text-[--grass]" >{{selectedSun.zeldaSunDetail}}</p>
            </div>
            <div class="astro">
              <h4>{{ selectedSun.name }} Sun</h4>
              <p id="sunResultAstro" class="text-left p-4">{{selectedSun.sunDetail}}</p>
            </div>
          </div>

          <!-- results IF NO SIGN HAS BEEN SELECTED YET -->
          <div v-else class="results grid grid-cols-1 justify-items-center">
            <img :src="signs.Unknown.sunImg" alt="star" class="object-cover">
            <p class="italic text-left p-4">{{signs.Unknown.sunDetail}}</p>
          </div>
        </div>

         <!-- moon sign -->
           
          <div class="custom-select text-center">
          <h3>Moon Sign</h3>

          <!-- select sign -->
          <select v-model="selectedMoon" class="text-xl">
            <option selected value=""> Select Sign </option>
            <option v-for="sign in signs" :value="sign" class="text-center">{{sign.name}}</option>
          </select>

          <!-- results, IF SIGN HAS BEEN SELECTED -->
          <div v-if="selectedMoon" class="results grid grid-cols-1 justify-items-center align-between">
            <img :src="'https://botw-compendium.herokuapp.com/api/v2/entry/'+ selectedMoon.moonImg +'/image'" :alt="selectedMoon.moonMonster" id="moonResultImg" class="object-cover">
            <div class="monster"> 
            <h3>{{selectedMoon.moonMonster}}</h3>
            <p id="moonResultZelda" class="text-left p-4 text-[--grass]" >{{ selectedMoon.zeldaMoonDetail }} </p>
            </div>
            <div class="astro"> 
            <h4>{{ selectedMoon.name }} Moon</h4>
            <p id="moonResultAstro" class="text-left p-4">{{selectedMoon.moonDetail}}</p>
            </div>
          </div>

          <!-- results IF NO SIGN HAS BEEN SELECTED YET -->
          <div v-else class="results grid grid-cols-1 justify-items-center">
            <img :src="signs.Unknown.moonImg" alt="star" class="scale-25">
            <p class="italic text-left p-4">{{signs.Unknown.moonDetail}}</p>
          </div>
        </div>


         <!-- rising sign -->
        
        <div class="custom-select text-center">
          <h3>Rising Sign</h3>

          <!-- select sign -->
          <select v-model="selectedRising" class="text-xl">
            <option selected value="">Select Sign</option>
            <option v-for="sign in signs" :value="sign" class="text-center">{{sign.name}}</option>
          </select>

          <!-- results, IF SIGN HAS BEEN SELECTED -->
          <div v-if="selectedRising" class="results grid grid-cols-1 justify-center justify-items-center align-between">
            <img :src="'https://botw-compendium.herokuapp.com/api/v2/entry/'+ selectedRising.risingImg +'/image'" :alt="selectedRising.risingMonster" id="risingResultImg" class="object-cover">
            <div class="monster">
              <h4>{{ selectedRising.risingMonster }}</h4>
              <p id="risingResultZelda" class="text-left p-4 text-[--grass]" >{{ selectedRising.zeldaRisingDetail}}</p>
            </div>
            <div class="astro">
              <h3> {{selectedRising.name}} Rising</h3>
              <p id="risingResultAstro" class="text-left p-4">{{selectedRising.risingDetail}}</p>
            </div>
          </div>

          <!-- results IF NO SIGN HAS BEEN SELECTED YET -->
          <div v-else class="results grid grid-cols-1 justify-items-center">
            <img :src="signs.Unknown.risingImg" alt="star" class="scale-25">
            <p class="italic text-left p-4">{{signs.Unknown.risingDetail}}</p>
          </div>
        </div>
     </div>
    </section>
  </div>
</template>

<script>
import Star from '../assets/imgs-etc/botw-star.png'


export default {
  data() {
    return {
      selectedSun: '',
      selectedMoon:'',
      selectedRising:'',
      signs: {
        "Aries": {
          name : "Aries",
          sunImg : "fire-breath_lizalfos",
          sunMonster : "Fire-Breath Lizalfos",
          sunDetail : "Aries is active, energetic, excitable and impulsive, optimistic, open to change and new experiences. There is a dynamic restlessness to the Aries character. When others first meet you their instant impression is of someone exciting, vibrant, talkative. A an Aries person you gravitate toward the center of action. You are audacious and intent on getting your own way. Since your nature is to express power, you treat opposition as an annoyance to be brushed out of the way. You are a natural leader who exudes self-confidence.",
          zeldaSunDetail : "These quick-witted, lizard-like monsters can be found all over Hyrule. Their fiery breath makes them pretty dangerous, but exposure to cold will kill them instantly. They mainly make their homes in volcanic areas but have also been sighted in the Akkala region.",

          moonImg : "fire_keese",
          moonMonster : "Fire Keese",
          moonDetail : "In the vibrant sign of Aries, the Moon endows you with charm, vivacity, and a special knack for getting others to do what you want. If you are pursuing a goal you really have your heart set on, you will drive yourself to the limit of your endurance. You perform best under pressure and handle emergencies as quickly as a firefighter answering an alarm bell. No matter what your Sun sign may be, an Aries Moon confers a quality of self-confidence and an adventurous spirit that runs through your personality.",
          zeldaMoonDetail : "The fire that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of setting fire to anything they touch.",


          risingImg : "silver_bokoblin",
          risingMonster : "Silver Bokoblin",
          risingDetail: "Aries is a very strong ascendent. You like to take on the role of a leader, even if the leadership is in a small area. As an Aries Ascendent person you have strong likes and dislikes and are never shy about expressing them. Your dealings are straightforward and honest. There is a contagious enthusiasm about you. Sometimes Rising-Aries people have a reputation as troublemakers. As far as you're concerned, obstacles are just there to be butted down. However, if the obstacle own't move you won't butt your head off. You will quickly lose interest and bound off to find a new challenge, further excitement.",
          zeldaRisingDetail : "You would be foolish to call these Silver Bokoblins a mere nuisance. They have been influenced by Ganon's fiendish magic, so they are stronger than even the Black Bokoblins. They're called \"silver\" not only because of their coloring but also to denote their rarity. The purple markings help them to stand out even more.",
        },
        "Taurus": {
          name : "Taurus",
          sunImg : "blue-maned_lynel",
          sunMonster : "Blue-Maned Lynel",
          sunDetail : "Taurus is quiet, affectionate, patient, stable, determined and practical, stubborn, and resistant to change. Your greatest strength resides in your tenacity and steady, relentless drive. You are a purposeful achiever who has endless patience to see a thing through, to make it a success. Like a bull quietly grazing in a pasture, you're not looking to challenge anyone, but it would be a fatal mistake for anyone to challenge you.",
          zeldaSunDetail : "These fearsome monsters have lived in Hyrule since ancient times. Compared to the standard Lynel, those with blue manes much tougher and equipped with much stronger weapons. Facing off against a Lynel is ill-advised, but if you must, be sure you're well prepared.",

          
          moonImg : "stone_talus_(luminous)",
          moonMonster : "Stone Talus (Luminous)",
          moonDetail : "The stable sign of Taurus steadies and strengthens the Moon's otherwise changeable, erratic influence. The Moon in this position gives you great powers of concentration. Whereas others complicate their lives, when you're confronted with a problem you look for the most effective way to deal with it, and even if it's personally painful for you, you get it handled. It takes a while for you to come to a decision - you must be sure of all the facts - but when you do there is no way to make you change your mind. No matter what your Sun sign may be, the Taurus Moon qualities of patience and determination run through your character.",
          zeldaMoonDetail : "This enormous monster is naturally camouflaged as a rock formation. Neither sword nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak. Unlike your average Stone Talus, this type's ore deposit consists mostly of luminous stone.",

          risingImg : "chuchu",
          risingMonster : "Chuchu",
          risingDetail: "There is a steadfastness, a basic calm about a Taurus Ascendant. You have charming social manners and a strong artistic bent, for the sign of Taurus is ruled by Venus, planet of love and esthetics. Taurus Rising people have a reputation for laziness that is not entirely deserved. Determined, persistent, and strong-willed, you possess endless patience to see a thing through, to make it a success. As a person with Taurus rising, you tend to have an unusually good-looking face, large round eyes, and clear skin.",
          zeldaRisingDetail : "This low-level, gel-based monster can be found all over Hyrule. It tends to spring its attacks on unsuspecting prey from the ground or from trees. Its strength varies by size, and the type of jelly it drops varies depending on whether the Chuchu was heated up, cooled down, or shocked.",
        },
        "Gemini":{
          name : "Gemini",
          sunImg : "electric_wizzrobe",
          sunMonster : "Electric Wizzrobe",
          sunDetail : "Gemini is lively, energetic, versatile, and intellectual, lives primarily in the mind rather than the emotions, and is extremely adaptable to new situations. People born under this sign are many-sided, quick in thought and action, clever with words, skillful at handling others, brimful of new ideas. As a Gemini, you are endlessly curious about everything and must be part of the busy passing scene. Duality is your most famous trait. Basically your nature is restless, on the go, in quest of new ideas and fresh experiences.",
          zeldaSunDetail : "These spell-casting monsters can be found all over Hyrule. They use their lightning rods to hurl balls of electricity or to summon monsters surging with electricity and have been known to cause thunderstorms in the area. The weather will normalize once the Wizzrobe has been defeated.",

          moonImg : "yiga_footsoldier",
          moonMonster : "Yiga Footsoldier",
          moonDetail : "If you have a Moon in this position you are extraordinarily quick to receive sensory impressions from the outside world. You are quick-witted and vibrant, and when you come across a new fact or a different way of looking at something, you are likely to undergo a change of mind. You tend to dissect your feelings and emotions to analyze why you think this way or behave that way. No matter what your Sun sign may be, the Gemini Moon qualities of versatility and intellectualism can be discerned in your personality. ",
          zeldaMoonDetail : "The lowest-ranked members of the Yiga Clan. They've been dispatched all across Hyrule with a single task: seek out Link and end his life. They're a crafty bunch, sometimes disguising themselves as simple travelers or villagers to get the jump on you. Be wary of suspicious people you encounter. They're very agile and carry a bow and one-handed sword.",

          risingImg : "guardian_scout_ii",
          risingMonster : "Guardian Scout II",
          risingDetail: "The first impression others receive of you is of someone in constant motion: your hands gesticulate, your eyes dart here and there, your body does not sit still in a chair. You need change and variety and are often discontent with your present lot. You sense that there is an experience just over the horizon that will make you feel truly fulfilled, and you resent the strictures that you may think keep you from venturing out to find it. As a Gemini Ascendent, you tend to have small sharp features, twinkling eyes that are filled with humor, a friendly smile, and graceful arms and hands that you use to great effect.",
          zeldaRisingDetail : "Although originally designed by an ancient civilization to combat Ganon, these scaled-down Guardians were placed inside shrines as part of the trials. In additional to the beam functionality, this particular model was designed to handle weaponry as a means of further testing the combat prowess of one undertaking the trials. It takes some serious skill to go toe-to-toe with one of these.",
          
        },
        "Cancer":{
          name : "Cancer",
          sunImg : "naydra",
          sunMonster : "Naydra",
          sunDetail : "Cancer is receptive, sensitive, and imaginative, sympathetic, kind, and emotional, and possesses an active, shrewd, and intuitive mind. You may appear gentle, kind, sympathetic, and a patient listener. Then someone asks for advice, and you turn cranky, snappish, and appear to be completely indifferent to anyone's problems but your own. You prize security above all else, yet love new adventure. You are the soul of caution but you are also a courageous initiator who goes out of your way to push over obstacles with your driving personality.",
          zeldaSunDetail : "A spirit of ice has taken the form of this giant dragon. Making its home in the Lanayru region, it's said to have served the Spring of Wisdom since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has seen this in the current age. The ice that coats its body makes it dangerous to get near, but Naydra bears no ill will toward people.",
          
          moonImg : "treasure_octorok",
          moonMonster : "Treasure Octorok",
          moonDetail : "The romantic, intuitive sign of cancer and the sensuous, receptive Moon are in harmony with each other. If you have the Moon in Cancer you have strong emotions and perceive the world around you through your feelings rather your intellect. You tend to let your feelings fester, and indeed, touchiness, moodiness, and a kind of quiet self-pity always lie near the surface. No matter what your Sun sign may be, the cancer Moon qualities of creativity and emotionalism will be evident in your personality. ",
          zeldaMoonDetail : "These particularly clever monsters bury themselves in deep sand or snow and disguise themselves as treasure chests. Anyone who approaches the chests is attacked. The treasures chests are not magnetic, which proves that they are actually a part of these monsters' bodies.",

          risingImg : "ice-breath_lizalfos",
          risingMonster : "Ice-Breath Lizalfos",
          risingDetail: "If you have Cancer rising, you are very sensitive to emotional signals from other people. You have extraordinary insight into human motivation. There is a reserve about you that is sometimes difficult to penetrate, but underneath is a warm, affectionate, loving, and giving nature. Your sensitivities are so heightened that you sometimes take offense where none was intended. However, this sam e sensitivity is what sets you apart from the crowd. Many Cancer Ascendants are extraordinarily gifted as writers, poets, and painters. You won't hog the spotlight, but on the other hand you want public recognition for your talents.",
          zeldaRisingDetail : "These quick-witted, lizard-like monsters can be found all over Hyrule. The balls of ice they spit make them particularly troublesome, but exposure to fire will kill them instantly. Their homes are mainly on snowy mountains.",
          
        },
        "Leo":{
          name : "Leo",
          sunImg : "white-maned_lynel",
          sunMonster : "White-Maned Lynel",
          sunDetail : "Leo is enthusiastic, powerful, expansive and creative, generous and extravagant, dogmatic and fixed in opinion. Self-assurance surrounds Leo people like a ghost image on a television set. Whatever you do, you do with a flair for the dramatic. Your energy is electric, and people gravitate to you as steel fillings to a magnet. If you invite people to your castle (which is how you think of your home), you entertain them royally. You are a splendid host. Generous, kind, and openhearted, you find it hard to believe ill of others.",
          zeldaSunDetail : "These fearsome monsters have lived in Hyrule since ancient times. Their ability to breathe fire makes White-Maned Lynels among the toughest of the species; each one of their attacks is an invitation to the grave. There are so few eyewitness accounts of this breed because a White-Maned Lynel is not one to let even simple passersby escape with their lives.",

          moonImg : "meteo_wizzrobe",
          moonMonster : "Meteo Wizzrobe",
          moonDetail : "Leo is a wonderful placement for the Moon because it gives great warmth and stability to the Moon's influence; it also imparts an idealistic quality. You are a quick and accurate learner when your feelings are involved. But if a subject does not arouse your affections, you have no interest in exploring it further. Moon-in-Leo people work very well in group enterprises because they have a talent for inspiring people to do their best. No matter what your Sun sign may be, the Leo Moon qualities of warmth, vitality, and charisma will appear in your personality.",
          zeldaMoonDetail : "These spell-casting monsters can be found all over Hyrule. They use their meteor rods to hurl fireballs or to summon flaming monsters and have been known to severely raise the temperature around them. The weather will normalize once the Wizzrobe is defeated.",

          risingImg : "electric_lizalfos",
          risingMonster : "Electric Lizalfos",
          risingDetail: "Leo ascending signifies nobility of character, high ideals, and great personal magnetism. If you have Leo rising, you are big-hearted, expansive, benevolent, and kind. Because you are so magnanimous in spirit, you find it hard to believe ill of others. Rising Leos have a great sense of showmanship. To less flamboyant types you may appear ostentatious, show-offy, and extravagant. But your showy displays are not only to get attention; you see life in larger-than-life terms and aspire to the highest and best. This quality draws others to you and, in itself, attracts power and influence. There is a basic likeableness about you, partly because you give the distinct impression that life is fun.",
          zeldaRisingDetail : "These quick-witted, lizard-like monsters can be found all over Hyrule. The can emit strong electrical currents from their bodies, so don't get too close. Their horns are brimming with electricity, which will discharge and arc to nearby areas if struck by an arrow. They tend to live in desert climates.",
        },
        "Virgo":{
          name : "Virgo",
          sunImg : "guardian_stalker",
          sunMonster : "Guardian Stalker",
          sunDetail : "Virgo is reserved, modest, practical, discriminating and industrious, analytical and painstaking, seeking to know and understand. The real drama of Virgo's personality is interior. To the world you may give an impression of calm authority, but you are aware of your own nervous, restless, controlled intensity, the desire to be up and doing, rearranging, improving. You can exhaust yourself more by sitting still than others do moving around. You are, in a word, organized. Your emotional life is a constant striving to bring order out of chaos.",
          zeldaSunDetail : "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. Its six legs give it extraordinary mobility compared to most current vehicles, and its powerful laser provides far greater offensive capability than conventional weaponry. Destroying the legs severely reduces its mobility.",

          moonImg : "lynel",
          moonMonster : "Lynel",
          moonDetail : "Virgo is the sign of intelligence and practicality, which gives a sharp analytical bent to the Moon's influence. You do not pursue knowledge merely for the sake of learning; you figure out how to use what you learn. You are meticulous in sifting through information and you tend to question whatever is told to you. As a Moon-in-Virgo person, you bring an extra touch of perfectionism and professionalism to everything you do. No matter what your Sun sign may be, the Virgo Moon qualities of caution and seriousness show up in your personality.",
          zeldaMoonDetail : "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.",

          risingImg : "forest_octorok",
          risingMonster : "Forest Octorok",
          risingDetail: "Virgo ascending indicates an analytical outlook. Though the degree of emotionalism depends on other influences in your horoscope, it is generally through the mind that you perceive the world. Virgo Ascendants have deep and tender emotions and care a great deal about others. However, it is the process of thinking logically that gives you the deepest satisfaction. To you, the cardinal sin is to be ignorant of one's ignorance. Often you are at war within yourself, both wanting things to come easily and needing to achieve solely through your own efforts. You tend to have a gentle, oval face, eyes that sweep around a room and take in everything, and a body that gives the impression of frailty but is actually very strong.",
          zeldaRisingDetail : "Although originally an aquatic species, this type has adapted to life in the forest. They hide among the trees, disguising themselves as grass or unassuming shrubbery, and then attack when someone wanders by.",
        },
        "Libra":{
          name : "Libra",
          sunImg : "blue_lizalfos",
          sunMonster : "Blue Lizalfos",
          sunDetail : "Libra is active, artistic, easygoing, peaceable, prizes beauty and harmony, is diplomatic, polished, and very socially inclined. Librans are easy to like, for you have a captivating charm, possesses elegant taste, and are usually beautiful to look at. You're famous for how effortlessly you smooth ruffled feathers, bring out smiles, and make others think they're the most wonderful people in the world. Your energies are focused on melding and combining with other people; you are at your best in personal relationships. ",
          zeldaSunDetail : "These quick-witted, lizard-like monsters can be found all over Hyrule. Compared to the green Lizalfos, many of these carry much stronger weapons and are generally much tougher.",

          moonImg : "yiga_blademaster",
          moonMonster : "Yiga Blademaster",
          moonDetail : "If you have the Moon in Libra you have a keen appreciation for beauty and art, and an artistic eye unmatched by any other Moon sign. You also have a heightened awareness of your environment and of other people. The Moon in the balanced sign of Libra endows you with an open, independent mind that tries to evaluate the world dispassionately and rationally. No matter what your Sun sign may be, the Libra Moon qualities of refinement and grace can be traced in your character.",
          zeldaMoonDetail : "These are the elite soldiers of the Yiga Clan. They favor the windcleaver blade and are extremely agile despite their bulky build. At this Yiga Clan rank, they have mastered a technique that allows them to manipulate the very earth. By striking the ground, they can create stone pillars and blasts of air.",

          risingImg : "stalkoblin",
          risingMonster : "Stalkoblin",
          risingDetail: "If you have Libra rising, you have natural charm, grace, and poise. You are extremely social-minded and take pleasure in being with other people in a convivial atmosphere. No matter what disappointments today may bring, Rising-Librans fantasize happy tomorrow and look forward to living them. You are born with a great sense of fairness, and nothing angers you more than to see injustice go uncorrected. You gravitate toward artistic and creative endeavors, but sometimes your artistic flair lies dormant and unused, for you dislike hard work and prefer to take the easy way out.",
          zeldaRisingDetail : "The remains of Bokoblins appear in the dark of the night. While they're fragile enough to crumble from a single blow, as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting. Sometimes the body will pick up the wrong skull, but this doesn't seem to be a problem...",
        },
        "Scorpio":{
          name : "Scorpio",
          sunImg : "blizzrobe",
          sunMonster : "Blizzrobe",
          sunDetail : "Scorpio is imaginative, passionate and emotional, subtle, persistent, intense, obstinate, and unyielding. This is the sign of extremes. Scorpio people are variously described as powerful, weak, independent, clinging, passionate, and cold. The key to your personality is intensity. Magnetic, emotional, capable of exerting tremendous force, your strength is hidden in the depths. In the sign of Scorpio the element of water is fixed, an image that suggests an iceberg or a bottomless well.",
          zeldaSunDetail : "These spell-casting monsters can be found all over Hyrule. They use their blizzard rods to create freezing blasts of air or to summon frozen monsters and have been known to cause blizzards to severely decrease the temperature around them. The weather will normalize once the Blizzrobe is defeated.",

          moonImg : "decayed_guardian",
          moonMonster : "Decayed Guardian",
          moonDetail : "The effect of Scorpio is to underline the Moon's sensuous power and at the same time bring out its forcefulness.  You are very clever at hiding your true feelings. Though you are driven by strong passions you tend to deny that they are your motivation. A Moon-in-Scorpio person possesses enormous willpower and acute powers of observation. No matter what your Sun sign may be, the Scorpio Moon qualities of persistence and intensity run through your personality.",
          zeldaMoonDetail : "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon, but it was destroyed during the Great Calamity. Ages of weather and neglect have left it in a state of disrepair. Approach with caution; some of the derelict models have been known to awaken from stasis and attack when approached.",

          risingImg : "water_octorok",
          risingMonster : "Water Octorok",
          risingDetail: "Rising-Scorpios have an intensity, a dynamism that seethes and roils under the surface. Your willpower and determination are formidable. Clever, creative, and resourceful, your fertile mind seems to be an inexhaustible source of ideas and suggestions. Your brain behind your cool facade is always ticking away. As a Scorpio Ascendant you are happiest when you can control from behind the scenes. You tend to be secretive and reserved, and shun the spotlight because you can't work there unnoticed. You are usually quietly watching, waiting, observing - filing away information that will be useful later on.",
          zeldaRisingDetail : "Although they spend most of their time in water, the drop in barometric pressure that occurs when it rains causes an air sac within these octopus-like monsters to inflate and lift them into the air. The rocks they spit out can be bounced back with a shield.",
        },
        "Sagittarius":{
          name : "Sagittarius",
          sunImg : "guardian_scout_iii",
          sunMonster : "Guardian Scout III",
          sunDetail : "Sagittarius is energetic, ambitious, generous, freedom-loving, and a seeker of challenge, open ot new ideas and exploration. Astrologers say you have the gift of providence - luck protects you. You are too interested in what is going to happen tomorrow to fret long about what went wrong today. You are always sure that around the next bend of the road something wonderful is about to happen. In the zodiac, Sagittarius symbolizes the search for wisdom; this is the sign of the philosopher and the explorer.",
          zeldaSunDetail  : "Although originally designed by an ancient civilization to combat Ganon, these scaled-down Guardians were placed inside shrines as part or the trials. This model is equipped with twin-blade functionality to further test the combat prowess of one undertaking the trials. It takes a nimble fighter to overcome this one.",

          moonImg : "guardian_scout_i",
          moonMonster : "Guardian Scout",
          moonDetail : "Sagittarius is the astrological sign of higher learning and breadth of vision. If you have the Moon in Sagittarius you are noted for your quick, sharp mind, extraordinary insights, and ability to get things done in a flash. Among your most winning traits is adaptability - to different kinds of personalities and to foreign strange places. At times you can be quite careless and reckless. However, a setback does not keep you down for long. No matter what your Sun sign may be, the Sagittarius Moon qualities of optimism and expansion express themselves in your personality. ",
          zeldaMoonDetail : "Guardians were originally designed by an ancient civilization to combat Ganon, but these smaller models were placed inside shrines as part of the trials found within. The multiple legs and beam functionality were scaled down but kept mostly intact.",


          risingImg : "silver_lizalfos",
          risingMonster : "Silver Lizalfos",
          risingDetail: "A Sagittarius Ascendant favors independence and freedom. You are progressive, full of optimism about the future. you are also restless in spirit, anxious to get on with the business of living, ready to accept a new challenge. You have a knack for making friends, for you are very open to new people and new ideas. One of your problems is that you don't measure the consequences of what you do. You are impulsive, sometimes reckless. To take action is the main thing, to do something about a problem. You often make sweeping gestures with your arms and hands, and have a strong, active body.",
          zeldaRisingDetail : "These Lizalfos have been influenced by Ganon's fiendish magic to become the strongest Lizalfos of all. They're called \"silver\" for their unique coloring and also to denote their rarity. Their purple pattern makes them even more distinct.",
        },
        "Capricorn":{
          name : "Capricorn",
          sunImg : "black_moblin",
          sunMonster : "Black Moblin",
          sunDetail : "Capricorn is reserved, prudent, patient, uses strategy instead of force, seeks security, is acquisitive, disciplined, determined, and quick to seize opportunity. Your motivating force is desire for success, money, status, position, authority, and  (though you may not realize it) for love. Capricorn is both an earth sign and a cardinal sign, and the combination of practicality (earth) and initiative (cardinal) produces a personality geared toward leadership and power. one of the hallmarks of your sign is that you learn to wait for things you want. You are willing to give up today's temptation for tomorrow's reward.",
          zeldaSunDetail  : "These heavyweight monsters can be found all over Hyrule and are among the most dangerous types of Moblin. They're extremely resilient and are often armed with some of the strongest weapons Moblins can carry.",

          moonImg : "stone_talus",
          moonMonster : "Stone Talus",
          moonDetail : "The Moon represents the emotional, sympathetic side of a personality whereas Capricorn is an unemotional and undemonstrative sign. If you have a Moon in Capricorn you are organized, ambitious and usually a prodigious worker. Self-sufficient and a bit solitary, you are haunted by a feeling of responsibility, of a task you must fulfill. You pin your hopes on one idea, turn all your energies in one direction. No matter what your Sun sign may be, the Capricorn Moon qualities of steadfastness and dedication manifest themselves in your personality.",
          zeldaMoonDetail : "This enormous monster is naturally camouflaged as a rock formation. Neither sword nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak.",

          risingImg : "guardian_turret",
          risingMonster : "Guardian Turret",
          risingDetail: "If you have Capricorn ascending, you tend to have a serious turn of mind. Cautious in your dealings, you are reluctant to commit yourself until you know the score. Capricorn Ascendants have strong personalities, possess great willpower and determination, and diligently pursue their goals. You have self-esteem and are reliable, dependable, and stable. Sometimes though, you will strive toward a goal and when you achieve it will still not be happy. You have an active mind with quick intelligence and an ability to concentrate. You tend to fuss over details to make sure all contingencies have been covered. It is your wany of being in control- you don't want bad luck to catch you unprepared.",
          zeldaRisingDetail : "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. This stationary model was used for defending important structures. Its offensive power is on par with other Guardians, and omitting the legs kept the manufacturing costs low.",
        },
        "Aquarius":{
          name : "Aquarius",
          sunImg : "guardian_skywatcher",
          sunMonster : "Guardian Sky Watcher",
          sunDetail : "Aquarius is assertive, independent, progressive, analytical, original, and inventive, has strong dislikes and firm opinions. Aquarians are unorthodox, original people - sort of wacky, witty madcaps who refuse to follow the crowd and go their own way. Intellectual independence is your most marked characteristic. You're a strange mix of an avant-garde thinker whose opinions are written in stone. Your character is a system of paradoxes. You enjoy being with people but are content to be alone. You like to travel but love relaxing at home. You are friendly and outgoing but also detached and reserved.",
          zeldaSunDetail  : "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. This flying model is an improvement over the walking type, capable of either attacking or surveying from the air. Destroying the propeller will ground it.",

          moonImg : "blue_bokoblin",
          moonMonster : "Blue Bokoblin",
          moonDetail : "Aquarius is the astrological sign of rational thinking and humanitarianism; in this sign the Moon's effect is to bestow clear logic with altruistic concerns. Your immediate reaction to impressions you receive from the outside world is to deal with them in a scientific, open-minded way and at the same time try to understand them from the human point of view. No matter what your Sun sign may be, the Aquarius Moon qualities of intelligence and individualism run through your personality.",
          zeldaMoonDetail : "This common species is a nuisance all over Hyrule. They're tougher and have stronger weapons than the red Bokoblins - and are a little more clever, as well. At the very least, they have figured out that they can simply kick a Remote Bomb out of the way to avoid its blast.",
          
          risingImg : "silver_moblin",
          risingMonster : "Silver Moblin",
          risingDetail: "You are quick-witted and lively, open in your dealings, honest and truthful. Intelligent and charming, you are particularly suited to a position of leadership. You want to see the best in humanity and are hopeful about the future. Though you have a reputation for fairness and tolerance, there is a strong streak of inflexibility to your nature. Much of this is the impatience you feel toward those who do not have your visionary or lofty ideas. You are often intolerant of other people's shortcomings and can be wickedly sarcastic and very funny at the same time. Your razor-sharp powers of observation help you to uncover flaws that you can poke fun at.",
          zeldaRisingDetail : "The strongest of all Moblins, Ganon's fiendish magic has allowed them to surpass even the Black Moblins in strength and resilience. They're called \"silver\" for both their body color as well as their rarity. The purple patterns on their bodies also help them to stand out.",
        },
        "Pisces":{
          name : "Pisces",
          sunImg : "lizalfos",
          sunMonster : "Lizalfos",
          sunDetail : "Pisces is receptive, intuitive and emotional, imaginative, romantic, impressionable and mystical, adaptable, and very changeable. Pisceans have an otherworldly quality. In mystical terms, you are described as being half-body and half-spirit, pulled between material existence and spiritual concerns, possessed of the knowledge that you will never be entirely at home in the real world. Ruled by Neptune, planet of mystery and illusion, your personality is elusive, fey, and quicksilvery. Your element is water, and the imagery of the sea is evident in how easily you adapt to the ever-shifting currents around you.", 
          zeldaSunDetail  : "These quick-witted, lizard-like monsters can be found all over Hyrule. They're a sly species that lurks underwater or uses camouflage to blend in with the environment to launch ambushes. Moreover, they never sleep. They're meat eaters by nature but will enjoy the occasional insect or two.",

          moonImg : "hinox",
          moonMonster : "Hinox",
          moonDetail : "If you have the Moon in Pisces you have deep feelings and an innate understanding of the human condition. Gifted with vision and imagination, you express yourself well in creative areas. It is through the sense and emotions rather than the intellect that you perceive things. Although you can work tirelessly and unselfishly for others, you find it hard to be strict and disciplined with yourself. There is a strong tendency to escape harsh realities and obligations. No matter what your Sun sign may be, the Pisces Moon qualities of creative imagination and sensitivity affect your personality.",
          zeldaMoonDetail : "The largest monster to make its home in Hyrule, the Hinox lives primarily in forested areas. A keen awareness of your surroundings is paramount when facing one, as Hinox are known for tearing entire trees from the ground and using them as weapons. A deft hand can steal weapons off the necklaces they wear.",

          risingImg : "ice_chuchu",
          risingMonster : "Ice Chuchu",
          risingDetail: "If you were born with Pisces rising, you carry within yourself a strong artistic gift that much sooner or later find expression. You have an active fantasy life and a pronounced romantic outlook. You tend to be very sociable, fond of entertaining, and enjoy the warmth of companionship. The word sentimental comes to mind when describing you. Your tender feelings are easily moved by sad stories, lost animals, unhappy human beings. Worry and imagined fears overtake and sometimes overcome you. If you have Pisces rising, you tend to have large, luminous eyes and a sensuous mouth.",
          zeldaRisingDetail : "This low-level gel monster is engulfed in freezing-cold air. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
        },
        "Unknown":{
          
          sunImg : "https://botw-compendium.herokuapp.com/api/v2/entry/sunshroom/image",
          
          sunDetail : "The sign that the Sun was traveling through at the time of your birth is your Sun sign. The Sun is the most important and pervasive influence in your horoscope, and in may ways determines how others see you. An analogy is that your horoscope is a painting of you. The characteristics of your Sun sign are the broad strokes that the artist first lays down on the canvas.  ",
          moonImg : "https://botw-compendium.herokuapp.com/api/v2/entry/silent_shroom/image",
          
          moonDetail : "The position of the Moon in your horoscope is second only in importance to the position of the Sun. The sun sign is the part of you that is most apparent on the surface; it is what others see. The Moon sign is the part of you that you see. In astrology the Moon stands for emotions, instincts, the unconscious. Whereas the Sun represents your will, the Moon represents your instinctive reactions.",
          risingImg : "https://botw-compendium.herokuapp.com/api/v2/entry/ironshroom/image",
          
          risingDetail : "Your Ascendant or Rising sign (the terms are interchangeable) is a very important part of your horoscope. Your ascendant is the sign that reflects your outward demeanor and to a great extent determines how the outside world looks at you. Your Ascendant is the sign that was rising over the eastern horizon at the time of your birth (hence, your Rising sign)."

        }
      }
    }
  },
 
}
</script>

<style scoped>

.custom-select {
    position: relative;
    font-size: 1em;
    background-color: var(--darkblue-80);
    box-shadow: rgba(1,66,101, 0.12) 0px 1px 3px, rgba(1,66,101, 0.24) 0px 1px 2px;
    padding: 2em 0;
    border: 1px solid var(--greenblue);
    background-color: var(--darkblue-80);
    border-radius: 20px;
    padding: 1em;
    margin-bottom: 1em;
    
  }
  select, option {
    background-color: var(--grass);
    color: var(--greenblue);
  }
  .results {
   
  }
  .results img {
    margin: 1em;
    max-width: 300px;
    border-radius: 20px;
  }
  

</style>