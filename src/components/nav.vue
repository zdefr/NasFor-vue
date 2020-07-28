<template>
    <nav>
        <span class="router-to-index nav-a"
                     :class="{'nav-choosed': navTitle=='index'}" @click="routeTo('/index')">
            <span>首页</span>
        </span>

        <span class="router-to-index nav-a"
                     :class="{'nav-choosed': navTitle=='connect'}" @click="routeTo('/connect')">
            <span>联系我们</span>
        </span>

        <span class="router-to-right nav-a"
                     :class="{'nav-choosed': navTitle=='control'}" @click="routeTo('/control')">
            <span>控制台</span>
        </span>

        <span v-if="this.$store.state.account!=null" class="router-to-right nav-a"
                     :class="{'nav-choosed': navTitle=='person'}" @click="routeTo('/person')">
            <span>个人中心</span>
        </span>

        <span v-else class="router-to-right nav-a"
                     :class="{'nav-choosed': navTitle=='log'}" @click="routeTo('/log')">
            <span>登陆/注册</span>
        </span>
    </nav>
</template>

<script>
    export default {
        name: "home",
        data(){
            return {
                navTitle:this.$store.state.nav_cho
            }
        },
        methods:{
            routeTo:function (toUrl) {
                if(toUrl==this.$store.state.nav_cho){
                    console.log("ok");
                    return;
                }
                this.navTitle = toUrl;
                this.$store.commit('changeTitle',toUrl)
            }
        }
    }
</script>

<style scoped>
    nav {
        background-color: gray;
        padding: 0;
        font-size: 15px;
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
        background-color: #436289;
    }

    .router-to-right {
        float: right;
    }

    .nav-choosed{
        color: white;
        background-color: #504d4d;
    }

    .nav-a span {
        text-align: center;
        width: 80px;
        display: inline-block;
        padding: 5px 30px 5px 30px;
    }
</style>
