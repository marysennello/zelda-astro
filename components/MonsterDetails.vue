<template>
  <!-- <div class="card"> -->
    <!-- grid - left side image, right side content (lg-md)-->
    <div class="grid md:grid-cols-2 gap-2 card content-center justify-center">
      <!-- image -->
      <div class="p-3 self-center">
        <img :src="current.image" :alt="current.name + ' monster thumb'" class="mx-auto  ">
      </div>
      <!-- monster title, description, data -->
      <div class="p-3">
        <h2 class="text-4xl my-7 capitalize">{{ current.name }}</h2>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Monster Description:</h3>
        <p class="mb-7">{{ current.description }}</p>

        <!-- mini grid for data: common locations and drops -->
        <div class="grid grid-cols-2">
          <!-- only show drops if monster drops things -->
          <span v-if="current.drops">
            <!-- pull list of common locations -->
            <ul class="list-disc list-inside">
              <span class="font-bold">Drops:</span>
              <li v-for="drop of current.drops" class="capitalize"> {{drop}} </li>
            </ul>
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

  <!-- </div> -->
</template>

<script setup>
  const { monster } = defineProps(['monster'])
  //monster info is stored in monster.data.____ so using 'current' to get one more step in
  let current = monster.data;
  console.log(current.name)
</script>

<style scoped>
  img {
    /*max-width: 400px;*/
    border-radius: 20px;
  }
  .card {
    border: 1px solid var(--greenblue);
    background-color: var(--darkblue-80);
    border-radius: 20px;
    padding: 1em;
  }
</style>