<template>
  <!-- for each champion, create flexbox w div for image on left, details on right -->
  <div v-for="champion in champions" class="relative astro-element flex flex-wrap justify-end content-start">

    <!-- checkbox to show/hide dropdown -->
    <input type="checkbox" class="peer/drop absolute top-20 w-full h-full opacity-0 z-100 cursor-pointer right-0"/>

    <!-- header section: flexbox containing img in one div, details in a 2nd -->
    <div class="flex flex-wrap lg:flex-nowrap champion-container sm-h-auto" >
      
      <!-- champion img -->
      <div class="champion-img">
        <img v-bind:src="champion.url" :alt="champion.name" class="sm:basis-full md:basis-1/3">
      </div>

      <!-- champion details -->
      <div class="champion-description sm:basis-full flex flex-wrap content-between">
        <!-- div for details -->
        <div>
          <h2>{{champion.element}} Sign Rep: {{champion.name}}  </h2>
          <h3>{{champion.signs}}</h3>
          <p class="text-left">{{champion.description}}</p>
        </div>

         <!-- div for text for dropdown button -->
        <div class="font-semibold italic text-xl text-[--grass] border border-[--grass] rounded-lg p-5 text-center">
          <p>{{champion.element}} Sun Signs 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down inline ml-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg></p>
        </div>
      </div>
      <!-- end champion details -->
    </div>
   
    <!-- start dropdown section -->
    <div class="bg-[--darkblue-80] transition-all duration-500
     h-0 peer-checked/drop:h-auto w-full overflow-hidden">

    <!-- flexbox for 3 signs -->
      <div class="dropdown-content p-4 
        flex flex-wrap justify-between lg:flex-nowrap">

        <!-- grid for each sign (name on top, img below) -->
          <div v-for="sign in champion.dropdown" class="block sm:basis-full grid grid-cols-1 gap-5 justify-items-center content-center p-5 m-5">

            <h4>{{ sign.name }} Sun</h4>
            <img :src="'https://botw-compendium.herokuapp.com/api/v2/entry/'+ sign.sunImg +'/image'" :alt="sign.name" class="object-contain ">
          </div>
        
          
      </div>
    </div> 
    <!-- end of dropdown section -->

  </div>
</template>

<script>
import Urbosa from "../assets/imgs-champions/urbosa-botw-intro.png"
import Daruk from "../assets/imgs-champions/daruk-botw-intro.png"
import Revali from "../assets/imgs-champions/revali-botw-intro.png"
import Mipha from "../assets/imgs-champions/mipha-botw-intro.png"

export default {
  data() {
    return {
      //delete elements when ready
      
      //img-Champions
      champions: [
        {
          name: 'Urbosa',
          url : Urbosa,
          element: 'Fire',
          signs: 'Aries, Leo, Sagitarius',
          dropdown: {
            "Aries": {
              name : "Aries",
              sunImg : "fire-breath_lizalfos",
              sunMonster : "Fire-Breath Lizalfos"
            },
              "Leo":{
              name : "Leo",
              sunImg : "white-maned_lynel",
              sunMonster : "White-Maned Lynel"
            },
              "Sagittarius":{
              name : "Sagittarius",
              sunImg : "guardian_scout_iii",
              sunMonster : "Guardian Scout III"
            },
          },
          description: 'Chief of the Gerudo, a natural leader, capable of manipulating lightening, and trouble containing her emotions, there is no doubt that Urbosa represents the Fire signs. duty, organization, urbosa\'s fury, fiercely loyal.',
        },
        {
          name: 'Daruk',
          url : Daruk,
          element: 'Earth',
          signs: 'Taurus, Virgo, Capricorn',
          dropdown: {
            "Taurus": {
              name : "Taurus",
              sunImg : "blue-maned_lynel",
              sunMonster : "Blue-Maned Lynel",
            },
            "Virgo":{
              name : "Virgo",
              sunImg : "guardian_stalker",
              sunMonster : "Guardian Stalker"
            },
            "Capricorn":{
              name : "Capricorn",
              sunImg : "black_moblin",
              sunMonster : "Black Moblin",
            },
          },
          description: 'Daruk, and his race of Goron, are undeniably of the Earth. Their strength and resiliance strongly reverberate with Earth signs. Sometimes stubborn, looking for the bigger picture, and moving purposefully so as not to misstep or make a wrong decision are things you could say about both.',
        },
        {
          name: 'Revali',
          url : Revali,
          element: 'Air',
          signs: 'Gemini, Libra, Aquarius',
          dropdown: {
            "Gemini":{
              name : "Gemini",
              sunImg : "electric_wizzrobe",
              sunMonster : "Electric Wizzrobe",
            },
            "Libra":{
              name : "Libra",
              sunImg : "blue_lizalfos",
              sunMonster : "Blue Lizalfos"
            },
            "Aquarius":{
              name : "Aquarius",
              sunImg : "guardian_skywatcher",
              sunMonster : "Guardian Sky Watcher",
            },
          },
          description: 'Air signs are often seen as intellectual and analytical, and Revali is exactly that. The weapons of the Rito are known for precision and distance, and Revali\'s personality matches the sometimes boastful and abrasive personalities of Air signs. Hide insecurities. "Coasting through life" "winging it" updraft to soar high in the air. his appearance is based on a bird of prey',
        },
        {
          name: 'Mipha',
          url : Mipha,
          element: 'Water',
          signs: 'Pisces, Cancer, Scorpio',
          dropdown:  {
            "Cancer":{
              name : "Cancer",
              sunImg : "naydra",
              sunMonster : "Naydra",
            },
            "Scorpio":{
              name : "Scorpio",
              sunImg : "blizzrobe",
              sunMonster : "Blizzrobe"
            },
            "Pisces":{
              name : "Pisces",
              sunImg : "lizalfos",
              sunMonster : "Lizalfos",
            },
          },
          description: 'Let\'s start with the obvious, ok? Mipha is the princess of the Zora, an aquatic race adept at swimming and thriving underwater.',
        },
      ], //end champions
    }
  }
}

</script>

<style scoped>
  img {
    /*max-width: 500px;*/
    border-radius: 10px;
  }
  .champion-container, .dropdown-content {
    margin: 0.5em;
    padding: 1em;
  }
  .dropdown:hover  {
    background-color: var(--greenblue)
  }
  .champion-description {
    padding: 0 1em;
    align-items: flex-start;
  }
  .astro-element {
    border: 1px solid var(--greenblue);
    background-color: var(--darkblue-80);
    border-radius: 20px;
    padding: 1em;
    margin-bottom: 1em;
  }
  .block {
    /*width: 350px;*/
    border: 1px solid var(--grass);
    border-radius: 20px
  }

</style>