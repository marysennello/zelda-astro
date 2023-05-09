<template>
  <div>

    <Head>
      <Title>Zelda Equipment | {{ item.name }}</Title>
      <Meta name="description" :content="item.description" />
    </Head>

    <EquipDetails :item="item" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://botw-compendium.herokuapp.com/api/v2/entry/'+ id

  //fetch the monster
  const {data: item } = await useFetch(uri, { key: id})

  //if page doesnt exist (id doesnt exist) /monsters/*mistake*
  if (!item.value) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found', fatal: true})
  }

  definePageMeta({
    layout: 'equipment'
  })
</script>

<style scoped>

</style>