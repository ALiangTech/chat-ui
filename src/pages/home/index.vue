<template>
  <section class="home">
    <div class="header">
      <div class="title">
        <loading></loading>
      </div>
      <div class="print">
        <printEffect :text="text" @print-completed="updateText"></printEffect>
      </div>
    </div>
    <div class="btn"><van-button type="primary" to="chat" size="small">进入体验版</van-button></div>
  </section>
</template>
<script setup>
import { Button as vanButton } from "vant";
import loading from './loading.vue';
import printEffect from './../../components/h-print-effect/index.vue'
import { ref } from 'vue';

// '我是效率助手，也是点子生成机',
//   '我服务于人类，致力于让生活更美好。',
const texts = [
  '我是效率助手，也是点子生成机',
  '我服务于人类，致力于让生活更美好',
  '我是百事,致力于提供更优的文本解决方案'
]

const text = ref('');

const updateText = (loopNumber) => {
  const tempText = texts[loopNumber]
  if(tempText) {
    setTimeout(() => {
      text.value = tempText
    }, 1000) // todo先这样实现
  }
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url("./../../assets/bg.jpg") no-repeat;
  background-size: cover;
  align-content: center;
  justify-content: space-between;
}
.header {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.print {
  display: flex;
  justify-content: center;

}

.btn {
  text-align: center;
  margin: 2em 0;
}
</style>