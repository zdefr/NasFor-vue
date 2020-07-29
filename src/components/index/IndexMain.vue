<template>
    <div class="index-main">
        <header>
            <ul>
                <li :class="{'choosed':(pointOn=='media')}" @click="changePoint('media')">
                    <span>Media</span>
                </li>
                <li :class="{'choosed':(pointOn=='letters')}" @click="changePoint('letters')">
                    <span>Letters</span>
                </li>
                <li :class="{'choosed':(pointOn=='cloud')}" @click="changePoint('cloud')">
                    <span>Cloud</span>
                </li>
                <li :class="{'choosed':(pointOn=='package')}" @click="changePoint('package')">
                    <span>Package</span>
                </li>
                <li :class="{'choosed':(pointOn=='upload')}" @click="changePoint('upload')">
                    <span>Upload</span>
                </li>
            </ul>
        </header>
        <main>
            <switch-con :msg="switchMsg"></switch-con>
        </main>
    </div>
</template>

<script>
    import switchCon from './inpage/switchCon';

    export default {
        name: "IndexMain",
        components: {
            switchCon
        },
        data() {
            return {
                pointOn: 'media',
                switchMsg: [
                    {
                        name: '视频',
                        inside: [
                            '电影',
                            '电视剧',
                            '动漫'
                        ]
                    },
                    {
                        name: '音乐',
                        inside: [
                            '内地',
                            '港台',
                            '欧美'
                        ]
                    },
                    {
                        name: '视频',
                        inside: [
                            '电影',
                            '电视剧',
                            '动漫'
                        ]
                    },
                    {
                        name: '音乐',
                        inside: [
                            '内地',
                            '港台',
                            '欧美'
                        ]
                    }
                ]
            }
        },
        methods: {
            changePoint: function (val) {
                this.pointOn = val;
            }
        }
    }
</script>

<style scoped>
    .index-main {
        width: 60%;
        height: 300px;
        min-width: 1000px;
        margin: 10px auto 0px auto;
        background-color: white;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;
    }

    .index-main header {
        background-color: red;
        font-size: 20px;
        color: white;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    .index-main ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .index-main header ul li {
        display: inline-block;
        width: 20%;
        text-align: center;
        padding: 5px 0;
    }

    .index-main header ul li:hover {
        background-color: #a70606;
        cursor: pointer;
        color: white;
        font-weight: bold;
    }

    .choosed {
        background-color: white;
        color: red;
    }

    .index-main main {
        position: absolute;
        top: 33px;
        bottom: 0;
        width: 100%;
    }

</style>