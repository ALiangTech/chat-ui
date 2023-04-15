<template>
    <div>
        <span>{{ props.data.question }}</span>
        <div class="avatar">
            <img src="./svg/self.svg"/>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    data: {
        type: [Object]
    }
})
</script>
<style scoped>
.avatar {
    display: inline-block;
    border: 1px solid #ccc;
    font-size: 0;
    padding: 2px;
    border-radius: 4px;
    overflow: hidden;
}
.avatar img {
    width: 36px;
    height: 36px;
}
</style>