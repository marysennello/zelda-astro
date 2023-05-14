<template>
  <div class="card flex sm:flex-nowrap md:flex-wrap md:text-center justify-end md:justify-center justify-items-start items-center">
    <!-- Monster name -->

    <h3 class="justify-self-start font-bold capitalize monstername truncate"> {{ monster.name }} </h3>

    <!-- Img of monster (mini on mobile) -->
    <div class="thumb lg:px-auto md:px-3 px-auto">
      <img :src="monster.image" :alt="monster.name + ' monster thumb'" class="md:mx-auto inline
      w-11 h-11 
      md:w-auto md:h-auto
      rounded-full overflow-hidden 
      md:rounded-lg md:overflow-hidden">
    </div>

   <!-- link to details page for monster (desktop)-->
    <NuxtLink :to="`/monsters/${monster.name}`" class="hidden md:block">
      <p class="btn my-1 md:mx-auto md:my-4">View Details</p>
      </NuxtLink>

      <!-- link to details page for monster - mobile friendly, hidden on desktop -->
      <NuxtLink :to="`/monsters/${monster.name}`" class="inline md:hidden px-10">
        <p class="my-1 md:hidden inline ]">
          <span class="material-symbols-outlined inline">
            arrow_forward
            </span>
        </p>
      </NuxtLink>
  </div>
</template>

<script setup>
  const { monster } = defineProps(['monster'])
</script>

<style scoped>
/*  .thumb {
   margin: 0 auto;
   
  }*/
  .monstername {
    margin: 0.5em 0.5em;
  }
  .card {
    border: 1px solid var(--grass);
    border-radius: 20px
  }
  /*img {
    border-radius: 10px;
  }*/
</style>