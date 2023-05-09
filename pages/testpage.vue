<template>
  <div class="custom-select text-center" >

      <h3>{{ selectedMoon.name }} Moon</h3>

      <!-- select sign -->
      <select v-model="selectedMoon" ref="moonSign">
        <option disabled value="">Select Sign</option>
        <option v-for="sign in signs" :value="sign" class="text-center" :key="sign.name">{{sign.name}}</option>
      </select>

      <!-- results -->
      <div class="results">
        <!-- placeholder img for now - will populate to monster's img -->
        <img src="../assets/imgs-etc/botw-star.png" alt="moonsign" id="moonResultImg">
        <h3 id="moonResultMonster">{{ selectedMoon.moonMonster }} </h3>
        <h4>{{ selectedMoon.name }} Moon</h4>
        <p id="moonResultZelda" :class="selectedMoon"> Result paragraph 1</p>
        <p id="moonResultAstro" :class="selectedMoon"> Result paragraph 2 </p>

    </div>
  </div>

</template>
<script>
import Star from '/assets/imgs-etc/botw-star.png'
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
          moonImg : "fire_keese",
          moonMonster : "Fire Keese",
          risingImg : "silver_bokoblin",
          risingMonster : "Silver Bokoblin",
        },
        "Taurus": {
          name : "Taurus",
          sunImg : "blue-maned_lynel",
          sunMonster : "Blue-Maned Lynel",
          moonImg : "stone_talus_(luminous)",
          moonMonster : "Stone Talus (Luminous)",
          risingImg : "chuchu",
          risingMonster : "Chuchu",
        },
        "Gemini":{
          name : "Gemini",
          sunImg : "electric_wizzrobe",
          sunMonster : "Electric Wizzrobe",
          moonImg : "yiga_footsoldier",
          moonMonster : "Yiga Footsoldier",
          risingImg : "guardian_scout_ii",
          risingMonster : "Guardian Scout II",
        },
        "Cancer":{
          name : "Cancer",
          sunImg : "naydra",
          sunMonster : "Naydra",
          moonImg : "treasure_octorok",
          moonMonster : "Treasure Octorok",
          risingImg : "ice-breath_lizalfos",
          risingMonster : "Ice-Breath Lizalfos",
        },
        "Leo":{
          name : "Leo",
          sunImg : "white-maned_lynel",
          sunMonster : "White-Maned Lynel",
          moonImg : "meteo_wizzrobe",
          moonMonster : "Meteo Wizzrobe",
          risingImg : "electric_lizalfos",
          risingMonster : "Electric Lizalfos",
        },
        "Virgo":{
          name : "Virgo",
          sunImg : "guardian_stalker",
          sunMonster : "Guardian Stalker",
          moonImg : "lynel",
          moonMonster : "Lynel",
          risingImg : "forest_octorok",
          risingMonster : "Forest Octorok",
        },
        "Libra":{
          name : "Libra",
          sunImg : "blue_lizalfos",
          sunMonster : "Blue Lizalfos",
          moonImg : "yiga_blademaster",
          moonMonster : "Yiga Blademaster",
          risingImg : "stalkoblin",
          risingMonster : "Stalkoblin",
        },
        "Scorpio":{
          name : "Scorpio",
          sunImg : "blizzrobe",
          sunMonster : "Blizzrobe",
          moonImg : "decayed_guardian",
          moonMonster : "Decayed Guardian",
          risingImg : "water_octorok",
          risingMonster : "Water Octorok",
        },
        "Sagittarius":{
          name : "Sagittarius",
          sunImg : "guardian_scout_iii",
          sunMonster : "Guardian Scout III",
          moonImg : "guardian_scout_i",
          moonMonster : "Guardian Scout",
          risingImg : "silver_lizalfos",
          risingMonster : "Silver Lizalfos",
        },
        "Capricorn":{
          name : "Capricorn",
          sunImg : "black_moblin",
          sunMonster : "Black Moblin",
          moonImg : "stone_talus",
          moonMonster : "Stone Talus",
          risingImg : "guardian_turret",
          risingMonster : "Guardian Turret",
        },
        "Aquarius":{
          name : "Aquarius",
          sunImg : "guardian_skywatcher",
          sunMonster : "Guardian Sky Watcher",
          moonImg : "blue_bokoblin",
          moonMonster : "Blue Bokoblin",
          risingImg : "silver_moblin",
          risingMonster : "Silver Moblin",
        },
        "Pisces":{
          name : "Pisces",
          sunImg : "lizalfos",
          sunMonster : "Lizalfos",
          moonImg : "hinox",
          moonMonster : "Hinox",
          risingImg : "ice_chuchu",
          risingMonster : "Ice Chuchu",
        },
        "Unknown":{
          name : "??",
          sunImg : Star,
          sunMonster : "??",
          moonImg : Star,
          moonMonster : "??",
          risingImg : Star,
          risingMonster :"??",
        }
      }
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 300px;
    margin-left: 30%;
  }
  /*text content based on moonid + sign*/
  #moonResultAstro.Virgo::before
  {
    
  }
</style>