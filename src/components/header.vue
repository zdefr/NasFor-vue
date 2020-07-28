<template>
    <header style="min-width: 1000px">
        <div class="head-left">
            <img src="../../public/IMG_20200728_154232.png" ALT="XX" class="logo">
        </div>
        <input type="text" placeholder="请输入要搜索的内容" v-model="SEARmsg" :aria-required="isboxEmpty"></input>
        <button type="button" class="button-search" @click="SEARsubmit"><i class="el-icon-search" ></i>搜索</button>
        <div class="head-right">
            <button type="button" class="button-me"><i class="el-icon-star-on" style="color: red"></i>我的收藏</button>
        </div>
    </header>
</template>

<script>
    export default {
        name: "headerVue",
        data(){
            return {
                isboxEmpty:false,
                SEARmsg:null
            }
        },
        methods:{
            SEARsubmit:function () {
                console.log(this.SEARmsg)
                if (this.SEARmsg==null){
                    this.isboxEmpty=true;
                }
            }
        }
    }
</script>

<style scoped>
    header{
        height: 150px;
        margin: 0;
        padding: 0;
        background: #ffffff;
    }

    .head-left{
        display: inline-block;
        width: 34.5%;
        height: 100%;
    }

    .logo{
        height: 100%;
        float: right;
        display: inline-block;
        margin-right: 25%;
    }

    input[aria-required]{
        border: solid 2px red;
    }

    input{

        box-sizing: border-box;
        width: 25%;
        height: 40px;
        position: relative;
        bottom: 45%;
        font-size: 15px;
    }

    .button-search{
        width: 7%;
        height: 40px;
        position: relative;
        bottom: 43.5%;
        left: -0.2%;
        font-weight: bold;
        font-size: 20px;
        border: solid 2px red;
        min-width: 100px;
        color: white;
        background-color: red;
    }

    i{
        margin-right: 10px;
    }

    .head-right{
        display: inline-block;
        position: absolute;
        width: 35%;
        height: 150px;
    }

    .button-me{
        height: 55px;
        margin-left: 15%;
        position: absolute;
        top: 32%;
        font-weight: bold;
        font-size: 25px;
        border: solid 2px gray;
        min-width: 180px;
        background-color: #fafafa;
        color: red;
    }


</style>