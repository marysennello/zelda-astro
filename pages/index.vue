<template>
  <div>
    <main class="px-0 md:px-3">
      <section>
        <h2 class="text-center mb-5">Select your Sun, Moon, and Rising Signs</h2>
        <div class="flex justify-center">
          <a href="https://alabe.com/freechart/default.asp" target="_blank" rel="noopener noreferrer" class="inline bg-[--greenblue] text-[--skyblue] rounded-md py-3 px-5 m-auto">I don't know mine! <span class="screen-reader-only">(opens in a new tab)</span></a>
        </div>
      </section>
      <section>
        <AstroSection />
      </section>
    </main>
  </div>
</template>

<script>
export default {

  
  
}

</script>

<style scoped>
h2 {
  font-size: 2.5em;
}
p {
  margin: 20px 0;
}
</style>