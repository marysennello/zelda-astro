<template>
  <div>
    <header class="shadow-sm bg-[--darkblue] rounded-b-3xl shadow-md shadow-[--greenblue]">
      <NuxtLink to="/" class="">
        <h1 class="text-4xl mx-10 pt-6">Zelda: Breath of the Wild Astrology</h1>
      </NuxtLink>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/elements">Elements</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/monsters">Monsters</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/equipment">Equipment</NuxtLink>
        </li> -->
      </ul>
      <p>Mary Sennello 2023</p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .router-link-exact-active {
    color: #9fc184;
  }
</style>