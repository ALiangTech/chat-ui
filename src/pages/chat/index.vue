<template>
  <div class="chat">
    <!-- 顶部 -->
    <div><nav-bar title="百事助理"   left-text="返回" left-arrow @click-left="onClickLeft"/></div>
    <!-- 内容 -->
    <div class="chat_content">
       <template v-for="item of store.list">
        <div class="content_line">
          <component :is="componentsMap[item.type]" :data="item"></component>
        </div>
      </template>
    </div>
    <div class="submit">
      <HInput class="input" v-model="question"></HInput>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="normal" @click="send">发送</van-button>
    </div>
  </div>
</template>
<script setup>
import { reactive ,ref} from "vue"
import { NavBar,Button as VanButton } from 'vant';
import AI from './components/ai.vue'
import Self from './components/self.vue';
import HInput from './../../components/h-textarea/index.vue'
import { showNotify } from 'vant';
import { useRouter } from "vue-router";
const AI_TYPE = 'ai';
const SELF_TYPE = 'self'
const componentsMap = {
  [AI_TYPE]: AI,
  [SELF_TYPE]: Self,
}
const store = reactive({
  list: []
})
const question = ref('')

const send = () => {
  if(question.value.replace(/\s*/g, '')) {
    store.list.push({
    question: question.value,
    type: "self"
  })
  store.list.push({
    question: question.value,
    type: "ai"
  })
  question.value = ""
  } else {
    showNotify({ type: 'warning', message: '问题不能为空' });
  }
}
const router = useRouter();
const onClickLeft = () => {
  router.push({ path: '/'})
}
</script>
<style scoped>
.chat {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.chat_content {
  flex: 1;
  overflow: auto;
}
.content_line {
  margin: 1em 10px 0 10px ;
}
.submit {
  display: flex;
  column-gap: 10px;
  padding: 10px;
}
.submit .input {
  flex: 1;
}
</style>