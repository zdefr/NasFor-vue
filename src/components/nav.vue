<template>
    <nav>
        <router-link to="/" class="router-to-index nav-a nav-choosed">
            <span>首页</span>
        </router-link>

        <router-link to="/about" class="router-to-about nav-a">
            <span>about</span>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "nav"
    }
</script>

<style scoped>
    nav {

        background-color: black;
        opacity: 50%;
        padding: 0px;
    }

    .nav-a{
        display: inline-block;
    }

    .nav-a:link,
    .nav-a:visited{
        color: white;
    }

    .nav-a:hover{
        color: white;
        font-weight: bold;
        background-color: gray;
    }

    .router-to-about {
        float: right;
    }

    .nav-choosed{
        color: white;
        font-weight: bold;
        background-color: green;
    }

    span {
        display: inline-block;
        padding: 5px 30px 5px 30px;
    }
</style>
