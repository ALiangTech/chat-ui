<template>
    <section class="typed">
        <div class="typed_out">
            {{ text }}
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    text: {
        type: [String],
        default: '我服务于人类，致力于让生活更美好'
    }
})
</script>
<style scoped>
.typed {
    position: relative;
    display: inline-block;
    /* padding-right: 16px; */
    margin: 0 16px;
}

.typed_out {
    font-size: 24px;

}

.typed::after {
    position: absolute;
    display: inline-block;
    right: 0px;
    bottom: 0;
    content: "";
    height: 4px;
    width: 14px;
    background-color: #1875e5;
    animation: blink 1s infinite;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

@keyframes blink {
    from {
        background-color: transparent
    }

    to {
        background-color: #1875e5;
    }
}</style>