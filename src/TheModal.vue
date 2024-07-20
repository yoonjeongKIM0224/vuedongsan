<template>
  <div class="modal_wrapper" v-if="modalOpen">
    <div class="modal_wrap">
      <div class="container">
        <div class="img_wrap">
          <img :src="products[clickWhat].image" class="img">
        </div>

        <h2 class="title">{{ products[clickWhat].title }}</h2>
        <p class="text">{{ products[clickWhat].content }}</p>

        <ul>
          <li v-for="(item, idx) in products[clickWhat].infoList1" :key="idx">
            <span>{{ item.title }}</span>
            <span>{{ item.text }}</span>
          </li>
        </ul>

        <span>{{ products[clickWhat].star }}</span>

        <ul>
          <li v-for="(item, idx) in products[clickWhat].infoList2" :key="idx">
            <span>{{ item.title }}</span>
            <span>{{ item.text }}</span>
          </li>
        </ul>

        <div>
          <span>{{ products[clickWhat].hostInfo.name }}</span>
          <span>{{ products[clickWhat].hostInfo.career }}</span>
        </div>

        <div>
          <p>{{ products[clickWhat].address.text }}</p>
          <iframe :src="products[clickWhat].address.map" frameborder="0"></iframe>
        </div>

        <p class="text">{{ products[clickWhat].price }}원</p>
        <p class="text">찜 수: {{ products[clickWhat].report }}</p>
        <label for="numMonth">구매하실 개수</label>
        <input type="text" id="numMonth" v-model.number="month" style="border: 1px solid;">
        <p class="text">{{ month }} 개 구매할 시: {{ products[clickWhat].price * month }}원 </p>
        <div class="btn_wrap">
          <button type="button" v-on:click="$emit('ModalReport', '뿡')" class="btn_1">찜하기</button>
          <button type="button" v-on:click="$emit('ModalClose')" class="btn_1">닫기</button>
        </div>
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