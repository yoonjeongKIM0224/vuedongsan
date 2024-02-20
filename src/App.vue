<template>
  <div class="menu">
    <a href="#" v-for="(item, idx) in menu" :key="idx">{{ item }}</a>
  </div>

  <div v-for="(item, idx) in products_obj" :key="idx">
    <img :src="item.img">
    <h4 v-on:click="modalOpen = true">{{ item.tit }}</h4>
    <p>{{ item.price }} 만원</p>
    <button type="button" v-on:click="item.report += 1">허위매물신고</button>
    <p>신고 수: {{ item.report }}</p>
    <hr>
  </div>

  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>

      <button type="button" v-on:click="modalOpen = false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){// 데이터 보관통
    return {
      price1 : 60,
      price2 : 70,
      products: ['역삼동 원룸'],
      products_obj: [
        {
          tit: '역삼동 원룸',
          price: 60,
          img: require('./assets/room0.jpg'),
          report: 0,
        },
        {
          tit: '천호동 원룸',
          img: require('./assets/room1.jpg'),
          price: 70,
          report: 0,
        },
        {
          tit: '마포구 원룸',
          img: require('./assets/room2.jpg'),
          price: 80,
          report: 0,
        },
      ],
      menu: ['Home', 'Shop', 'About'],
      blueColor: 'color: blue',
      modalOpen: false,
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
