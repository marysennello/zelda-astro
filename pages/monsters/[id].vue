<template>
  <div>

    <Head>
      <Title>Zelda Monsters | {{ monster.name }}</Title>
      <Meta name="description" :content="monster.description" />
    </Head>
    <main>
      <MonsterDetails :monster="monster" />
    </main>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://botw-compendium.herokuapp.com/api/v2/entry/'+ id

  //fetch the monster
  const {data: monster } = await useFetch(uri, { key: id})

  //if page doesnt exist (id doesnt exist) /monsters/*mistake*
  if (!monster.value) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found', fatal: true})
  }

  definePageMeta({
    layout: 'monsters'
  })
</script>

<style scoped>

</style>