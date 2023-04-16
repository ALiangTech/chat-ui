<template>
    <div class="self">
        <chatPopover>
            {{ props.data.question }}
        </chatPopover>
        <div class="avatar">
            <img src="./svg/self.svg"/>
        </div>
    </div>
</template>
<script setup>
import chatPopover from '../../../components/chat-popover.vue';
const props = defineProps({
    data: {
        type: [Object]
    }
})
</script>
<style>
.self {
    display: flex;
}
.avatar {
    display: inline-block;
    border: 1px solid #ccc;
    font-size: 0;
    padding: 2px;
    border-radius: 4px;
    overflow: hidden;
    width: 32px;
    height: 32px;
}
.avatar img {
    width: 100%;
    height: 100%;
}
</style>