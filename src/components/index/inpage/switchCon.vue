<template>
    <div class="switch-con">
        <aside v-for="nodeclass in msg">
            <div class="class-title">
                {{nodeclass.name}}
            </div>
            <ul style="list-style: none;padding: 0;line-height: 30px">
                <li v-for="subnode in nodeclass.inside" class="subclass">
                    {{subnode}}
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "switchCon",
        props:{
            msg:Array
        }
    }
</script>

<style scoped>
    .switch-con{
        width: 100%;
        height: 100%;
    }

    aside:nth-child(odd){
        background-color: white;
    }

    aside:nth-child(even){
        background-color: #e8e8e8;
    }

    aside{
        box-sizing: border-box;
        display: inline-block;
        width: 25%;
        height: 100%;
        padding: 20px 1%;
        text-align: center;
    }

    .class-title{
        width: 70%;
        margin: 0 auto;
        font-size: large;
        font-weight: bold;
        border-bottom: solid 1px #acacac;
    }

    .subclass:hover{
        font-weight: bold;
        cursor: pointer;
    }


</style>