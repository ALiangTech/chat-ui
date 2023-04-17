<template>
    <section class="home">
        <div class="title"> 
            <loading></loading>
        </div>
        <div class="print">
            <printEffect :text="text"></printEffect>
        </div>
        <div>体验版</div>
    </section>
</template>
<script setup>
  import loading from './loading.vue';
  import printEffect from './../../components/print-effect.vue'
import { ref } from 'vue';

  const text = ref('我服务于人类，致力于让生活更美好');
  let loopNum = ref(0);
  const texts = [
    '我是效率助手，也是点子生成机',
    '我服务于人类，致力于让生活更美好',
    '我是口若悬河,致力于提供更优的文本解决方案'
  ]
  const timer = setInterval(() => {
        loopNum.value = loopNum.value + 1;
        text.value = texts[loopNum.value]
        console.log(loopNum.value);
        if(loopNum.value == 3) {
            loopNum.value = 0;
        }
  }, 5000)
</script>
<style scoped>
  .home {
  }
  .title {
    margin-top: 20%;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
  }
  .print {
    display: flex;
    justify-content: center;

  }
</style>