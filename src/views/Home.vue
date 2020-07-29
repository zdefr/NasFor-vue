<template>
  <div class="home">
    <class-list></class-list>
    <index-main></index-main>
  </div>
</template>

<script>
import classList from '../components/index/classlist'
import indexMain from '../components/index/IndexMain'

export default {
  name: 'Home',
  components: {
    classList,
    indexMain
  }
}
</script>
