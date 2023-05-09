<template>
  <div class="sticky top-0 z-10000">
    <header class="shadow-sm bg-[--darkblue] rounded-b-3xl shadow-md shadow-[--greenblue]">
      <NuxtLink to="/" class="">
        <h1 class="text-5xl mx-10 pt-6">Zelda: Breath of the Wild Astrology</h1>
      </NuxtLink>
      <nav class="container mx-auto py-5 px-5 flex justify-between z-5000">
         <div>
          <ul class="flex gap-4">
            <li>
              <NuxtLink to="/">Home</NuxtLink>  
            </li>
            <li>
              <NuxtLink to="/elements">Elements</NuxtLink>  
            </li>
            <li>
              <NuxtLink to="/About">About</NuxtLink>  
            </li>
          </ul>
         </div>
        <ul class="flex gap-4">
          
          <li>
            <NuxtLink to="/monsters" class="btn">Full Monster List</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/equipment" class="btn">Full Equipment List</NuxtLink>
          </li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>