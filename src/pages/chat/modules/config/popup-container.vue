<template>
    <van-popup v-model:show="show" position="right"  :style="{ width: '70%', height: '100%' }">
        <slot></slot>
    </van-popup>
</template>
<script setup>
import { Popup as vanPopup } from 'vant';
import { ref } from 'vue'

const show = ref(true)
</script>  