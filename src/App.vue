<template>
  <div class="menu">
    <a href="#" v-for="(item, idx) in menu" :key="idx">{{ item }}</a>
  </div>

  <div v-for="(item, idx) in products" :key="idx">
    <img :src="item.image">
    <h4 v-on:click="modalOpen = true; clickWhat = idx">{{ item.title }}</h4>
    <p>{{ item.price }}원</p>
    <hr>
  </div>

  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <h4>{{ products[clickWhat].title }}</h4>
      <p>{{ products[clickWhat].content }}</p>
      <p>{{ products[clickWhat].price }}원</p>
      <p>신고 수: {{ products[clickWhat].report }}</p>
      <img :src="products[clickWhat].image">
      <button type="button" v-on:click="products[clickWhat].report += 1">허위매물신고</button>
      <button type="button" v-on:click="modalOpen = false">닫기</button>
    </div>
  </div>
</template>

<script>
import oneromeData from './oneroom';

export default {
  name: 'App',
  data(){// 데이터 보관통
    return {
      products: oneromeData,
      menu: ['Home', 'Shop', 'About'],
      modalOpen: false,
      clickWhat: 0,
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  display: block;
  width: 100%;
}

.menu {
  background-color: darkblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding-left: 10px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background-color: #000000cc;
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
}

.white-bg {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}
</style>
