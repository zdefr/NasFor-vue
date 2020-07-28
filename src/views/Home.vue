<template>
  <div class="home">
    <Nav></Nav>
    <Header></Header>
  </div>
</template>

<script>
import Nav from '../components/nav'
import  Header from '../components/header'

export default {
  name: 'Home',
  components: {
    Nav,
    Header
  }
}
</script>
