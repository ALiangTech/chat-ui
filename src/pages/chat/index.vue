<template>
  <div class="chat">
    <!-- 顶部 -->
    <div>悬河助理</div>
    <!-- 内容 -->
    <div class="chat_content">
       <template v-for="item of store.list">
        <div class="content_line">
          <component :is="componentsMap[item.type]" :data="item"></component>
        </div>
      </template>
    </div>
    <Search v-model="question" show-action  placeholder="请输入问题">
      <template #action>
        <div @click="onClickButton">发送</div>
      </template>
    </Search>
  </div>
</template>
<script setup>
import { reactive ,ref} from "vue"
import { Search } from 'vant';
import AI from './components/ai.vue'
import Self from './components/self.vue';


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

const onClickButton = () => {
  store.list.push({
    question: question.value,
    type: "self"
  })
  store.list.push({
    question: question.value,
    type: "ai"
  })
}
</script>
<style scoped>
.chat {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.chat_content {
  flex: 1;
  overflow: auto;
}
.content_line {
  margin: 0 10px 1em 10px;
}
</style>