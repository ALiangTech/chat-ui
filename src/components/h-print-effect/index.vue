<template>
    <section class="typed">
        <div class="typed_out">
            <span v-html="charsHtmlVersion"></span>
            <span class="cursor_wrap"></span>
        </div>
    </section>
</template>
<script setup>
import useOutPutChar from './useOutputToken.js';
import { computed } from 'vue';
const props = defineProps({
    text: {
        type: [String],
        default: '我服务于人类，致力于让生活更美好'
    }
})
const text = computed(() => props.text);
const emits = defineEmits(["print-completed"])
const completed = (loop) => {
    emits('print-completed', loop)
}
const { charsHtmlVersion } = useOutPutChar({ text, completed})
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
    line-height: 1.5em;
    color: #1875e582;
}

.cursor_wrap {
    position: relative;
    padding-left: 4px;
}
.cursor_wrap::after {
    position: absolute;
    display: inline-block;
    content: "";
    bottom: 0;
    height: 4px;
    width: 14px;
    background-color: #1875e582;
    animation: blink 1.2s infinite;
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