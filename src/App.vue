<template>
  <header class="header">
    <div class="container">
      <h1>LOGO</h1>
    </div>
  </header>
  <DisCount v-if="showDiscount" :disCountNum="disCountNum" />

  <div class="btn_wrap">
    <button type="button" @click="priceSort" class="btn_1">최저가 정렬</button>
    <button type="button" @click="priceBack" class="btn_1">최고가 정렬</button>
    <button type="button" @click="abcSort" class="btn_1">글자순 정렬</button>
  </div>

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
      showDiscount: true,
      disCountNum: 30,
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
  },
  mounted(){ //1초마다 1%씩 감소
    setInterval(() => {
      if(this.disCountNum !== 0){
        this.disCountNum = this.disCountNum - 1;
      }
    }, 100)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

* {
  padding: 0;
  margin: 0;
  word-break: break-all;
  list-style: none;
  text-decoration: none;
  font-style: normal;
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;
  letter-spacing: -0.04em;
  line-height: 1.4;
  border: 0;
}

.wrap {
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 0 20px;
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
}

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.btn_wrap {
  display: flex;
  margin: 40px 0;
}

.btn_wrap [class*="btn"] {
  flex: 1;
}

.btn_wrap [class*="btn"] + * {
  margin-left: 14px;
}

.btn_1 {
  border-radius: 4px;
  font-size: 18px;
  height: 40px;
  background-color: #A5C4BD;
  color: #fff;
  cursor: pointer;
}
</style>
