<template>
  {{ article?.response.body }}

  <TheHeader />

  <DisCount v-if="showDiscount" :disCountNum="disCountNum" />

  <div class="btn_wrap">
    <button type="button" @click="priceSort" class="btn_1">최저가 정렬</button>
    <button type="button" @click="priceBack" class="btn_1">최고가 정렬</button>
    <button type="button" @click="abcSort" class="btn_1">글자순 정렬</button>
  </div>

  <div class="card_list">
    <TheCard 
      @CardModalOpen="modalOpen = true; clickWhat = idx"
      v-for="(item, idx) in products"
      :key="idx"
      :item="item"
    />
  </div>

  <div class="start" :class="{end : modalOpen}">
    <TheModal 
      @ModalReport="products[clickWhat].report += 1;"
      @ModalClose="modalOpen = false"
      :products="products"
      :clickWhat="clickWhat"
      :modalOpen="modalOpen"
    />
  </div>

</template>

<script>
import roomData from './room';
import DisCount from './DisCount.vue';
import TheModal from './TheModal.vue';
import TheCard from './TheCard.vue';
import TheHeader from './TheHeader.vue';
import apiBoard from './api/board.js';

export default {
  name: 'App',
  data(){// 데이터 보관통
    return {
      productsOri: roomData,
      products: [...roomData],
      menu: ['Home', 'Shop', 'About'],
      modalOpen: false,
      clickWhat: 0,
      showDiscount: true,
      disCountNum: 30,
      article: null
    }
  },
  methods: {
    priceSort(){ //최저가
      this.products.sort(function(a, b){
        return a.price - b.price;
      });

      // console.log(this.productsOri);
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
  mounted(){
    //1초마다 1%씩 감소
    setInterval(() => {
      if(this.disCountNum !== 0){
        this.disCountNum = this.disCountNum - 1;
      }
    }, 100)

    apiBoard.getAricles(0)
      .then((response) => {
        // 성공 시
        console.log('getAricles', response.data)

        this.article = response.data
      })
      .catch((e) => {
        // 에러
        console.log(e)
      });
  },
  components: {
    DisCount, //또는 , DisCount: DisCount,
    TheModal,
    TheCard,
    TheHeader
  },
}
</script>

<style>
@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

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
  background-color: transparent;
}

:root {
  --main-color: #FF385C;
}

button {
  cursor: pointer;
}

img {
  display: block;
  width: 100%;
}

.wrap {
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 20px 20px 60px 20px;
}

.header {
  margin-bottom: 20px;
}

.logo {
}

.logo .logo_cont {
  color: var(--main-color);
  font-family: 'GmarketSansMedium';
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

.modal_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000091;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_wrap {
  width: calc(100% - 40px);
  max-height: calc(100% - 40px);
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  overflow-y: auto;
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

/*  */
.card_list > * + * {
  margin-top: 40px;
}

.card_item {
  position: relative;
}

.card_item .img_wrap {
  overflow: hidden;
  border-radius: 10px;
}

.card_item .info_wrap {
  display: flex;
  flex-direction: column;
}

.card_item .info_wrap > * {
  margin-top: 8px;
}

.card_item .title {
  color: var(--main-color);
}

.card_item .text {
  margin-top: 4px;
}

.card_item .container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
  background-color: var(--main-color);
  color: #fff;
}
</style>
