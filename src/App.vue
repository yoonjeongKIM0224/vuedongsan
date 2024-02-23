<template>
  <div class="menu">
    <a href="#" v-for="(item, idx) in menu" :key="idx">{{ item }}</a>
  </div>

  <DisCount />

  <button type="button" @click="priceSort">최저가 정렬</button>
  <button type="button" @click="priceBack">최고가 정렬</button>
  <button type="button" @click="abcSort">글자순 정렬</button>

  <TheCard 
    @CardModalOpen="modalOpen = true; clickWhat = idx"
    v-for="(item, idx) in products"
    :key="idx"
    :item="item"
   />

  <div class="start" :class="{end : modalOpen}">
    <TheModal 
      @ModalReport="products[clickWhat].report += 1; console.log($event)"
      @ModalClose="modalOpen = false"
      :products="products"
      :clickWhat="clickWhat"
      :modalOpen="modalOpen"
    />
  </div>
</template>

<script>
import oneromeData from './oneroom';
import DisCount from './DisCount.vue';
import TheModal from './TheModal.vue';
import TheCard from './TheCard.vue';

export default {
  name: 'App',
  data(){// 데이터 보관통
    return {
      productsOri: oneromeData,
      products: [...oneromeData],
      menu: ['Home', 'Shop', 'About'],
      modalOpen: false,
      clickWhat: 0,
    }
  },
  methods: {
    priceSort(){ //최저가
      this.products.sort(function(a, b){
        return a.price - b.price;
      });

      console.log(this.productsOri);
    },
    priceBack(){ //최고가
      this.products.sort(function(a, b){
        return b.price - a.price;
      });
    },
    abcSort(){ //글자순
      this.products.sort(function(a, b){
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    },
  },
  components: {
    DisCount, //또는 , DisCount: DisCount,
    TheModal,
    TheCard,
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

.discount {
  background-color: #eee;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}
</style>
