<template>
  <header style="min-width: 1000px">
    <div class="head-left">
      <router-link to="/"><img src="../../public/IMG_20200728_154232.png" ALT="XX" class="logo"></router-link>
    </div>

    <div class="head-mid">
      <input type="text" placeholder="请输入要搜索的内容" v-model="SEARmsg"></input>
      <button type="button" class="button-search"><i class="el-icon-search"></i>搜索</button>
    </div>

    <div class="head-right">
      <button type="button" class="button-me"><i class="el-icon-star-on" style="color: red"></i>我的收藏</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerVue",
  data() {
    return {
      isboxEmpty: false,
      SEARmsg: null
    }
  },
  methods: {}
}
</script>

<style scoped>
header {
  height: 150px;
  margin: 0;
  padding: 0;
  background: #ffffff;
}

.head-left {
  display: inline-block;
  width: 34.5%;
  height: 100%;
  float: left;
}

.logo {
  height: 100%;
  float: right;
  display: inline-block;
  margin-right: 25%;
}

.head-mid {
  display: inline-block;
  position: relative;
  top: 30%;
  width: 30%;
}

input {
  box-sizing: border-box;
  width: 70%;
  position: absolute;
  top: 0;
  height: 40px;
  font-size: 15px;
  border: solid 2px red;
  border-right: none;
  outline: none;
}

.button-search {
  position: absolute;
  top: 0;
  left: 70%;
  box-sizing: border-box;
  width: 7%;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  border: none;
  min-width: 100px;
  color: white;
  background-color: red;
  cursor: pointer;
}

.button-search:hover {
  background-color: #a70606;
}

i {
  margin-right: 10px;
}

.head-right {
  display: inline-block;
  position: absolute;
  width: 35%;
  height: 150px;
}

.button-me {
  height: 45px;
  margin-left: 15%;
  position: absolute;
  top: 35%;
  font-size: 20px;
  border: solid 2px #d6d6d6;
  min-width: 180px;
  background-color: #fafafa;
  color: red;
  cursor: pointer;
}

.button-me:hover {
  border: solid 2px red;
}
</style>