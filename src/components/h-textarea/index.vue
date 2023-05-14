<template>
  <div class="h_textarea_container">
    <div class="h_textarea">
        <form class="h_textarea__form">
          <textarea type="text" :value="props.modelValue" @input="update" @keydown="keydown" ref="textarea" class="h_textarea__fill" placeholder="请输入问题" rows="1"></textarea>
          <label class="input__label">请输入问题</label>
        </form>
      <Arrow class="h_textarea__arrow"/>
    </div>
  </div>
</template>
  
<script setup>
import { useTextareaAutosize } from '@vueuse/core'
import Arrow from './arrow.vue';
import { computed,watch } from 'vue';
const props = defineProps({
  modelValue: {
    type: [String]
  }
})
const emits = defineEmits(["update:modelValue", "enter"])
const update = (el) => {
  const { target: { value } } = el
  emits("update:modelValue", value)
}
const tempInput = computed(() => props.modelValue)
const { textarea, triggerResize } = useTextareaAutosize({ input: tempInput })
watch(() => props.modelValue, () => {
    setTimeout(() => {
      triggerResize(); // todo 先这样简单处理
    }, 10);
})
// keydown 
const keydown = (event) => {
  if(event.key === "Enter" && event.shiftKey) {
    // 执行换行
    return 
  }
  // 只输入了enter
  if(event.key === 'Enter') {
    event.preventDefault();
    emits("enter")
  }
}
</script>
<script>
export default {
  name: "h-textarea"
}
</script>
<style scoped>
.h_textarea_container {
  --min-textarea-height: 44px;
  --arrow-opacity: 0.8;
  --arrow-height: 1rem;
}
.h_textarea {
  position: relative;
}
.h_textarea__form {
  position: relative;
}
.h_textarea__form textarea{
  resize: none;
  overflow: hidden;
  min-height: var(--min-textarea-height)
}
.h_textarea__arrow {
  position: absolute;
  right: 10px;
  height:var(--arrow-height);
  width: var(--arrow-height);
  bottom: calc((var(--min-textarea-height) - var(--arrow-height)) / 2);
  color: rgba(142,142,160,var(--arrow-opacity));
}

.h_textarea__fill {
  width: 100%;
  outline: none;
  min-height: 40px;
  padding: 14px 8px 10px 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #666;
}

.h_textarea__fill:not(:placeholder-shown),
.h_textarea__fill:focus {
  border-color: var(--van-nav-bar-text-color);
  ;
}

.h_textarea__fill::placeholder {
  color: transparent;
}

.input__label {
  position: absolute;
  left: 10px;
  top: 13px;
  transition: transform .25s;
  font-size: 14px;
  padding: 0 6px;
  pointer-events: none;
  color: #999;
}

.h_textarea__fill:not(:placeholder-shown)~.input__label,
.h_textarea__fill:focus~.input__label {
  transform: scale(0.75) translate(0, -24px);
  background: #fff;
  color: var(--van-nav-bar-text-color);
  ;
}
</style>