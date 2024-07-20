<template>
    <div class="card_item">
        <div class="img_wrap">
            <img :src="item.image" class="img">
        </div>
        <div class="info_wrap">
            <span class="info1"></span>
            <span class="star">{{ item.star }}</span>
            <h2 class="title">{{ item.title }}</h2>
            <p class="content">{{ item.content }}</p>
            <span class="info2">₩{{ item.price }}/박</span>
        </div>
        <button type="button" aria-label="상세 정보 보기" class="container" @click="cradModalOpen"></button>
    </div>
</template>

<script>
export default {
    name: 'TheCard',
    props: {
        item: Object,
    },
    methods: {
        cradModalOpen(){
            this.$emit('CardModalOpen');
        }
    }
}
</script>