<template>
  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg" style="overflow-y: auto; width: 500px;">
      <h2 class="title">{{ products[clickWhat].title }}</h2>
      <p class="text">{{ products[clickWhat].content }}</p>
      <p class="text">{{ products[clickWhat].price }}원</p>
      <p class="text">좋아요 수: {{ products[clickWhat].report }}</p>
      <div class="img_wrap">
        <img :src="products[clickWhat].image" class="img">
      </div>
      <label for="numMonth">구매하실 개수</label>
      <input type="text" id="numMonth" v-model.number="month" style="border: 1px solid;">
      <p class="text">{{ month }} 개 구매할 시: {{ products[clickWhat].price * month }}원 </p>
      <div class="btn_wrap">
        <button type="button" v-on:click="$emit('ModalReport', '뿡')" class="btn_1">허위매물신고</button>
        <button type="button" v-on:click="$emit('ModalClose')" class="btn_1">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheModal',
    data(){
      return {
        month: 1,
      }
    },
    watch: {
      month(info){
        if(isNaN(info) == true){
          alert('숫자로 입력해주세요.');
          this.month = 1;
        } else if(info >= 101){
          alert('1 ~ 100 사이의 숫자를 입력해주세요.');
        }
      }
    },
    props: {
        products: Array,
        clickWhat: Number,
        modalOpen: Boolean,
    },
    beforeUpdate(){
      if(this.month == 2){
        alert('2개 이상부터 판매 가능합니다. 3개로 입력됩니다.');
        this.month = 3;
      }
    }
  }
</script>