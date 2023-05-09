<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="current.image" :alt="current.name + ' item thumb'" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7 capitalize">{{ current.name }}</h2>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Item Description:</h3>
        <p class="mb-7">{{ current.description }}</p>

        <!-- mini grid for common locations and drops -->
        <div class="grid grid-cols-2">
          <!-- only show attack stat if weapon has attack stat -->
          <span v-if="current.attack > 0">
            <p>
              <span class="text-bold">Attack Power:</span> {{current.attack}}</p>
          </span>
          <!-- only show defense stat if weapon has defense stat -->
          <span v-if="current.defense > 0">
            <p>
              <span class="text-bold">Defense Power:</span> {{current.defense}}</p>
          </span>

          <!-- only show common location if weapon has common location -->
          <span v-if="current.common_locations">
            <!-- pull list of common locations -->
            <ul class="list-disc list-inside">
              <span class="font-bold">Common Locations:</span>
              <li v-for="locations of current.common_locations">{{locations}}</li>
            </ul>
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  const { item } = defineProps(['item'])
  //item info is stored in item.data.____ so using 'current' to get one more step in
  let current = item.data;
  console.log(current.name)
  console.log(current)
  console.log(item)
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>