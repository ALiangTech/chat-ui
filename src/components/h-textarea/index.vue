<template>
  <div>
    <div class="input__x">
      <textarea type="text" :value="props.modelValue" @input="update" ref="textarea" class="input__fill"
        placeholder="请输入问题" rows="1"></textarea>
      <label class="input__label">请输入问题</label>
    </div>
  </div>
</template>
  
<script setup>
import { useTextareaAutosize } from '@vueuse/core'
import { computed } from 'vue';
const props = defineProps({
  modelValue: {
    type: [String]
  }
})
const emits = defineEmits(["update:modelValue"])
const update = (el) => {
  const { target: { value } } = el
  emits("update:modelValue", value)
}
const tempInput = computed(() => props.modelValue)
const { textarea } = useTextareaAutosize({ input: tempInput })
</script>
<script>
export default {
  name: "h-textarea"
}
</script>
<style scoped>
.input__x {
  position: relative;
  font-size: 0;
}

.input__x textarea {
  resize: none;
  overflow: hidden;
  min-height: 40px;

}

.input__fill {
  width: 100%;
  outline: none;
  min-height: 40px;
  padding: 14px 8px 10px 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #666;
}

.input__fill:not(:placeholder-shown),
.input__fill:focus {
  border-color: var(--van-nav-bar-text-color);
  ;
}

.input__fill::placeholder {
  color: transparent;
}

.input__label {
  position: absolute;
  left: 10px;
  top: 10px;
  transition: transform .25s;
  font-size: 14px;
  padding: 0 6px;
  pointer-events: none;
  color: #999;
}

.input__fill:not(:placeholder-shown)~.input__label,
.input__fill:focus~.input__label {
  transform: scale(0.75) translate(0, -24px);
  background: #fff;
  color: var(--van-nav-bar-text-color);
  ;
}
</style>