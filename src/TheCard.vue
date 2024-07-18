<template>
    <div class="card_wrap">
        <div class="img_wrap">
            <img :src="item.image" class="img">
        </div>
        <h2 @click="cradModalOpen" class="title">{{ item.title }}</h2>
        <p class="text">{{ item.price }}원</p>
        <hr>
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