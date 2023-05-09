<template>
  <div>
    <main>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-5 container">
        <div v-for="entry in entriesArray" :style="{ 'order': entry.id}" >
          <EquipCard :item="entry" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'equipment',
  })

  //fetch entries
  const { data: entries } = await useFetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
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

<style scoped>

</style>