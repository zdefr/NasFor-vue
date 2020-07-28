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
        }
      ]
    }
  }
}
</script>

<style scoped>
.index-class-list {
  margin: 5px 20% 0 20%;
  min-width: 800px;
  position: relative;
  padding-bottom: 20%;
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
}

.goods-category-list header {
  color: red;
  margin: 0 10px 0 10px;
  border-bottom: double 3px red;
  font-weight: bold;
}

.category-list-ul {
  list-style-type: none;
  line-height: 28px;
  margin-top: 5px;
  padding: 0;
}

.category-list-li:hover {
  font-weight: bold;
  cursor: pointer;
  margin: 0 25% 0 25%;
  border-bottom: solid 2px #d7d7d7;
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

.person-msg .head-portrait:hover{
  cursor:pointer;
  border: solid 2px red;
}

.person-msg .head-portrait img{
  height: 100%;
  width: 100%;
}
</style>