<template>
  <div>
    <main class="px-0 md:px-3">
      <section>
        <h2 class="text-center mb-5">Complete Monster Catalog</h2>
      </section>
      <section>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 container ">
          <div v-for="entry in entriesArray" :style="{ 'order': entry.id}" class="justify-self-stretch">
            <MonsterCard :monster="entry" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
  // definePageMeta({
  //   layout: 'monsters',
  // })

  //fetch entries
  const { data: entries } = await useFetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
  //console.log(entries._rawValue.data);
  let entriesArray = entries._rawValue.data

  Object.values(entriesArray).forEach(val => {
    //let monster = val
    let name = val.name
    let description = val.description
    let id = val.id
    let image = val.image
    console.log(val.name, val.id)
    //Object.values(val).forEach(monsters =>{
    //console.log(monsters)
    //})
  })

</script>

<style lang="scss" scoped>

</style>