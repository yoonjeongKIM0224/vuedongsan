<template>
    <div>
        <img :src="item.image">
        <h4>{{ item.title }}</h4>
        <p>{{ item.price }}원</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'TheCard',
    props: {
        item: Object,
    }
}
</script>