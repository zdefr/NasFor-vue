<template>
        <div class="index-class-list">
            <div style="position: absolute;height: 100%;width: 100%;">
                <aside class="goods-category-list">
                    <header>功能分类</header>
                    <ul class="category-list-ul">
                        <li v-for="item in category" :key="item.url" class="category-list-li">
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </aside>
                <main class="goods-roller">
                    <img src="../../../public/IMG_20200728_221912.png" alt="xx">
                </main>
                <aside class="person-msg">
                    <div class="head-portrait">
                        <img src="../../../public/IMG_20200728_154232.png" alt="xx">
                    </div>
                    <div class="person-msg-application">
                        <header>我的应用</header>
                        <main>
                            <button type="button"><i class="el-icon-star-off"></i></button>
                            <button type="button"><i class="el-icon-s-data"></i></button>
                            <button type="button"><i class="el-icon-tickets"></i></button>
                            <button type="button"><i class="el-icon-download"></i></button>
                            <button type="button"><i class="el-icon-upload"></i></button>
                            <button type="button"><i class="el-icon-upload2"></i></button>
                            <button type="button"><i class="el-icon-message"></i></button>
                            <button type="button"><i class="el-icon-setting"></i></button>
                            <button type="button"><i class="el-icon-bell"></i></button>
                            <button type="button" style="width: 70%;margin: 5% 15%"><i class="el-icon-share"></i>
                            </button>
                        </main>

                    </div>
                </aside>
            </div>
        </div>
</template>

<script>
    export default {
        name: "classList",
        data() {
            return {
                category: [
                    {
                        url: '/a',
                        name: '电脑'
                    },
                    {
                        url: '/a',
                        name: '手机'
                    },
                    {
                        url: '/a',
                        name: '衣服'
                    },
                    {
                        url: '/a',
                        name: '箱包'
                    },
                    {
                        url: '/a',
                        name: '其他'
                    },
                    {
                        url: '/a',
                        name: '衣服'
                    },
                    {
                        url: '/a',
                        name: '箱包'
                    },
                    {
                        url: '/a',
                        name: '其他'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    input, button, select, textarea {
        outline: none;
    }

    .index-class-list {
        box-sizing: border-box;
        margin: 5px auto 0 auto;
        width: 60%;
        position: relative;
        padding-bottom: 20%;
        min-width: 1000px;
        min-height: 300px;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }

    .goods-category-list {
        box-sizing: border-box;
        display: inline-block;
        width: 19%;
        margin-right: 0.5%;
        background-color: white;
        text-align: center;
        height: 100%;
        position: absolute;
        overflow: hidden;
    }

    .goods-category-list header {
        color: red;
        margin: 0 10px 0 10px;
        border-bottom: double 3px red;
        font-weight: bold;
    }

    .category-list-ul {
        list-style-type: none;
        line-height: 30px;
        margin-top: 5px;
        padding: 0;
    }

    .category-list-li{
        border-bottom: solid 2px #d5d5d5;
        margin: 0 18% 0 18%;
    }

    .category-list-li:hover {
        font-weight: bold;
        cursor: pointer;
        border-bottom: solid 2px #b85d5d;
    }

    .goods-roller {
        position: absolute;
        left: 19.5%;
        margin-right: 0.5%;
        display: inline-block;
        width: 59%;
        height: 100%;
    }

    .goods-roller img {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .person-msg {
        width: 21%;
        height: 100%;
        display: inline-block;
        float: right;
        background-color: white;
    }

    .person-msg .head-portrait {
        height: 24%;
        width: 40%;
        border: solid 2px #cfcfcf;
        border-radius: 50%;
        overflow: hidden;
        margin: 20px auto 10px auto;
    }

    .person-msg .head-portrait:hover {
        cursor: pointer;
        border: solid 2px red;
    }

    .person-msg .head-portrait img {
        height: 100%;
        width: 100%;
    }

    .person-msg-application {
        width: 80%;
        height: 60%;
        margin: 0 auto 0 auto;
        position: relative;
    }

    .person-msg-application header {
        background-color: red;
        text-align: center;
        color: white;
        height: 20px;
        font-weight: bold;
    }

    .person-msg-application main {
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        top: 20px;
        bottom: 10%;
        border: solid 2px red;
        padding: 5%;
        overflow: hidden;
    }

    .person-msg-application main button {
        width: 25%;
        height: 20%;
        margin: 5% 4% 0 4%;
        padding: 0;
        font-size: 15px;
        border: solid 2px #e0e0e0;
        background-color: white;
        border-radius: 5%;
    }

    .person-msg-application main button:hover {
        border: solid 2px red;
        cursor: pointer;
    }

    .person-msg-application main button i {
        color: red;
    }
</style>