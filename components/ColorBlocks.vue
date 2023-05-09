<template>
  <div class="grid grid-cols-4 gap-5">
    <div class="colorblock blue"><h4>blue</h4></div>
    <div class="colorblock blue-80"><h4>blue-80</h4></div>
    <div class="colorblock darkblue"><h4>darkblue</h4></div>
    <div class="colorblock olivegreen"><h4>olivegreen</h4></div>
    <div class="colorblock earthbrown"><h4>earthbrown</h4></div>
    <div class="colorblock cream"><h4>cream</h4></div>
    <div class="colorblock greenblue"><h4>greenblue</h4></div>
    <div class="colorblock grass"><h4>grass</h4></div>
    <div class="colorblock skyblue"><h4>skyblue</h4></div>
    <div class="colorblock twilight"><h4>twilight</h4></div>
  </div>
</template>
<script>
  export default {
    name: 'ColorBlocks',
  }
</script>

<style>
  .colorblock {
    height: 150px;
    color: black;
    font-weight: bold;
    padding-top: 2em;
    text-align: center;
    
  }
  
</style>
