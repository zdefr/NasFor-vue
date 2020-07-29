<template>
    <div id="app">
        <Nav></Nav>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from './components/nav'
    import Header from './components/header'

    export default {
        name: 'app',
        components: {
            Nav,
            Header
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        background-color: #cdc9c9;
    }
</style>
