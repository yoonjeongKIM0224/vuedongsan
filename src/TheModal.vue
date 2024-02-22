<template>
    <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <h4>{{ products[clickWhat].title }}</h4>
      <p>{{ products[clickWhat].content }}</p>
      <p>{{ products[clickWhat].price }}원</p>
      <p>신고 수: {{ products[clickWhat].report }}</p>
      <img :src="products[clickWhat].image">
      <button type="button" v-on:click="$emit('ModalReport', '뿡')">허위매물신고</button>
      <button type="button" v-on:click="$emit('ModalClose')">닫기</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TheModal',
        props: {
            products: Array,
            clickWhat: Number,
            modalOpen: Boolean,
        }
    }
</script>