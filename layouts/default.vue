<template>
  <div>
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

    <!-- output the page content -->
    <div class="flex justify-center w-screen">
      <slot class="relative z-1"/>
    </div>

    <footer class="bg-[--darkblue-80] p-5 rounded-t-3xl">
      <section class="text-center">
        <h2>Information</h2>
        <p>Astrological insights are referenced from <a href="https://a.co/d/0rDoknD" target="_blank" rel="noopener noreferrer">The Only Astrology Book You'll Ever Need</a> by Joanna Martine Woolfolk (2012)</p>
        
        <p>Images and Descriptions are referenced from <a href="https://gadhagod.github.io/Hyrule-Compendium-API/#/" target="_blank" rel="noopener noreferrer">Hyrule Compendium API by Aarav Borthakur</a> and <a href="https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild" target="_blank" rel="noopener noreferrer">The Legend of Zelda: Breath of the Wild Wiki</a></p>
        
        <p>Created by Mary Sennello 2023</p>
  </section>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>

  .router-link-exact-active {
    color: #9fc184;
  }
  footer section a {
    color: var(--cream);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

</style>