<template>
    <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <h4>{{ products[clickWhat].title }}</h4>
      <p>{{ products[clickWhat].content }}</p>
      <p>{{ products[clickWhat].price }}원</p>
      <p>신고 수: {{ products[clickWhat].report }}</p>
      <img :src="products[clickWhat].image">
      <br>
      <label for="numMonth">개월 수 </label>
      <input type="text" id="numMonth" v-model.number="month">
      <p>{{ month }} 개월 선택 시: {{ products[clickWhat].price + month }}원 </p>
      <br>
      <br>
      <button type="button" v-on:click="$emit('ModalReport', '뿡')">허위매물신고</button>
      <button type="button" v-on:click="$emit('ModalClose')">닫기</button>
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
        if(typeof info !== 'number'){
          alert('숫자로 입력해주세요.');
          this.month = 1;
        } else if(info >= 13){
          alert('1 ~ 12 사이의 숫자를 입력해주세요.')
        }
      }
    },
    props: {
        products: Array,
        clickWhat: Number,
        modalOpen: Boolean,
    }
  }
</script>