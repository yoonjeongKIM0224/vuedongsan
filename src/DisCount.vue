<template>
  <div class="discount">
    <h4>지금 결제하면 {{ disCountNum }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'DisCount',
  props: {
    disCountNum: Number,
  }
}
</script>