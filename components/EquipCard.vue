<template>
  <div class="card text-center">
    <h3 class="font-bold capitalize monstername"> {{ item.name }} </h3>

    <img :src="item.image" :alt="item.name + ' monster thumb'" class="thumb">
    
    <NuxtLink :to="`/equipment/${item.name}`">
      <p class="btn my-4">View Details</p>
      </NuxtLink>
  </div>
</template>

<script setup>
  const { item } = defineProps(['item'])
</script>

<style scoped>
.thumb {
  margin: 0 auto;
 }
 .monstername {
   margin: 1em auto;
 }
 .card {
   border: 1px solid var(--grass);
   border-radius: 20px
 }
 img {
   /*max-width: 500px;*/
   border-radius: 10px;
 }
</style>